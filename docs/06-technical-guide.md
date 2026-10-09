# 06 · מדריך טכני: מה בנינו ואיך זה עובד

## 1. התמונה הגדולה: מה קורה כשמישהו פותח את האתר

```
 טלפון של תורם                Vercel (השרת)                     GitHub
 ─────────────                 ─────────────                     ──────
 נכנס לקישור  ───────────────▶ מחזיר HTML מוכן מראש  ◀── build ── git push שלך
                               (נבנה פעם אחת, לא בכל כניסה)
 רואה את הדף מיד
 בוחר סכום ולוחץ ────────────▶ Server Action: בודק את הסכום,
                               שואל את "ספק התשלום" לאן לשלוח
 עובר לוואטסאפ ◀────────────── redirect לכתובת שהספק החזיר
```

הדף **נבנה מראש** (Static). רוב האתר הוא HTML ו-CSS, ורק החלקים שבאמת מגיבים ללחיצות (טופס התרומה, תפריט הנייד, הכפתור הצף) שולחים JavaScript לדפדפן. בגלל זה הוא מהיר גם בטלפון ישן.

---

## 2. הטכנולוגיות: מי עושה מה

| שכבה | הכלי | התפקיד שלו כאן |
|---|---|---|
| שפה | **TypeScript** | JavaScript עם טיפוסים. אם מעבירים לרכיב משהו לא נכון, השגיאה מופיעה בזמן כתיבה ולא באתר החי |
| ספריית UI | **React** | מחלקת את הדף לרכיבים (`<Hero />`, `<DonateForm />`), כל אחד אחראי על חלק אחד |
| פריימוורק | **Next.js 16** | בונה מעל React את כל השאר: ניתוב, שרת, בנייה מראש, אופטימיזציית תמונות וגופנים |
| עיצוב | **Tailwind CSS v4** | מעצבים עם מחלקות קטנות ישר ב-HTML (`px-5 text-xl`), והצבעים מוגדרים במקום אחד |
| אייקונים | **lucide-react** | אייקונים בקו אחיד (✓, ✗, מתנה, מפתח ברגים) |
| תמונות | **next/image + sharp** | מקטין, דוחס וממיר לפורמט מודרני לפי גודל המסך |
| אחסון | **Vercel** | מארח ובונה את האתר מחדש בכל `git push` |
| קוד | **Git + GitHub** | היסטוריית שינויים וגיבוי (repo פרטי) |

### React, Next.js ו-Angular: מה ההבדל?

| | **React** | **Next.js** | **Angular** |
|---|---|---|---|
| מה זה | **ספרייה** לבניית ממשק מרכיבים | **פריימוורק** שעוטף את React | **פריימוורק** מלא ונפרד (של Google) |
| מה הוא נותן | רק את הרכיבים ואת העדכון שלהם על המסך | React + שרת, ניתוב לפי תיקיות, בנייה מראש, SEO, תמונות ו-API | הכול בפנים: רכיבים, ניתוב, טפסים, HTTP, הזרקת תלויות |
| איך כותבים | JSX (HTML בתוך JS) | JSX, וקובץ בתיקייה הופך לעמוד | TypeScript + תבניות HTML נפרדות + decorators |
| מתאים ל | ממשקים שרצים בדפדפן | **אתרים ואפליקציות שצריכים להיטען מהר ולהופיע בגוגל** | אפליקציות ארגוניות גדולות עם צוותים גדולים |

**הקבלה לעולם האנדרואיד שאתה מכיר:** React ≈ ‏Jetpack Compose (פונקציות שמחזירות UI). ‏Next.js ≈ ‏Compose יחד עם Navigation, ‏ViewModel וחיבור לשרת, הכול מאורגן מראש. ‏Angular ≈ ‏ארכיטקטורה מלאה ומחייבת, כמו Android עם Dagger ו-MVVM כחובה.

**למה Next ולא React לבד:** לדף נחיתה של עמותה חשוב שייטען מהר בטלפון ושייראה טוב כשמשתפים אותו בוואטסאפ. React לבד בונה את הדף בדפדפן, אחרי הורדת JS. ‏Next.js שולח HTML מוכן.

---

## 3. מפת הפרויקט

```
src/
├─ app/                      ← כל תיקייה כאן = כתובת באתר (ניתוב לפי קבצים)
│  ├─ layout.tsx             ← המעטפת של כל עמוד: עברית RTL, גופנים, SEO
│  ├─ page.tsx               ← עמוד הבית: מרכיב את כל הסקשנים לפי הסדר
│  ├─ actions.ts             ← Server Action: מה קורה כשלוחצים "לתרומה"
│  ├─ accessibility/page.tsx ← /accessibility
│  ├─ privacy/page.tsx       ← /privacy
│  ├─ thank-you/page.tsx     ← /thank-you
│  ├─ opengraph-image.tsx    ← מייצר את התמונה שמופיעה כשמשתפים קישור
│  └─ globals.css            ← צבעים, גופנים, צורת התגית, אנימציה
├─ components/
│  ├─ sections/              ← סקשן לכל חלק בדף (hero, donate, toys...)
│  └─ ui/                    ← רכיבים קטנים לשימוש חוזר (לוגו, תמונה, כפתור וואטסאפ)
├─ content/site.ts           ← ⭐ כל הטקסטים, המספרים, התמונות ופרטי הקשר
└─ lib/
   ├─ payments/              ← שכבת התשלום: ממשק אחד, ספקים מתחלפים
   ├─ whatsapp.ts            ← בונה קישורי wa.me עם הודעה מוכנה
   └─ format.ts              ← פורמט שקלים ומספרים בעברית
```

---

## 4. ארבע דוגמאות מהקוד

### א. כל התוכן במקום אחד: `src/content/site.ts`
העיצוב לא "יודע" מה כתוב בו. כדי לשנות טקסט, מספר או תמונה, משנים רק פה:
```ts
export const site = {
  isDraft: true,                       // false = מוריד את פס הטיוטה ופותח לגוגל
  tagline: "כל ילד ראוי לצעצוע משלו",
  impact: { toys: 1240, frameworks: 27 },   // TODO: מספרים אמיתיים
  donate: {
    amounts: [
      { value: 36, impact: "ניקוי וחידוש של שלושה צעצועים" },
      // ...
```

### ב. רכיב שרת מול רכיב לקוח
רוב הרכיבים רצים **רק בשרת** בזמן הבנייה, ולדפדפן מגיע HTML בלבד:
```tsx
// src/components/sections/impact.tsx: אין כאן JavaScript שמגיע לדפדפן
export function Impact() {
  const { toys, frameworks } = site.impact;
  return <p>מאז {site.foundedYear} יצאו מאיתנו {fmt(toys)} צעצועים עטופים...</p>;
}
```
רכיב שצריך להגיב ללחיצות מסומן ב-`"use client"`, ורק הוא נשלח לדפדפן:
```tsx
// src/components/donate-form.tsx
"use client";
export function DonateForm({ ctaLabel, ... }) {
  const [selected, setSelected] = useState("72");       // הסכום שנבחר (state, כמו ב-Compose)
  const [state, formAction] = useActionState(startDonation, {});
  return <form action={formAction}> ... </form>;
}
```

### ג. התרומה: ממשק אחד, ספקים מתחלפים
זה "המקום שהשארנו בקוד" לסליקה. ה-UI מדבר רק עם הממשק:
```ts
// src/lib/payments/types.ts
export interface PaymentProvider {
  ctaLabel: string;                                   // מה כתוב על הכפתור
  createDonation(input): Promise<{ redirectUrl: string }>;  // לאן שולחים את התורם
}
```
היום הספק הוא וואטסאפ:
```ts
// src/lib/payments/providers/whatsapp.ts
async createDonation({ amountIls, frequency }) {
  const message = `שלום, אני רוצה לתרום ${formatIls(amountIls)} לעמותת ${site.name}...`;
  return { redirectUrl: whatsappLink(message) };
}
```
והפעולה בשרת לא יודעת ולא אכפת לה איזה ספק פעיל:
```ts
// src/app/actions.ts
"use server";
export async function startDonation(_prev, formData) {
  const amount = Number(formData.get("amount"));
  if (amount < 10 || amount > 50000) return { error: "בדקו את הסכום" };   // בדיקה בשרת, לא רק בדפדפן
  const { redirectUrl } = await getPaymentProvider().createDonation({ amountIls: amount, ... });
  redirect(redirectUrl);
}
```
**כשתהיה סליקה:** כותבים `providers/grow.ts` שמממש את אותו ממשק ומשנים משתנה אחד ב-Vercel (`PAYMENT_PROVIDER=grow`). העיצוב, הטופס והכפתורים לא משתנים.

### ד. התגית: CSS בלבד, בלי תמונה
```css
/* src/app/globals.css */
.tag {
  background: var(--color-mustard);
  clip-path: polygon(...);   /* חותך את הפינות העליונות לצורת תגית */
  mask: radial-gradient(circle at 50% 2.1rem, transparent 0.7rem, #000 0.7rem);  /* חור אמיתי ושקוף */
}
@media (prefers-reduced-motion: no-preference) {
  .hang-tag { animation: tag-swing 1500ms var(--ease-out-expo); }   /* מתנדנדת רק אם המשתמש לא ביקש להפחית תנועה */
}
```

---

## 5. שינויים נפוצים: איפה עושים מה

| רוצה ל... | עושים |
|---|---|
| לשנות טקסט, מספר או מספר טלפון | `src/content/site.ts` |
| להחליף תמונה | שמים קובץ ב-`public/images/` ומעדכנים את `src` ב-`site.ts` |
| להוריד את פס הטיוטה | `isDraft: false` ב-`site.ts` |
| לשנות צבע | `src/app/globals.css` בתוך `@theme` |
| לחבר סליקה | ספק חדש ב-`src/lib/payments/providers/` + `PAYMENT_PROVIDER` ב-Vercel |
| לעלות לאוויר | `git push`. ‏Vercel בונה ומעלה לבד תוך דקה |

## 6. פקודות

| פקודה | מה היא עושה |
|---|---|
| `npm run dev` | מריץ את האתר במחשב ב-http://localhost:3000, ומתעדכן בכל שמירה |
| `npm run build` | בונה כמו ב-Vercel. אם עובר כאן, יעבור גם שם |
| `npm run lint` | בודק את הקוד לטעויות נפוצות |
| `git push` | מעלה ל-GitHub, ו-Vercel מעלה לאוויר |
