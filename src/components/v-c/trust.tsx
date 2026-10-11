import { site } from "@/content/site";
import { formatNumber } from "@/lib/format";

export function CTrust() {
  const { children, frameworks, localities } = site.impact;
  const facts = [
    { label: "ילדים שקיבלו צעצוע", value: formatNumber(children) },
    { label: "מסגרות", value: formatNumber(frameworks) },
    { label: "יישובים", value: formatNumber(localities) },
    { label: "עמותה רשומה", value: `${site.legalName}, מס׳ ${site.registrationNumber}` },
  ];

  return (
    <section aria-labelledby="c-trust-title" className="pt-20 lg:pt-28">
      <h2 id="c-trust-title" className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">
        מאז {site.foundedYear}, במספרים
      </h2>
      <dl className="mt-8 grid border-t border-c-line sm:grid-cols-2">
        {facts.map((f) => (
          <div key={f.label} className="border-b border-c-line py-5 sm:odd:pe-8 sm:even:border-s sm:even:ps-8">
            <dt className="text-[0.95rem] text-c-mute">{f.label}</dt>
            <dd className="mt-1 text-xl font-semibold tabular-nums">{f.value}</dd>
          </div>
        ))}
      </dl>
      <a
        href={site.contact.guidestar}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-lg font-medium text-c-teal underline underline-offset-4 hover:text-c-teal-deep"
      >
        כל הפרטים על העמותה בגיידסטאר
        <span className="sr-only"> (נפתח בחלון חדש)</span>
      </a>
    </section>
  );
}
