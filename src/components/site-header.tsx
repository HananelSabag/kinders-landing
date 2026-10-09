import { site } from "@/content/site";
import { Logo } from "./ui/logo";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur-[2px]">
      <div className="relative mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="rounded-lg no-underline" aria-label={`${site.name}, לראש העמוד`}>
          <Logo />
        </a>

        <nav aria-label="ניווט ראשי" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-[1.0625rem] font-semibold text-ink no-underline hover:bg-paper-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#donate" className="btn btn-ink min-h-11 px-5 py-2">
            לתרומה
          </a>
          <MobileMenu links={site.nav} />
        </div>
      </div>
    </header>
  );
}
