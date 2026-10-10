import type { Metadata, Viewport } from "next";
import { Fredoka, Heebo } from "next/font/google";

// עיצוב ב: Fredoka לכותרות (גופן משתנה עם ציר רוחב, בשביל הכותרת ש"מתנפחת") ו-Heebo לטקסט
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["hebrew", "latin"],
  axes: ["wdth"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "עיצוב ב",
  alternates: { canonical: "/" },
};

// צבע שורת הכתובת בדפדפן בנייד, כמו ראש הדף
export const viewport: Viewport = { themeColor: "#f8dea1" };

export default function VersionBLayout({ children }: LayoutProps<"/b">) {
  return <div className={`${fredoka.variable} ${heebo.variable} v-b`}>{children}</div>;
}
