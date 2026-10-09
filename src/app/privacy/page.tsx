import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "מדיניות פרטיות" };

// TODO: טיוטה. לאשר מול העמותה, ולעדכן כשיתווספו סליקה או טפסים (Phase 2)
export default function PrivacyPage() {
  return (
    <SimplePage title="מדיניות פרטיות">
      <p>
        אנחנו ב{site.name} אוספים כמה שפחות מידע. הנה בדיוק מה קורה כשאתם משתמשים באתר.
      </p>

      <h2>מה נשמר באתר</h2>
      <p>
        האתר עצמו לא שומר פרטים אישיים ולא משתמש בעוגיות (cookies). אנחנו מודדים כניסות באופן אנונימי (Vercel
        Analytics), בלי לזהות אתכם ובלי לעקוב אחריכם באתרים אחרים.
      </p>

      <h2>וואטסאפ</h2>
      <p>
        כשאתם לוחצים על כפתור וואטסאפ, נפתחת אצלכם הודעה מוכנה, ואתם מחליטים אם לשלוח אותה. אם שלחתם, ההודעה ומספר
        הטלפון שלכם מגיעים לעמותה דרך וואטסאפ, ומשמשים רק כדי לחזור אליכם.
      </p>

      <h2>תרומות</h2>
      <p>
        התשלום מתבצע אצל ספק תשלומים חיצוני ומאובטח, או בהעברה ישירה לעמותה. פרטי אשראי לא עוברים דרך האתר שלנו ולא
        נשמרים בו.
      </p>

      <h2>שאלות</h2>
      <p>
        לכל שאלה על פרטיות אפשר לפנות אלינו בטלפון{" "}
        <a href={site.contact.phoneHref} dir="ltr">
          {site.contact.phoneDisplay}
        </a>
        .
      </p>
    </SimplePage>
  );
}
