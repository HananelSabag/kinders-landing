import Image from "next/image";
import { site } from "@/content/site";

const proof = [site.photos.gallery[0], site.photos.gallery[1], site.photos.gallery[3]];

export function CHow() {
  return (
    <section id="how" aria-labelledby="c-how-title" className="pt-20 lg:pt-28">
      <h2 id="c-how-title" className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">
        איך זה עובד
      </h2>
      <p className="mt-4 max-w-[38rem] text-xl leading-relaxed text-c-mute">{site.donate.intro}</p>

      <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {site.steps.map((step, i) => (
          <li key={step.title} className="flex gap-4 border-t border-c-line pt-5">
            <span
              aria-hidden
              className="grid size-9 shrink-0 place-items-center rounded-full bg-c-teal-soft text-lg font-bold text-c-teal-deep tabular-nums"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-1.5 text-lg leading-relaxed text-c-mute">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <ul className="mt-12 grid grid-cols-3 gap-2.5 sm:gap-4">
        {proof.map((photo) => (
          <li key={photo.src} className="relative aspect-[4/5] overflow-hidden rounded-xl bg-c-mist">
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 18vw, 33vw" className="object-cover" />
          </li>
        ))}
      </ul>
    </section>
  );
}
