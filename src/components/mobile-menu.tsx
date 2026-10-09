"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = { links: ReadonlyArray<{ href: string; label: string }> };

export function MobileMenu({ links }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="grid size-12 place-items-center rounded-xl text-ink hover:bg-paper-deep"
      >
        {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        <span className="sr-only">{open ? "סגירת התפריט" : "פתיחת התפריט"}</span>
      </button>

      <nav
        id="mobile-nav"
        aria-label="ניווט ראשי"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper px-5 pb-5 shadow-[0_18px_24px_-18px_rgb(31_27_22/0.35)]"
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-3.5 text-lg font-semibold text-ink no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
