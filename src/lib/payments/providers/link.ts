import type { PaymentProvider } from "../types";

/**
 * קישור קבוע לדף תשלום מאובטח של ספק הסליקה (Grow, Cardcom וכו').
 * לא דורש API: מגדירים PAYMENT_LINK_URL ב-Vercel וזהו.
 */
export function createLinkProvider(url: string): PaymentProvider {
  return {
    id: "link",
    ctaLabel: "לתרומה",
    ctaHint: "תועברו לדף תשלום מאובטח: אשראי, Bit, Apple Pay ו-Google Pay",
    async createDonation() {
      return { redirectUrl: url };
    },
  };
}
