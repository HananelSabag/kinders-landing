# 05 · Skills וכלים

## ✅ הותקנו (ברמת המשתמש, `~/.claude/skills`, זמינים בכל שיחה)

| Skill | מקור | מתי להשתמש בפרויקט |
|---|---|---|
| `frontend-design` | anthropics/skills (רשמי) | בכל בנייה של UI: כיוון אסתטי והימנעות מתבניות גנריות |
| `impeccable` | pbakaus/impeccable | **`craft`** לבנייה · **`critique` / `audit`** לביקורת · **`polish`** לליטוש · **`quieter`** אם יצא מוגזם · **`animate`** בזהירות |
| `ui-ux-pro-max` | nextlevelbuilder/ui-ux-pro-max-skill | **רפרנס בלבד** (צ'קליסט UX, נגישות). ⚠️ הגופנים שהוא מציע (Inter וכו') **לא תומכים בעברית** |
| `web-design-guidelines` | vercel-labs/agent-skills | בדיקת נגישות ו-UX לפני כל commit משמעותי |
| `vercel-react-best-practices` | vercel-labs/agent-skills | כתיבת קומפוננטות Next/React |
| `webapp-testing` | anthropics/skills | בדיקה בדפדפן אמיתי (Playwright) ב-375px וב-1440px |
| `supabase` + `supabase-postgres-best-practices` | supabase/agent-skills (רשמי) | **Phase 2**: טבלאות, RLS, מיגרציות |

**בדיקת אבטחה שבוצעה:** סקריפטים של `impeccable` פונים רק ל-`localhost`. הסקריפטים של `ui-ux-pro-max` מקומיים (Python). אין קריאות רשת חשודות.

**הערה ל-Windows:** הסקריפטים של `ui-ux-pro-max` כתובים עם `python3`, אבל אצלך רק **`python`** עובד (3.14.3).
```bash
python ~/.claude/skills/ui-ux-pro-max/scripts/search.py "nonprofit landing" --design-system -p "Kinders"
```

### עדכון והסרה
```bash
npx skills update -g
```
```bash
npx skills remove -g -s ui-ux-pro-max -y
```

## ⏸ אופציונלי (לא הותקן: חופף או לא חיוני)

| Skill | למה לא עכשיו | התקנה אם תרצה |
|---|---|---|
| taste-skill (Leonxlnx) | חופף ל-impeccable. שני "מעצבים" שמושכים לכיוונים שונים | `npx skills add Leonxlnx/taste-skill -g -a claude-code --copy` |
| grill-me (mattpocock) | שימושי לסגירת אפיון בשאלות. נחמד, לא חובה | `npx skills add mattpocock/skills -s grill-me -g -a claude-code --copy` |
| AccessLint | בדיקות WCAG נוספות. ‏web-design-guidelines מכסה את רוב העבודה | `/plugin marketplace add accesslint/claude-marketplace` |

## 🛠 כלים במחשב

| כלי | מצב | צריך? |
|---|---|---|
| Node.js 24.13 / npm 11.8 | ✅ מותקן | ✅ |
| Git 2.52 | ✅ מותקן | ✅ |
| GitHub Desktop | ✅ מותקן | ✅ (אפשר לעבוד איתו) |
| Python 3.14 | ✅ מותקן | ל-ui-ux-pro-max |
| GitHub CLI (`gh`) | ❌ | רצוי, כדי ש-Claude יוכל ליצור את ה-repo ולפתוח PR בעצמו |
| Vercel CLI | ❌ | **לא חובה**. חיבור Git ב-Vercel מספיק (כל push = פריסה) |
| Supabase CLI | ❌ | רק ב-Phase 2, ואפשר דרך `npx supabase` בלי התקנה |

**התקנת GitHub CLI** (פעם אחת):
```bash
winget install --id GitHub.cli
```
```bash
gh auth login
```

## 👤 צעדים שרק אתה יכול לעשות
1. **Vercel:** להיכנס ל-vercel.com, ‏Add New → Project, לבחור את ה-repo מ-GitHub ולאשר. מכאן כל push פורס אוטומטית.
2. **GitHub:** ליצור repo בשם `kinders-landing` (ב-GitHub Desktop: File → Add local repository → Publish), או ש-Claude יעשה את זה אחרי התקנת `gh`.
3. **מול העמותה:** להעביר את [04-content-from-nonprofit.md](04-content-from-nonprofit.md).
