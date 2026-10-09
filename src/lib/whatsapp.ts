import { site } from "@/content/site";

export function whatsappLink(message: string) {
  return `https://wa.me/${site.contact.whatsappIntl}?text=${encodeURIComponent(message)}`;
}

/** הודעות מוכנות מראש. הן נפתחות בוואטסאפ של התורם, והוא שולח אותן בעצמו */
export const whatsappMessages = {
  toys: `שלום, יש לי צעצועים שאשמח למסור לעמותת ${site.name}. אפשר לתאם?`,
  framework: `שלום, אני ממסגרת לילדים ואשמח לשמוע אם אפשר לקבל צעצועים מעמותת ${site.name}.`,
  volunteer: `שלום, אשמח להתנדב בעמותת ${site.name}.`,
  general: `שלום, אשמח לשמוע עוד על עמותת ${site.name}.`,
} as const;
