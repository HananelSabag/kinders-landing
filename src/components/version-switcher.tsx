import { ChevronUp } from "lucide-react";
import { site } from "@/content/site";

const versions = [
  { id: "a", href: "/", letter: "א", name: "חם ומעוצב" },
  { id: "b", href: "/b", letter: "ב", name: "מונפש" },
  { id: "c", href: "/c", letter: "ג", name: "נקי וממוקד" },
] as const;

export type VersionId = (typeof versions)[number]["id"];

/**
 * מעבר בין שלושת העיצובים, כדי שהעמותה תבחר. מופיע רק בזמן טיוטה.
 * קישור רגיל ולא next/link: כל עיצוב נטען מחדש מראש העמוד, עם הגופנים שלו
 */
export function VersionSwitcher({ current }: { current: VersionId }) {
  if (!site.isDraft) return null;
  const active = versions.find((v) => v.id === current)!;

  return (
    <nav
      aria-label="מעבר בין העיצובים"
      className="fixed end-3 bottom-[calc(5.75rem+env(safe-area-inset-bottom))] z-50 text-white md:end-5 md:bottom-5 print:hidden"
    >
      {/* בנייד: כפתור קטן שנפתח לרשימה עם שמות העיצובים */}
      <details className="group md:hidden">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full bg-[#1f1b16] px-4 text-[0.95rem] font-semibold shadow-[0_12px_30px_-10px_rgb(0_0_0/0.6)] focus-visible:outline-white [&::-webkit-details-marker]:hidden">
          עיצוב {active.letter}
          <ChevronUp className="size-4 transition-transform group-open:rotate-180" aria-hidden />
        </summary>
        <ul className="absolute end-0 bottom-full mb-2 w-52 overflow-hidden rounded-2xl bg-[#1f1b16] py-1.5 shadow-[0_12px_30px_-10px_rgb(0_0_0/0.6)]">
          {versions.map((v) => (
            <li key={v.id}>
              <a
                href={v.href}
                aria-current={v.id === current ? "page" : undefined}
                className={`flex min-h-11 items-center gap-3 px-4 text-base no-underline focus-visible:outline-white ${
                  v.id === current ? "bg-white/15 font-bold" : "hover:bg-white/10"
                }`}
              >
                <span className="w-4 text-lg font-bold">{v.letter}</span>
                {v.name}
              </a>
            </li>
          ))}
        </ul>
      </details>

      {/* בדסקטופ: שלושה כפתורים, לחיצה אחת */}
      <div className="hidden items-center gap-1 rounded-full bg-[#1f1b16] p-1.5 ps-4 shadow-[0_12px_30px_-10px_rgb(0_0_0/0.6)] md:flex">
        <span className="me-1 text-[0.95rem] font-semibold">עיצוב</span>
        <ul className="flex gap-1">
          {versions.map((v) => (
            <li key={v.id}>
              <a
                href={v.href}
                aria-current={v.id === current ? "page" : undefined}
                title={`עיצוב ${v.letter}: ${v.name}`}
                className={`grid size-11 place-items-center rounded-full text-lg font-bold no-underline transition-colors focus-visible:outline-white ${
                  v.id === current ? "bg-white text-[#1f1b16]" : "text-white hover:bg-white/15"
                }`}
              >
                <span aria-hidden>{v.letter}</span>
                <span className="sr-only">
                  עיצוב {v.letter}, {v.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
