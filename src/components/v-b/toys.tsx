import { Check, X } from "lucide-react";
import { site } from "@/content/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

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
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#a3241b] text-white">
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
          <WhatsappButton message={whatsappMessages.toys} className="b-btn b-btn-ink shrink-0">
            לתיאום מסירה בוואטסאפ
          </WhatsappButton>
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
