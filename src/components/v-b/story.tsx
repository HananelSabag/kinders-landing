"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { site } from "@/content/site";
import { useMotionOK } from "@/lib/use-motion-ok";

/** הסיפור נצבע מילה אחר מילה בזמן הקריאה. בלי תנועה של ממש: רק הדיו שמתמלא */
export function BStory() {
  const ok = useMotionOK();
  const { title, lead, more } = site.story;

  return (
    <section id="story" aria-labelledby="b-story-title" className="on-ink bg-b-deep px-5 py-24 text-white md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <h2 id="b-story-title" className="text-[clamp(2.4rem,6vw,4.5rem)] font-semibold text-b-pear">
          {title}
        </h2>
        <div className="mt-10 space-y-8 font-b-display text-[clamp(1.45rem,3vw,2.1rem)] leading-[1.5] font-normal md:mt-14">
          {[...lead, ...more].map((text) => (
            <Reveal key={text} text={text} ok={ok} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Reveal({ text, ok }: { text: string; ok: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.88", "end 0.5"] });
  const words = text.split(" ");

  return (
    <p ref={ref}>
      {ok
        ? words.map((word, i) => (
            <Word key={i} progress={scrollYProgress} from={i / words.length} to={(i + 1) / words.length}>
              {word}
            </Word>
          ))
        : text}
    </p>
  );
}

function Word({ progress, from, to, children }: { progress: MotionValue<number>; from: number; to: number; children: string }) {
  const opacity = useTransform(progress, [from, to], [0.22, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}
