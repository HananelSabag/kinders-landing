import Image from "next/image";
import { Check, X } from "lucide-react";
import { site } from "@/content/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";

function WhatsappLink({ message, children }: { message: string; children: React.ReactNode }) {
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="c-btn c-btn-line">
      <WhatsappIcon className="size-5 shrink-0 text-whatsapp" />
      <span>{children}</span>
      <span className="sr-only">(נפתח בוואטסאפ)</span>
    </a>
  );
}

export function CToys() {
  const { accept, reject, handoff } = site.toys;
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

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">נשמח לקבל</h3>
              <ul className="mt-4 space-y-2.5">
                {accept.map((item) => (
                  <li key={item} className="flex gap-2.5 text-lg">
                    <Check className="mt-1 size-5 shrink-0 text-c-teal" strokeWidth={2.4} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">לא נוכל לקבל</h3>
              <ul className="mt-4 space-y-2.5">
                {reject.map((item) => (
                  <li key={item} className="flex gap-2.5 text-lg">
                    <X className="mt-1 size-5 shrink-0 text-[#a3341b]" strokeWidth={2.4} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-c-line pt-8">
            <h3 className="text-xl font-bold">איך מוסרים</h3>
            <p className="mt-2 max-w-[36rem] text-lg leading-relaxed">{handoff}</p>
            <div className="mt-5">
              <WhatsappLink message={whatsappMessages.toys}>לתיאום מסירה בוואטסאפ</WhatsappLink>
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
              <WhatsappLink message={whatsappMessages.framework}>לפנייה בוואטסאפ</WhatsappLink>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{volunteer.title}</h3>
            <p className="mt-2 max-w-[32rem] text-lg leading-relaxed text-c-mute">{volunteer.text}</p>
            <div className="mt-5">
              <WhatsappLink message={whatsappMessages.volunteer}>להצטרפות בוואטסאפ</WhatsappLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
