import { Gift, HandHeart, PackageOpen, Wrench, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";

const icons: LucideIcon[] = [PackageOpen, Wrench, Gift, HandHeart];

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="bg-paper-deep px-5 pt-20 pb-24 md:px-8 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <h2 id="how-title" className="text-[clamp(2rem,4.4vw,3.25rem)] font-bold">
          מהבית שלכם, לידיים של ילד
        </h2>
        <p className="measure mt-3 text-xl text-ink-soft">כל צעצוע עובר ארבע תחנות לפני שהוא מגיע לילד חדש.</p>

        {/* החוט: התגיות תלויות עליו לפי הסדר */}
        <ol className="relative mt-14 grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* בנייד: חוט אנכי אחד שעובר דרך החורים של כל התגיות */}
          <span aria-hidden className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-coral sm:hidden" />
          {site.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.title} className="relative px-3 pt-10 sm:px-4">
                <span aria-hidden className="absolute inset-x-0 top-0 hidden h-[3px] rounded-full bg-coral sm:block" />
                <span aria-hidden className="absolute top-0 left-1/2 hidden h-[4.25rem] w-[2px] -translate-x-1/2 bg-coral sm:block" />
                <div className="tag-shadow relative">
                  {/* בנייד: החוט נכנס לחור ויוצא מאחורי התגית */}
                  <div className="tag h-full bg-paper px-6 pt-16 pb-8 [--cut:1.5rem] [--hole-r:0.55rem] [--hole-y:1.75rem]">
                    <div className="flex items-center gap-3">
                      <Icon className="size-8 shrink-0 text-ink" strokeWidth={1.6} aria-hidden />
                      <h3 className="text-2xl font-bold">
                        <span className="sr-only">שלב {i + 1}: </span>
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-soft">{step.text}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
