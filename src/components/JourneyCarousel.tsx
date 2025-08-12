import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type JourneyItem = {
  year: string;
  title: string;
  description: string;
  // Optional media per card
  media?: {
    type: 'image' | 'video';
    src: string;
    poster?: string; // for video
  };
};

type Props = {
  items: JourneyItem[];
  options?: EmblaOptionsType;
};

const JourneyCarousel: React.FC<Props> = ({ items, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: false,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
    ...options,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((i: number) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  return (
    <section className="py-10 lg:py-12 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(0,0,0,0.06),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 lg:mb-14">
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-3">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones that shaped our story.
          </p>
        </header>

        {/* Controls */}
        <div className="relative">
          {/* Prev/Next */}
          <div className="hidden md:flex items-center justify-between absolute -top-16 right-0 gap-3">
            <Button variant="outline" size="icon" className="rounded-full" onClick={scrollPrev} aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={scrollNext} aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

            {/* Track */}
            <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {items.map((m, i) => {
              const isActive = i === selectedIndex;
              return (
                <div
                  className="pl-4 basis-[85%] sm:basis-[70%] md:basis-[55%] lg:basis-[48%] xl:basis-[42%] shrink-0 flex"
                  key={`${m.year}-${m.title}`}
                >
                    <article
                      className={[
                        'flex flex-col w-full h-full rounded-2xl border border-border bg-card/70 supports-[backdrop-filter]:bg-card/60 backdrop-blur',
                        'shadow-sm transition-all duration-500 overflow-hidden',
                        isActive ? 'scale-[1.0] opacity-100 shadow-xl' : 'scale-[0.94] opacity-70'
                      ].join(' ')}
                      style={{
                        minHeight: '500px',
                        height: '500px',
                        maxHeight: '600px',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      {/* Media */}
                      {m.media?.type === 'image' && (
                        <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden flex-shrink-0">
                          <img
                            src={m.media.src}
                            alt={`${m.title} image`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                      )}

                      {m.media?.type === 'video' && m.media.src && (
                        <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden flex-shrink-0">
                          <video
                            className="w-full h-full object-cover"
                            src={m.media.src}
                            poster={m.media.poster}
                            preload="metadata"
                            controls
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between min-h-0">
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-3">
                          {m.year}
                        </span>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">{m.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-1">{m.description}</p>
                      </div>
                    </article>
                </div>
              );
              })}
            </div>
            </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={[
                  'h-2.5 w-6 rounded-full transition-all',
                  i === selectedIndex
                    ? 'bg-primary scale-110'
                    : 'bg-border hover:bg-primary/50 scale-100'
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyCarousel;
