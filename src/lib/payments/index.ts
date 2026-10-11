import "server-only";
import { createGrowProvider } from "./providers/grow";
import { createLinkProvider } from "./providers/link";
import { mockProvider } from "./providers/mock";
import { whatsappProvider } from "./providers/whatsapp";
import type { PaymentProvider } from "./types";

/**
 * בוחר את ספק הסליקה לפי PAYMENT_PROVIDER. ה-UI לא יודע איזה ספק פעיל.
 * כדי להוסיף ספק אמיתי: קובץ ב-providers/ שמממש PaymentProvider, ו-case כאן.
 * כל ספק שחסרה לו הגדרה חוזר לוואטסאפ, כדי שכפתור התרומה לא יישבר אף פעם.
 */
export function getPaymentProvider(): PaymentProvider {
  const id = process.env.PAYMENT_PROVIDER ?? "whatsapp";

  switch (id) {
    case "mock":
      return mockProvider;
    case "link": {
      const url = process.env.PAYMENT_LINK_URL;
      if (!url) {
        console.warn("PAYMENT_PROVIDER=link without PAYMENT_LINK_URL. Falling back to WhatsApp.");
        return whatsappProvider;
      }
      return createLinkProvider(url);
    }
    // מוכן בקוד אבל עוד לא פעיל: ראו ההערה בראש providers/grow.ts
    case "grow": {
      const { GROW_API_URL: baseUrl, GROW_USER_ID: userId, GROW_PAGE_CODE: pageCode } = process.env;
      if (!baseUrl || !userId || !pageCode) {
        console.warn("PAYMENT_PROVIDER=grow without GROW_API_URL / GROW_USER_ID / GROW_PAGE_CODE. Falling back to WhatsApp.");
        return whatsappProvider;
      }
      return createGrowProvider({ baseUrl, userId, pageCode });
    }
    case "whatsapp":
      return whatsappProvider;
    default:
      console.warn(`Unknown PAYMENT_PROVIDER "${id}". Falling back to WhatsApp.`);
      return whatsappProvider;
  }
}

export type { CreateDonationInput, DonationFrequency, PaymentProvider } from "./types";
