"use client";

import { useActionState, useState } from "react";
import { startDonation, type DonateState } from "@/app/actions";
import { site } from "@/content/site";
import { formatIls } from "@/lib/format";
import type { DonationFrequency } from "@/lib/payments/types";

const { amounts, defaultAmount } = site.donate;
const initialState: DonateState = {};

/** הלוגיקה של טופס התרומה, משותפת לכל העיצובים. כל עיצוב מצייר אותה אחרת */
export function useDonation() {
  const [state, formAction, pending] = useActionState(startDonation, initialState);
  const [selected, setSelected] = useState<string>(String(defaultAmount));
  const [other, setOther] = useState("");
  const [frequency, setFrequency] = useState<DonationFrequency>("one_time");

  const amount = selected === "other" ? Number(other.replace(/[^\d]/g, "")) || 0 : Number(selected);
  const impact = amounts.find((a) => String(a.value) === selected)?.impact ?? null;

  return { state, formAction, pending, selected, setSelected, other, setOther, frequency, setFrequency, amount, impact };
}

/** "לתרום 72 ₪" / "לתרום 72 ₪ בחודש" */
export function donateLabel(amount: number, frequency: DonationFrequency) {
  if (!amount) return "לתרומה";
  return `לתרום ${formatIls(amount)}${frequency === "monthly" ? " בחודש" : ""}`;
}
