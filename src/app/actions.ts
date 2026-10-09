"use server";

import { redirect } from "next/navigation";
import { site } from "@/content/site";
import { formatIls } from "@/lib/format";
import { getPaymentProvider, type DonationFrequency } from "@/lib/payments";

export type DonateState = { error?: string };

export async function startDonation(_prev: DonateState, formData: FormData): Promise<DonateState> {
  const choice = formData.get("amount");
  const raw = choice === "other" ? formData.get("amountOther") : choice;
  const amount = Number(String(raw ?? "").replace(/[^\d]/g, ""));
  const { minAmount, maxAmount } = site.donate;

  if (!Number.isInteger(amount) || amount < minAmount || amount > maxAmount) {
    return { error: `אפשר לתרום מ-${formatIls(minAmount)} עד ${formatIls(maxAmount)}. בדקו את הסכום ונסו שוב.` };
  }

  const frequency: DonationFrequency = formData.get("frequency") === "monthly" ? "monthly" : "one_time";
  const { redirectUrl } = await getPaymentProvider().createDonation({ amountIls: amount, frequency });

  redirect(redirectUrl);
}
