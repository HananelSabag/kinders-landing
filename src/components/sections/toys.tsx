import { MapPin, Package, Truck } from "lucide-react";
import { site } from "@/content/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { PhotoFrame } from "@/components/ui/photo";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

// לפי הסדר של site.toys.ways: מביאים אלינו, נקודות איסוף, איסוף מהבית
const wayIcons = [Package, MapPin, Truck];

export function Toys() {
  const { accept, ways } = site.toys;
  return (
    <section id="toys" aria-labelledby="toys-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="toys-title" className="text-[clamp(2rem,4.4vw,3.25rem)] font-bold">
            יש לכם צעצועים בבית?
          </h2>
          <p className="measure mt-4 text-xl text-ink-soft">
            צעצוע שכבר לא משחקים בו יכול להיות הצעצוע הכי אהוב של מישהו אחר.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-bold">מה מקבלים</h3>
            <p className="measure mt-2 text-xl">{accept}</p>
          </div>

          <div className="mt-10 border-t-2 border-dashed border-ink/25 pt-8">
            <h3 className="text-2xl font-bold">שלוש דרכים למסור</h3>
            <ul className="mt-5 space-y-4">
              {ways.map((way, i) => {
                const Icon = wayIcons[i] ?? Package;
                return (
                  <li key={way.title} className="flex gap-3.5 text-lg">
                    <Icon className="mt-1 size-6 shrink-0 text-ink" strokeWidth={1.8} aria-hidden />
                    <span>
                      <strong className="font-bold">{way.title}.</strong> {way.text}
                    </span>
                  </li>
                );
              })}
            </ul>
            <WhatsappButton message={whatsappMessages.toys} className="btn btn-outline mt-7">
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
