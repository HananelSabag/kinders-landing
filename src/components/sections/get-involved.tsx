import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export function GetInvolved() {
  return (
    <section aria-labelledby="involved-title" className="bg-paper-deep px-5 py-20 md:px-8 md:py-24">
      <h2 id="involved-title" className="sr-only">
        עוד דרכים להיות חלק
      </h2>
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <div className="pb-12 md:pe-14 md:pb-0">
          <h3 className="text-[clamp(1.6rem,3vw,2.25rem)] font-bold">מסגרת שזקוקה לצעצועים?</h3>
          <p className="measure mt-3 text-lg text-ink-soft">
            מועדונית, מסגרת חירום או עובדת סוציאלית? ספרו לנו מי הילדים ומה הגילאים, ונכין משלוח מתאים.
          </p>
          <WhatsappButton message={whatsappMessages.framework} className="mt-6">
            לפנייה בוואטסאפ
          </WhatsappButton>
        </div>
        {/* קו "חיתוך" מקווקו בין שני החלקים */}
        <div className="border-t-2 border-dashed border-ink/25 pt-12 md:border-t-0 md:border-s-2 md:ps-14 md:pt-0">
          <h3 className="text-[clamp(1.6rem,3vw,2.25rem)] font-bold">רוצים להתנדב?</h3>
          <p className="measure mt-3 text-lg text-ink-soft">
            מצטרפים לסדנאות ניקוי, תיקון ועטיפה. לא צריך ניסיון, רק ידיים טובות וקצת סבלנות.
          </p>
          <WhatsappButton message={whatsappMessages.volunteer} className="mt-6">
            להצטרפות בוואטסאפ
          </WhatsappButton>
        </div>
      </div>
    </section>
  );
}
