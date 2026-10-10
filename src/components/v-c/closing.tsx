export function CClosing() {
  return (
    <section aria-labelledby="c-closing-title" className="on-ink bg-c-teal px-5 py-16 text-white md:px-8 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="c-closing-title" className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold">
            רוצים שעוד ילד יקבל צעצוע משלו?
          </h2>
          <p className="mt-2 text-lg text-white/90">כל צעצוע יוצא מאיתנו נקי, עטוף ועם תגית.</p>
        </div>
        <a href="#donate" className="c-btn min-h-14 shrink-0 bg-white px-9 text-lg text-c-ink hover:bg-c-teal-soft">
          לתרומה
        </a>
      </div>
    </section>
  );
}
