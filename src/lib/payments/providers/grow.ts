import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import type { PaymentProvider } from "../types";

/**
 * Grow (משולם): יוצרים "תהליך תשלום" ומעבירים את התורם לדף המאובטח של Grow.
 *
 * ⚠️ עדיין לא פעיל ולא נבדק מול Sandbox, כי לעמותה אין עדיין חשבון ב-Grow.
 * נכתב לפי התיעוד הרשמי (developers.grow.business, createPaymentProcess).
 * מה חסר לפני שמדליקים (הפירוט ב-docs/08-payments-grow.md):
 *  1. userId ו-pageCode מ-Grow, ופרטי Sandbox לבדיקה מקצה לקצה
 *  2. שם מלא וטלפון בטופס התרומה: Grow מחייב אותם
 *  3. notifyUrl + approveTransaction, כדי לדעת בשרת שהתרומה עברה
 *  4. תרומה חודשית (הוראת קבע) עובדת בדף חיוב אחר. עד אז רק חד-פעמית
 */
export type GrowConfig = {
  /** Sandbox: https://sandbox.meshulam.co.il · את כתובת הייצור נותנים ב-Grow */
  baseUrl: string;
  userId: string;
  pageCode: string;
};

type GrowResponse = {
  status: 0 | 1;
  err: "" | { id: number; message: string };
  data: "" | { processId: string; processToken: string; url: string };
};

export function createGrowProvider(config: GrowConfig): PaymentProvider {
  return {
    id: "grow",
    ctaLabel: "לתשלום מאובטח",
    ctaHint: "אשראי או Bit, בדף מאובטח של Grow",
    requiresDonor: true,

    async createDonation({ amountIls, donor }) {
      if (!donor?.name || !donor.phone) {
        throw new Error("Grow requires the donor's full name and phone");
      }

      // Grow מקבל multipart/form-data ולא JSON, ורק מהשרת
      const body = new FormData();
      body.set("pageCode", config.pageCode);
      body.set("userId", config.userId);
      body.set("sum", String(amountIls));
      body.set("description", `תרומה לעמותת ${site.name}`);
      body.set("successUrl", `${siteUrl}/thank-you`);
      body.set("cancelUrl", `${siteUrl}/#donate`);
      body.set("pageField[fullName]", donor.name);
      body.set("pageField[phone]", donor.phone);
      if (donor.email) body.set("pageField[email]", donor.email);

      const res = await fetch(`${config.baseUrl}/api/light/server/1.0/createPaymentProcess`, { method: "POST", body });
      const json = (await res.json()) as GrowResponse;

      if (json.status !== 1 || json.data === "") {
        const reason = json.err === "" ? `HTTP ${res.status}` : `${json.err.id}: ${json.err.message}`;
        throw new Error(`Grow createPaymentProcess failed (${reason})`);
      }

      // processId לא מוצג לתורם. הקישור תקף ל-10 דקות
      return { redirectUrl: json.data.url, providerRef: json.data.processId };
    },
  };
}
