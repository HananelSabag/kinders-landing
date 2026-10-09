const ils = new Intl.NumberFormat("he-IL", {
  style: "currency",
  currency: "ILS",
  maximumFractionDigits: 0,
});

/** 72 → "‏72 ₪" לפי המוסכמה העברית */
export const formatIls = (amount: number) => ils.format(amount);

const number = new Intl.NumberFormat("he-IL");
export const formatNumber = (n: number) => number.format(n);
