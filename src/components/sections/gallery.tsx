import { site } from "@/content/site";
import { PhotoFrame } from "@/components/ui/photo";

// גדולה, שתיים קטנות זו מעל זו, ואחת גבוהה: קצב ולא שורה של כרטיסים זהים
const layout = [
  "col-span-2 aspect-square md:row-span-2 md:aspect-auto",
  "aspect-square md:col-start-3 md:row-start-1",
  "aspect-square md:col-start-3 md:row-start-2",
  "col-span-2 aspect-[4/3] md:col-span-1 md:col-start-4 md:row-span-2 md:row-start-1 md:aspect-auto",
];

export function Gallery() {
  return (
    <section id="moments" aria-labelledby="moments-title" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="moments-title" className="text-[clamp(2rem,4.4vw,3.25rem)] font-bold">
            רגעים מהשטח
          </h2>
          <a href={site.contact.facebook} target="_blank" rel="noopener noreferrer" className="link text-lg font-semibold">
            עוד רגעים בעמוד הפייסבוק שלנו
            <span className="sr-only"> (נפתח בחלון חדש)</span>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {site.photos.gallery.map((photo, i) => (
            <PhotoFrame
              key={photo.src}
              photo={photo}
              sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : i === 3 ? "(min-width: 768px) 25vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
              className={`rounded-xl ${layout[i] ?? "aspect-square"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
