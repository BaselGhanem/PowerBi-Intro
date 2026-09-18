const COURSE_CONFIG = {
  title: 'Power BI Specialist',
  subtitle: 'From Data to Decision',
  academy: 'X Academy',
  trainer: 'Basel Ghanem',
  trainerTitle: 'Senior Sales Analyst • Power BI & Excel Trainer',
  totalDays: 10,
  totalHours: 20,
  sessionHours: 2,
  portalPassword: 'PowerBI',
  powerBiDownloadUrl: 'https://www.microsoft.com/en-us/power-platform/products/power-bi/downloads',
  liveUrl: 'https://teams.microsoft.com/meet/384079113607436?p=lgLLd5ReKE51ncdmN8',
  dashboardPreviewUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMWUwODU5MjEtMjQ2OS00OTM0LWJmNWMtY2Q0MjY5ZDg1NGVmIiwidCI6IjhiNjAyNDRiLTFiZGQtNDk4YS04ODY3LTljNzJhNGQ5NzFhMCIsImMiOjl9',
  instructorImage: 'https://raw.githubusercontent.com/BaselGhanem/Portfolio/refs/heads/main/BaselGhanem.jpg',
  contact: {
    email: 'Xacademy2@outlook.com',
    phone: '+962 78 45 87 87',
    location: 'عمّان - الأردن'
  }
};

const DAYS = [
  {
    id: 1,
    date: '2026-09-20',
    weekday: 'الأحد',
    phase: 'CONNECT',
    title: 'Connect Everything',
    titleAr: 'وصّل كل شيء',
    hook: 'Excel، CSV، TXT، Web، PDF... هل Power BI فعلاً يقدر يقرأهم كلهم؟',
    mission: 'ثبّت Power BI Desktop، وصّل خمسة أنواع مصادر، افهم ETL والواجهات الأساسية، ثم ابنِ أول Report تفاعلي بإيدك.',
    topics: ['Power BI Desktop Installation', 'Get Data', 'Excel / CSV / Text', 'Web Connector', 'PDF Connector', 'ETL Concept', 'Report / Data / Model Views', 'Card & Bar Chart', 'Slicer & Filters'],
    build: ['Install & launch Power BI Desktop', 'Connect Excel, CSV, TXT, PDF and Web sources', 'Understand Extract → Transform → Load', 'Tour the interface only after using it', 'Build Total Revenue Card', 'Build Revenue by Region', 'Add Channel Slicer and test interactions', 'Save Commercial_Performance_360_[Name].pbix'],
    challenge: 'أجب عن أسئلة الإدارة باستخدام الـVisual المناسب. لا تبدأ بالـChart؛ ابدأ بالسؤال.',
    deliverable: 'أول نسخة من Commercial Performance 360 + فهم واضح لـETL وواجهات Power BI الأساسية.',
    recordingUrl: '',
    resources: [
      { name: 'Day 01 — Complete Source Pack', type: 'ZIP', url: 'week1/day1/downloads/Day01_CONNECT_EVERYTHING.zip', note: 'Excel + CSV + TXT + PDF + ETL Quick Reference + Challenge' },
      { name: 'Branch Performance — Web Source', type: 'WEB', url: 'week1/day1/web/Branch_Performance.html', note: 'استخدم هذا الرابط مباشرة في Get Data > Web' }
    ]
  },
  {
    id: 2,
    date: '2026-09-22',
    weekday: 'الثلاثاء',
    phase: 'CLEAN',
    title: 'Clean Data Like an Analyst',
    titleAr: 'نظّف البيانات كمحلل',
    hook: 'التاريخ بأكثر من شكل، أسماء Regions غير موحدة، Revenue فيه فراغات، وTransaction IDs مكررة. هل تبني Dashboard على هيك Data؟',
    mission: 'اكتشف مشاكل الجودة أولاً، ثم حوّل التنظيف إلى Power Query pipeline تتكرر تلقائياً مع كل Refresh.',
    topics: ['Power Query Editor', 'Data Types', 'Trim & Clean', 'Replace Values', 'Standardize Categories', 'Nulls', 'Duplicates', 'Errors', 'Applied Steps'],
    build: ['Inspect dirty data before touching it', 'Fix data types and date issues', 'Trim & clean text fields', 'Standardize Region and Channel labels', 'Handle blanks intentionally', 'Remove duplicates where appropriate', 'Review Applied Steps', 'Refresh and prove the pipeline repeats'],
    challenge: 'نظّف Customer Master السيئ باستخدام الـCleaning Checklist فقط، بدون recipe خطوة بخطوة.',
    deliverable: 'Sales Query + Customer Master نظيفان وقابلان للـRefresh بدون تنظيف يدوي متكرر.',
    recordingUrl: '',
    resources: [
      { name: 'Day 02 — Cleaning Lab Pack', type: 'ZIP', url: 'week1/day2/downloads/Day02_CLEAN_DATA.zip', note: 'Dirty Sales + Dirty Customer Master + Cleaning Checklist' }
    ]
  },
  {
    id: 3,
    date: '2026-09-23',
    weekday: 'الأربعاء',
    phase: 'AUTOMATE',
    title: 'Stop Copying Files',
    titleAr: 'وقف Copy / Paste الشهري',
    hook: 'January، February، March... وبكرا April. هل رح تعيد نفس الشغل كل شهر؟',
    mission: 'ابنِ Pipeline تجمع ملفات الأشهر تلقائياً، ثم Merge مع Customer وProduct Masters، وبعدها أثبت أن ملف شهر جديد يدخل بالـRefresh فقط.',
    topics: ['Folder Connector', 'Combine Files', 'Append Thinking', 'Merge Queries', 'Expand Columns', 'Reference vs Duplicate', 'Enable Load', 'Query Dependencies', 'Refresh'],
    build: ['Connect to Monthly_Sales folder', 'Combine January–March', 'Keep Source File Name', 'Merge Customer Master', 'Merge Product Master', 'Load only the final analytical query', 'Drop April file and Refresh'],
    challenge: 'ابنِ العملية كاملة من Folder إلى Dataset موحد. النجاح الحقيقي: إضافة April بدون Copy/Paste أو تعديل يدوي.',
    deliverable: 'Refreshable multi-file pipeline جاهزة للأشهر القادمة.',
    recordingUrl: '',
    resources: [
      { name: 'Day 03 — Automation Learner Pack', type: 'ZIP', url: 'week1/day3/downloads/Day03_STOP_COPYING_FILES_LEARNER.zip', note: 'Jan–Mar files + Customer Master + Product Master + Automation Challenge' }
    ]
  },
  {
    id: 4,
    date: '2026-09-27',
    weekday: 'الأحد',
    phase: 'MODEL',
    title: 'Your Numbers Are Wrong',
    titleAr: 'الرقم شكله صح… لكنه غلط',
    hook: 'Dashboard ممتاز بصرياً، لكن Total Target تضاعف. أين المشكلة؟',
    mission: 'افهم الـGrain والعلاقات وابنِ Star Schema يجعل الأرقام موثوقة.',
    topics: ['Fact vs Dimension', 'Grain', 'Unique Keys', 'One-to-Many', 'Filter Direction', 'Active Relationships', 'Star Schema'],
    build: ['DimCustomer', 'DimProduct', 'DimSalesRep', 'DimTeam', 'DimDate', 'Targets & Budget Relationships'],
    challenge: 'استلم Broken Model وأصلح الأرقام بدون تعديل الـVisuals.',
    deliverable: 'Semantic Model نظيف يمكن الاعتماد عليه لبقية الدورة.',
    recordingUrl: '',
    resources: [
      { name: '04_Broken_Model.pbix', type: 'PBIX', url: '', note: 'Model به أخطاء مقصودة' },
      { name: '04_Model_Map.pdf', type: 'PDF', url: '', note: 'مرجع العلاقات والـGrain' },
      { name: 'Day 04 — Make the Numbers Trustworthy', type: 'Challenge', url: '', note: 'Model Challenge' }
    ]
  },
  {
    id: 5,
    date: '2026-09-29',
    weekday: 'الثلاثاء',
    phase: 'MEASURE',
    title: 'DAX Without Fear',
    titleAr: 'DAX بدون رهبة',
    hook: 'الإدارة تريد 6 KPIs والتقرير الحالي لا يملك الأرقام.',
    mission: 'ابنِ Measures واضحة وافهم لماذا نفس الـMeasure يتغير حسب السياق.',
    topics: ['Measures vs Calculated Columns', 'SUM', 'COUNTROWS', 'DISTINCTCOUNT', 'DIVIDE', 'Measure Formatting', 'Basic Context'],
    build: ['Total Sales', 'Transactions', 'Customers', 'Average Order', 'Target', 'Achievement %', 'Budget Variance'],
    challenge: 'ابنِ CEO KPI Strip من Business Requirements فقط.',
    deliverable: 'طبقة Measures منظمة تغذي التقرير بدلاً من حسابات متفرقة.',
    recordingUrl: '',
    resources: [
      { name: '05_DAX_KPI_Lab.pbix', type: 'PBIX', url: '', note: 'مختبر الـMeasures' },
      { name: '05_KPI_Business_Requirements.pdf', type: 'PDF', url: '', note: 'طلبات الإدارة' },
      { name: 'Day 05 — CEO KPI Strip', type: 'Challenge', url: '', note: 'DAX Challenge' }
    ]
  },
  {
    id: 6,
    date: '2026-09-30',
    weekday: 'الأربعاء',
    phase: 'THINK',
    title: 'The Day DAX Clicks',
    titleAr: 'اليوم الذي يفهم فيه DAX فعلاً',
    hook: 'لماذا نفس الـMeasure يعطي نتيجة مختلفة مع كل Slicer وVisual؟',
    mission: 'سيطر على Filter Context بدل حفظ معادلات DAX.',
    topics: ['CALCULATE', 'Filter Context', 'ALL / REMOVEFILTERS', 'FILTER', 'VAR', 'SELECTEDVALUE', 'Dynamic Titles'],
    build: ['Conditional Sales', 'Contribution %', '% of Selected Total', 'Selected KPI', 'Dynamic Title'],
    challenge: 'حدد أكثر Region مساهمة داخل الـSegment المختار مع احترام الـSlicers.',
    deliverable: 'Measures تستجيب للسياق بشكل صحيح ويمكن تفسيرها.',
    recordingUrl: '',
    resources: [
      { name: '06_Filter_Context_Lab.pbix', type: 'PBIX', url: '', note: 'Context Lab' },
      { name: '06_DAX_Debug_Cases.pdf', type: 'PDF', url: '', note: 'Measures تبدو صحيحة لكنها ليست كذلك' },
      { name: 'Day 06 — Contribution Challenge', type: 'Challenge', url: '', note: 'Context Challenge' }
    ]
  },
  {
    id: 7,
    date: '2026-10-04',
    weekday: 'الأحد',
    phase: 'TIME',
    title: 'Time Changes Everything',
    titleAr: 'الرقم وحده لا يكفي',
    hook: 'Sales = 1.2M. ممتاز… مقارنة بماذا؟',
    mission: 'حوّل الأرقام إلى أداء عبر الزمن باستخدام Date Model وTime Intelligence.',
    topics: ['DimDate', 'Year / Quarter / Month', 'Previous Year', 'Growth %', 'YTD', 'PY YTD', 'Rolling 12M', 'CAGR %'],
    build: ['Actual vs PY', 'Growth %', 'YTD', 'YTD Growth', 'Rolling 12M', 'CAGR %'],
    challenge: 'الإدارة تقول: نحن أعلى من السنة الماضية. اثبت أين هذا صحيح وأين ليس صحيحاً.',
    deliverable: 'طبقة Time Intelligence تجعل الاتجاهات والمقارنات قابلة للتحليل.',
    recordingUrl: '',
    resources: [
      { name: '07_Time_Intelligence_Lab.pbix', type: 'PBIX', url: '', note: 'Time Intelligence Lab' },
      { name: '07_Date_Table_Reference.pdf', type: 'PDF', url: '', note: 'مرجع DimDate' },
      { name: 'Day 07 — Is Growth Real?', type: 'Challenge', url: '', note: 'Trend Challenge' }
    ]
  },
  {
    id: 8,
    date: '2026-10-06',
    weekday: 'الثلاثاء',
    phase: 'DESIGN',
    title: 'Build a Report People Want to Use',
    titleAr: 'ابنِ Report الناس فعلاً تريد استخدامه',
    hook: '20 Visual في صفحة واحدة لا تعني Dashboard قوي.',
    mission: 'حوّل Analyst Report إلى Management Experience واضح وسريع.',
    topics: ['Visual Hierarchy', 'Chart Selection', 'Grid & Whitespace', 'Conditional Formatting', 'Drill Down', 'Drill Through', 'Tooltips', 'Bookmarks & Buttons'],
    build: ['Executive Layout', 'KPI Hierarchy', 'Navigation', 'Drill-through', 'Tooltip Pages'],
    challenge: 'نفس 5 Business Questions، لكن لكل متدرب حرية التصميم. كل Visual يجب أن يدافع عن وجوده.',
    deliverable: 'Executive-ready Report بتجربة استخدام متماسكة.',
    recordingUrl: '',
    resources: [
      { name: '08_Executive_Report_Layout.pbix', type: 'PBIX', url: '', note: 'Layout Starter' },
      { name: '08_Visual_Selection_Cards.pdf', type: 'PDF', url: '', note: 'مرجع اختيار الـVisual' },
      { name: 'Day 08 — Every Visual Earns Its Place', type: 'Challenge', url: '', note: 'Design Challenge' }
    ]
  },
  {
    id: 9,
    date: '2026-10-07',
    weekday: 'الأربعاء',
    phase: 'EXPLAIN',
    title: 'From Dashboard to Decision',
    titleAr: 'من Dashboard إلى قرار',
    hook: 'Sales انخفضت 8%. الـCard الأحمر لا يشرح السبب.',
    mission: 'تتبّع الأداء من What إلى Why ثم حوّل التحليل إلى Management Story.',
    topics: ['Executive Overview', 'Sales Performance', 'Product Performance', 'Customer / Team Performance', 'Drivers', 'Navigation', 'Storytelling'],
    build: ['What happened?', 'Where?', 'What?', 'Who?', 'Why?'],
    challenge: '10-Minute Management Meeting: 3 Findings + 1 Recommended Action.',
    deliverable: 'Report يوجّه المستخدم من الرقم إلى السبب ثم إلى الإجراء.',
    recordingUrl: '',
    resources: [
      { name: '09_Management_Case.pbix', type: 'PBIX', url: '', note: 'Management Case' },
      { name: '09_Insight_Template.pdf', type: 'PDF', url: '', note: '3 Findings + 1 Action' },
      { name: 'Day 09 — Management Meeting', type: 'Challenge', url: '', note: 'Storytelling Challenge' }
    ]
  },
  {
    id: 10,
    date: '2026-10-11',
    weekday: 'الأحد',
    phase: 'DECIDE',
    title: 'The Boardroom',
    titleAr: 'الاختبار الحقيقي: The Boardroom',
    hook: 'وصلت بيانات جديدة. الإدارة تريد أن تعرف ماذا تغيّر، لماذا، وأين يجب أن تتدخل.',
    mission: 'نفّذ العملية كاملة من Refresh إلى Insight ثم قدّم قراراً قابلاً للدفاع عنه.',
    topics: ['Refresh & Validation', 'Model Check', 'KPI Review', 'Target / Budget', 'PY & Growth', 'Executive Story', 'Power BI Service', 'Publish', 'Workspaces', 'Refresh Concept', 'RLS Overview'],
    build: ['Final Refresh', 'Executive Dashboard', 'Root Cause Analysis', 'Boardroom Story'],
    challenge: 'Final Mission: What happened? Why? Where should management focus? What action do you recommend?',
    deliverable: 'Commercial Performance 360 — مشروع نهائي متكامل وقابل للعرض على الإدارة.',
    recordingUrl: '',
    resources: [
      { name: '10_Boardroom_Final_Case.zip', type: 'ZIP', url: '', note: 'البيانات الجديدة + Brief' },
      { name: '10_Final_Submission_Checklist.pdf', type: 'PDF', url: '', note: 'قائمة التحقق النهائية' },
      { name: 'Commercial_Performance_360_FINAL.pbix', type: 'PBIX', url: '', note: 'Trainer Reveal — يضاف بعد التحدي' }
    ]
  }
];

function getDay(id) {
  return DAYS.find(day => day.id === Number(id)) || null;
}

function formatDateAr(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat('ar-JO', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

function dayRuntimeStatus(day, now = new Date()) {
  const target = new Date(`${day.date}T00:00:00`);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (target.getTime() === today.getTime()) return 'today';
  if (target < today) return 'past';
  return 'upcoming';
}
