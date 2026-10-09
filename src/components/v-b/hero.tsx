"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion, useMotionTemplate, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
import { site } from "@/content/site";
import { useMotionOK } from "@/lib/use-motion-ok";
import { RealTag } from "@/components/ui/real-tag";

const words = site.tagline.split(" ");

export function BHero() {
  const ok = useMotionOK();
  const { scrollY } = useScroll();

  // החלון של התמונה נפתח לכל הרוחב בגלילה הראשונה
  const open = useTransform(scrollY, [0, 520], [0, 1], { clamp: true });
  const inset = useTransform(open, [0, 1], [7, 0]);
  const radius = useTransform(open, [0, 1], [32, 0]);
  const clipPath = useMotionTemplate`inset(0 ${inset}% round ${radius}px)`;
  const imageScale = useTransform(open, [0, 1], [1.12, 1]);

  // התגית מתנדנדת לפי מהירות הגלילה, כמו תגית אמיתית שתלויה על חוט
  const velocity = useVelocity(scrollY);
  const swing = useSpring(useTransform(velocity, [-2400, 0, 2400], [14, 0, -14], { clamp: true }), {
    stiffness: 140,
    damping: 7,
    mass: 0.7,
  });

  return (
    <section id="top" aria-labelledby="b-hero-title" className="relative overflow-x-clip bg-b-pear pb-16 text-b-ink md:pb-24">
      <div className="mx-auto max-w-7xl px-5 pt-6 md:px-10 md:pt-12">
        <h1
          id="b-hero-title"
          className="max-w-[11ch] text-[clamp(3.5rem,12.5vw,9.75rem)] leading-[0.95] font-semibold tracking-[-0.025em] text-balance"
        >
          {words.map((word, i) => (
            <Fragment key={i}>
              {i > 0 ? " " : null}
              <span className="b-word" style={{ "--i": i } as React.CSSProperties}>
                {word}
              </span>
            </Fragment>
          ))}
        </h1>

        <div className="b-rise mt-8 grid gap-8 md:mt-12 md:grid-cols-12 md:items-end">
          <p className="text-xl leading-relaxed md:col-span-7 md:text-2xl md:leading-relaxed">{site.description}</p>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <a href="#donate" className="b-btn b-btn-ink">
              לתרומה
            </a>
            <a href="#toys" className="b-btn b-btn-ghost">
              יש לי צעצועים למסור
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-12 md:mt-16">
        <motion.div
          style={ok ? { clipPath } : undefined}
          className="relative aspect-[4/3] w-full overflow-hidden [clip-path:inset(0_7%_round_32px)] sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <motion.div style={ok ? { scale: imageScale } : undefined} className="absolute inset-0">
            <Image
              src={site.photos.hero.src}
              alt={site.photos.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* תגית תלויה על החוט, מעל פינת התמונה */}
        <motion.div
          style={ok ? { rotate: swing } : undefined}
          className="absolute -top-14 start-[11%] z-10 flex origin-top flex-col items-center md:-top-20"
        >
          <span aria-hidden className="h-[4.25rem] w-0.5 rounded-full bg-b-ink/80 md:h-24" />
          <RealTag className="-mt-1 text-sm md:text-base" />
        </motion.div>
      </div>
    </section>
  );
}
