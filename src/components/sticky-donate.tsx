"use client";

import { useEffect, useState } from "react";

type Props = {
  /** עיצוב הפס והכפתור. ברירת המחדל: עיצוב א */
  barClassName?: string;
  buttonClassName?: string;
};

/** בנייד: כפתור "לתרומה" צף בתחתית, רק כשה-Hero וחלק התרומה לא על המסך */
export function StickyDonate({
  barClassName = "border-t border-ink/10 bg-paper/95",
  buttonClassName = "btn btn-ink",
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const donate = document.getElementById("donate");
    if (!hero || !donate) return;

    const inView = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) inView.set(entry.target, entry.isIntersecting);
      setVisible(!inView.get(hero) && !inView.get(donate));
    });
    observer.observe(hero);
    observer.observe(donate);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 ${barClassName} px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-[var(--ease-out-expo)] md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a href="#donate" tabIndex={visible ? 0 : -1} className={`${buttonClassName} w-full text-lg`}>
        לתרומה
      </a>
    </div>
  );
}
