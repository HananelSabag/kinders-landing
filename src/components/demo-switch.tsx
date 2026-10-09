import { site } from "@/content/site";

const versions = [
  { id: "a", href: "/", letter: "א", name: "חם ומעוצב" },
  { id: "b", href: "/b", letter: "ב", name: "מונפש" },
  { id: "c", href: "/c", letter: "ג", name: "נקי וממוקד" },
] as const;

export type VersionId = (typeof versions)[number]["id"];

const demoRed = "text-[#c0262d]";

/**
 * "גרסת דמו" ובחירת עיצוב, בתוך ה-header. מופיע רק כל עוד isDraft.
 * inline: בדסקטופ, ליד כפתור התרומה. menu: בתוך תפריט הנייד, עם שמות העיצובים.
 * קישור רגיל ולא next/link: כל עיצוב נטען מחדש מראש העמוד, עם הגופנים שלו.
 */
export function DemoSwitch({ current, variant }: { current: VersionId; variant: "inline" | "menu" }) {
  if (!site.isDraft) return null;

  if (variant === "inline") {
    return (
      <div className="hidden items-center gap-2.5 lg:flex">
        <span className={`text-sm font-bold whitespace-nowrap ${demoRed}`}>גרסת דמו</span>
        <nav aria-label="בחירת עיצוב">
          <ul className="flex items-center gap-0.5 rounded-full bg-black/[0.06] p-1">
            {versions.map((v) => {
              const active = v.id === current;
              return (
                <li key={v.id}>
                  <a
                    href={v.href}
                    aria-current={active ? "page" : undefined}
                    title={`עיצוב ${v.letter}: ${v.name}`}
                    className={`grid size-9 place-items-center rounded-full text-[0.95rem] font-bold no-underline transition-colors ${
                      active ? "bg-[#1f1b16] text-white" : "text-inherit hover:bg-black/10"
                    }`}
                  >
                    <span aria-hidden>{v.letter}</span>
                    <span className="sr-only">
                      עיצוב {v.letter}, {v.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <nav aria-label="בחירת עיצוב" className="mt-5 rounded-2xl bg-black/[0.05] p-4">
      <p className="flex items-baseline justify-between gap-3">
        <span className="text-base font-semibold">בחירת עיצוב</span>
        <span className={`text-sm font-bold ${demoRed}`}>גרסת דמו</span>
      </p>
      <ul className="mt-3 grid grid-cols-3 gap-2">
        {versions.map((v) => {
          const active = v.id === current;
          return (
            <li key={v.id}>
              <a
                href={v.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-16 flex-col items-center justify-center rounded-xl px-1 text-center no-underline transition-colors ${
                  active ? "bg-[#1f1b16] text-white" : "bg-white text-inherit hover:bg-white/70"
                }`}
              >
                <span className="text-lg leading-tight font-bold">{v.letter}</span>
                <span className="text-[0.8rem] leading-tight">{v.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
