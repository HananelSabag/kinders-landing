/**
 * הכתובת המלאה של האתר, במקום אחד: למטא-דאטה, ל-sitemap, ל-robots ולקישורי שיתוף.
 * NEXT_PUBLIC_SITE_URL כשיהיה דומיין, אחרת הכתובת הקבועה ש-Vercel נותן, ובמחשב localhost.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
