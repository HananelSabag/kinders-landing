import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/simple-page";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "תודה על התרומה",
  robots: { index: false },
};

const shareMessage = `תרמתי לעמותת ${site.name}: הם אוספים צעצועים, מחדשים ועוטפים אותם, ומעניקים אותם לילדים במסגרות חירום. מצטרפים?`;

export default function ThankYouPage() {
  return (
    <SimplePage title="תודה. באמת.">
      <p>
        בזכותכם עוד צעצוע יעבור ניקוי, תיקון ועטיפה, ויגיע עם תגית לילד שמחכה לו. הקבלה על התרומה תישלח אליכם
        בקרוב.
      </p>
      <p>רוצים להכפיל את ההשפעה? שתפו חברים שיש להם צעצועים בבית:</p>
      <div className="flex flex-wrap gap-3">
        <WhatsappButton message={shareMessage} variant="mustard">
          שיתוף בוואטסאפ
        </WhatsappButton>
        <Link href="/" className="btn btn-outline">
          חזרה לעמוד הבית
        </Link>
      </div>
    </SimplePage>
  );
}
