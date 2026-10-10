import { whatsappLink, whatsappShareLink } from "@/lib/whatsapp";
import { WhatsappIcon } from "./whatsapp-icon";

type Props = {
  message: string;
  children: React.ReactNode;
  /** true: שיתוף, המשתמש בוחר למי לשלוח. false (ברירת מחדל): הודעה לעמותה */
  share?: boolean;
  /** המחלקות של הכפתור. ברירת המחדל היא הכפתור של עיצוב א */
  className?: string;
};

export function WhatsappButton({ message, children, share = false, className = "btn btn-outline" }: Props) {
  return (
    <a
      href={share ? whatsappShareLink(message) : whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <WhatsappIcon className="size-5 shrink-0 text-whatsapp" />
      <span>{children}</span>
      <span className="sr-only">(נפתח בוואטסאפ)</span>
    </a>
  );
}
