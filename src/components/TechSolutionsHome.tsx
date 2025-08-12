import React from 'react';
import { Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TechSolutionsHome: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(0,0,0,0.06),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Solutions Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-2xl p-4 mb-6">
            <Settings className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tech Solutions That Scale
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Optimize your e-commerce, integrate automations, and launch products faster with our tech advisors.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 group"
            onClick={() => (window.location.href = '/contact')}
          >
            Talk to a Tech Advisor
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>

        {/* Let's Build Something Great Section */}
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 px-6 py-12 lg:px-10 lg:py-16 text-center">
          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Let's Build Something Great
          </h3>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            From the concept to the shelf, we help bring your vision to life.
          </p>
          
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-3 group"
            onClick={() => (window.location.href = '/contact')}
          >
            Ready to Work With Us?
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechSolutionsHome;