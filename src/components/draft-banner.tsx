import { site } from "@/content/site";

export function DraftBanner() {
  if (!site.isDraft) return null;
  return (
    <div role="note" className="bg-ink px-5 py-2 text-center text-[0.95rem] text-paper">
      גרסת טיוטה: המספרים והסכומים באתר הם לדוגמה, והטקסטים ממתינים לאישור העמותה.
    </div>
  );
}
