import { Plus } from "lucide-react";
import { site } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="faq-title" className="text-[clamp(2rem,4.4vw,3.25rem)] font-bold">
            שאלות שחוזרות אלינו
          </h2>
          <div className="mt-8 border-t border-ink/15">
            {site.faq.map((item) => (
              <details key={item.q} className="group border-b border-ink/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 text-xl font-bold transition-colors hover:text-ink-soft [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus className="size-6 shrink-0 transition-transform duration-200 group-open:rotate-45" aria-hidden />
                </summary>
                <p className="measure pb-6 text-lg text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <aside aria-labelledby="transparency-title" className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-[1.25rem] border-2 border-ink p-7">
            <h2 id="transparency-title" className="text-2xl font-bold">
              שקיפות
            </h2>
            <dl className="mt-5 space-y-4 text-lg">
              <div>
                <dt className="text-base text-ink-soft">עמותה רשומה</dt>
                <dd className="font-bold">
                  {site.legalName}, מס׳ <span className="tabular-nums">{site.registrationNumber}</span>
                </dd>
              </div>
              <div>
                <dt className="text-base text-ink-soft">שנת ייסוד</dt>
                <dd className="font-bold tabular-nums">{site.foundedYear}</dd>
              </div>
              <div>
                <dt className="text-base text-ink-soft">פעילות</dt>
                <dd className="font-bold">{site.city} וכל הארץ</dd>
              </div>
            </dl>
            <a
              href={site.contact.guidestar}
              target="_blank"
              rel="noopener noreferrer"
              className="link mt-6 inline-block text-lg font-semibold"
            >
              כל הפרטים על העמותה בגיידסטאר
              <span className="sr-only"> (נפתח בחלון חדש)</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
