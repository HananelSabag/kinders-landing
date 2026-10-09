"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { site } from "@/content/site";
import { useMotionOK } from "@/lib/use-motion-ok";
import { RealTag } from "@/components/ui/real-tag";

const photo = site.photos.gallery[0];
const steps = site.steps;

/**
 * הרגע המרכזי של עיצוב ב: צעצוע אחד עובר את ארבע התחנות בזמן שגוללים.
 * אוספים (אפור ועקום) → מחדשים (חוזר לצבע, ברק) → עוטפים (צלופן וסרט) → מעניקים (התגית נתלית).
 * בלי אנימציה, או לפני שה-JS נטען, רואים את התמונה במצב הסופי ואת ארבעת השלבים כרשימה.
 */
export function BJourney() {
  const ok = useMotionOK();
  const renewRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const giveRef = useRef<HTMLDivElement>(null);

  // כל מעבר מתקדם בזמן שהכותרת של השלב עולה מתחתית המסך עד קצת מתחת לאמצע
  const { scrollYProgress: renew } = useScroll({ target: renewRef, offset: ["start end", "start 0.55"] });
  const { scrollYProgress: wrap } = useScroll({ target: wrapRef, offset: ["start end", "start 0.55"] });
  const { scrollYProgress: give } = useScroll({ target: giveRef, offset: ["start end", "start 0.55"] });

  // מחדשים
  const gray = useTransform(renew, [0.15, 1], [1, 0]);
  const sepia = useTransform(renew, [0.15, 1], [0.45, 0]);
  const bright = useTransform(renew, [0.15, 1], [0.88, 1]);
  const filter = useMotionTemplate`grayscale(${gray}) sepia(${sepia}) brightness(${bright})`;
  const tilt = useTransform(renew, [0, 1], [-5, 0]);
  const scale = useTransform(renew, [0, 1], [0.9, 1]);
  const shineX = useTransform(renew, [0.45, 1], ["-120%", "220%"]);

  // עוטפים
  const celloY = useTransform(wrap, [0.05, 0.75], ["-102%", "0%"]);
  const celloOpacity = useTransform(wrap, [0.05, 0.25], [0, 1]);
  const ribbon = useTransform(wrap, [0.5, 0.95], [0, 1]);
  const bow = useSpring(useTransform(wrap, [0.85, 1], [0, 1]), { stiffness: 220, damping: 14 });
  const bowOpacity = useTransform(wrap, [0.84, 0.9], [0, 1]);

  // מעניקים
  const tagY = useTransform(give, [0.1, 0.8], ["-260%", "0%"]);
  const tagOpacity = useTransform(give, [0.1, 0.3], [0, 1]);
  const tagRotate = useSpring(useTransform(give, [0.1, 0.65, 1], [-30, 9, 0]), { stiffness: 110, damping: 9 });

  const [active, setActive] = useState(0);
  const update = () => setActive(give.get() > 0.5 ? 3 : wrap.get() > 0.5 ? 2 : renew.get() > 0.5 ? 1 : 0);
  useMotionValueEvent(renew, "change", update);
  useMotionValueEvent(wrap, "change", update);
  useMotionValueEvent(give, "change", update);
  const current = ok ? active : steps.length - 1;

  const textRefs = [null, renewRef, wrapRef, giveRef];

  return (
    <section id="how" aria-labelledby="b-how-title" className="bg-b-cello">
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-10 md:pt-28">
        <h2 id="b-how-title" className="max-w-[14ch] text-[clamp(2.4rem,6vw,4.75rem)] font-semibold">
          איך צעצוע הופך למתנה
        </h2>
        <p className="mt-4 max-w-xl text-xl text-b-ink/75">ארבע תחנות, מהבית שלכם ועד ילד במסגרת.</p>
      </div>

      <div className="mx-auto grid max-w-7xl px-5 md:grid-cols-12 md:gap-10 md:px-10">
        {/* הבמה: בנייד נדבקת לראש המסך, בדסקטופ לצד הטקסט */}
        <div className="sticky top-0 z-10 -mx-5 bg-b-cello px-5 pt-5 pb-4 md:col-span-6 md:col-start-7 md:row-start-1 md:mx-0 md:flex md:h-svh md:flex-col md:items-center md:justify-center md:self-start md:bg-transparent md:p-0">
          <div className="relative mx-auto aspect-square w-[min(76vw,42svh)] md:w-[min(100%,33rem)]">
            <motion.div
              style={ok ? { rotate: tilt, scale } : undefined}
              className="relative size-full overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_60px_-28px_rgb(23_56_74/0.55)]"
            >
              <motion.div style={ok ? { filter } : undefined} className="absolute inset-0">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 33rem, 76vw" className="object-cover" />
              </motion.div>

              {ok ? (
                <motion.div
                  aria-hidden
                  style={{ x: shineX }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(100deg,transparent_15%,rgb(255_255_255/0.7)_50%,transparent_85%)] mix-blend-soft-light"
                />
              ) : null}

              <motion.div
                aria-hidden
                style={ok ? { y: celloY, opacity: celloOpacity } : { opacity: 0 }}
                className="b-cello pointer-events-none absolute inset-0"
              />

              <svg
                aria-hidden
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 size-full"
                style={ok ? undefined : { opacity: 0 }}
              >
                {/* סרט סאטן: פס אדום ועליו קו אור דק */}
                <motion.path d="M50 -2 V102" stroke="var(--color-b-ribbon)" strokeWidth="3.2" fill="none" style={{ pathLength: ribbon }} />
                <motion.path d="M-2 50 H102" stroke="var(--color-b-ribbon)" strokeWidth="3.2" fill="none" style={{ pathLength: ribbon }} />
                <motion.path d="M49.3 -2 V102" stroke="rgb(255 255 255 / 0.35)" strokeWidth="0.6" fill="none" style={{ pathLength: ribbon }} />
                <motion.path d="M-2 49.3 H102" stroke="rgb(255 255 255 / 0.35)" strokeWidth="0.6" fill="none" style={{ pathLength: ribbon }} />
              </svg>
            </motion.div>

            {/* הפפיון במרכז */}
            <motion.svg
              aria-hidden
              viewBox="0 0 120 84"
              style={ok ? { scale: bow, opacity: bowOpacity } : { opacity: 0 }}
              className="pointer-events-none absolute top-1/2 left-1/2 w-[34%] -translate-x-1/2 -translate-y-[38%] drop-shadow-[0_6px_6px_rgb(0_0_0/0.25)]"
            >
              <path d="M60 38 C 42 6, 6 8, 12 34 C 16 52, 44 50, 60 38 Z" fill="var(--color-b-ribbon)" />
              <path d="M60 38 C 78 6, 114 8, 108 34 C 104 52, 76 50, 60 38 Z" fill="var(--color-b-ribbon)" />
              <path d="M57 40 L 40 80 L 50 76 L 58 82 Z M63 40 L 80 80 L 70 76 L 62 82 Z" fill="#b8322b" />
              <circle cx="60" cy="38" r="8" fill="#b8322b" />
            </motion.svg>

            {/* התגית נתלית */}
            <motion.div
              aria-hidden
              style={ok ? { y: tagY, opacity: tagOpacity, rotate: tagRotate } : undefined}
              className="absolute -top-7 end-[8%] z-10 flex origin-top flex-col items-center"
            >
              <span className="h-12 w-0.5 rounded-full bg-b-ink/80" />
              <RealTag className="-mt-1 text-xs md:text-sm" />
            </motion.div>
          </div>

          {/* איפה אנחנו במסע */}
          <ol aria-hidden className="mx-auto mt-4 flex w-[min(76vw,42svh)] justify-between gap-2 text-sm font-medium md:mt-8 md:w-[min(100%,33rem)] md:text-base">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`flex-1 border-t-[3px] pt-1.5 text-center transition-colors duration-300 ${
                  i <= current ? "border-b-orange text-b-ink" : "border-b-ink/15 text-b-ink/45"
                }`}
              >
                {step.title}
              </li>
            ))}
          </ol>
        </div>

        <ol className="pb-[8svh] md:col-span-5 md:col-start-1 md:row-start-1 md:pb-[10svh]">
          {steps.map((step, i) => (
            <li key={step.title} className="flex min-h-[70svh] items-start md:min-h-svh md:items-center">
              <div ref={textRefs[i]} className="pt-10 md:pt-0">
                <span
                  aria-hidden
                  className="grid size-12 place-items-center rounded-full border-2 border-b-ink font-b-display text-xl font-semibold"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-[clamp(2.4rem,5.5vw,4.25rem)] font-semibold">{step.title}</h3>
                <p className="mt-4 max-w-md text-xl leading-relaxed text-b-ink/80">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
