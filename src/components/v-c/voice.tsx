import { Quote } from "lucide-react";
import { site } from "@/content/site";

export function CVoice() {
  return (
    <section aria-label="מה אומרים עלינו" className="pt-20 lg:pt-28">
      <figure className="border-t border-c-line pt-10">
        <Quote className="size-9 -scale-x-100 text-c-teal" aria-hidden />
        <blockquote className="mt-4 text-[clamp(1.5rem,2.8vw,2rem)] leading-[1.45] font-medium">
          <p>{site.voice.quote}</p>
        </blockquote>
        <figcaption className="mt-5 text-lg text-c-mute">{site.voice.by}</figcaption>
      </figure>
    </section>
  );
}
