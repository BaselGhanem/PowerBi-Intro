from __future__ import annotations
import csv, html, random, tempfile, zipfile
from datetime import date, timedelta
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DAY1 = ROOT / 'week1' / 'day1'
PACKS = DAY1 / 'packs'
random.seed(260918)

REGIONS = ['Amman', 'North', 'South', 'Zarqa', 'Central']
CHANNELS = ['Retail', 'Corporate', 'Online', 'Partner']
CITIES = ['Amman', 'Irbid', 'Zarqa', 'Aqaba', 'Salt', 'Jerash', 'Madaba', 'Karak', 'Mafraq', "Ma'an"]
FIRST = ['Ahmad','Mohammad','Omar','Yazan','Laith','Ali','Khaled','Samer','Rami','Dana','Lina','Rana','Maya','Noor','Hala']
LAST = ['Haddad','Khalil','Nasser','Saleh','Awad','Hamdan','Tawalbeh','Khatib','Masri','Zoubi','Shami','Qasem']

def xlsx_rows(path: Path):
    if not path.exists():
        return []
    try:
        with zipfile.ZipFile(path) as z:
            shared = []
            if 'xl/sharedStrings.xml' in z.namelist():
                root = ET.fromstring(z.read('xl/sharedStrings.xml'))
                ns = {'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
                for si in root.findall('m:si', ns):
                    shared.append(''.join(t.text or '' for t in si.findall('.//m:t', ns)))
            wb = ET.fromstring(z.read('xl/workbook.xml'))
            ns = {'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
            first = wb.find('m:sheets/m:sheet', ns)
            rel_id = first.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']
            rels = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
            target = next(rel.attrib['Target'] for rel in rels if rel.attrib.get('Id') == rel_id).lstrip('/')
            if not target.startswith('xl/'):
                target = 'xl/' + target
            ws = ET.fromstring(z.read(target))
            ns2 = {'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            rows = []
            for row in ws.findall('.//m:sheetData/m:row', ns2):
                vals = []
                for c in row.findall('m:c', ns2):
                    t = c.attrib.get('t')
                    v = c.find('m:v', ns2)
                    val = '' if v is None else (v.text or '')
                    if t == 's' and val.isdigit():
                        val = shared[int(val)]
                    elif t == 'inlineStr':
                        val = ''.join(x.text or '' for x in c.findall('.//m:t', ns2))
                    vals.append(val)
                rows.append(vals)
            return rows
    except Exception:
        return []

def find_ids(path: Path, hints, fallback_prefix, n):
    rows = xlsx_rows(path)
    if rows:
        header = [str(x).strip().lower() for x in rows[0]]
        idx = None
        for h in hints:
            for i, name in enumerate(header):
                if h in name:
                    idx = i
                    break
            if idx is not None:
                break
        if idx is None:
            idx = 0
        vals = [str(r[idx]).strip() for r in rows[1:] if len(r) > idx and str(r[idx]).strip()]
        if vals:
            return vals
    return [f'{fallback_prefix}{i:04d}' for i in range(1, n + 1)]

def unzip_pack(zip_path: Path, temp: Path):
    with zipfile.ZipFile(zip_path) as z:
        z.extractall(temp)
    dirs = [p for p in temp.iterdir() if p.is_dir()]
    return dirs[0] if len(dirs) == 1 else temp

def rezip_pack(src_root: Path, zip_path: Path):
    tmp = zip_path.with_suffix('.new.zip')
    with zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for p in sorted(src_root.rglob('*')):
            if p.is_file():
                z.write(p, f'{src_root.name}/{p.relative_to(src_root)}')
    tmp.replace(zip_path)

def write_csv(path, header, rows):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open('w', newline='', encoding='utf-8-sig') as f:
        w = csv.writer(f)
        w.writerow(header)
        w.writerows(rows)

def sales_rows(count, start, days, product_ids, rep_ids, branch_count=320, customer_count=8000):
    for i in range(count):
        dt = start + timedelta(days=random.randrange(days))
        qty = random.randint(1, 12)
        price = round(random.uniform(4, 250), 2)
        disc = random.choice([0,0,0,0.05,0.05,0.10,0.15])
        revenue = round(qty * price * (1 - disc), 2)
        yield [f'TX{i+1:08d}', dt.isoformat(), f'C{random.randint(1,customer_count):05d}', random.choice(product_ids), random.choice(rep_ids), f'B{random.randint(1,branch_count):03d}', random.choice(REGIONS), random.choice(CHANNELS), qty, price, disc, revenue]

def branch_records():
    records = []
    snapshots = [date(2026, m, 1) for m in range(1, 11)]
    region_map = {'Amman':'Amman','Irbid':'North','Jerash':'North','Mafraq':'North','Zarqa':'Zarqa','Aqaba':'South',"Ma'an":'South','Karak':'South','Salt':'Central','Madaba':'Central'}
    for b in range(1, 401):
        city = CITIES[(b - 1) % len(CITIES)]
        region = region_map[city]
        channel = CHANNELS[(b - 1) % len(CHANNELS)]
        name = f'{city} {channel} {b:03d}'
        for snap in snapshots:
            service = round(min(99.8, max(72, random.gauss(90.5, 5.2))), 1)
            rating = round(min(5, max(3.2, random.gauss(4.45, 0.28))), 1)
            revenue = round(random.uniform(45000, 420000), 2)
            tx = random.randint(350, 4200)
            ret = round(random.uniform(0.3, 5.8), 2)
            records.append([f'B{b:03d}', name, region, channel, snap.strftime('%Y-%m'), service, rating, revenue, tx, ret])
    return records

def make_branch_html(path: Path):
    records = branch_records()
    head = ['Branch ID','Branch Name','Region','Channel','Snapshot Month','Service Level %','Customer Rating','Revenue','Transactions','Return Rate %']
    parts = ['<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Commercial Performance 360 - Branch Performance</title>',
             '<style>body{font-family:Arial,sans-serif;margin:32px;background:#f7f9fa;color:#162126}h1{margin-bottom:4px}.meta{color:#60727a;margin-bottom:20px}table{border-collapse:collapse;width:100%;background:#fff;font-size:13px}th,td{border:1px solid #d9e1e5;padding:7px 9px;text-align:left;white-space:nowrap}th{position:sticky;top:0;background:#0b7777;color:#fff}tr:nth-child(even){background:#f5f9f9}</style></head><body>',
             '<h1>Branch Performance</h1><div class="meta">Commercial Performance 360 - Training Web Source | 4,000 rows | Synthetic training data</div><table id="branch-performance"><thead><tr>']
    parts.extend(f'<th>{html.escape(h)}</th>' for h in head)
    parts.append('</tr></thead><tbody>')
    for r in records:
        parts.append('<tr>' + ''.join(f'<td>{html.escape(str(v))}</td>' for v in r) + '</tr>')
    parts.append('</tbody></table></body></html>')
    path.write_text(''.join(parts), encoding='utf-8')
    return len(records)

def update_day1():
    zp = PACKS / 'Day01_CONNECT_EVERYTHING.zip'
    with tempfile.TemporaryDirectory() as td:
        root = unzip_pack(zp, Path(td))
        products = find_ids(root / '01_Product_Master.xlsx', ['product id','product','sku'], 'P', 500)
        rep_ids = []
        txt = root / '03_Sales_Reps.txt'
        if txt.exists():
            for line in txt.read_text(encoding='utf-8', errors='ignore').splitlines()[1:]:
                cell = line.split(',')[0].split('\t')[0].strip()
                if cell:
                    rep_ids.append(cell)
        if not rep_ids:
            rep_ids = [f'SR{i:03d}' for i in range(1, 181)]
        header = ['Transaction ID','Date','Customer ID','Product ID','Sales Rep ID','Branch ID','Region','Channel','Quantity','Unit Price','Discount %','Revenue']
        write_csv(root / '02_Sales_Transactions.csv', header, sales_rows(120000, date(2025,1,1), 620, products, rep_ids))
        make_branch_html(root / 'web' / 'Branch_Performance.html')
        (root / '00_DATASET_SCALE.txt').write_text('DAY 01 DATA SCALE\n- Sales Transactions: 120,000 rows\n- Web Branch Performance: 4,000 rows\n- Reference/master files remain intentionally compact.\n', encoding='utf-8')
        rezip_pack(root, zp)
    make_branch_html(DAY1 / 'Branch_Performance.html')

def dirty_sales(count=50000):
    header = ['Transaction ID','Order Date','Customer ID','Region','Channel','Product','Quantity','Unit Price','Revenue','Sales Rep']
    rows = []
    region_variants = ['Amman',' amman ','AMMAN','North',' north','SOUTH ','Zarqa','zarqa','Central','CENTRAL']
    channel_variants = ['Retail',' retail ','RETAIL','Corporate','corporate ','Online','ONLINE','Partner',' partner']
    for i in range(count):
        dt = date(2026,1,1) + timedelta(days=random.randrange(240))
        fmt = random.choice(['iso','slash','us'])
        ds = dt.isoformat() if fmt == 'iso' else (dt.strftime('%d/%m/%Y') if fmt == 'slash' else dt.strftime('%m-%d-%Y'))
        qty = random.randint(1, 10)
        price = round(random.uniform(5, 180), 2)
        revenue = round(qty * price, 2)
        if i % 173 == 0:
            ds = 'invalid-date'
        if i % 211 == 0:
            revenue = ''
        if i % 257 == 0:
            qty = 'N/A'
        rows.append([f'DTX{i+1:07d}', ds, f'C{random.randint(1,6500):05d}', random.choice(region_variants), random.choice(channel_variants), f'Product {random.randint(1,400):03d}', qty, price, revenue, f'  {random.choice(FIRST)} {random.choice(LAST)}  '])
        if i % 499 == 0:
            rows.append(rows[-1][:])
    return header, rows

def dirty_customers(count=8000):
    header = ['Customer ID','Customer Name','City','Segment','Email','Status']
    rows = []
    for i in range(1, count + 1):
        name = f'{random.choice(FIRST)} {random.choice(LAST)} Trading {i:04d}'
        if i % 7 == 0:
            name = ' ' + name + ' '
        city = random.choice(CITIES)
        if i % 9 == 0:
            city = city.upper()
        seg = random.choice(['SMB','Enterprise','Retail','Key Account',' key account '])
        email = f'customer{i}@example.com' if i % 31 else ''
        status = random.choice(['Active','ACTIVE',' active ','Inactive'])
        rows.append([f'C{i:05d}', name, city, seg, email, status])
        if i % 997 == 0:
            rows.append(rows[-1][:])
    return header, rows

def update_day2():
    zp = PACKS / 'Day02_CLEAN_DATA.zip'
    with tempfile.TemporaryDirectory() as td:
        root = unzip_pack(zp, Path(td))
        h, r = dirty_sales()
        write_csv(root / '02_Dirty_Sales_Data_LARGE.csv', h, r)
        h, r = dirty_customers()
        write_csv(root / '02_Customer_Master_Dirty_LARGE.csv', h, r)
        (root / '00_USE_THE_LARGE_FILES.txt').write_text('Use the LARGE CSV files for the main cleaning demo. The original XLSX files remain as compact backup/reference files.\nDirty Sales LARGE: ~50,000 rows plus intentional duplicates.\nCustomer Master LARGE: ~8,000 rows plus intentional duplicates.\n', encoding='utf-8')
        rezip_pack(root, zp)

def monthly_rows(count, month, product_ids, customer_ids):
    start = date(2026, month, 1)
    nextm = date(2026 + (month == 12), (month % 12) + 1, 1)
    span = (nextm - start).days
    for i in range(count):
        dt = start + timedelta(days=random.randrange(span))
        qty = random.randint(1, 10)
        price = round(random.uniform(5, 220), 2)
        disc = random.choice([0,0,0.05,0.10])
        rev = round(qty * price * (1 - disc), 2)
        yield [f'{month:02d}-{i+1:07d}', dt.isoformat(), random.choice(customer_ids), random.choice(product_ids), f'SR{random.randint(1,180):03d}', f'B{random.randint(1,320):03d}', random.choice(REGIONS), random.choice(CHANNELS), qty, price, disc, rev]

def update_day3():
    zp = PACKS / 'Day03_STOP_COPYING_FILES_LEARNER.zip'
    with tempfile.TemporaryDirectory() as td:
        root = unzip_pack(zp, Path(td))
        products = find_ids(root / '03_Product_Master.xlsx', ['product id','product','sku'], 'P', 500)
        customers = find_ids(root / '03_Customer_Master.xlsx', ['customer id','customer'], 'C', 8000)
        header = ['Transaction ID','Date','Customer ID','Product ID','Sales Rep ID','Branch ID','Region','Channel','Quantity','Unit Price','Discount %','Revenue']
        folder = root / 'Monthly_Sales'
        mapping = {1:'2026-01_January.csv',2:'2026-02_February.csv',3:'2026-03_March.csv'}
        for m, fn in mapping.items():
            write_csv(folder / fn, header, monthly_rows(40000, m, products, customers))
        new = root / 'NEW_MONTH_TO_DROP_AFTER_BUILD'
        write_csv(new / '2026-04_April.csv', header, monthly_rows(40000, 4, products, customers))
        (root / '00_AUTOMATION_SCALE.txt').write_text('Monthly_Sales: 40,000 rows per month (Jan-Mar = 120,000 rows).\nApril: 40,000 rows in NEW_MONTH_TO_DROP_AFTER_BUILD. Move/copy it into Monthly_Sales only after the learner builds the Folder query, then Refresh.\n', encoding='utf-8')
        rezip_pack(root, zp)

def main():
    update_day1()
    update_day2()
    update_day3()
    print('Generated scaled Week 1 datasets successfully.')

if __name__ == '__main__':
    main()
