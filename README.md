# Power BI Course Experience — X Academy

موقع Vanilla HTML/CSS/JS يجمع:
- Intro / landing page.
- خطة 10 أيام واضحة.
- Student Course Hub.
- صفحة منفصلة لكل Day.
- التسجيلات والملفات لكل يوم.
- تقدم الطالب محفوظ محلياً عبر localStorage.

## التشغيل
افتح `index.html` أو ارفع المجلد كاملاً على GitHub Pages.

## أهم ملف للتحديث اليومي
`data.js`

### 1) إضافة رابط الجلسة المباشرة
داخل `COURSE_CONFIG`:
```js
liveUrl: 'PUT_YOUR_TEAMS_OR_ZOOM_LINK_HERE'
```
إذا تركته فارغاً، الزر سيظهر كـ "رابط الجلسة يضاف قبل الموعد" بدون رابط وهمي.

### 2) تغيير رمز دخول المتدربين
```js
portalPassword: 'PowerBI'
```
> هذا Gate بسيط داخل Front-end وليس نظام Authentication آمن. أي شخص لديه ملفات الموقع يستطيع رؤية الرمز في المصدر. إذا أردت صلاحيات حقيقية نربطه لاحقاً بـ Firebase Authentication.

### 3) إضافة تسجيل يوم
داخل الـDay المطلوب:
```js
recordingUrl: 'YOUR_EMBED_OR_VIDEO_URL'
```

### 4) إضافة رابط ملف
داخل `resources`:
```js
{ name: 'File.pbix', type: 'PBIX', url: 'DOWNLOAD_URL', note: '...' }
```
إذا كان `url` فارغاً سيظهر الملف بوضوح كـ "قيد الإعداد" ولن ينتج رابط مكسور.

## الصفحات
- `index.html` — الصفحة التعريفية + رحلة الأيام العشرة + Power BI preview.
- `login.html` — دخول مركز الدورة.
- `dashboard.html` — الأيام، التقدم، الجلسة القادمة.
- `day.html?id=1` إلى `day.html?id=10` — تفاصيل كل يوم.
- `styles.css` — الهوية البصرية.
- `data.js` — كل محتوى الدورة والروابط.

## الهوية
- Power BI Yellow: `#F2C811`
- X Academy Teal: `#099999`
- Arabic font: Almarai
- Vanilla JS فقط، بدون React/Vue/Angular.


## تنظيم ملفات الدورة

```text
week1/
  day1/
    downloads/
    web/
  day2/
    downloads/
  day3/
    downloads/

week2/
  day4/
  day5/
  day6/

week3/
  day7/
  day8/
  day9/

week4/
  day10/
```

كل يوم يملك مجلده الخاص. ملفات التنزيل توضع داخل `downloads/`، وأي مصدر Web تدريبي يوضع داخل `web/`.
