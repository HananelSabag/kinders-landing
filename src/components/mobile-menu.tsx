"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  links: ReadonlyArray<{ href: string; label: string }>;
  /** תוכן נוסף בתחתית התפריט (בחירת העיצוב בזמן דמו) */
  children?: React.ReactNode;
  /** paper: עיצוב א · white: עיצובים ב ו-ג */
  tone?: "paper" | "white";
};

const tones = {
  paper: { button: "text-ink hover:bg-paper-deep", panel: "bg-paper border-ink/10", link: "border-ink/10 text-ink" },
  white: { button: "text-inherit hover:bg-black/5", panel: "bg-white border-black/10", link: "border-black/10 text-inherit" },
} as const;

export function MobileMenu({ links, children, tone = "paper" }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const t = tones[tone];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className={`grid size-12 place-items-center rounded-xl ${t.button}`}
      >
        {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        <span className="sr-only">{open ? "סגירת התפריט" : "פתיחת התפריט"}</span>
      </button>

      <div
        id="mobile-nav"
        hidden={!open}
        className={`absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b px-5 pb-5 text-start shadow-[0_18px_24px_-18px_rgb(31_27_22/0.35)] ${t.panel}`}
      >
        <nav aria-label="ניווט ראשי">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b py-3.5 text-lg font-semibold no-underline ${t.link}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
}
