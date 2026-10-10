import Link from "next/link";
import { Phone, Share2 } from "lucide-react";
import { site } from "@/content/site";
import { shareMessages, whatsappLink, whatsappMessages, whatsappShareLink } from "@/lib/whatsapp";
import { Logo } from "./ui/logo";
import { WhatsappIcon } from "./ui/whatsapp-icon";

// אותו תוכן בכל העיצובים, רק הצבעים והגופן משתנים
const variants = {
  a: { bg: "bg-ink text-paper", mute: "text-ink-mute", accent: "text-mustard", line: "border-paper/15", name: undefined },
  b: { bg: "bg-b-deep text-white", mute: "text-b-sky", accent: "text-b-pear", line: "border-white/15", name: "font-b-display text-2xl font-semibold" },
  c: { bg: "bg-c-ink text-white", mute: "text-c-on-ink", accent: "text-c-tag", line: "border-white/15", name: "font-c-sans text-2xl font-bold" },
} as const;

export function SiteFooter({ variant = "a" }: { variant?: keyof typeof variants }) {
  const v = variants[variant];
  return (
    <footer className={`on-ink ${v.bg} px-5 pt-16 pb-28 md:px-8 md:pb-14`}>
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="paper" nameClassName={v.name} />
          <p className={`measure mt-4 text-lg ${v.mute}`}>{site.description}</p>
          <a
            href={whatsappShareLink(shareMessages.site)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2.5 text-lg font-semibold text-inherit underline underline-offset-4"
          >
            <Share2 className={`size-5 ${v.accent}`} aria-hidden />
            שתפו את העמותה עם חברים
            <span className="sr-only">(נפתח בוואטסאפ)</span>
          </a>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-xl font-bold">דברו איתנו</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-inherit no-underline hover:underline"
              >
                <WhatsappIcon className="size-5 text-whatsapp" />
                וואטסאפ
                <span className="sr-only">(נפתח בוואטסאפ)</span>
              </a>
            </li>
            <li>
              <a href={site.contact.phoneHref} className="inline-flex items-center gap-2.5 text-inherit no-underline hover:underline">
                <Phone className={`size-5 ${v.accent}`} aria-hidden />
                <span dir="ltr">{site.contact.phoneDisplay}</span>
              </a>
            </li>
            {site.contact.email ? (
              <li>
                <a href={`mailto:${site.contact.email}`} className="text-inherit">
                  {site.contact.email}
                </a>
              </li>
            ) : null}
            <li>
              <a href={site.contact.facebook} target="_blank" rel="noopener noreferrer" className="text-inherit">
                העמוד שלנו בפייסבוק
                <span className="sr-only"> (נפתח בחלון חדש)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-xl font-bold">מידע</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>
              <Link href="/accessibility" className="text-inherit">
                הצהרת נגישות
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-inherit">
                מדיניות פרטיות
              </Link>
            </li>
            <li>
              <a href={site.contact.guidestar} target="_blank" rel="noopener noreferrer" className="text-inherit">
                העמותה בגיידסטאר
                <span className="sr-only"> (נפתח בחלון חדש)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className={`mx-auto mt-14 max-w-7xl border-t ${v.line} pt-6 text-base ${v.mute}`}>
        © {site.legalName}, מס׳ עמותה {site.registrationNumber}
      </p>
    </footer>
  );
}
