import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";

export function CFaq() {
  return (
    <section id="faq" aria-labelledby="c-faq-title" className="px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 id="c-faq-title" className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">
          שאלות נפוצות
        </h2>
        <div className="mt-8 border-t border-c-line">
          {site.faq.map((item) => (
            <details key={item.q} className="group border-b border-c-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 text-lg font-semibold transition-colors hover:text-c-teal [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="size-5 shrink-0 text-c-mute transition-transform duration-200 group-open:rotate-180" aria-hidden />
              </summary>
              <p className="max-w-[40rem] pb-6 text-lg leading-relaxed text-c-mute">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
