import { Plus } from "lucide-react";
import { site } from "@/content/site";

export function BFaq() {
  return (
    <section id="faq" aria-labelledby="b-faq-title" className="b-faq bg-white px-5 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="b-faq-title" className="text-[clamp(2.4rem,5vw,3.75rem)] font-semibold">
            שאלות שחוזרות אלינו
          </h2>
          <p className="mt-5 text-lg text-b-ink/75">
            {site.legalName}, מס׳ עמותה <span className="tabular-nums">{site.registrationNumber}</span>.{" "}
            <a href={site.contact.guidestar} target="_blank" rel="noopener noreferrer" className="font-medium text-b-orange-deep underline underline-offset-4">
              כל הפרטים בגיידסטאר
              <span className="sr-only"> (נפתח בחלון חדש)</span>
            </a>
          </p>
        </div>

        <div className="space-y-3 lg:col-span-8">
          {site.faq.map((item) => (
            <details key={item.q} className="group rounded-[1.5rem] bg-b-cello px-6 open:bg-b-pear/60 md:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-[1.5rem] py-5 font-b-display text-xl font-medium md:text-2xl [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white transition-transform duration-300 group-open:rotate-45">
                  <Plus className="size-5" aria-hidden />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-lg leading-relaxed text-b-ink/85">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
