import { getPaymentProvider } from "@/lib/payments";
import { SiteFooter } from "@/components/site-footer";
import { StickyDonate } from "@/components/sticky-donate";
import { CHeader } from "@/components/v-c/header";
import { CHero, CHeroPhoto } from "@/components/v-c/hero";
import { CDonateCard } from "@/components/v-c/donate-card";
import { CHow } from "@/components/v-c/how";
import { CTrust } from "@/components/v-c/trust";
import { CStory } from "@/components/v-c/story";
import { CVoice } from "@/components/v-c/voice";
import { CToys } from "@/components/v-c/toys";
import { CFaq } from "@/components/v-c/faq";
import { CClosing } from "@/components/v-c/closing";

/**
 * עיצוב ג "ברור": נקי וממוקד בתרומה.
 * בדסקטופ כרטיס התרומה נשאר דבוק לצד התוכן כל הזמן. בנייד הוא מגיע מיד אחרי הפתיחה.
 */
export default function VersionC() {
  const { ctaLabel, ctaHint } = getPaymentProvider();

  return (
    <>
      <CHeader />
      <main id="main">
        <div className="mx-auto grid max-w-7xl px-5 md:px-8 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-7 lg:row-start-1">
            <CHero />
          </div>
          {/* בנייד הסדר הוא פתיחה, כרטיס, תמונה. בדסקטופ הכרטיס בעמודה משלו לאורך כל התוכן */}
          <aside aria-label="תרומה" className="pt-10 lg:col-span-5 lg:col-start-8 lg:row-span-3 lg:row-start-1 lg:pt-16">
            <div id="donate" className="lg:sticky lg:top-24">
              <CDonateCard ctaLabel={ctaLabel} ctaHint={ctaHint} />
            </div>
          </aside>
          <div className="lg:col-span-7 lg:row-start-2">
            <CHeroPhoto />
          </div>
          <div className="pb-24 lg:col-span-7 lg:row-start-3 lg:pb-32">
            <CHow />
            <CTrust />
            <CStory />
            <CVoice />
          </div>
        </div>
        <CToys />
        <CFaq />
        <CClosing />
      </main>
      <SiteFooter variant="c" />
      <StickyDonate barClassName="border-t border-c-line bg-white/95" buttonClassName="c-btn c-btn-teal" />
    </>
  );
}
