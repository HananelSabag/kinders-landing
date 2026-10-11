# הקינדרס: דף נחיתה

דף נחיתה לעמותת **הקינדרס (ע"ר) 580798858**: אוספים צעצועים, מחדשים, עוטפים ומעניקים לילדים במסגרות חירום.

**Next.js 16** · **TypeScript** · **Tailwind CSS v4** · פריסה ל-**Vercel**

🌐 **אתר חי:** https://kinders-landing.vercel.app (כל push ל-`main` מתפרס אוטומטית)

🎨 **שלושה עיצובים לבחירה:** [א](https://kinders-landing.vercel.app) · [ב](https://kinders-landing.vercel.app/b) · [ג](https://kinders-landing.vercel.app/c). מעבר ביניהם ב-header ("גרסת דמו"), ובנייד מתוך התפריט ([פירוט](docs/07-versions.md))

## הרצה מקומית
```bash
npm install
```
```bash
npm run dev
```
נפתח ב-http://localhost:3000

## איפה מה
| מה רוצים לשנות | איפה |
|---|---|
| **כל הטקסטים, המספרים, פרטי הקשר והתמונות** | `src/content/site.ts` |
| להחליף תמונת דוגמה בתמונה אמיתית | `public/images/README.md` |
| להוריד את פס "גרסת טיוטה" ולפתוח למנועי חיפוש | `isDraft: false` ב-`site.ts` |
| איך כפתור התרומה עובד | משתנה הסביבה `PAYMENT_PROVIDER` (ראו `.env.example`) |
| צבעים, גופנים ותגיות | `src/app/globals.css` + `DESIGN.md` |
| הסקשנים של הדף | עיצוב א: `src/components/sections/` · ב: `src/components/v-b/` · ג: `src/components/v-c/` |

## סליקה
כפתור התרומה עובר דרך `src/lib/payments/`, והאתר לא יודע איזה ספק פעיל:
- **`whatsapp`** (ברירת מחדל, עד שתיפתח סליקה): התורם עובר לוואטסאפ של העמותה עם הודעה מוכנה
- **`link`**: דף תשלום קבוע של ספק הסליקה (`PAYMENT_LINK_URL`)
- **`mock`**: לפיתוח
- **`grow`**: חיבור מלא ל-Grow. הקוד מוכן אבל לא פעיל ולא נבדק, עד שלעמותה יהיה חשבון ([פירוט](docs/08-payments-grow.md))

## פריסה ל-Vercel (פעם אחת)
1. מעלים את הפרויקט ל-GitHub (GitHub Desktop: File → Add local repository → Publish repository)
2. ב-[vercel.com/new](https://vercel.com/new) בוחרים את ה-repo ולוחצים Deploy. ההגדרות האוטומטיות מתאימות
3. (רשות) Settings → Environment Variables: מגדירים `PAYMENT_PROVIDER` ו-`NEXT_PUBLIC_SITE_URL`
4. מעכשיו כל `git push` = פריסה אוטומטית, וכל branch מקבל קישור תצוגה מקדימה

## לפני שעולים לאוויר
- [ ] כל ה-`TODO` ב-`src/content/site.ts` אושרו מול העמותה
- [ ] כל התמונות אמיתיות (בלי פנים של ילדים)
- [ ] הלוגו האמיתי הוחלף
- [ ] `isDraft: false`
- [ ] הצהרת הנגישות הושלמה (רכז/ת נגישות)
- [ ] דומיין מחובר (מומלץ `kinders.org.il`)

## מסמכים
| קובץ | מה יש בו |
|---|---|
| [`docs/06-technical-guide.md`](docs/06-technical-guide.md) | **איך האתר בנוי:** הטכנולוגיות, React מול Next.js מול Angular, ודוגמאות מהקוד |
| [`DESIGN.md`](DESIGN.md) | מערכת העיצוב: צבעים, גופנים, התגית ומה לא עושים |
| [`docs/03-decisions.md`](docs/03-decisions.md) | כל ההחלטות, עם תאריכים |
| [`docs/02-spec.md`](docs/02-spec.md) | האפיון |
| [`docs/01-research.md`](docs/01-research.md) | המחקר, עם מקורות (העמותה, סליקה, Vercel, נגישות) |
| [`docs/04-content-from-nonprofit.md`](docs/04-content-from-nonprofit.md) | מה צריך מהעמותה. גרסת PDF מעוצבת ב-`docs/pdf/` |
| [`docs/05-skills-and-tools.md`](docs/05-skills-and-tools.md) | ה-Skills והכלים של Claude Code |
| [`docs/07-versions.md`](docs/07-versions.md) | שלושת העיצובים, מה זז בעיצוב ב, ומה מוחקים כשהעמותה בוחרת |
| [`docs/08-payments-grow.md`](docs/08-payments-grow.md) | תרומה באשראי: מה העמותה צריכה כדי לפתוח Grow, מה מוכן בקוד ומה חסר, וקבלות אחרי אישור 46 |

**ליצור את ה-PDF מחדש** אחרי שינוי ב-`docs/pdf/nonprofit-checklist.html` (צריך את Edge שמותקן ב-Windows):
```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --no-pdf-header-footer --virtual-time-budget=15000 --print-to-pdf="docs/pdf/הקינדרס - מה צריך מהעמותה.pdf" "file:///C:/dev/kinders-landing/docs/pdf/nonprofit-checklist.html"
```
