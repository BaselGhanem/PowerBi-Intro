const pptxgen = require(`pptxgenjs`);

const pptx = new pptxgen();
pptx.defineLayout({ name: `PORTRAIT_9_16`, width: 7.5, height: 13.333 });
pptx.layout = `PORTRAIT_9_16`;
pptx.author = `X Academy — Basel Ghanem`;
pptx.company = `X Academy`;
pptx.subject = `Power BI Specialist — Week 1 Trainer Playbook`;
pptx.title = `Power BI Specialist — Week 1 Trainer Playbook`;
pptx.lang = `ar-JO`;

const C = {
  bg: `0C0D0F`, surface: `17191E`, surface2: `1D2026`, surface3: `242831`,
  text: `F5F7FA`, muted: `98A1AD`, muted2: `6F7884`, border: `2A2D33`,
  yellow: `F2C811`, teal: `099999`, green: `50BE87`, purple: `695CFF`
};
const F_AR = `Almarai`;
const F_EN = `Inter`;
const W = 7.5;
const H = 13.333;
const BASE = `https://baselghanem.github.io/PowerBi-Intro/`;
const URLS = {
  site: BASE,
  trainer: BASE + `Trainer/`,
  teams: `https://teams.microsoft.com/meet/384079113607436?p=lgLLd5ReKE51ncdmN8`,
  powerbi: `https://www.microsoft.com/en-us/power-platform/products/power-bi/downloads`,
  nova: BASE + `week1/day1/web/Nova_Company_Profile.html`,
  branch: BASE + `week1/day1/web/Branch_Performance.html`,
  day1zip: BASE + `week1/day1/downloads/Day01_CONNECT_EVERYTHING.zip`,
  day2zip: BASE + `week1/day2/downloads/Day02_CLEAN_DATA.zip`,
  day3zip: BASE + `week1/day3/downloads/Day03_STOP_COPYING_FILES_LEARNER.zip`
};

function bg(slide, accent = C.yellow) {
  slide.background = { color: C.bg };
  for (let x = 0; x <= W; x += 0.42) {
    slide.addShape(pptx.ShapeType.line, { x, y: 0, w: 0, h: H, line: { color: `191B1F`, transparency: 54, width: 0.45 } });
  }
  for (let y = 0; y <= H; y += 0.42) {
    slide.addShape(pptx.ShapeType.line, { x: 0, y, w: W, h: 0, line: { color: `191B1F`, transparency: 54, width: 0.45 } });
  }
  slide.addShape(pptx.ShapeType.ellipse, { x: 5.05, y: -1.0, w: 3.6, h: 3.6, fill: { color: accent, transparency: 92 }, line: { color: accent, transparency: 100 } });
  slide.addShape(pptx.ShapeType.ellipse, { x: -1.6, y: 9.9, w: 3.2, h: 3.2, fill: { color: C.teal, transparency: 95 }, line: { color: C.teal, transparency: 100 } });
}
function en(slide, text, x, y, w, h, size = 8, color = C.text, bold = false, align = `left`) {
  slide.addText(text, { x, y, w, h, fontFace: F_EN, fontSize: size, bold, color, margin: 0, align, fit: `shrink` });
}
function ar(slide, text, x, y, w, h, size = 10, color = C.text, bold = false, align = `right`) {
  slide.addText(text, { x, y, w, h, fontFace: F_AR, fontSize: size, bold, color, margin: 0, rtlMode: true, align, fit: `shrink` });
}
function rr(slide, x, y, w, h, fill = C.surface, line = C.border) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.14, fill: { color: fill }, line: { color: line, width: 0.7 } });
}
function pbi(slide) {
  slide.addShape(pptx.ShapeType.roundRect, { x: 0.48, y: 0.42, w: 0.43, h: 0.43, fill: { color: C.yellow }, line: { color: C.yellow } });
  [0.32, 0.52, 0.72].forEach((r, i) => slide.addShape(pptx.ShapeType.rect, {
    x: 0.59 + i * 0.08, y: 0.75 - 0.43 * r, w: 0.055, h: 0.43 * r, fill: { color: `111111` }, line: { color: `111111` }
  }));
}
function header(slide, label = `WEEK 01 • TRAINER PLAYBOOK`) {
  pbi(slide);
  en(slide, `Power BI Specialist`, 1.0, 0.42, 3.7, 0.22, 11, C.text, true);
  en(slide, `FROM DATA TO DECISION`, 1.0, 0.67, 3.7, 0.18, 6.4, C.muted2, true);
  en(slide, label, 4.45, 0.49, 2.55, 0.22, 6.8, C.yellow, true, `right`);
  slide.addShape(pptx.ShapeType.line, { x: 0.48, y: 1.04, w: 6.54, h: 0, line: { color: C.border, width: 0.8 } });
}
function footer(slide, n) {
  en(slide, `X ACADEMY`, 0.52, 12.82, 2.5, 0.16, 5.6, C.muted2, true);
  en(slide, String(n).padStart(2, `0`), 6.55, 12.72, 0.45, 0.24, 7.5, C.muted2, true, `right`);
}
function title(slide, eyebrow, main, sub, accent = C.yellow) {
  en(slide, eyebrow, 0.52, 1.35, 6.45, 0.22, 7.1, accent, true);
  ar(slide, main, 0.52, 1.69, 6.45, 0.9, 26, C.text, true);
  if (sub) ar(slide, sub, 0.52, 2.62, 6.45, 0.68, 10.3, C.muted);
}
function chip(slide, text, x, y, w, color = C.yellow, dark = false, url = null) {
  rr(slide, x, y, w, 0.32, color, color);
  en(slide, text, x + 0.05, y + 0.075, w - 0.1, 0.15, 6.1, dark ? `111111` : C.text, true, `center`);
  if (url) slide.addShape(pptx.ShapeType.rect, { x, y, w, h: 0.32, fill: { color: `FFFFFF`, transparency: 100 }, line: { color: `FFFFFF`, transparency: 100 }, hyperlink: { url } });
}
function button(slide, text, url, x, y, w, color = C.yellow) {
  rr(slide, x, y, w, 0.48, color, color);
  en(slide, text, x + 0.1, y + 0.14, w - 0.2, 0.18, 7, `111111`, true, `center`);
  slide.addShape(pptx.ShapeType.rect, { x, y, w, h: 0.48, fill: { color: `FFFFFF`, transparency: 100 }, line: { color: `FFFFFF`, transparency: 100 }, hyperlink: { url } });
}
function bulletList(slide, items, x, y, w, rowH, color = C.yellow, size = 8.1) {
  items.forEach((t, i) => {
    slide.addShape(pptx.ShapeType.ellipse, { x, y: y + i * rowH, w: 0.32, h: 0.32, fill: { color }, line: { color } });
    en(slide, String(i + 1), x, y + i * rowH + 0.075, 0.32, 0.14, 6.5, `111111`, true, `center`);
    ar(slide, t, x + 0.45, y + i * rowH + 0.005, w - 0.45, rowH - 0.05, size, C.text);
  });
}
function row(slide, y, time, key, desc, color) {
  rr(slide, 0.52, y, 6.46, 0.92, C.surface, C.border);
  en(slide, time, 0.72, y + 0.24, 0.72, 0.22, 9.2, color, true);
  en(slide, key, 1.55, y + 0.17, 1.52, 0.18, 6.3, C.text, true);
  ar(slide, desc, 3.0, y + 0.14, 3.7, 0.48, 7.25, C.muted);
}
function timeline(slide, active) {
  const xs = [0.72, 2.75, 4.78];
  const cols = [C.yellow, C.teal, C.purple];
  const phases = [`CONNECT`, `CLEAN`, `AUTOMATE`];
  const labels = [`وصّل كل شيء`, `نظّف البيانات`, `أوقف Copy/Paste`];
  slide.addShape(pptx.ShapeType.line, { x: 0.92, y: 3.6, w: 4.85, h: 0, line: { color: C.border, width: 1.2 } });
  xs.forEach((x, i) => {
    const c = i === active ? cols[i] : C.surface3;
    slide.addShape(pptx.ShapeType.ellipse, { x, y: 3.42, w: 0.36, h: 0.36, fill: { color: c }, line: { color: c } });
    en(slide, phases[i], x - 0.18, 3.94, 0.72, 0.16, 6.2, i === active ? cols[i] : C.muted2, true, `center`);
    ar(slide, labels[i], x - 0.48, 4.2, 1.32, 0.36, 7.5, i === active ? C.text : C.muted2, true, `center`);
  });
}

// 01
{
  const s = pptx.addSlide();
  bg(s, C.yellow);
  pbi(s);
  en(s, `X ACADEMY`, 1.18, 0.57, 2.1, 0.16, 6.4, C.muted2, true);
  en(s, `POWER BI SPECIALIST`, 0.52, 2.0, 6.4, 0.28, 10.5, C.yellow, true);
  ar(s, `الأسبوع الأول\nTrainer Playbook`, 0.52, 2.55, 6.15, 1.75, 30, C.text, true);
  ar(s, `3 جلسات. قصة واحدة. من البيانات المبعثرة إلى Pipeline قابلة للتحديث.`, 0.52, 4.58, 6.05, 0.95, 12.2, C.muted);
  rr(s, 0.52, 5.85, 6.46, 2.15, `111317`, C.border);
  en(s, `CONNECT  →  CLEAN  →  AUTOMATE`, 0.82, 6.24, 5.86, 0.32, 13.5, C.text, true, `center`);
  ar(s, `20 Sep  •  22 Sep  •  23 Sep 2026`, 0.82, 6.78, 5.86, 0.28, 8.4, C.muted, false, `center`);
  chip(s, `WEEK 01`, 0.82, 7.36, 1.28, C.yellow, true);
  chip(s, `PORTRAIT DECK`, 2.28, 7.36, 1.72, C.teal);
  chip(s, `TRAINER ONLY`, 4.18, 7.36, 1.6, C.purple);
  rr(s, 0.52, 8.45, 6.46, 2.35, `15181D`, C.border);
  ar(s, `هدف الملف`, 0.82, 8.78, 5.88, 0.28, 9, C.yellow, true);
  ar(s, `تفتحه قبل كل جلسة وتعرف فوراً: ماذا تجهّز، ماذا تعرض، ماذا توزّع، ماذا يطبق المتدرب، وما هو الـDeliverable النهائي.`, 0.82, 9.25, 5.88, 1.1, 10.4, C.text);
  en(s, `Basel Ghanem  •  Power BI & Data Analytics Trainer`, 0.52, 12.45, 6.0, 0.22, 6.4, C.muted2, true);
  footer(s, 1);
}

// 02
{
  const s = pptx.addSlide(); bg(s, C.yellow); header(s); footer(s, 2);
  title(s, `WEEK 01 • ONE BUSINESS UNIVERSE`, `الأسبوع الأول في صفحة واحدة`, `نفس Nova case يكبر معنا كل جلسة: نوصل الأدلة، ننظفها، ثم نحولها إلى Automation قابلة للـRefresh.`);
  timeline(s, 0);
  const cards = [
    [4.75, `DAY 01`, `SUN • 20 SEP`, `CONNECT EVERYTHING`, `Nova Profile + Power BI install + Excel / CSV / TXT / PDF / Web + ETL + أول Visuals.`, C.yellow],
    [6.72, `DAY 02`, `TUE • 22 SEP`, `CLEAN DATA LIKE AN ANALYST`, `Power Query: Types, Trim/Clean, Standardize, Nulls, Errors, Duplicates, Applied Steps.`, C.teal],
    [8.69, `DAY 03`, `WED • 23 SEP`, `STOP COPYING FILES`, `Folder Connector + Combine + Merge Masters + April refresh proof.`, C.purple]
  ];
  cards.forEach(([y, d, date, t, desc, c]) => {
    rr(s, 0.52, y, 6.46, 1.62);
    chip(s, d, 0.78, y + 0.25, 0.92, c, c === C.yellow);
    en(s, date, 1.9, y + 0.29, 1.5, 0.16, 6.1, C.muted2, true);
    en(s, t, 0.78, y + 0.73, 5.7, 0.22, 8.4, C.text, true);
    ar(s, desc, 0.78, y + 1.05, 5.7, 0.42, 7.5, C.muted);
  });
  rr(s, 0.52, 10.92, 6.46, 1.08, `14181A`, `245253`);
  ar(s, `مبدأك هذا الأسبوع: لا تشرح Feature ثم تبحث عن مثال. ابدأ بالمشكلة، ثم استخدم الـFeature كحل.`, 0.78, 11.19, 5.9, 0.55, 9.4, `BDE7E5`, true);
}

// 03
{
  const s = pptx.addSlide(); bg(s, C.yellow); header(s, `DAY 01 • CONNECT`); footer(s, 3);
  title(s, `SUN • 20 SEP 2026`, `قبل أن يدخل المتدرب`, `جهّز كل شيء قبل بداية الجلسة. هذه الصفحة هي الـpre-flight checklist.`);
  timeline(s, 0);
  rr(s, 0.52, 4.72, 6.46, 3.42);
  ar(s, `CHECKLIST`, 0.78, 4.98, 5.9, 0.22, 8, C.yellow, true);
  bulletList(s, [
    `افتح Teams قبل الموعد وتأكد من مشاركة الشاشة والصوت.`,
    `افتح Meet Nova — Company Profile كأول شاشة بعد المقدمة.`,
    `جهّز رابط تنزيل Power BI Desktop لمن لم يثبته مسبقاً.`,
    `تأكد من تحميل Day 01 — Nova Source Pack وفك الضغط في Folder واضح.`,
    `افتح Branch Performance Web Source في Tab مستقل لاستخدامه في Get Data > Web.`,
    `جهّز Folder حفظ باسم Nova_Business_Performance_360_[Name].pbix.`
  ], 0.8, 5.43, 5.8, 0.43, C.yellow, 8.1);
  rr(s, 0.52, 8.42, 6.46, 2.3, `12161A`, C.border);
  ar(s, `أعطهم في أول 15 دقيقة`, 0.78, 8.72, 5.9, 0.28, 9, C.text, true);
  button(s, `NOVA PROFILE`, URLS.nova, 0.78, 9.25, 1.55, C.yellow);
  button(s, `POWER BI`, URLS.powerbi, 2.5, 9.25, 1.32, C.teal);
  button(s, `SOURCE PACK`, URLS.day1zip, 4.0, 9.25, 1.48, C.purple);
  button(s, `WEB SOURCE`, URLS.branch, 5.65, 9.25, 1.06, C.yellow);
  ar(s, `لا تبدأ بالواجهة. ابدأ بالقصة والمشكلة الإدارية، بعدها البيانات، وبعدها فقط اشرح أين نجد الأدوات.`, 0.78, 9.98, 5.88, 0.56, 8.2, C.muted);
}

// 04
{
  const s = pptx.addSlide(); bg(s, C.yellow); header(s, `DAY 01 • CONNECT`); footer(s, 4);
  title(s, `SUGGESTED 120-MIN FLOW`, `Run of Show — Day 01`, `تقسيم مقترح لجلسة ساعتين. عدّل الدقائق حسب سرعة المجموعة، لكن لا تغيّر ترتيب القصة.`);
  const data = [
    [`00–10`, `WELCOME`, `الهدف، طريقة الدورة، Nova project، ماذا سنبني خلال 10 أيام.`, C.yellow],
    [`10–25`, `MEET NOVA`, `Company Profile: المنتجات، الفروع، Sales / Finance / Workforce challenge.`, C.yellow],
    [`25–40`, `SETUP`, `Power BI Desktop install / launch + أين سنحفظ المشروع.`, C.teal],
    [`40–70`, `GET DATA`, `Excel → CSV → TXT → PDF → Web. لا تعمل Transform عميق اليوم.`, C.teal],
    [`70–85`, `ETL`, `Explain Extract → Transform → Load على نفس الملفات التي فتحناها.`, C.teal],
    [`85–100`, `INTERFACE`, `Report / Data / Model views بعد أن صار عندهم Context حقيقي.`, C.purple],
    [`100–115`, `FIRST VISUALS`, `Total Revenue Card + Revenue vs Target by Region + Channel Slicer.`, C.purple],
    [`115–120`, `CLOSE`, `السؤال الإداري + Save PBIX + Deliverable check.`, C.purple]
  ];
  let y = 3.55; data.forEach(r => { row(s, y, ...r); y += 1.02; });
}

// 05
{
  const s = pptx.addSlide(); bg(s, C.yellow); header(s, `DAY 01 • CONNECT`); footer(s, 5);
  title(s, `WHAT YOU GIVE • WHAT THEY DO`, `ماذا توزّع؟ ماذا يطبقون؟`, `الهدف أن يخرج المتدرب بملف عمل حقيقي، وليس مجرد مشاهدة Demo.`);
  rr(s, 0.52, 3.45, 6.46, 2.45); chip(s, `GIVE`, 0.78, 3.72, 0.86, C.yellow, true);
  bulletList(s, [`Meet Nova — Company Profile`, `Day01_CONNECT_EVERYTHING.zip`, `Branch Performance Web Source`, `Power BI Desktop download link`], 0.8, 4.25, 5.78, 0.42, C.yellow, 8.2);
  rr(s, 0.52, 6.13, 6.46, 2.75); chip(s, `DO`, 0.78, 6.4, 0.72, C.teal);
  bulletList(s, [`Connect Excel / CSV / TXT / PDF / Web sources.`, `Explain ETL using what they just connected.`, `Tour Report / Data / Model views.`, `Build Total Revenue Card + Revenue vs Target by Region + Channel Slicer.`], 0.8, 6.93, 5.78, 0.47, C.teal, 8.1);
  rr(s, 0.52, 9.13, 6.46, 2.25, `111917`, `24543F`); chip(s, `DELIVERABLE`, 0.78, 9.42, 1.38, C.green);
  ar(s, `أول نسخة من Nova Business Performance 360 + فهم واضح لـ ETL + حفظ الملف باسم:`, 0.78, 9.93, 5.78, 0.58, 8.5, `D5ECDD`, true);
  en(s, `Nova_Business_Performance_360_[Name].pbix`, 0.78, 10.72, 5.78, 0.24, 8.1, C.text, true, `center`);
  rr(s, 0.52, 11.6, 6.46, 0.58, `1A1710`, `5D531E`);
  ar(s, `سؤال الإغلاق: أي Region أو Branch يحتاج انتباه أولاً؟ لا تقبل “Chart جميل” كإجابة.`, 0.72, 11.77, 5.95, 0.22, 7.1, `F0E4A0`, true);
}

// 06
{
  const s = pptx.addSlide(); bg(s, C.yellow); header(s, `DAY 01 • CONNECT`); footer(s, 6);
  title(s, `TRAINER CUES`, `نقاط الشرح التي لا تريد أن تنساها`, `Cues سريعة أثناء التدريب، وليست Script حرفي.`);
  const cues = [
    [`ETL`, `نحن لا نستورد ملفاً فقط. نحن نبني مساراً من Source إلى Model.`, C.yellow],
    [`GET DATA`, `قوة Power BI تبدأ عندما لا تكون البيانات في مكان واحد.`, C.teal],
    [`VIEWS`, `Report = explain • Data = inspect • Model = relate.`, C.yellow],
    [`VISUALS`, `ابدأ Business Question قبل اختيار الـVisual.`, C.teal],
    [`SLICER`, `خليهم يضغطوا بأنفسهم ويروا كيف يتغير Context.`, C.yellow],
    [`SAVE`, `سمّوا الملف الآن؛ هذا المشروع سيكبر معنا كل يوم.`, C.teal]
  ];
  let y = 3.55;
  cues.forEach(([k, d, c]) => {
    rr(s, 0.52, y, 6.46, 1.12);
    chip(s, k, 0.77, y + 0.24, 1.08, c, c === C.yellow);
    ar(s, d, 2.0, y + 0.23, 4.67, 0.55, 8.25, C.text);
    y += 1.28;
  });
  rr(s, 0.52, 11.37, 6.46, 0.95, `12161A`, C.border);
  ar(s, `علامة نجاح Day 1: المتدرب قادر يشرح ETL بكلماته، ويعرف لماذا استخدم 5 Sources مختلفة.`, 0.75, 11.66, 5.95, 0.38, 8.3, C.muted);
}

// 07
{
  const s = pptx.addSlide(); bg(s, C.teal); header(s, `DAY 02 • CLEAN`); footer(s, 7);
  title(s, `TUE • 22 SEP 2026`, `Day 02 — قبل الجلسة`, `اليوم ليس “Power Query buttons”. اليوم هو Data Quality judgment.`, C.teal);
  timeline(s, 1);
  rr(s, 0.52, 4.75, 6.46, 3.3);
  ar(s, `PRE-FLIGHT CHECK`, 0.78, 5.02, 5.9, 0.22, 8, C.teal, true);
  bulletList(s, [
    `تأكد أن Day02_CLEAN_DATA.zip متاح للتحميل من الموقع.`,
    `ابدأ بملف Branch Daily Performance dirty كما هو — لا تفتح نسخة نظيفة.`,
    `اكتب Grain على الشاشة قبل أي خطوة: Branch ID + Date.`,
    `جهّز أمثلة أخطاء واضحة: dates / regions / revenue / headcount / duplicates.`,
    `لن نحذف Null أو Duplicate إلا بسبب Business واضح.`
  ], 0.8, 5.5, 5.8, 0.48, C.teal, 8.1);
  rr(s, 0.52, 8.36, 6.46, 2.18, `111A1A`, `235A5A`);
  ar(s, `الملف الذي تعطيه`, 0.78, 8.65, 5.85, 0.28, 9, C.text, true);
  button(s, `DAY 02 CLEANING LAB`, URLS.day2zip, 0.78, 9.17, 2.34, C.teal);
  ar(s, `50K logical Branch-Day rows + intentional bad duplicates + 8K Dirty Customers + Cleaning Checklist.`, 0.78, 9.88, 5.85, 0.42, 7.8, C.muted);
}

// 08
{
  const s = pptx.addSlide(); bg(s, C.teal); header(s, `DAY 02 • CLEAN`); footer(s, 8);
  title(s, `SUGGESTED 120-MIN FLOW`, `Run of Show — Day 02`, `التركيز: inspect → decide → clean → validate → refresh.`, C.teal);
  const data = [
    [`00–10`, `RECAP`, `افتح PBIX من Day 1. ما المشكلة لو كانت البيانات نفسها غير موثوقة؟`, C.yellow],
    [`10–25`, `GRAIN`, `ثبت Branch ID + Date كـgrain. فرّق duplicate الحقيقي عن repeated event.`, C.yellow],
    [`25–45`, `PROFILE`, `Column quality + data types + inspect errors قبل الحل.`, C.teal],
    [`45–70`, `CLEAN`, `Trim/Clean + standardize Region/Channel + Replace Values.`, C.teal],
    [`70–90`, `NULLS & ERRORS`, `متى replace؟ متى remove؟ متى investigate؟`, C.teal],
    [`90–105`, `DUPLICATES`, `احذف فقط true duplicates واطلب منهم الدفاع عن القرار.`, C.teal],
    [`105–115`, `CHECKLIST`, `Customer Master challenge بدون recipe خطوة بخطوة.`, C.purple],
    [`115–120`, `CLOSE`, `Applied Steps + Refresh + deliverable check.`, C.purple]
  ];
  let y = 3.55; data.forEach(r => { row(s, y, ...r); y += 1.02; });
}

// 09
{
  const s = pptx.addSlide(); bg(s, C.teal); header(s, `DAY 02 • CLEAN`); footer(s, 9);
  title(s, `ANALYST CLEANING PROTOCOL`, `ترتيب التنظيف الذي أريدهم يتعلموه`, `ترتيب ثابت يمكنهم إعادة استخدامه على أي Dataset، وليس فقط Nova.`, C.teal);
  const steps = [
    [`01`, `GRAIN`, `ما هو row واحد؟ ما هو الـkey المنطقي؟`],
    [`02`, `TYPES`, `Dates / numbers / text قبل أي Transformation أخرى.`],
    [`03`, `TEXT`, `Trim + Clean + standardize labels.`],
    [`04`, `MISSING`, `Nulls: business decision، لا default reflex.`],
    [`05`, `ERRORS`, `افهم سبب الخطأ قبل remove / replace.`],
    [`06`, `DUPLICATES`, `احذف فقط row يكرر نفس الحدث بنفس الـgrain.`],
    [`07`, `STEPS`, `Applied Steps قابلة للشرح والترتيب والـRefresh.`],
    [`08`, `VALIDATE`, `Row counts + key checks + spot check before closing.`]
  ];
  let y = 3.5;
  steps.forEach(([n, k, d]) => {
    rr(s, 0.52, y, 6.46, 0.9);
    en(s, n, 0.72, y + 0.23, 0.46, 0.2, 8.4, C.teal, true);
    en(s, k, 1.26, y + 0.19, 1.22, 0.17, 6.2, C.text, true);
    ar(s, d, 2.35, y + 0.14, 4.36, 0.45, 7.5, C.muted);
    y += 0.99;
  });
  rr(s, 0.52, 11.5, 6.46, 0.72, `111917`, `24543F`);
  ar(s, `Deliverable: Branch Daily Performance + Customer Master نظيفان، Grain واضح، وRefresh يعمل بدون surprises.`, 0.72, 11.71, 5.95, 0.28, 7.7, `D5ECDD`, true);
}

// 10
{
  const s = pptx.addSlide(); bg(s, C.purple); header(s, `DAY 03 • AUTOMATE`); footer(s, 10);
  title(s, `WED • 23 SEP 2026`, `Day 03 — قبل الجلسة`, `اللحظة المهمة اليوم: April يدخل بالـRefresh فقط. هذا هو الـproof.`, C.purple);
  timeline(s, 2);
  rr(s, 0.52, 4.76, 6.46, 3.18);
  ar(s, `PRE-FLIGHT CHECK`, 0.78, 5.03, 5.9, 0.22, 8, C.purple, true);
  bulletList(s, [
    `تأكد أن Day03_STOP_COPYING_FILES_LEARNER.zip متاح.`,
    `لا تضع April داخل Folder من البداية. خليه خارج Folder حتى لحظة الـproof.`,
    `تحقق أن Jan–Mar هي نفس 120K rows المستخدمة في Day 1 لكن مقسمة شهرياً.`,
    `جهّز Branch / Customer / Product Masters للـMerge.`,
    `حدد Final Query واحدة فقط للـLoad، والباقي staging/reference.`
  ], 0.8, 5.48, 5.8, 0.48, C.purple, 8.05);
  rr(s, 0.52, 8.26, 6.46, 2.23, `171420`, `4B426C`);
  ar(s, `الملف الذي تعطيه`, 0.78, 8.57, 5.85, 0.28, 9, C.text, true);
  button(s, `DAY 03 AUTOMATION PACK`, URLS.day3zip, 0.78, 9.11, 2.55, C.purple);
  ar(s, `Jan–Mar × 40K + April refresh proof + Branch / Customer / Product Masters.`, 0.78, 9.84, 5.85, 0.4, 7.8, C.muted);
}

// 11
{
  const s = pptx.addSlide(); bg(s, C.purple); header(s, `DAY 03 • AUTOMATE`); footer(s, 11);
  title(s, `SUGGESTED 120-MIN FLOW`, `Run of Show — Day 03`, `التركيز: scalable process، لا monthly manual work.`, C.purple);
  const data = [
    [`00–10`, `PAIN`, `اعرض Jan / Feb / Mar كملفات منفصلة. هل سنكرر الشغل كل شهر؟`, C.yellow],
    [`10–30`, `FOLDER`, `Get Data > Folder + Combine Files + inspect helper queries.`, C.yellow],
    [`30–45`, `SOURCE NAME`, `احتفظ Source File Name واشرح لماذا يفيد في QA.`, C.teal],
    [`45–70`, `MERGE`, `Branch Master → Customer Master → Product Master.`, C.teal],
    [`70–85`, `REFERENCE`, `Duplicate vs Reference + staging logic.`, C.teal],
    [`85–100`, `LOAD`, `Disable Load للـstaging. اترك final analytical query فقط.`, C.purple],
    [`100–112`, `APRIL PROOF`, `Drop April file into Folder → Refresh → verify new rows.`, C.purple],
    [`112–120`, `CLOSE`, `اربط الفكرة بالشهر القادم + deliverable check.`, C.purple]
  ];
  let y = 3.55; data.forEach(r => { row(s, y, ...r); y += 1.02; });
}

// 12
{
  const s = pptx.addSlide(); bg(s, C.purple); header(s, `DAY 03 • AUTOMATE`); footer(s, 12);
  title(s, `PIPELINE ARCHITECTURE`, `الصورة التي ترسمها لهم`, `خليهم يفهموا الـflow بصرياً قبل التفاصيل التقنية.`, C.purple);
  const blocks = [
    [0.74, `01`, `MONTHLY FILES`, `Jan • Feb • Mar`, C.yellow],
    [2.65, `02`, `FOLDER QUERY`, `Combine + clean`, C.teal],
    [4.56, `03`, `FINAL SALES`, `One analytical table`, C.purple]
  ];
  blocks.forEach(([x, n, t, sub, c]) => {
    rr(s, x, 3.8, 1.58, 1.26);
    chip(s, n, x + 0.14, 3.94, 0.45, c, c === C.yellow);
    en(s, t, x + 0.14, 4.41, 1.3, 0.17, 6.1, C.text, true, `center`);
    en(s, sub, x + 0.14, 4.7, 1.3, 0.17, 5.6, C.muted, false, `center`);
  });
  s.addShape(pptx.ShapeType.chevron, { x: 2.33, y: 4.21, w: 0.25, h: 0.42, fill: { color: C.border }, line: { color: C.border } });
  s.addShape(pptx.ShapeType.chevron, { x: 4.24, y: 4.21, w: 0.25, h: 0.42, fill: { color: C.border }, line: { color: C.border } });
  rr(s, 0.74, 5.55, 5.4, 2.26);
  en(s, `MERGE MASTERS`, 0.98, 5.86, 4.9, 0.22, 8, C.text, true);
  [[`BRANCH`, `Region • Manager`, C.yellow], [`CUSTOMER`, `Segment • Type`, C.teal], [`PRODUCT`, `Category • Brand`, C.purple]].forEach((m, i) => {
    rr(s, 0.98 + i * 1.63, 6.37, 1.42, 0.9, `14161A`, C.border);
    en(s, m[0], 1.08 + i * 1.63, 6.57, 1.22, 0.16, 6.1, m[2], true, `center`);
    en(s, m[1], 1.05 + i * 1.63, 6.88, 1.28, 0.15, 5.1, C.muted, false, `center`);
  });
  rr(s, 0.74, 8.18, 5.4, 1.2, `111917`, `24543F`);
  en(s, `APRIL.csv`, 0.98, 8.48, 1.05, 0.22, 8.2, C.green, true);
  en(s, `Drop into folder → Refresh → rows appear`, 2.15, 8.35, 3.55, 0.22, 7.6, `D5ECDD`, true, `right`);
  ar(s, `بدون Copy / Paste`, 2.15, 8.72, 3.55, 0.25, 7.6, `D5ECDD`, true);
  rr(s, 0.74, 9.76, 5.4, 1.7, `171420`, `4B426C`);
  ar(s, `Deliverable`, 0.98, 10.05, 4.9, 0.24, 8.5, C.purple, true);
  ar(s, `Nova monthly Sales pipeline قابلة للـRefresh وجاهزة للأشهر القادمة، مع Masters موحدة.`, 0.98, 10.52, 4.9, 0.58, 9, C.text, true);
}

// 13
{
  const s = pptx.addSlide(); bg(s, C.yellow); header(s, `WEEK 01 • MATERIALS`); footer(s, 13);
  title(s, `TRAINER MATERIAL MATRIX`, `كل الروابط في صفحة واحدة`, `إذا ضعت أثناء الجلسة، افتح المطلوب من هنا مباشرة.`);
  const links = [
    [`LIVE SESSION`, `Microsoft Teams`, URLS.teams, C.yellow],
    [`COURSE HUB`, `Power BI Specialist site`, URLS.site, C.teal],
    [`DAY 01`, `Meet Nova — Company Profile`, URLS.nova, C.yellow],
    [`DAY 01`, `Power BI Desktop Download`, URLS.powerbi, C.teal],
    [`DAY 01`, `Nova Source Pack`, URLS.day1zip, C.purple],
    [`DAY 01`, `Branch Performance Web Source`, URLS.branch, C.yellow],
    [`DAY 02`, `Nova Cleaning Lab`, URLS.day2zip, C.teal],
    [`DAY 03`, `Nova Automation Pack`, URLS.day3zip, C.purple]
  ];
  let y = 3.55;
  links.forEach(([d, t, u, c]) => {
    rr(s, 0.52, y, 6.46, 0.88);
    chip(s, d, 0.72, y + 0.23, 0.94, c, c === C.yellow);
    en(s, t, 1.82, y + 0.21, 3.95, 0.23, 7, C.text, true);
    button(s, `OPEN`, u, 5.86, y + 0.2, 0.84, c);
    y += 0.99;
  });
  rr(s, 0.52, 11.7, 6.46, 0.62, `14181A`, `245253`);
  en(s, `baselghanem.github.io/PowerBi-Intro/Trainer/`, 0.72, 11.89, 5.95, 0.2, 6.8, `BDE7E5`, true, `center`);
}

// 14
{
  const s = pptx.addSlide(); bg(s, C.yellow); header(s, `WEEK 01 • CLOSEOUT`); footer(s, 14);
  title(s, `END OF WEEK 01`, `ماذا يجب أن يكون موجوداً عند نهاية الأربعاء؟`, `هذه هي QA checklist قبل أن تعتبر الأسبوع الأول مغلقاً.`);
  rr(s, 0.52, 3.5, 6.46, 3.2);
  ar(s, `LEARNER SHOULD HAVE`, 0.78, 3.8, 5.9, 0.22, 8, C.yellow, true);
  bulletList(s, [
    `PBIX محفوظ باسم واضح من Day 1 ويعرف أين يوجد.`,
    `فهم عملي لـ ETL وReport/Data/Model views.`,
    `قدرة على تنظيف Dataset مع Grain واضح وقرارات مبررة.`,
    `Folder pipeline تجمع ملفات شهرية بشكل تلقائي.`,
    `Merge مع Branch / Customer / Product Masters.`,
    `إثبات أن April دخل بالـRefresh فقط.`
  ], 0.8, 4.28, 5.8, 0.43, C.yellow, 8.0);
  rr(s, 0.52, 6.96, 6.46, 2.68, `12161A`, C.border);
  ar(s, `TRAINER SHOULD VERIFY`, 0.78, 7.28, 5.9, 0.22, 8, C.teal, true);
  bulletList(s, [
    `كل روابط الموقع تعمل من جهاز آخر وليس من cache جهازك.`,
    `الـZIPs تنزل وتفتح بدون missing files.`,
    `الـWeb sources تفتح علناً بدون Login.`,
    `April proof قابل للتكرار أمام المجموعة.`,
    `لا يوجد أي ملف trainee يحتاج الوصول إلى old/.`
  ], 0.8, 7.75, 5.8, 0.42, C.teal, 7.8);
  rr(s, 0.52, 9.96, 6.46, 1.78, `171420`, `4B426C`);
  ar(s, `الخطوة التالية`, 0.78, 10.28, 5.9, 0.24, 8.5, C.purple, true);
  en(s, `WEEK 02 STARTS WITH MODEL`, 0.78, 10.74, 5.9, 0.2, 7, C.text, true, `right`);
  en(s, `Fact vs Dimension • Grain • Relationships • DAX`, 0.78, 11.03, 5.9, 0.22, 7.2, C.purple, true, `right`);
  ar(s, `لا تبني Day 4 قبل التأكد أن Pipeline الأسبوع الأول موثوقة.`, 0.78, 11.35, 5.9, 0.28, 8.1, C.text, true);
  button(s, `OPEN TRAINER HUB`, URLS.trainer, 2.42, 12.02, 2.65, C.yellow);
}

pptx.writeFile({ fileName: `Trainer/Week1_Trainer_Playbook_Portrait.pptx` });
