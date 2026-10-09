"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: no-preference)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

/**
 * true רק בדפדפן, ורק אם המשתמש לא ביקש "הפחתת תנועה".
 * בשרת ובזמן ה-hydration מחזיר false, כך שה-HTML הראשוני הוא תמיד המצב הסטטי והמלא של הדף.
 */
export function useMotionOK() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
