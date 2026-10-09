import Link from "next/link";
import { DraftBanner } from "./draft-banner";
import { SiteFooter } from "./site-footer";
import { Logo } from "./ui/logo";

export function SimplePage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <DraftBanner />
      <header className="border-b border-ink/10">
        <div className="mx-auto flex h-18 max-w-3xl items-center px-5">
          <Link href="/" className="rounded-lg no-underline" aria-label="חזרה לעמוד הבית">
            <Logo />
          </Link>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold">{title}</h1>
        <div className="mt-8 space-y-5 text-lg leading-[1.8] [&_a:not(.btn)]:underline [&_a:not(.btn)]:decoration-coral [&_a:not(.btn)]:underline-offset-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:ms-6 [&_li]:list-disc">
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
