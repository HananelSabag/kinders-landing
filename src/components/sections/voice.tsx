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
    </section>
  );
}
