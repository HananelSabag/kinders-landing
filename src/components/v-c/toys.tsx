import Image from "next/image";
import { MapPin, Package, Truck } from "lucide-react";
import { site } from "@/content/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

// לפי הסדר של site.toys.ways: מביאים אלינו, נקודות איסוף, איסוף מהבית
const wayIcons = [Package, MapPin, Truck];

export function CToys() {
  const { accept, ways } = site.toys;
  const { framework, volunteer } = site.involved;

  return (
    <section id="toys" aria-labelledby="c-toys-title" className="bg-c-mist px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-x-14">
        <div className="lg:col-span-7">
          <h2 id="c-toys-title" className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">
            יש לכם צעצועים בבית?
          </h2>
          <p className="mt-4 max-w-[36rem] text-xl leading-relaxed text-c-mute">
            צעצוע שכבר לא משחקים בו יכול להיות הצעצוע הכי אהוב של מישהו אחר.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-bold">מה מקבלים</h3>
            <p className="mt-2 text-xl">{accept}</p>
          </div>

          <div className="mt-8 border-t border-c-line pt-8">
            <h3 className="text-xl font-bold">שלוש דרכים למסור</h3>
            <ul className="mt-4 space-y-3.5">
              {ways.map((way, i) => {
                const Icon = wayIcons[i] ?? Package;
                return (
                  <li key={way.title} className="flex gap-3 text-lg">
                    <Icon className="mt-1 size-5 shrink-0 text-c-teal" aria-hidden />
                    <span>
                      <strong className="font-semibold">{way.title}.</strong> {way.text}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <WhatsappButton message={whatsappMessages.toys} className="c-btn c-btn-line">
                לתיאום מסירה בוואטסאפ
              </WhatsappButton>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white lg:aspect-square">
            <Image
              src={site.photos.toys.src}
              alt={site.photos.toys.alt}
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-10 border-t border-c-line pt-12 sm:grid-cols-2 lg:col-span-12">
          <div>
            <h3 className="text-2xl font-bold">{framework.title}</h3>
            <p className="mt-2 max-w-[32rem] text-lg leading-relaxed text-c-mute">{framework.text}</p>
            <div className="mt-5">
              <WhatsappButton message={whatsappMessages.framework} className="c-btn c-btn-line">
                לפנייה בוואטסאפ
              </WhatsappButton>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{volunteer.title}</h3>
            <p className="mt-2 max-w-[32rem] text-lg leading-relaxed text-c-mute">{volunteer.text}</p>
            <div className="mt-5">
              <WhatsappButton message={whatsappMessages.volunteer} className="c-btn c-btn-line">
                להצטרפות בוואטסאפ
              </WhatsappButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
