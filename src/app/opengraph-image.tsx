import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// מנוע התמונות (Satori) לא יודע לסדר טקסט מימין לשמאל, אז הופכים שורה עברית בעצמנו.
// עובד לשורות בעברית בלבד (בלי מספרים או לטינית באמצע).
const rtl = (text: string) => [...text].reverse().join("");

export default async function OpengraphImage() {
  const [playpen, assistant, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/PlaypenSansHebrew-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Assistant-SemiBold.ttf")),
    readFile(join(process.cwd(), "public/brand/logo-tree.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#fff3eb", position: "relative" }}>
        {/* התגית */}
        <svg width="560" height="470" viewBox="0 0 560 470" style={{ position: "absolute", top: 80, right: 132 }}>
          <path d="M70 0H490L560 70V470H0V70Z" fill="#e9b949" />
          <circle cx="280" cy="62" r="20" fill="#fff3eb" />
          <circle cx="280" cy="62" r="29" fill="none" stroke="rgba(31,27,22,0.16)" strokeWidth="9" />
        </svg>
        <div
          style={{
            position: "absolute",
            top: 205,
            right: 172,
            width: 480,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            color: "#1f1b16",
          }}
        >
          <div style={{ fontFamily: "Playpen", fontSize: 76, lineHeight: 1.15, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span>{rtl("כל ילד ראוי")}</span>
            <span>{rtl("לצעצוע משלו")}</span>
          </div>
          <div style={{ fontFamily: "Assistant", fontSize: 32, marginTop: 28, display: "flex" }}>
            {rtl("אוספים, מחדשים, עוטפים ומעניקים")}
          </div>
        </div>
        {/* החוט: יורד מלמעלה ונכנס לחור */}
        <div style={{ position: "absolute", top: 0, right: 409, width: 5, height: 142, background: "#e8604c", borderRadius: 3 }} />
        {/* שם העמותה */}
        {/* עץ הילדים מהלוגו של העמותה */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={187} height={276} alt="" style={{ position: "absolute", left: 92, top: 70 }} />
        <div style={{ position: "absolute", left: 80, bottom: 70, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ fontFamily: "Playpen", fontSize: 64, color: "#1f1b16" }}>{rtl(site.name)}</div>
          <div style={{ fontFamily: "Assistant", fontSize: 28, color: "#544a3f", display: "flex" }}>
            {site.registrationNumber} {rtl("עמותה רשומה")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playpen", data: playpen, weight: 700, style: "normal" },
        { name: "Assistant", data: assistant, weight: 600, style: "normal" },
      ],
    },
  );
}
