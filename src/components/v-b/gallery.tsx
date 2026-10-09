"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { site, type Photo } from "@/content/site";
import { useMotionOK } from "@/lib/use-motion-ok";

const { hero, toys, gallery } = site.photos;
const rowA: Photo[] = [gallery[0], hero, toys, gallery[0]];
const rowB: Photo[] = [gallery[3], gallery[1], gallery[2], gallery[3], gallery[1]];

/** שתי שורות תמונות שזזות לכיוונים מנוגדים בזמן הגלילה */
export function BGallery() {
  const ok = useMotionOK();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const xA = useTransform(scrollYProgress, [0, 1], ["9%", "-9%"]);
  const xB = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);

  return (
    <section ref={ref} aria-labelledby="b-gallery-title" className="overflow-x-clip bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 id="b-gallery-title" className="max-w-[16ch] text-[clamp(2.4rem,6vw,4.5rem)] font-semibold">
          כל צעצוע יוצא עטוף, עם תגית
        </h2>
      </div>

      <div className="mt-12 flex flex-col gap-4 md:mt-16 md:gap-5">
        <motion.ul style={ok ? { x: xA } : undefined} className="flex justify-center gap-4 md:gap-5">
          {rowA.map((photo, i) => (
            <Tile key={i} photo={photo} hidden={i === rowA.length - 1} />
          ))}
        </motion.ul>
        <motion.ul style={ok ? { x: xB } : undefined} className="flex justify-center gap-4 md:gap-5">
          {rowB.map((photo, i) => (
            <Tile key={i} photo={photo} hidden={i >= 3} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

// המידות האמיתיות של הקבצים, כדי שהשורה לא תקפוץ בזמן הטעינה
const dims: Record<string, [number, number]> = {
  "/images/hero-wrapped-toys.jpg": [1870, 805],
  "/images/games-with-tags.jpg": [570, 570],
  "/images/tags-closeup.jpg": [630, 630],
  "/images/blocks-with-tag.jpg": [360, 470],
  "/images/wrapped-bucket.jpg": [470, 498],
  "/images/wrapped-bunny.jpg": [470, 740],
};

/** תמונה שחוזרת רק כדי למלא את השורה מוסתרת מקוראי מסך */
function Tile({ photo, hidden }: { photo: Photo; hidden: boolean }) {
  const [width, height] = dims[photo.src] ?? [600, 600];
  return (
    <li aria-hidden={hidden || undefined} className="relative h-52 shrink-0 overflow-hidden rounded-[1.75rem] bg-b-cello md:h-80">
      <Image
        src={photo.src}
        alt={hidden ? "" : photo.alt}
        width={width}
        height={height}
        sizes="(min-width: 768px) 40vw, 70vw"
        className="h-full w-auto max-w-none object-cover"
      />
    </li>
  );
}
