import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

/** הודעה לוואטסאפ של העמותה */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.contact.whatsappIntl}?text=${encodeURIComponent(message)}`;
}

/** שיתוף: נפתח וואטסאפ בלי נמען, והמשתמש בוחר למי לשלוח */
export function whatsappShareLink(message: string) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

/** הודעות מוכנות מראש. הן נפתחות בוואטסאפ של התורם, והוא שולח אותן בעצמו */
export const whatsappMessages = {
  toys: `שלום, יש לי צעצועים שאשמח למסור לעמותת ${site.name}. אפשר לתאם?`,
  framework: `שלום, אני ממסגרת לילדים ואשמח לשמוע אם אפשר לקבל צעצועים מעמותת ${site.name}.`,
  volunteer: `שלום, אשמח להתנדב בעמותת ${site.name}.`,
  general: `שלום, אשמח לשמוע עוד על עמותת ${site.name}.`,
} as const;

/** הודעות לשיתוף עם חברים (whatsappShareLink), עם הקישור לאתר */
export const shareMessages = {
  site: `הכרתם את עמותת ${site.name}? הם אוספים צעצועים, מחדשים ועוטפים אותם, ומעניקים אותם לילדים במסגרות חירום: ${siteUrl}`,
  donated: `תרמתי לעמותת ${site.name}: הם אוספים צעצועים, מחדשים ועוטפים אותם, ומעניקים אותם לילדים במסגרות חירום. מצטרפים? ${siteUrl}`,
} as const;
