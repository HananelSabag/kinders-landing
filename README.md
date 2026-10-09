# הקינדרס: דף נחיתה

דף נחיתה לעמותת **הקינדרס (ע"ר) 580798858**: אוספים צעצועים, מחדשים, עוטפים ומעניקים לילדים במסגרות חירום.

**Next.js 16** · **TypeScript** · **Tailwind CSS v4** · פריסה ל-**Vercel**

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
| הסקשנים של הדף | `src/components/sections/` |

## סליקה
כפתור התרומה עובר דרך `src/lib/payments/`, והאתר לא יודע איזה ספק פעיל:
- **`whatsapp`** (ברירת מחדל, עד שתיפתח סליקה): התורם עובר לוואטסאפ של העמותה עם הודעה מוכנה
- **`link`**: דף תשלום קבוע של ספק הסליקה (`PAYMENT_LINK_URL`)
- **`mock`**: לפיתוח
- **Phase 2:** ספק אמיתי (מומלץ Grow) = קובץ חדש ב-`src/lib/payments/providers/` שמממש `PaymentProvider`

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

מסמכי האפיון והמחקר: `docs/`
