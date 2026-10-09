import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { site } from "@/content/site";
import logoFull from "../../../public/brand/logo-full.png";

export function Story() {
  const { title, lead, more } = site.story;
  return (
    <section id="story" aria-labelledby="story-title" className="on-ink bg-ink px-5 py-24 text-paper md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 id="story-title" className="text-[clamp(2rem,4.4vw,3.25rem)] font-bold">
            {title}
          </h2>
          <div className="measure mt-6 space-y-5 text-xl leading-[1.75] text-ink-mute">
            {lead.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <details className="group measure mt-6">
            <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-lg py-1 text-lg font-bold text-mustard [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">ומה זה אומר היום</span>
              <span className="hidden group-open:inline">פחות</span>
              <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <div className="mt-4 space-y-5 text-xl leading-[1.75] text-paper">
              {more.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </details>
        </div>

        {/* הלוגו של העמותה, מודפס על נייר */}
        <figure className="lg:col-span-5 lg:col-start-8">
          <div className="mx-auto max-w-sm rotate-[-2deg] bg-paper px-8 pt-10 pb-8 shadow-[0_24px_40px_-18px_rgb(0_0_0/0.7)]">
            <Image
              src={logoFull}
              alt="הלוגו של עמותת הקינדרס: ילדים קוראים בספרים על עץ אגסים, ומתחתיו סרט עם שם העמותה"
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="h-auto w-full"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
