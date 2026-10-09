import { site } from "@/content/site";
import { formatNumber as fmt } from "@/lib/format";

export function Impact() {
  const { toys, frameworks } = site.impact;
  return (
    <section aria-label="מה עשינו עד היום" className="px-5 py-20 md:py-28">
      <p className="mx-auto max-w-4xl text-center font-display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.45] text-ink">
        מאז {site.foundedYear} יצאו מאיתנו{" "}
        <span className="whitespace-nowrap text-[1.35em] font-bold tabular-nums">{fmt(toys)}</span> צעצועים עטופים,
        אל <span className="whitespace-nowrap text-[1.35em] font-bold tabular-nums">{fmt(frameworks)}</span> מסגרות
        לילדים.
      </p>
      {site.isDraft ? (
        <p className="mt-4 text-center text-base text-ink-soft">(המספרים לדוגמה, עד שנקבל את הנתונים מהעמותה)</p>
      ) : null}
    </section>
  );
}
