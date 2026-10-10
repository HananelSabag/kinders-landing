import type { Metadata, Viewport } from "next";
import { Assistant, Playpen_Sans_Hebrew } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const playpen = Playpen_Sans_Hebrew({
  variable: "--font-playpen",
  subsets: ["hebrew", "latin"],
  display: "swap",
  // ל-Playpen אין נתוני התאמה לגופן גיבוי ב-next/font, אז מגדירים גיבוי ידנית
  adjustFontFallback: false,
  fallback: ["Assistant", "system-ui", "sans-serif"],
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name}: ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: site.name,
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
  },
  // עד שהאתר מאושר על ידי העמותה, לא מופיעים במנועי חיפוש
  robots: site.isDraft ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#fff3eb",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.legalName,
  alternateName: site.englishName,
  url: siteUrl,
  description: site.description,
  foundingDate: String(site.foundedYear),
  identifier: site.registrationNumber,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "IL" },
  sameAs: [site.contact.facebook, site.contact.guidestar],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl" className={`${playpen.variable} ${assistant.variable} antialiased`}>
      <body className="min-h-dvh bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          דלגו לתוכן הראשי
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Analytics />
      </body>
    </html>
  );
}
