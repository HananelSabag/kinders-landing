import { getPaymentProvider } from "@/lib/payments";
import { SiteFooter } from "@/components/site-footer";
import { StickyDonate } from "@/components/sticky-donate";
import { BHeader } from "@/components/v-b/header";
import { BHero } from "@/components/v-b/hero";
import { BImpact } from "@/components/v-b/impact";
import { BJourney } from "@/components/v-b/journey";
import { BDonate } from "@/components/v-b/donate";
import { BStory } from "@/components/v-b/story";
import { BGallery } from "@/components/v-b/gallery";
import { BToys } from "@/components/v-b/toys";
import { BVoice } from "@/components/v-b/voice";
import { BFaq } from "@/components/v-b/faq";
import { BClosing } from "@/components/v-b/closing";

/** עיצוב ב "המסע": מודרני ומונפש. המסע של צעצוע מהבית ועד הילד, לאורך הגלילה */
export default function VersionB() {
  const { ctaLabel, ctaHint } = getPaymentProvider();

  return (
    <>
      <BHeader />
      <main id="main">
        <BHero />
        <BImpact />
        <BJourney />
        <BDonate ctaLabel={ctaLabel} ctaHint={ctaHint} />
        <BStory />
        <BGallery />
        <BToys />
        <BVoice />
        <BFaq />
        <BClosing />
      </main>
      <SiteFooter variant="b" />
      <StickyDonate barClassName="bg-white/95 shadow-[0_-8px_24px_-12px_rgb(29_26_23/0.3)]" buttonClassName="b-btn b-btn-ink" />
    </>
  );
}
