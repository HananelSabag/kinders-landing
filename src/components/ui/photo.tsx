import Image from "next/image";
import { site, type Photo } from "@/content/site";

type Props = {
  photo: Photo;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/** תמונה ממוסגרת. בזמן טיוטה מוצגת עליה תגית "תמונת דוגמה" */
export function PhotoFrame({ photo, sizes, className = "", priority = false }: Props) {
  return (
    <figure className={`relative overflow-hidden bg-paper-deep ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {site.isDraft && photo.wanted ? (
        <figcaption className="absolute bottom-3 start-3 max-w-[85%]">
          <span className="mini-tag inline-block bg-paper/95 py-1 text-xs font-semibold leading-snug text-ink">
            תמונת דוגמה. כאן תבוא: {photo.wanted}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
