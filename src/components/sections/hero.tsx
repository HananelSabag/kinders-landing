import { site } from "@/content/site";
import { DonateForm } from "@/components/donate-form";
import { PhotoFrame } from "@/components/ui/photo";

type Props = { ctaLabel: string; ctaHint: string };

export function Hero({ ctaLabel, ctaHint }: Props) {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-12 lg:px-8">
        {/* התמונה: בנייד למעלה, בדסקטופ בצד ה"סוף" ומתחת לתגית */}
        <PhotoFrame
          photo={site.photos.hero}
          sizes="(min-width: 1024px) 60vw, 100vw"
          priority
          className="aspect-[4/3] w-full sm:aspect-[16/9] lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:mt-10 lg:aspect-auto lg:h-[min(44rem,calc(100dvh-8rem))] lg:rounded-[1.25rem]"
        />

        {/* התגית התלויה */}
        <div className="relative z-10 -mt-24 px-4 sm:px-8 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:px-0 lg:pt-28">
          <span
            aria-hidden
            className="hang-string absolute top-[-6rem] left-1/2 h-[calc(6rem+2.1rem)] w-[3px] -translate-x-1/2 rounded-full bg-coral lg:top-0 lg:h-[calc(7rem+2.1rem)]"
          />
          <div className="hang-tag tag-shadow">
            <div className="tag px-6 pt-20 pb-8 sm:px-10 sm:pb-10 lg:px-12">
              <h1 id="hero-title" className="text-[clamp(2.4rem,6.2vw,4.25rem)] font-bold text-ink">
                {site.tagline}
              </h1>
              <p className="measure mt-4 text-lg text-ink sm:text-xl">{site.description}</p>
              <div className="mt-7">
                <DonateForm idPrefix="hero" ctaLabel={ctaLabel} ctaHint={ctaHint} compact />
              </div>
              {/* כמו על התגיות האמיתיות שהעמותה מצמידה לכל צעצוע */}
              <p className="mt-8 border-t-2 border-dashed border-ink/25 pt-4 font-display text-xl text-ink/80" aria-hidden>
                {site.tagSignature}
              </p>
            </div>
          </div>
          <p className="mt-6 px-2 text-lg lg:px-0">
            יש לכם צעצועים למסור?{" "}
            <a href="#toys" className="link font-semibold">
              כך מוסרים אותם
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
