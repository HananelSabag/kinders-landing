import { site } from "@/content/site";
import { Logo } from "@/components/ui/logo";

export function CHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-c-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="rounded-lg no-underline" aria-label={`${site.name}, לראש העמוד`}>
          <span className="text-c-ink">
            <Logo nameClassName="font-c-sans text-[1.4rem] font-bold" />
          </span>
        </a>

        <nav aria-label="ניווט ראשי" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-base font-medium text-c-ink no-underline transition-colors hover:text-c-teal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#donate" className="c-btn c-btn-teal min-h-11 px-5 py-2 text-base">
          לתרומה
        </a>
      </div>
    </header>
  );
}
