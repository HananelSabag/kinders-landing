import Link from "next/link";
import { SimplePage } from "@/components/simple-page";

export default function NotFound() {
  return (
    <SimplePage title="העמוד הזה לא נמצא">
      <p>אולי הקישור השתנה. כל מה שחשוב נמצא בעמוד הבית.</p>
      <Link href="/" className="btn btn-ink">
        לעמוד הבית
      </Link>
    </SimplePage>
  );
}
