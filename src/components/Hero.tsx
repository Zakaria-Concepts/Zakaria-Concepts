import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 fade-in">
          Trusted Global
          <span className="block text-primary">Distribution Partner</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto slide-up">
          Delivering efficiency and reliability across textiles, food, personal care, and technology sectors worldwide.
        </p>

        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Solutions
        </Button>
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