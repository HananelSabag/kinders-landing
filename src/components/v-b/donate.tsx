import { site } from "@/content/site";
import { BDonateForm } from "./donate-form";

type Props = { ctaLabel: string; ctaHint: string };

export function BDonate({ ctaLabel, ctaHint }: Props) {
  return (
    <section id="donate" aria-labelledby="b-donate-title" className="bg-b-orange px-5 py-20 text-b-ink md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 id="b-donate-title" className="text-[clamp(2.6rem,6.5vw,5rem)] font-semibold">
            תרומה שהופכת צעצוע למתנה
          </h2>
          <p className="mt-6 max-w-lg text-xl leading-relaxed md:text-2xl md:leading-relaxed">{site.donate.intro}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_40px_80px_-40px_rgb(29_26_23/0.55)] sm:p-9">
            <BDonateForm ctaLabel={ctaLabel} ctaHint={ctaHint} />
          </div>
        </div>
      </div>
    </section>
  );
}
