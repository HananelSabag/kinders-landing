"use client";

import Image from "next/image";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { site } from "@/content/site";
import logoTree from "../../../public/brand/logo-tree.png";

/** כתום כמו ה-Hero בהתחלה, לבן אחרי שגוללים. נעלם כשגוללים למטה וחוזר כשגוללים למעלה */
export function BHeader() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 24);
    setHidden(y > 480 && y > prev);
  });

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,translate] duration-300 motion-reduce:transition-none ease-[var(--ease-out-expo)] ${
        solid ? "bg-white/92 shadow-[0_8px_24px_-16px_rgb(29_26_23/0.4)] backdrop-blur-md" : "bg-b-orange"
      } ${hidden ? "-translate-y-full focus-within:translate-y-0" : "translate-y-0"}`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
        <a href="#top" className="inline-flex items-center gap-2.5 rounded-lg text-b-ink no-underline" aria-label={`${site.name}, לראש העמוד`}>
          <Image src={logoTree} alt="" sizes="44px" priority className="h-11 w-auto" />
          <span translate="no" className="font-b-display text-2xl font-semibold leading-none">
            {site.name}
          </span>
        </a>

        <nav aria-label="ניווט ראשי" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-[1.0625rem] font-medium text-b-ink no-underline transition-colors hover:bg-b-ink/8"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#donate" className="b-btn b-btn-ink min-h-11 px-5 py-2 text-base">
          לתרומה
        </a>
      </div>
    </header>
  );
}
