"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { site } from "@/content/site";
import { formatNumber } from "@/lib/format";
import { useMotionOK } from "@/lib/use-motion-ok";

export function BImpact() {
  const ok = useMotionOK();
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const { children, frameworks, localities } = site.impact;

  return (
    <section aria-label="מה עשינו עד היום" className="on-ink bg-b-deep px-5 py-20 text-white md:py-28">
      <p
        ref={ref}
        className="mx-auto max-w-5xl text-center font-b-display text-[clamp(1.9rem,4.6vw,3.75rem)] leading-[1.25] font-medium"
      >
        מאז {site.foundedYear} הגענו אל <Counter to={children} ok={ok} run={inView} /> ילדים,{" "}
        <span className="whitespace-nowrap">
          ב-
          <Counter to={frameworks} ok={ok} run={inView} />
        </span>{" "}
        מסגרות{" "}
        <span className="whitespace-nowrap">
          וב-
          <Counter to={localities} ok={ok} run={inView} />
        </span>{" "}
        יישובים.
      </p>
    </section>
  );
}

/** מספר שעולה מאפס כשמגיעים אליו. בלי אנימציה (או לפני ה-JS) מוצג המספר הסופי */
function Counter({ to, ok, run }: { to: number; ok: boolean; run: boolean }) {
  const value = useMotionValue(to);
  const text = useTransform(value, (v) => formatNumber(Math.round(v)));

  useEffect(() => {
    if (!ok) {
      value.set(to);
      return;
    }
    if (!run) {
      value.set(0);
      return;
    }
    const controls = animate(value, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [ok, run, to, value]);

  return (
    <span className="relative inline-block whitespace-nowrap text-b-pear tabular-nums">
      <span className="sr-only">{formatNumber(to)}</span>
      {/* רוחב קבוע, כדי שהשורה לא תקפוץ בזמן שהמספר גדל */}
      <motion.span
        aria-hidden
        className="inline-block text-center text-[1.3em] font-semibold"
        style={{ minWidth: `${formatNumber(to).length}ch` }}
      >
        {text}
      </motion.span>
    </span>
  );
}
