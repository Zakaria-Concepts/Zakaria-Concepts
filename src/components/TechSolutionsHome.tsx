import React from 'react';
import { Settings, ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TechSolutionsHome: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--accent)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_40%,hsl(var(--muted)/0.05)_50%,transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Combined Section */}
          <div className="relative rounded-3xl bg-gradient-to-br from-background/50 to-muted/30 backdrop-blur-sm border border-border/50 p-8 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Side - Tech Solutions */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-primary/10 rounded-2xl p-4 mb-6 lg:mx-0 mx-auto">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Tech Solutions That Scale
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
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

              {/* Right Side - Let's Build Something Great */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-accent/10 rounded-2xl p-4 mb-6 lg:mx-0 mx-auto">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Let's Build Something Great
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  From the concept to the shelf, we help bring your vision to life.
                </p>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 group"
                  onClick={() => (window.location.href = '/contact')}
                >
                  Ready to Work With Us?
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolutionsHome;