import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    // עד שהעמותה מאשרת את האתר: לא נכנסים למנועי חיפוש
    rules: site.isDraft ? { userAgent: "*", disallow: "/" } : { userAgent: "*", allow: "/" },
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
