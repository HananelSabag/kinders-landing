import { site } from "@/content/site";

export function Voice() {
  return (
    <section aria-label="מה אומרים עלינו" className="bg-paper-deep px-5 py-20 md:py-28">
      <figure className="mx-auto max-w-3xl text-center">
        <blockquote className="font-display text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.5]">
          <p>„{site.voice.quote}“</p>
        </blockquote>
        <figcaption className="mt-6 text-lg text-ink-soft">{site.voice.by}</figcaption>
      </figure>

      <figure className="mx-auto mt-14 max-w-3xl border-t-2 border-dashed border-ink/25 pt-10 text-center">
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 font-display text-[clamp(1.3rem,2.6vw,1.75rem)]">
          {site.voice.heard.map((line) => (
            <li key={line}>
              <q>{line}</q>
            </li>
          ))}
        </ul>
        <figcaption className="mt-4 text-lg text-ink-soft">{site.voice.heardBy}</figcaption>
      </figure>
    </section>
  );
}
