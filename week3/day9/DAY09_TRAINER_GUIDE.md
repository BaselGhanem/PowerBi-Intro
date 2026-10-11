# Day 09 — Master the Dashboard
## Trainer Playbook · Nova Business 360 · 120 minutes

**الهدف:** نفس Dashboard تبع Day 7–8، لكن المستخدم يصير يتحكم فيه بسهولة ويفهم معنى كل فلتر وتأثيره

**ما بنشرح:** Drillthrough، اعادة بناء الـModel، اعادة Tooltips أو Drill Down أو Navigation

**قبل المحاضرة (خارج الـ120 دقيقة):** افتح نسخة PBIX الفعلية، تأكد من صفحة BASEL DEMO وصفحات محمود وسمية وهشام وايناس، اعمل نسخة Start ونسخة Rescue Checkpoint، وجهز Power BI Desktop وView > Selection/Bookmarks/Sync slicers. استعمل Fields حقيقية من الموديل، مش أسماء افتراضية. تأكد من وجود 2 صفحات فيها بُعد مشترك قبل Sync Slicers. لا تعطل صفحات الطلاب الحالية.

## 00–05 · Hook — المشكلة
**اعرض:** Dashboard فيها 4 Slicers ظاهرين طول الوقت، واطلب: "لو انا مدير عندي 30 ثانية اشوف اهم رقم، لازم اشوف كل هاي الفلاتر؟"

**احكي:** "اليوم مش موضوعنا نزيد الرسومات، اليوم بنصير نتحكم بشو المستخدم بيشوف، وازاي يوصل للمعلومة بدون دوخة"

**اختبار سريع:** "هل في فرق بين فلتر غير البيانات من المصدر، وفلتر خلاني بس اشوف جزء من البيانات؟"

## 05–17 · Power Query Filtering — قبل الموديل
**احكي:** "هاي التصفية بتشتغل باعداد البيانات، مش فلتر المستخدم بغيره من صفحة التقرير"

**خطوات على نسخة آمنة:** Home > Transform data؛ اختار Query فيه صفوف كافية؛ **Duplicate** للاستعراض؛ على عمود Status/Date موجود فعليا اختار قيمة؛ راقب Applied Steps: Filtered Rows؛ وضح الاختلاف بين M step وبين التقرير؛ ارجع احذف خطوة Filtered Rows، واحذف نسخة الـQuery التجريبية أو Disable load الها قبل Close & Apply.

**التنبيه:** اذا عملنا فلتر PQ على المصدر الرئيسي ونسينا الخطوة، رح تختفي الصفوف من الموديل وقد تتغير كل النتائج؛ ما بنسميه Visual/Page/Report filter.

**اسال:** "بدي اشيل Test Records من بيانات المشروع نهائيا وقت التحميل، وين بعملها؟" (الجواب: Power Query، بعد التأكد من الحاجة ومعنى السجلات)

## 17–28 · Visual / Page / Report Levels
**اعرض:** ثلاث رسومات على BASEL DEMO وصفحة ثانية ترتبط بنفس البعد.

1. اختار Visual واحد، من Filters pane أضف نفس البعد الى **Filters on this visual**؛ اختبر الرسمين الآخرين.
2. انقل نفس البعد الى **Filters on this page**؛ قارن النتائج.
3. اضف بعد مشترك ومرتبط فعليا الى **Filters on all pages**؛ انتقل لصفحة ثانية وتأكد من اثره، ثم امسحه بعد العرض اذا كان يؤثر على تحديات الطلاب.

**احكي:** "الفلتر ما بصير اقوى لانه Report-level، هو بس بوسع نطاق تطبيقه. والـModel لازم يسمح للفلتر يوصل للجداول"

**Checkpoint 1:** كل متدرب يقدر يقول تأثير كل Scope على رسم A ورسم B وصفحة اخرى.

## 28–40 · Advanced Filters + Filter Pane vs Slicer
**طبّق بسرعة على بيانات حقيقية:**
- Basic filtering: اختيار قيمة/قيم.
- Advanced filtering: شرط نصي أو رقمي مناسب لنوع العمود.
- Top N: على Visual للمنتجات/الفروع، باستخدام Measure مناسبة تحت By value ثم Apply filter.
- Relative date: على عمود Date فعلي (مش Date hierarchy) — يتغير بناء على تاريخ المشاهدة، مش بالضرورة آخر شهر في الداتا.
- Slicer مقابل Filter pane: اعمل Date Slicer واحد موجه للمستخدم، وخلي القيود التصميمية/الثابتة بالFilter pane.

**احكي:** "الـSlicer اللي بدي المستخدم يغيره باستمرار بحطه قدامه. مش كل شرط لازم يصير Slicer ويزحم الصفحة"

**تجنب:** Top N على اسم بُعد دون اختيار Measure المناسبة، أو استخدام Relative date بدون التحقق من نطاق البيانات.

## 40–48 · Edit Interactions
**خطوات:** حدّد Slicer على BASEL DEMO > Format > Edit interactions؛ فوق Visualات تظهر Filter / None (وقد يظهر Highlight بحسب نوع الرسم)، اعزل KPI واحد أو Visual مرجعي عن هذا الـSlicer؛ جرّب التغيير؛ ارجع الى Edit interactions للخروج.

**احكي:** "مش كل رسم لازم يتغير مع كل اختيار. بس لازم يكون واضح للمستخدم انه هذا الرقم ثابت ليش"

**Checkpoint 2:** المتدرب يقدر يثبت لماذا تغير رسم ولماذا بقي الثاني ثابت.

## 48–55 · Sync Slicers
**خطوات:** View > Sync slicers؛ حدد Slicer قائم على **نفس الحقل** من Dimension مشترك بين صفحتين؛ فعّل Sync للصفحتين؛ قرر Visible حسب التصميم؛ اختبر اختيار قيمة ثم انتقل بين الصفحتين.

**احكي:** "لو فلتر التاريخ مهم بكل صفحات المشروع، مش منطقي المستخدم يعيده كل مرة — بشرط تكون الصفحات فعلا مرتبطة بنفس التاريخ"

**تنبيه:** اذا Workforce Uses snapshots مختلفة عن Sales ومالي، لا توعد بأن تاريخ واحد رح يعطي نفس معنى الفترة بكل الصفحات بدون فحص الـModel.

## 55–85 · Main Build — Collapsible Filter Panel
**الهدف:** على BASEL DEMO، Panel جانبي يطلع وينخفي بكبسة، بدون ما ترجع خيارات الـSlicers للصفر.

**Step 1 — Design (55–62):** Insert > Shapes > rounded rectangle للخلفية؛ عنوان `FILTERS`؛ ضع Slicer التاريخ وSlicer البعد الاساسي داخله؛ أضف Close button؛ أضف Filter/Open button بمكان ثابت خارج اللوحة. الخلفية تغطي مساحة من Canvas مع بقاء البيانات تحتها. **الـPanel Overlay** يوفر مكان دائم للفلاتر، مش Resize فعلي تلقائي.

**Step 2 — Naming (62–66):** View > Selection؛ أعد تسمية العناصر أسماء محددة: `PANEL_BG`, `PANEL_TITLE`, `PANEL_SLICER_DATE`, `PANEL_SLICER_MAIN`, `BTN_CLOSE`, `BTN_OPEN`. اجمع عناصر اللوحة حسب دعم واجهتك للتجميع؛ أو حددها فرديا.

**Step 3 — Open bookmark (66–72):** خلي عناصر Panel وBTN_CLOSE ظاهرة، وخفي BTN_OPEN. حدّد العناصر المعنية من Selection (Ctrl + select) ثم View > Bookmarks > Add؛ سمي `09_FILTERS_OPEN`. من `...` اختار **Selected visuals**, **Display ON**, **Data OFF**, **Current page OFF**، ثم Update.

**Step 4 — Closed bookmark (72–77):** اخفي عناصر Panel وBTN_CLOSE، واظهر BTN_OPEN؛ بنفس اختيار عناصر الPanel والزرين أضف `09_FILTERS_CLOSED` واستخدم نفس خيارات bookmarks ثم Update.

**Step 5 — Wire buttons (77–81):** حدد BTN_OPEN > Format > Action ON > Type Bookmark > `09_FILTERS_OPEN`. حدد BTN_CLOSE > Action ON > Type Bookmark > `09_FILTERS_CLOSED`.

**Step 6 — Test (81–85):** اختار قيمة غير افتراضية في slicer > اخف Panel > اظهرها > تأكد القيمة والارقام نفسها. في Desktop جرب **Ctrl + Click** للأزرار في وضع التحرير، وفي Reading view كبسة عادية. اذا فلتر رجع للصفر تأكد من **Data OFF**؛ اذا العناصر ما تغيرت تأكد من Selection وDisplay وخيار Update.

**ملاحظة مهمه:** اخفاء Slicer لا يلغي تأثيره على التقرير. لا تعد المتدرب بأن مجرد اخفاء Panel يغير عرض الـVisuals تلقائيا؛ لتحريك/تكبير الرسومات فعليا يلزم تصميم حالتين اضافيتين أو تخطيط Overlay.

**Checkpoint 3:** زر Show/Hide يعمل ذهابا وايابا والفلاتر محفوظة.

## 85–97 · Field Parameters
**خطوات:** Modeling > New parameter > Fields؛ Name = `Analysis By`؛ اختار 2–3 اعمدة تصنيفية **حقيقية** من Model الخاص بصفحة BASEL DEMO، مثلا منطقة / منتج / عميل اذا كانت موجودة؛ فعل Add slicer to this page؛ على Bar chart استبدل محور التصنيف بـ`Analysis By`؛ فعل single select في slicer لتوضيح التجربة؛ جرّب تبديل الحقول.

**احكي:** "بدل ما نكرر 3 رسومات ونضغط الصفحة، رسم واحد بتغير زاوية التحليل تبعته"

**Role choices:** محمود: Region/Product/Customer؛ سمية: Branch/Issue/Status (اذا الحقول مناسبة ومتوفرة)؛ هشام: Branch/Cost Category/Account؛ ايناس: Department/Grade/Employment Category.

## 97–105 · Dynamic Title
**استخدم Measure التالية فقط اذا اسم الـParameter المولد هو Analysis By واسم اعمدته بالشكل الافتراضي:**

```DAX
Adaptive Chart Title =
VAR _choices =
    SUMMARIZE(
        'Analysis By',
        'Analysis By'[Analysis By],
        'Analysis By'[Analysis By Fields]
    )
VAR _label =
    IF(
        COUNTROWS(_choices) = 1,
        MAXX(_choices, 'Analysis By'[Analysis By]),
        "Selected Dimensions"
    )
RETURN
    "Performance by " & _label
```

**ليش SUMMARIZE؟** Field Parameter caption عنده Group By Columns؛ استخدام `SELECTEDVALUE('Analysis By'[Analysis By])` مباشرة ممكن يعطي Composite Key error. احنا بنجمع Caption + Fields مع بعض، بعدين ناخذ النص.

**تطبيق:** اختار الرسم > Format visual > General > Title > Text > fx > Format style: Field value > Based on field: `Adaptive Chart Title` > OK. تأكد تغيير العنوان مع Field Parameter.

**Fallback لو تأخر الوقت:** نفذ Dynamic title يقرأ Slicer عادي مرتبط بDimension واحدة، ولا تدخل بتصحيح DAX الـParameter اثناء المحاضرة كلها.

## 105–110 · Conditional Formatting
اعمل Conditional Formatting بلون واحدة من قيم KPI، مع شرح ان معنى Positive/Negative مرتبط بمنطق المؤشر. لا تساوي تلقائيا اي قيمة موجبة = جيد خصوصا بالFinance. التطبيق optional للمتأخرين.

## 110–120 · QA / Exit Ticket
1. 110–113: غير Slicer وتحقق من تفاعل رسوماتك المقصودة.
2. 113–116: اخف/اظهر الـPanel مرتين وتأكد الفلاتر محفوظة.
3. 116–118: غير Field Parameter وتأكد الـTitle ما يزال صحيح.
4. 118–120: كل واحد يقول بجملة: "مين لازم يشوف هاد التقرير وشو القرار اللي يساعده ياخده؟"

**Mini challenge:** أسألهم: "بدي التقرير كله يكون 2026، لكن رسم المنتجات Top 5، وبدي التاريخ يتغير على صفحتين، وزر يخفي الفلاتر، شو الادوات الأربعة المناسبة؟" جواب متوقع: Report-level filter على بُعد مشترك، Visual Top N، Sync Slicers، Display Bookmark/Panel.

## Safety net / rescue
- خطأ مرحلة Filter: ارجع لاخر Applied Step أو استخدم Duplicate query في التدريب.
- خطأ relationships: لا تصحح model مش ثابت امام الجميع، اشرح السبب وافصل التمرين عن صفحة اخرى.
- Bookmark رجع Filters: تأكد Data OFF، Update، وتكوين Selected visuals.
- زر مش شغال في Desktop edit mode: Ctrl + Click.
- Field parameter title composite key error: استعمل SUMMARIZE على caption وfields، او انتقل لـfallback.
- المتدرب تأخر اكثر من 8 دقائق: يفتح النسخة المرحلية Rescue، يكمل المهارات التالية؛ لا يخسر المحاضرة بسبب مشكلة واحدة.

## Reference docs
- https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-report-add-filter
- https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-bookmarks
- https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-field-parameters
- https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions
- https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers