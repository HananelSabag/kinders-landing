import type { PaymentProvider } from "../types";

/** לפיתוח בלבד: מדמה תשלום שהצליח ומעביר לעמוד התודה */
export const mockProvider: PaymentProvider = {
  id: "mock",
  ctaLabel: "לתרומה",
  ctaHint: "מצב פיתוח: לא יבוצע חיוב",
  async createDonation() {
    return { redirectUrl: "/thank-you", providerRef: `mock_${Date.now()}` };
  },
};
