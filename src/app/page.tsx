import { getPaymentProvider } from "@/lib/payments";
import { DraftBanner } from "@/components/draft-banner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyDonate } from "@/components/sticky-donate";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Story } from "@/components/sections/story";
import { Donate } from "@/components/sections/donate";
import { Toys } from "@/components/sections/toys";
import { GetInvolved } from "@/components/sections/get-involved";
import { Gallery } from "@/components/sections/gallery";
import { Voice } from "@/components/sections/voice";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  const { ctaLabel, ctaHint } = getPaymentProvider();

  return (
    <>
      <DraftBanner />
      <SiteHeader />
      <main id="main">
        <Hero ctaLabel={ctaLabel} ctaHint={ctaHint} />
        <Impact />
        <HowItWorks />
        <Story />
        <Donate ctaLabel={ctaLabel} ctaHint={ctaHint} />
        <Toys />
        <GetInvolved />
        <Gallery />
        <Voice />
        <Faq />
      </main>
      <SiteFooter />
      <StickyDonate />
    </>
  );
}
