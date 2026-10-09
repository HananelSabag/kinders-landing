import { whatsappLink } from "@/lib/whatsapp";
import { WhatsappIcon } from "./whatsapp-icon";

type Props = {
  message: string;
  children: React.ReactNode;
  variant?: "outline" | "mustard";
  className?: string;
};

export function WhatsappButton({ message, children, variant = "outline", className = "" }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variant === "mustard" ? "btn-mustard" : "btn-outline"} ${className}`}
    >
      <WhatsappIcon className="size-5 shrink-0 text-whatsapp" />
      <span>{children}</span>
      <span className="sr-only">(נפתח בוואטסאפ)</span>
    </a>
  );
}
