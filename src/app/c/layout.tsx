import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";

// עיצוב ג: גופן אחד, Rubik, בכמה משקלים
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "עיצוב ג",
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function VersionCLayout({ children }: LayoutProps<"/c">) {
  return <div className={`${rubik.variable} v-c`}>{children}</div>;
}
