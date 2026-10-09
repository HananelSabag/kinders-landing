import Image from "next/image";
import { BadgeCheck, Gift, MapPin } from "lucide-react";
import { site } from "@/content/site";

export function CHero() {
  const { hero } = site.photos;
  return (
    <section id="top" aria-labelledby="c-hero-title" className="pt-10 lg:pt-16">
      <h1 id="c-hero-title" className="text-[clamp(2.5rem,5.4vw,4.25rem)] leading-[1.08] font-bold">
        {site.tagline}
      </h1>
      <p className="mt-5 max-w-[36rem] text-xl leading-relaxed text-c-mute">{site.description}</p>

      <ul className="mt-7 flex flex-col gap-3 text-[1.0625rem] sm:flex-row sm:flex-wrap sm:gap-x-7">
        <li className="flex items-center gap-2">
          <BadgeCheck className="size-5 shrink-0 text-c-teal" aria-hidden />
          עמותה רשומה, מס׳ <span className="tabular-nums">{site.registrationNumber}</span>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="size-5 shrink-0 text-c-teal" aria-hidden />
          מירושלים ועד עכו
        </li>
        <li className="flex items-center gap-2">
          <Gift className="size-5 shrink-0 text-c-teal" aria-hidden />
          כל צעצוע נעטף ומקבל תגית
        </li>
      </ul>

      <figure className="mt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-c-mist">
          <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
        </div>
        <figcaption className="mt-3 text-[0.95rem] text-c-mute">צעצועים עטופים עם התגית של העמותה, מוכנים למסירה</figcaption>
      </figure>
    </section>
  );
}
