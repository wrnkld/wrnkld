import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type CarouselSlide = {
  src: string;
  alt: string;
  caption: string;
};

export function WorkCarousel({
  slides,
  slideClassName = "w-[85%] sm:w-[62%] lg:w-[46%]",
}: {
  slides: CarouselSlide[];
  slideClassName?: string;
}) {
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
            className={`snap-start shrink-0 flex flex-col gap-2 ${slideClassName}`}
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
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => scrollTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous"
          className="rounded"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => scrollTo(index + 1)}
          disabled={index === slides.length - 1}
          aria-label="Next"
          className="rounded"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {index + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
