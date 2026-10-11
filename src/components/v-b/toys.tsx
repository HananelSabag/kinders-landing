import { MapPin, Package, Truck } from "lucide-react";
import { site } from "@/content/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

// לפי הסדר של site.toys.ways: מביאים אלינו, נקודות איסוף, איסוף מהבית
const wayIcons = [Package, MapPin, Truck];

export function BToys() {
  const { accept, ways } = site.toys;
  const { framework, volunteer } = site.involved;

  return (
    <section id="toys" aria-labelledby="b-toys-title" className="bg-b-cello px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 id="b-toys-title" className="max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)] font-semibold">
          יש לכם צעצועים בבית?
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-b-ink/80 md:text-2xl md:leading-relaxed">
          צעצוע שכבר לא משחקים בו יכול להיות הצעצוע הכי אהוב של מישהו אחר.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h3 className="text-3xl font-semibold">מה מקבלים</h3>
            <p className="mt-4 font-b-display text-[clamp(1.6rem,3.2vw,2.4rem)] leading-tight font-medium">{accept}</p>
          </div>
          <div className="md:col-span-7">
            <h3 className="text-3xl font-semibold">שלוש דרכים למסור</h3>
            <ul className="mt-6 space-y-5">
              {ways.map((way, i) => {
                const Icon = wayIcons[i] ?? Package;
                return (
                  <li key={way.title} className="flex items-start gap-4 text-xl">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-b-deep text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="pt-1.5">
                      <strong className="font-semibold">{way.title}.</strong> {way.text}
                    </span>
                  </li>
                );
              })}
            </ul>
            <WhatsappButton message={whatsappMessages.toys} className="b-btn b-btn-ink mt-8">
              לתיאום מסירה בוואטסאפ
            </WhatsappButton>
          </div>
        </div>

        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold">{framework.title}</h3>
            <p className="mt-3 max-w-lg text-xl leading-relaxed text-b-ink/80">{framework.text}</p>
            <div className="mt-6">
              <WhatsappButton message={whatsappMessages.framework} className="b-btn b-btn-white">
                לפנייה בוואטסאפ
              </WhatsappButton>
            </div>
          </div>
          <div>
            <h3 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold">{volunteer.title}</h3>
            <p className="mt-3 max-w-lg text-xl leading-relaxed text-b-ink/80">{volunteer.text}</p>
            <div className="mt-6">
              <WhatsappButton message={whatsappMessages.volunteer} className="b-btn b-btn-white">
                להצטרפות בוואטסאפ
              </WhatsappButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
