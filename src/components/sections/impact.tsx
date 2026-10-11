import { site } from "@/content/site";
import { formatNumber as fmt } from "@/lib/format";

/** מספר גדול, יחד עם המילית שלפניו ("ב-255"), כדי שלא יישברו לשתי שורות */
function Big({ before = "", children }: { before?: string; children: number }) {
  return (
    <span className="whitespace-nowrap">
      {before}
      <span className="text-[1.35em] font-bold tabular-nums">{fmt(children)}</span>
    </span>
  );
}

export function Impact() {
  const { children, frameworks, localities } = site.impact;
  return (
    <section aria-label="מה עשינו עד היום" className="px-5 py-20 md:py-28">
      <p className="mx-auto max-w-4xl text-center font-display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.45] text-ink">
        מאז {site.foundedYear} הגענו אל <Big>{children}</Big> ילדים, <Big before="ב-">{frameworks}</Big> מסגרות{" "}
        <Big before="וב-">{localities}</Big> יישובים.
      </p>
    </section>
  );
}
