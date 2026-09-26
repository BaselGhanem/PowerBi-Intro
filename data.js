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
    hook: 'أول يوم لك مع Nova: Sales، Workforce، Budget، Web وPDF... البيانات موجودة، لكن القصة موزعة في كل مكان.',
    mission: 'تعرّف على Nova أولاً، ثم ثبّت Power BI Desktop ووصل Excel وCSV وTXT وPDF وWeb لتبدأ أول نسخة من Business Performance 360.',
    topics: ['Nova Company Case', 'Power BI Desktop Installation', 'Get Data', 'Excel / CSV / Text', 'Web Connector', 'PDF Connector', 'ETL Concept', 'Report / Data / Model Views', 'Card & Bar Chart', 'Slicer & Filters'],
    build: ['Open Nova Company Profile and understand the management challenge', 'Install & launch Power BI Desktop', 'Connect Nova Excel, CSV, TXT, PDF and Web sources', 'Understand Extract → Transform → Load', 'Tour the interface only after using it', 'Build Total Revenue Card', 'Build Revenue vs Target by Region', 'Add Channel Slicer and test interactions', 'Save Nova_Business_Performance_360_[Name].pbix'],
    challenge: 'الإدارة لا تريد Chart جميل فقط. ابدأ بالسؤال: أي Region أو Branch يحتاج انتباه أولاً؟',
    deliverable: 'أول نسخة من Nova Business Performance 360 + فهم واضح لـETL وواجهات Power BI الأساسية.',
    resources: [
      { name: 'Meet Nova — Company Profile', type: 'WEB', url: 'week1/day1/web/Nova_Company_Profile.html', note: 'ابدأ من هنا: الشركة، الشعار، المنتجات، نموذج العمل والتحدي الإداري.' },
      { name: 'Day 01 — Nova Source Pack', type: 'ZIP', url: 'week1/day1/downloads/Day01_CONNECT_EVERYTHING.zip', note: 'Nova Product Master + Excel ETL Reference + 120K Sales CSV + Workforce TXT + Budget PDF + Challenge' },
      { name: 'Nova Branch Performance — Web Source', type: 'WEB', url: 'week1/day1/web/Branch_Performance.html', note: '4,000 صف تجمع Sales + Finance + Workforce indicators. استخدم الرابط مباشرة في Get Data > Web.' }
    ]
  },
  {
    id: 2,
    date: '2026-09-22',
    weekday: 'الثلاثاء',
    phase: 'CLEAN',
    title: 'Clean Data Like an Analyst',
    titleAr: 'نظّف البيانات كمحلل',
    hook: 'Nova عندها ملف Branch Daily Performance كبير يبدو مفيداً... لكنه مليان تواريخ مختلطة، Regions غير موحدة، Revenue ناقص، Headcount فيه أخطاء وRows مكررة.',
    mission: 'حوّل ملف Nova Branch Daily Performance غير الموثوق إلى Power Query pipeline نظيفة مع Grain واضح: Branch + Date.',
    topics: ['Power Query Editor', 'Data Types', 'Trim & Clean', 'Replace Values', 'Standardize Categories', 'Nulls', 'Duplicates', 'Errors', 'Applied Steps'],
    build: ['Confirm the intended grain: Branch ID + Date', 'Inspect Nova dirty data before touching it', 'Fix date and numeric data types', 'Trim & clean manager and category fields', 'Standardize Region and Channel labels', 'Handle missing Revenue / Cost / Headcount intentionally', 'Remove only true duplicate rows', 'Review Applied Steps and Refresh'],
    challenge: 'بعد تنظيف Branch Performance، نظّف Nova Customer Master باستخدام الـCleaning Checklist فقط، بدون recipe خطوة بخطوة.',
    deliverable: 'Nova Branch Daily Performance + Customer Master نظيفان، Grain واضح، وقابلان للـRefresh.',
    resources: [
      { name: 'Day 02 — Nova Cleaning Lab', type: 'ZIP', url: 'week1/day2/downloads/Day02_CLEAN_DATA.zip', note: '50K logical Branch-Day rows + intentional bad duplicates + 8K Dirty Customers + Nova Cleaning Checklist' }
    ]
  },
  {
    id: 3,
    date: '2026-09-23',
    weekday: 'الأربعاء',
    phase: 'AUTOMATE',
    title: 'Stop Copying Files',
    titleAr: 'وقف Copy / Paste الشهري',
    hook: 'Nova تستلم ملف Sales جديد كل شهر. January، February، March... وApril بالطريق. هل سنعيد نفس الشغل كل شهر؟',
    mission: 'حوّل نفس Jan–Mar الذي استخدمناه في Day 1 من ملف consolidated إلى Folder pipeline شهرية، ثم Merge مع Masters وأثبت أن April يدخل بالـRefresh فقط.',
    topics: ['Folder Connector', 'Combine Files', 'Append Thinking', 'Merge Queries', 'Expand Columns', 'Reference vs Duplicate', 'Enable Load', 'Query Dependencies', 'Refresh'],
    build: ['Connect to Nova Monthly_Sales folder', 'Combine January–March', 'Keep Source File Name', 'Merge Nova Branch Master', 'Merge Customer Master', 'Merge Product Master', 'Load only the final analytical query', 'Drop April file and Refresh'],
    challenge: 'ابنِ العملية كاملة من Folder إلى Dataset موحد. النجاح الحقيقي: إضافة April بدون Copy/Paste أو تعديل يدوي.',
    deliverable: 'Nova monthly Sales pipeline قابلة للـRefresh وجاهزة للأشهر القادمة، مع Masters موحدة.',
    resources: [
      { name: 'Day 03 — Nova Automation Pack', type: 'ZIP', url: 'week1/day3/downloads/Day03_STOP_COPYING_FILES_LEARNER.zip', note: 'نفس 120K Rows من Day 1، الآن Jan–Mar × 40K + April refresh proof + Branch/Customer/Product Masters' }
    ]
  },
  {
    id: 4,
    date: '2026-09-27',
    weekday: 'الأحد',
    phase: 'MODEL',
    title: 'Model the Business',
    titleAr: 'ابنِ نموذج البيانات',
    hook: 'البيانات صارت نظيفة وتتحدث تلقائياً… لكن الجداول ما زالت تحتاج Model واضح حتى تتكلم مع بعضها بدون أرقام مضللة.',
    mission: 'ثبّت Merge وAppend وFolder باستخدام Excel، ثم حوّل Nova Sales إلى Star Schema واضح: FactSales في الوسط وDimensions حوله.',
    topics: ['Merge vs Append Review', 'Excel Files from Folder', 'Fact vs Dimension', 'Grain', 'Relationships', 'Primary & Foreign Keys', 'One-to-Many', 'Filter Direction', 'Star Schema'],
    build: ['Review Merge = Add Columns', 'Review Append = Add Rows', 'Combine monthly Excel files from Folder and refresh May', 'Load FactSales + DimProduct + DimCustomer + DimBranch + DimDate', 'Define the grain of each table', 'Check unique keys in dimensions', 'Create 1:* relationships', 'Use single filter direction from Dimensions to Fact', 'Arrange the model as a Star Schema', 'Test slicers and confirm filters reach FactSales'],
    challenge: 'ابنِ العلاقات من Relationship Map بدون الاعتماد على Auto Detect، ثم اثبت أن Product وBranch وCustomer وDate كلها تفلتر FactSales بشكل صحيح.',
    deliverable: 'Nova Star Schema نظيف من FactSales + 4 Dimensions، جاهز لبناء Measures في Day 5.',
    visualGuide: {
      image: 'concepts/assets/day4-learner-overview.webp',
      title: 'Day 4 — Learner Visual Guide',
      note: 'ملخص بصري للمتدرب يربط مراجعة Merge وAppend وFolder مع Fact vs Dimension والعلاقات وStar Schema واختبار النموذج.'
    },
    resources: [
      { name: 'Day 04 — Model the Business Lab', type: 'ZIP', url: 'week2/day4/downloads/Day04_MODEL_THE_BUSINESS.zip', note: 'Excel review for Merge / Append / Folder + May refresh proof + Nova Model Lab + relationship checklist' },
      { name: 'Day 04 — Learner Visual Guide', type: 'IMAGE', url: 'concepts/assets/day4-learner-overview.webp', note: 'الصورة المختصرة التي تلخص رحلة Day 4 للمتدرب من المراجعة حتى Star Schema.' },
      { name: 'Day 04 — Process Flow', type: 'FLOW', url: 'concepts/assets/day4-process-flow.svg', note: 'Review → Fact/Dimensions → Relationships → Star Schema → Test Filters → Ready for DAX' },
      { name: 'Day 04 — Concept Studio', type: 'WEB', url: 'concepts/index.html', note: 'Fact vs Dimension + Relationships + Star Schema' }
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
    deliverable: 'Nova Business Performance 360 — مشروع نهائي متكامل وقابل للعرض على الإدارة.',
    resources: [
      { name: '10_Boardroom_Final_Case.zip', type: 'ZIP', url: '', note: 'البيانات الجديدة + Brief' },
      { name: '10_Final_Submission_Checklist.pdf', type: 'PDF', url: '', note: 'قائمة التحقق النهائية' },
      { name: 'Nova_Business_Performance_360_FINAL.pbix', type: 'PBIX', url: '', note: 'Trainer Reveal — يضاف بعد التحدي' }
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
