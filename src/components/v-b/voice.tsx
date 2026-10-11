import { site } from "@/content/site";

export function BVoice() {
  return (
    <section aria-label="מה אומרים עלינו" className="bg-white px-5 py-24 md:px-10 md:py-36">
      <figure className="mx-auto max-w-5xl">
        <blockquote className="relative font-b-display text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.3] font-medium">
          <span aria-hidden className="absolute -top-[0.55em] -start-[0.1em] font-b-display text-[2.6em] leading-none text-b-sky select-none md:-start-[0.55em]">
            „
          </span>
          <p className="relative">{site.voice.quote}</p>
        </blockquote>
        <figcaption className="mt-8 text-xl text-b-ink/70">{site.voice.by}</figcaption>
      </figure>

      <figure className="mx-auto mt-16 max-w-5xl md:mt-24">
        <ul className="flex flex-wrap gap-3 md:gap-4">
          {site.voice.heard.map((line) => (
            <li key={line} className="rounded-[1.75rem] bg-b-cello px-6 py-4 font-b-display text-[clamp(1.4rem,3vw,2.25rem)] font-medium md:px-9 md:py-6">
              <q>{line}</q>
            </li>
          ))}
        </ul>
        <figcaption className="mt-5 text-xl text-b-ink/70">{site.voice.heardBy}</figcaption>
      </figure>
    </section>
  );
}
