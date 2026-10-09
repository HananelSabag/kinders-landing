import { RealTag } from "@/components/ui/real-tag";

export function BClosing() {
  return (
    <section aria-labelledby="b-closing-title" className="relative overflow-hidden bg-b-orange px-5 py-24 text-b-ink md:px-10 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="b-closing-title" className="max-w-[13ch] text-[clamp(2.6rem,7vw,5.5rem)] font-semibold">
            הצעצוע הבא מחכה לתגית שלו
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#donate" className="b-btn b-btn-ink">
              לתרומה
            </a>
            <a href="#toys" className="b-btn b-btn-ghost">
              יש לי צעצועים למסור
            </a>
          </div>
        </div>
        <RealTag className="hidden rotate-[-8deg] text-2xl md:grid" />
      </div>
    </section>
  );
}
