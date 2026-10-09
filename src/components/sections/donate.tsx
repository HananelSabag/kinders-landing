import { site } from "@/content/site";
import { DonateForm } from "@/components/donate-form";
import { formatIls } from "@/lib/format";

type Props = { ctaLabel: string; ctaHint: string };

export function Donate({ ctaLabel, ctaHint }: Props) {
  return (
    <section id="donate" aria-labelledby="donate-title" className="bg-mustard px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h2 id="donate-title" className="text-[clamp(2rem,4.4vw,3.25rem)] font-bold">
            מה התרומה שלכם עושה
          </h2>
          <p className="measure mt-4 text-xl">
            הצעצועים מגיעים מכם. הכסף משלם על מה שהופך אותם למתנה: חומרי ניקוי, חלקי חילוף, נייר עטיפה, תגיות והובלה.
          </p>

          <dl className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
            {site.donate.amounts.map((a) => (
              <div key={a.value} className="flex items-baseline gap-5 py-4">
                <dt className="w-24 shrink-0 font-display text-2xl font-bold tabular-nums">{formatIls(a.value)}</dt>
                <dd className="text-lg">{a.impact}</dd>
              </div>
            ))}
          </dl>
          {site.isDraft ? <p className="mt-3 text-base">(הסכומים וההסברים לדוגמה)</p> : null}
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-[1.25rem] bg-paper p-6 shadow-[0_24px_40px_-24px_rgb(31_27_22/0.55)] sm:p-10">
            <DonateForm idPrefix="donate" ctaLabel={ctaLabel} ctaHint={ctaHint} />
          </div>
        </div>
      </div>
    </section>
  );
}
