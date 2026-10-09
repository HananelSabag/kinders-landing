import Image from "next/image";
import { site } from "@/content/site";
import logoTree from "../../../public/brand/logo-tree.png";

/** הסימן של העמותה: עץ הילדים מתוך הלוגו המקורי (רקע שקוף, מתאים לרקע נייר) */
export function Logo({
  tone = "ink",
  nameClassName = "font-display text-2xl font-bold",
}: {
  tone?: "ink" | "paper";
  /** הגופן של שם העמותה. כל עיצוב מעביר את שלו */
  nameClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${tone === "paper" ? "text-paper" : "text-ink"}`}>
      {/* על רקע כהה העץ יושב בתוך עיגול נייר, כמו תמונת הפרופיל בפייסבוק */}
      <span className={tone === "paper" ? "grid size-14 place-items-center rounded-full bg-paper" : "contents"}>
        <Image src={logoTree} alt="" className={tone === "paper" ? "h-11 w-auto" : "h-12 w-auto"} sizes="48px" priority={tone === "ink"} />
      </span>
      <span translate="no" className={`${nameClassName} leading-none`}>
        {site.name}
      </span>
    </span>
  );
}
