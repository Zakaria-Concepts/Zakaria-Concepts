import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-[88vh] lg:min-h-screen overflow-hidden
        flex items-center
        pt-[calc(env(safe-area-inset-top,0)+4rem)]  /* space for fixed header on mobile */
      "
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/pexels-maxfrancis-2246476.jpg"
          alt=""
          className="
            w-full h-full object-cover
            object-[50%_30%] sm:object-center lg:object-[50%_45%]
            select-none pointer-events-none opacity-70
          "
          loading="eager"
          draggable={false}
        />
        {/* Contrast overlay (keeps text readable on any image) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/25" />
        <div className="absolute inset-0 mix-blend-multiply bg-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h1
            className="
              font-heading font-bold text-white
              text-3xl xs:text-4xl sm:text-5xl lg:text-7xl
              leading-tight lg:leading-[1.1] mb-4 sm:mb-6
            "
          >
            <span className="block">
              Empowering Brands
            </span>
            {/* On small screens keep in one line; on lg break for emphasis */}
            <span className="text-primary block lg:mt-2">
              From Concept to Market
            </span>
          </h1>

          <p
            className="
              text-white/90
              text-base sm:text-lg lg:text-2xl
              leading-relaxed
              max-w-3xl mx-auto
              mb-6 sm:mb-8
            "
          >
            End‑to‑end solutions—from sourcing and distribution to market‑entry
            strategies—so your brand can scale with confidence.
          </p>

          {/* CTAs: stacked on mobile, inline on md+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              className="
                bg-primary text-primary-foreground hover:bg-primary/90
                font-semibold px-7 sm:px-8 py-4 text-base sm:text-lg
                rounded-full shadow-lg transition-transform hover:scale-[1.02]
              "
              onClick={() => (window.location.href = '/About')}
            >
              Book a Free Consultation
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="
                border-white/30 text-white hover:bg-white/10
                px-7 sm:px-8 py-4 text-base sm:text-lg rounded-full
              "
              onClick={() => (window.location.href = '/Contact')}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator (hide on very small screens) */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse motion-reduce:animate-none" />
        </div>
      </div>

      {/* Reduced motion: stop transitions/animations */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .hover\\:scale-[1.02] { transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
