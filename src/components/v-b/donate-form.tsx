"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { site } from "@/content/site";
import { formatIls } from "@/lib/format";
import { donateLabel, useDonation } from "@/lib/use-donation";

type Props = { ctaLabel: string; ctaHint: string };

const { amounts, minAmount, maxAmount } = site.donate;
const spring = { type: "spring", stiffness: 420, damping: 34 } as const;

const frequencies = [
  ["one_time", "חד-פעמית"],
  ["monthly", "כל חודש"],
] as const;

export function BDonateForm({ ctaLabel, ctaHint }: Props) {
  const d = useDonation();
  const errorId = "b-donate-error";

  return (
    // "user": מי שביקש הפחתת תנועה מקבל את אותם מצבים, בלי התנועה
    <MotionConfig reducedMotion="user" transition={spring}>
      <form action={d.formAction} className="flex flex-col gap-7" aria-describedby={d.state.error ? errorId : undefined}>
        <fieldset>
          <legend className="mb-3 font-b-display text-2xl font-semibold">באיזו תדירות?</legend>
          <div className="inline-grid grid-cols-2 rounded-full bg-b-cello p-1.5">
            {frequencies.map(([value, label]) => (
              <label
                key={value}
                className="relative cursor-pointer rounded-full has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-b-ink"
              >
                <input
                  type="radio"
                  name="frequency"
                  value={value}
                  checked={d.frequency === value}
                  onChange={() => d.setFrequency(value)}
                  className="peer sr-only"
                />
                {d.frequency === value ? (
                  <motion.span layoutId="b-frequency" className="absolute inset-0 rounded-full bg-b-ink" />
                ) : null}
                <span className="relative block px-6 py-2.5 text-center text-lg font-medium text-b-ink transition-colors peer-checked:text-white">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 font-b-display text-2xl font-semibold">כמה לתרום?</legend>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {amounts.map((a) => (
              <Amount key={a.value} value={String(a.value)} checked={d.selected === String(a.value)} onSelect={d.setSelected}>
                {formatIls(a.value)}
              </Amount>
            ))}
            <Amount value="other" checked={d.selected === "other"} onSelect={d.setSelected} wide>
              סכום אחר
            </Amount>
          </div>

          {d.selected === "other" ? (
            <div className="mt-4">
              <label htmlFor="b-other" className="mb-1.5 block text-lg font-medium">
                כמה תרצו לתרום? (בשקלים)
              </label>
              <div className="relative max-w-60">
                <span className="pointer-events-none absolute inset-y-0 start-5 grid place-items-center text-lg font-semibold" aria-hidden>
                  ₪
                </span>
                <input
                  id="b-other"
                  name="amountOther"
                  type="number"
                  inputMode="numeric"
                  min={minAmount}
                  max={maxAmount}
                  step={1}
                  required
                  autoFocus
                  autoComplete="off"
                  placeholder="למשל 150…"
                  value={d.other}
                  onChange={(e) => d.setOther(e.target.value)}
                  className="h-14 w-full rounded-full border-2 border-b-ink bg-white ps-11 pe-5 text-xl font-semibold text-b-ink placeholder:font-normal placeholder:text-b-ink/55"
                />
              </div>
            </div>
          ) : null}
        </fieldset>

        {/* מה הסכום עושה */}
        <div className="min-h-[3.4em] text-xl leading-snug" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            {d.impact ? (
              <motion.p
                key={d.selected + d.frequency}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <strong className="font-semibold">
                  {formatIls(Number(d.selected))}
                  {d.frequency === "monthly" ? " בחודש" : ""}
                </strong>{" "}
                = {d.impact}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>

        {d.state.error ? (
          <p id={errorId} role="alert" className="rounded-2xl bg-[#c0262d]/10 px-4 py-3 font-semibold text-[#a3241b]">
            {d.state.error}
          </p>
        ) : null}

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            disabled={d.pending}
            className="flex min-h-16 w-full flex-col items-center justify-center rounded-full bg-b-ink px-6 py-3 text-white shadow-[0_16px_30px_-14px_rgb(29_26_23/0.8)] transition-[background-color,translate,scale] duration-200 hover:-translate-y-0.5 hover:bg-[#3a332c] active:translate-y-0 active:scale-[0.99] disabled:cursor-progress disabled:bg-b-ink/70"
          >
            <span className="font-b-display text-2xl leading-tight font-semibold">
              {d.pending ? "מעבירים אתכם…" : donateLabel(d.amount, d.frequency)}
            </span>
            {d.pending ? null : <span className="text-[0.95rem] text-white/80">{ctaLabel}</span>}
          </button>
          <p className="text-center text-base leading-snug text-b-ink/70">{ctaHint}</p>
        </div>
      </form>
    </MotionConfig>
  );
}

function Amount({
  value,
  checked,
  onSelect,
  wide = false,
  children,
}: {
  value: string;
  checked: boolean;
  onSelect: (v: string) => void;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`relative cursor-pointer rounded-2xl has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-b-ink ${
        wide ? "col-span-2" : ""
      }`}
    >
      <input type="radio" name="amount" value={value} checked={checked} onChange={() => onSelect(value)} className="peer sr-only" />
      <span aria-hidden className="absolute inset-0 rounded-2xl border-2 border-b-ink/15 transition-colors peer-hover:border-b-ink/40" />
      {checked ? <motion.span aria-hidden layoutId="b-amount" className="absolute inset-0 rounded-2xl bg-b-deep" /> : null}
      <span className="relative block px-4 py-4 text-center font-b-display text-2xl font-semibold transition-colors peer-checked:text-white">{children}</span>
    </label>
  );
}
