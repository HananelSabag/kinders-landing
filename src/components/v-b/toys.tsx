import { Check, X } from "lucide-react";
import { site } from "@/content/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";

function WhatsappLink({ message, children }: { message: string; children: React.ReactNode }) {
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="b-btn b-btn-white">
      <WhatsappIcon className="size-5 shrink-0 text-whatsapp" />
      <span>{children}</span>
      <span className="sr-only">(נפתח בוואטסאפ)</span>
    </a>
  );
}

export function BToys() {
  const { accept, reject, handoff } = site.toys;
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

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-3xl font-semibold">נשמח לקבל</h3>
            <ul className="mt-6 space-y-4">
              {accept.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-xl">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-b-deep text-white">
                    <Check className="size-4" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">לא נוכל לקבל</h3>
            <ul className="mt-6 space-y-4">
              {reject.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-xl">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-b-orange-deep text-white">
                    <X className="size-4" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 rounded-[2rem] bg-white p-7 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="text-3xl font-semibold">איך מוסרים</h3>
            <p className="mt-2 max-w-xl text-xl leading-relaxed text-b-ink/80">{handoff}</p>
          </div>
          <a
            href={whatsappLink(whatsappMessages.toys)}
            target="_blank"
            rel="noopener noreferrer"
            className="b-btn b-btn-ink shrink-0"
          >
            <WhatsappIcon className="size-5 shrink-0 text-whatsapp" />
            <span>לתיאום מסירה בוואטסאפ</span>
            <span className="sr-only">(נפתח בוואטסאפ)</span>
          </a>
        </div>

        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold">{framework.title}</h3>
            <p className="mt-3 max-w-lg text-xl leading-relaxed text-b-ink/80">{framework.text}</p>
            <div className="mt-6">
              <WhatsappLink message={whatsappMessages.framework}>לפנייה בוואטסאפ</WhatsappLink>
            </div>
          </div>
          <div>
            <h3 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold">{volunteer.title}</h3>
            <p className="mt-3 max-w-lg text-xl leading-relaxed text-b-ink/80">{volunteer.text}</p>
            <div className="mt-6">
              <WhatsappLink message={whatsappMessages.volunteer}>להצטרפות בוואטסאפ</WhatsappLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
