import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselSlide = {
  src: string;
  alt: string;
  caption: string;
};

export function WorkCarousel({ slides }: { slides: CarouselSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
    setIndex(clamped);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    const left = track.scrollLeft;
    let nearest = 0;
    let best = Infinity;
    children.forEach((child, i) => {
      const d = Math.abs(child.offsetLeft - track.offsetLeft - left);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setIndex(nearest);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory touch-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide) => (
          <figure
            key={slide.src}
            className="snap-start shrink-0 w-[85%] sm:w-[62%] lg:w-[46%] flex flex-col gap-2"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              className="w-full h-auto border border-border/40 bg-muted/30"
            />
            <figcaption className="text-sm text-muted-foreground">{slide.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous"
          className="inline-flex h-8 w-8 items-center justify-center border border-border/70 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollTo(index + 1)}
          disabled={index === slides.length - 1}
          aria-label="Next"
          className="inline-flex h-8 w-8 items-center justify-center border border-border/70 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {index + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
