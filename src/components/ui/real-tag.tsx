import Image from "next/image";
import logoTree from "../../../public/brand/logo-tree.png";

/** התגית שהעמותה מצמידה לכל צעצוע: כרטיס לבן במסגרת כתומה. קישוט בלבד */
export function RealTag({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`real-tag ${className}`}>
      <span className="text-[0.95em]">באהבה,</span>
      <span className="text-[0.95em] font-semibold whitespace-nowrap">עמותת הקינדרס</span>
      <Image src={logoTree} alt="" sizes="32px" className="mt-1 h-[1.6em] w-auto" />
    </span>
  );
}
