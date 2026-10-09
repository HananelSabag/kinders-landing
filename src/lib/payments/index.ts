import "server-only";
import { createLinkProvider } from "./providers/link";
import { mockProvider } from "./providers/mock";
import { whatsappProvider } from "./providers/whatsapp";
import type { PaymentProvider } from "./types";

/**
 * בוחר את ספק הסליקה לפי PAYMENT_PROVIDER. ה-UI לא יודע איזה ספק פעיל.
 * כדי להוסיף ספק אמיתי (Phase 2): ליצור providers/grow.ts שמממש PaymentProvider ולהוסיף אותו כאן.
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
    case "whatsapp":
      return whatsappProvider;
    default:
      console.warn(`Unknown PAYMENT_PROVIDER "${id}". Falling back to WhatsApp.`);
      return whatsappProvider;
  }
}

export type { CreateDonationInput, DonationFrequency, PaymentProvider } from "./types";
