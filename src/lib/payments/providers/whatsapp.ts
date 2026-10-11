import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { formatIls } from "@/lib/format";
import type { PaymentProvider } from "../types";

/**
 * ברירת המחדל עד שתיפתח סליקה: התורם עובר לוואטסאפ של העמותה עם הודעה מוכנה,
 * והעמותה שולחת לו פרטי העברה בנקאית, כמו שהיא עושה היום (העברה או מזומן, קבלה ידנית).
 */
export const whatsappProvider: PaymentProvider = {
  id: "whatsapp",
  ctaLabel: "להמשך התרומה בוואטסאפ",
  ctaHint: "נשלח לכם את פרטי ההעברה הבנקאית. בקרוב: גם תרומה באשראי, ישר מהאתר.",
  async createDonation({ amountIls, frequency }) {
    const kind = frequency === "monthly" ? "תרומה חודשית" : "תרומה חד-פעמית";
    const message = `שלום, אני רוצה לתרום ${formatIls(amountIls)} לעמותת ${site.name} (${kind}). איך אפשר להעביר?`;
    return { redirectUrl: whatsappLink(message) };
  },
};
