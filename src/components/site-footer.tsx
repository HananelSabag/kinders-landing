import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { Logo } from "./ui/logo";
import { WhatsappIcon } from "./ui/whatsapp-icon";

export function SiteFooter() {
  return (
    <footer className="on-ink bg-ink px-5 pt-16 pb-28 text-paper md:px-8 md:pb-14">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="paper" />
          <p className="measure mt-4 text-lg text-ink-mute">{site.description}</p>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-display text-xl font-bold">דברו איתנו</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-paper no-underline hover:underline"
              >
                <WhatsappIcon className="size-5 text-whatsapp" />
                וואטסאפ
                <span className="sr-only">(נפתח בוואטסאפ)</span>
              </a>
            </li>
            <li>
              <a href={site.contact.phoneHref} className="inline-flex items-center gap-2.5 text-paper no-underline hover:underline">
                <Phone className="size-5 text-mustard" aria-hidden />
                <span dir="ltr">{site.contact.phoneDisplay}</span>
              </a>
            </li>
            {site.contact.email ? (
              <li>
                <a href={`mailto:${site.contact.email}`} className="text-paper">
                  {site.contact.email}
                </a>
              </li>
            ) : null}
            <li>
              <a href={site.contact.facebook} target="_blank" rel="noopener noreferrer" className="text-paper">
                העמוד שלנו בפייסבוק
                <span className="sr-only"> (נפתח בחלון חדש)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-xl font-bold">מידע</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>
              <Link href="/accessibility" className="text-paper">
                הצהרת נגישות
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-paper">
                מדיניות פרטיות
              </Link>
            </li>
            <li>
              <a href={site.contact.guidestar} target="_blank" rel="noopener noreferrer" className="text-paper">
                העמותה בגיידסטאר
                <span className="sr-only"> (נפתח בחלון חדש)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-7xl border-t border-paper/15 pt-6 text-base text-ink-mute">
        © {site.legalName}, מס׳ עמותה {site.registrationNumber}
      </p>
    </footer>
  );
}
