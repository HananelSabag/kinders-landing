export type DonationFrequency = "one_time" | "monthly";

export interface CreateDonationInput {
  amountIls: number;
  frequency: DonationFrequency;
  donor?: { name?: string; email?: string; phone?: string };
}

export interface CreateDonationResult {
  /** לאן שולחים את התורם: דף התשלום של הספק, וואטסאפ, או עמוד התודה */
  redirectUrl: string;
  providerRef?: string;
}

/** מה שחוזר מה-webhook של ספק סליקה אמיתי (Phase 2) */
export interface DonationEvent {
  providerRef: string;
  status: "succeeded" | "failed";
  amountIls: number;
  frequency: DonationFrequency;
  receiptUrl?: string;
}

export type PaymentProviderId = "whatsapp" | "mock" | "link" | "grow" | "cardcom" | "morning" | "nedarim";

export interface PaymentProvider {
  id: PaymentProviderId;
  /** הטקסט על כפתור התרומה: אומר בדיוק מה יקרה בלחיצה */
  ctaLabel: string;
  /** שורה קטנה מתחת לכפתור */
  ctaHint: string;
  createDonation(input: CreateDonationInput): Promise<CreateDonationResult>;
  parseWebhook?(req: Request): Promise<DonationEvent>;
}
