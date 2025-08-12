import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-br from-background via-secondary/20 to-background">
        <img
        src="/assets/pexels-maxfrancis-2246476.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        loading="lazy"
        draggable={false}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 fade-in">
            <span className="whitespace-nowrap pb-2 block">Empowering Brands from</span>
          <span className="block text-primary">Concept to Market</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto slide-up">
          From global sourcing and distribution to expert consulting and tech advisory, Zakaria Concepts turns bold ideas into growing, thriving businesses.
        </p>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={() => window.location.href = '/About'}
        >
          Book a Free Consultation
        </Button>
        <div className="mt-4 flex justify-center">
          <Button
            size="sm"
            variant="outline"
            className="px-6 py-2 text-base rounded-full border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => window.location.href = '/Services'}
          >
            Our Services
          </Button>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;