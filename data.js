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
    phase: 'DISCOVER',
    title: 'From Chaos to First Insight',
    titleAr: 'من البيانات الخام لأول Insight',
    hook: 'المدير يريد Sales، Target Achievement وأفضل Region. عندك 15 دقيقة.',
    mission: 'ابنِ أول Report بسرعة، ثم افهم كيف يفكر Power BI قبل الدخول في التفاصيل.',
    topics: ['Power BI interface', 'Get Data', 'Report / Data / Model Views', 'Basic Visuals', 'Slicers & Filters', 'Visual Interactions'],
    build: ['Total Sales', 'Sales by Region', 'Monthly Trend', 'Top Products'],
    challenge: 'اختر الـVisual المناسب للإجابة عن 3 أسئلة Business بدون تعليمات خطوة بخطوة.',
    deliverable: 'أول نسخة من Commercial Performance 360 تعمل وتجيب عن أسئلة أساسية.',
    recordingUrl: '',
    resources: [
      { name: '01_Commercial_Performance_360_START.pbix', type: 'PBIX', url: '', note: 'ملف البداية للمشروع' },
      { name: '01_Sales_Raw_Data.xlsx', type: 'Excel', url: '', note: 'البيانات الخام' },
      { name: 'Day 01 — Find the Problem', type: 'Challenge', url: '', note: 'تحدي نهاية اليوم' }
    ]
  },
  {
    id: 2,
    date: '2026-09-22',
    weekday: 'الثلاثاء',
    phase: 'CLEAN',
    title: 'Clean Data Like an Analyst',
    titleAr: 'نظّف البيانات كمحلل',
    hook: 'Revenue فيه Nulls، أسماء Regions غير موحدة، والتواريخ بعضها Text.',
    mission: 'حوّل البيانات الفوضوية إلى Transformation Pipeline يعاد تشغيله تلقائياً.',
    topics: ['Power Query Editor', 'Data Types', 'Trim & Clean', 'Split Column', 'Replace Values', 'Nulls & Errors', 'Conditional Column', 'Applied Steps'],
    build: ['تنظيف Sales Data', 'توحيد Regions', 'إصلاح Dates', 'تهيئة Product Fields'],
    challenge: 'نظّف Customer Master سيئ بناءً على المطلوب Business-wise فقط.',
    deliverable: 'Query نظيفة وقابلة للـRefresh بدل التنظيف اليدوي كل مرة.',
    recordingUrl: '',
    resources: [
      { name: '02_Dirty_Sales_Data.xlsx', type: 'Excel', url: '', note: 'Dataset به أخطاء متعمدة' },
      { name: '02_Customer_Master_Dirty.xlsx', type: 'Excel', url: '', note: 'Challenge Dataset' },
      { name: 'Day 02 — Cleaning Checklist', type: 'Guide', url: '', note: 'مرجع سريع' }
    ]
  },
  {
    id: 3,
    date: '2026-09-23',
    weekday: 'الأربعاء',
    phase: 'AUTOMATE',
    title: 'Stop Copying Files',
    titleAr: 'خلّصنا من Copy / Paste الشهري',
    hook: 'كل شهر يصل ملف Sales جديد. هل ستعيد نفس الشغل للأبد؟',
    mission: 'ابنِ تدفق بيانات يتوسع مع كل ملف جديد بدون إعادة بناء التقرير.',
    topics: ['Folder Connection', 'Combine Files', 'Append Queries', 'Merge Queries', 'Reference vs Duplicate', 'Query Dependencies', 'Refresh'],
    build: ['Monthly Sales Folder', 'Customer Merge', 'Product Merge', 'Refresh Pipeline'],
    challenge: 'Sales Files + Customer Master + Product Master → Dataset موحد.',
    deliverable: 'إضافة ملف شهر جديد ثم Refresh وظهوره في التقرير تلقائياً.',
    recordingUrl: '',
    resources: [
      { name: '03_Monthly_Sales_Folder.zip', type: 'ZIP', url: '', note: 'ملفات الأشهر للتجميع' },
      { name: '03_Customer_Master.xlsx', type: 'Excel', url: '', note: 'Master Data' },
      { name: '03_Product_Master.xlsx', type: 'Excel', url: '', note: 'Master Data' }
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
