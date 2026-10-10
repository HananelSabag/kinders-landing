"use client";

import { useFormStatus } from "react-dom";
import { site } from "@/content/site";
import { formatIls } from "@/lib/format";
import { useDonation } from "@/lib/use-donation";

type Props = {
  idPrefix: string;
  ctaLabel: string;
  ctaHint: string;
  /** גרסה מקוצרת ל-Hero: בלי בחירת תדירות ובלי הסבר השפעה */
  compact?: boolean;
};

const { amounts, minAmount, maxAmount } = site.donate;

export function DonateForm({ idPrefix, ctaLabel, ctaHint, compact = false }: Props) {
  const { state, formAction, selected, setSelected, frequency, setFrequency, impact } = useDonation();
  const errorId = `${idPrefix}-error`;

  return (
    <form action={formAction} className="flex flex-col gap-5" aria-describedby={state.error ? errorId : undefined}>
      <fieldset>
        <legend className={compact ? "sr-only" : "mb-3 font-display text-xl font-semibold"}>בחרו סכום</legend>
        <div className="flex flex-wrap gap-2.5">
          {amounts.map((a) => (
            <AmountTag
              key={a.value}
              name="amount"
              value={String(a.value)}
              checked={selected === String(a.value)}
              onSelect={setSelected}
            >
              {formatIls(a.value)}
            </AmountTag>
          ))}
          <AmountTag name="amount" value="other" checked={selected === "other"} onSelect={setSelected}>
            סכום אחר
          </AmountTag>
        </div>

        {selected === "other" ? (
          <div className="mt-3">
            <label htmlFor={`${idPrefix}-other`} className="mb-1.5 block text-base font-semibold">
              כמה תרצו לתרום? (בשקלים)
            </label>
            <div className="relative max-w-56">
              <span className="pointer-events-none absolute inset-y-0 start-4 grid place-items-center font-bold" aria-hidden>
                ₪
              </span>
              <input
                id={`${idPrefix}-other`}
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
                className="h-13 w-full rounded-xl border-2 border-ink bg-paper ps-10 pe-4 text-lg font-bold text-ink placeholder:text-ink-soft/70"
              />
            </div>
          </div>
        ) : null}
      </fieldset>

      {compact ? (
        <input type="hidden" name="frequency" value="one_time" />
      ) : (
        <fieldset>
          <legend className="mb-3 font-display text-xl font-semibold">באיזו תדירות?</legend>
          <div className="inline-grid grid-cols-2 rounded-xl bg-ink/8 p-1">
            {(
              [
                ["one_time", "חד-פעמית"],
                ["monthly", "כל חודש"],
              ] as const
            ).map(([value, label]) => (
              <label key={value} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  value={value}
                  checked={frequency === value}
                  onChange={() => setFrequency(value)}
                  className="peer sr-only"
                />
                <span className="block rounded-lg px-5 py-2.5 text-center font-semibold text-ink-soft transition-colors peer-checked:bg-paper peer-checked:text-ink peer-checked:shadow-[0_2px_6px_rgb(31_27_22/0.18)] peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {!compact && impact ? (
        <p className="min-h-[1.7em] text-lg" aria-live="polite">
          <strong className="font-bold">{formatIls(Number(selected))}</strong>
          {frequency === "monthly" ? " בחודש" : ""} = {impact}
        </p>
      ) : null}

      {state.error ? (
        <p id={errorId} role="alert" className="rounded-lg bg-paper px-3 py-2 font-semibold text-coral-deep">
          {state.error}
        </p>
      ) : null}

      <div className="flex flex-col items-start gap-2">
        <SubmitButton label={ctaLabel} />
        <p className="text-[0.95rem] leading-snug text-ink-soft">{ctaHint}</p>
      </div>
    </form>
  );
}

function AmountTag({
  name,
  value,
  checked,
  onSelect,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onSelect: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    // הצל והמסגרת של הפוקוס על ה-label, כי ה-clip-path של התגית חותך כל מה שמחוץ לצורה
    <label className="relative cursor-pointer rounded-md [filter:drop-shadow(0_1px_1.5px_rgb(31_27_22/0.45))] has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-ink">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onSelect(value)}
        className="peer sr-only"
      />
      <span className="mini-tag block bg-white py-2.5 text-lg font-bold text-ink transition-colors hover:bg-paper-deep peer-checked:bg-ink peer-checked:text-paper">
        {children}
      </span>
    </label>
  );
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-ink w-full text-lg sm:w-auto sm:min-w-64">
      {pending ? "מעבירים אתכם…" : label}
    </button>
  );
}
