import { Check, X } from "lucide-react";
import { site } from "@/content/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { PhotoFrame } from "@/components/ui/photo";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export function Toys() {
  const { accept, reject, handoff } = site.toys;
  return (
    <section id="toys" aria-labelledby="toys-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="toys-title" className="text-[clamp(2rem,4.4vw,3.25rem)] font-bold">
            יש לכם צעצועים בבית?
          </h2>
          <p className="measure mt-4 text-xl text-ink-soft">
            צעצוע שכבר לא משחקים בו יכול להיות הצעצוע הכי אהוב של מישהו אחר. ככה מוסרים אותו:
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">נשמח לקבל</h3>
              <ul className="mt-4 space-y-3">
                {accept.map((item) => (
                  <li key={item} className="flex gap-3 text-lg">
                    <Check className="mt-1 size-5 shrink-0 text-ink" strokeWidth={2.4} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">לא נוכל לקבל</h3>
              <ul className="mt-4 space-y-3">
                {reject.map((item) => (
                  <li key={item} className="flex gap-3 text-lg">
                    <X className="mt-1 size-5 shrink-0 text-coral-deep" strokeWidth={2.4} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t-2 border-dashed border-ink/25 pt-8">
            <h3 className="text-2xl font-bold">איך מוסרים</h3>
            <p className="measure mt-2 text-lg">{handoff}</p>
            <WhatsappButton message={whatsappMessages.toys} className="btn btn-outline mt-6">
              לתיאום מסירה בוואטסאפ
            </WhatsappButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <PhotoFrame
            photo={site.photos.toys}
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="aspect-[4/5] rounded-[1.25rem] lg:sticky lg:top-28"
          />
        </div>
      </div>
    </section>
  );
}
