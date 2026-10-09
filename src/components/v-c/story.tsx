import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";

export function CStory() {
  const { title, lead, more } = site.story;
  return (
    <section id="story" aria-labelledby="c-story-title" className="pt-20 lg:pt-28">
      <h2 id="c-story-title" className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">
        {title}
      </h2>
      <div className="mt-6 max-w-[40rem] space-y-5 text-xl leading-[1.75]">
        {lead.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <details className="group mt-5 max-w-[40rem]">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-lg py-1 text-lg font-semibold text-c-teal [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">ומה זה אומר היום</span>
          <span className="hidden group-open:inline">פחות</span>
          <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden />
        </summary>
        <div className="mt-4 space-y-5 text-xl leading-[1.75]">
          {more.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </details>
    </section>
  );
}
