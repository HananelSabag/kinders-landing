"use client";

import { Check } from "lucide-react";
import { site } from "@/content/site";
import { formatIls } from "@/lib/format";
import { donateLabel, useDonation } from "@/lib/use-donation";

type Props = { ctaLabel: string; ctaHint: string };

const { amounts, minAmount, maxAmount } = site.donate;

const frequencies = [
  ["one_time", "חד-פעמית"],
  ["monthly", "כל חודש"],
] as const;

/** כרטיס התרומה: כל סכום מוצג יחד עם מה שהוא עושה, והכפתור אומר בדיוק כמה */
export function CDonateCard({ ctaLabel, ctaHint }: Props) {
  const d = useDonation();
  const errorId = "c-donate-error";

  return (
    <div className="rounded-2xl bg-c-mist p-5 sm:p-7">
      <h2 className="text-2xl font-bold">תרומה לעמותה</h2>

      <form action={d.formAction} className="mt-5 flex flex-col gap-6" aria-describedby={d.state.error ? errorId : undefined}>
        <fieldset>
          <legend className="sr-only">תדירות התרומה</legend>
          <div className="grid grid-cols-2 gap-1 rounded-xl bg-white p-1 ring-1 ring-c-line">
            {frequencies.map(([value, label]) => (
              <label key={value} className="cursor-pointer rounded-lg has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-c-teal">
                <input
                  type="radio"
                  name="frequency"
                  value={value}
                  checked={d.frequency === value}
                  onChange={() => d.setFrequency(value)}
                  className="peer sr-only"
                />
                <span className="block rounded-lg py-2.5 text-center font-semibold text-c-mute transition-colors peer-checked:bg-c-ink peer-checked:text-white">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 text-lg font-semibold">בחרו סכום</legend>
          <div className="grid grid-cols-2 gap-2.5">
            {amounts.map((a) => (
              <AmountTile
                key={a.value}
                value={String(a.value)}
                checked={d.selected === String(a.value)}
                onSelect={d.setSelected}
                label={formatIls(a.value)}
                note={a.impact}
              />
            ))}
            <AmountTile value="other" checked={d.selected === "other"} onSelect={d.setSelected} label="סכום אחר" wide />
          </div>

          {d.selected === "other" ? (
            <div className="mt-3">
              <label htmlFor="c-other" className="mb-1.5 block font-semibold">
                כמה תרצו לתרום? (בשקלים)
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 start-4 grid place-items-center font-bold" aria-hidden>
                  ₪
                </span>
                <input
                  id="c-other"
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
                  className="h-13 w-full rounded-xl border-[1.5px] border-c-ink bg-white ps-10 pe-4 text-lg font-bold text-c-ink placeholder:font-normal placeholder:text-c-mute"
                />
              </div>
            </div>
          ) : null}
        </fieldset>

        {d.state.error ? (
          <p id={errorId} role="alert" className="rounded-xl bg-white px-4 py-3 font-semibold text-[#a3341b] ring-1 ring-[#a3341b]/30">
            {d.state.error}
          </p>
        ) : null}

        <div>
          <button
            type="submit"
            disabled={d.pending}
            className="c-btn c-btn-teal min-h-15 w-full flex-col gap-0.5 py-2.5"
          >
            <span className="text-xl font-bold">{d.pending ? "מעבירים אתכם…" : donateLabel(d.amount, d.frequency)}</span>
            {d.pending ? null : <span className="text-sm font-normal text-white/85">{ctaLabel}</span>}
          </button>
          <p className="mt-2.5 text-center text-[0.95rem] leading-snug text-c-mute">{ctaHint}</p>
        </div>
      </form>

      <p className="mt-6 border-t border-c-line pt-4 text-[0.95rem] leading-relaxed text-c-mute">
        {site.legalName}, מס׳ עמותה <span className="tabular-nums">{site.registrationNumber}</span>.{" "}
        <a href={site.contact.guidestar} target="_blank" rel="noopener noreferrer" className="font-medium text-c-teal underline underline-offset-4">
          פרטי העמותה בגיידסטאר
          <span className="sr-only"> (נפתח בחלון חדש)</span>
        </a>
      </p>
    </div>
  );
}

function AmountTile({
  value,
  checked,
  onSelect,
  label,
  note,
  wide = false,
}: {
  value: string;
  checked: boolean;
  onSelect: (v: string) => void;
  label: string;
  note?: string;
  wide?: boolean;
}) {
  return (
    <label
      className={`relative cursor-pointer rounded-xl has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-c-teal ${
        wide ? "col-span-2" : ""
      }`}
    >
      <input type="radio" name="amount" value={value} checked={checked} onChange={() => onSelect(value)} className="peer sr-only" />
      <span
        className={`flex h-full flex-col gap-1 rounded-xl border-[1.5px] bg-white px-3.5 py-3 transition-colors peer-checked:border-c-teal peer-checked:bg-c-teal-soft hover:border-c-mute ${
          wide ? "items-center justify-center" : ""
        } border-c-line`}
      >
        <span className="text-xl font-bold">{label}</span>
        {note ? <span className="text-sm leading-snug text-c-mute">{note}</span> : null}
      </span>
      {checked ? (
        <span aria-hidden className="absolute top-2.5 end-2.5 grid size-5 place-items-center rounded-full bg-c-teal text-white">
          <Check className="size-3.5" strokeWidth={3} />
        </span>
      ) : null}
    </label>
  );
}
