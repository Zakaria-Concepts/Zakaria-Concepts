import React from 'react';
import { Settings, ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TechSolutionsHome: React.FC = () => {
  return (
    <section className="relative py-10 lg:py-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6  ">
        <div className="max-w-7xl mx-auto">
          <div className="relative grid lg:grid-cols-2 min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Left Side - Tech Solutions (Primary Color) */}
            <div className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-2 lg:p-12 flex flex-col justify-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)]" />
              
              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 lg:mx-0 mx-auto">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                  E-commerce & Tech Solutions That Scale With You'
                </h2>

                <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
                  We help you launch or optimize your Shopify, ERP, fulfillment automation, and more.
                </p>

                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-3 group shadow-lg"
                  onClick={() => (window.location.href = '/contact')}
                >
                  Talk to a Tech Advisor
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/15 rounded-full blur-lg"></div>
            </div>

            {/* Diagonal Divider */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-primary/20 via-accent/30 to-accent/20 transform -translate-x-0.5 hidden lg:block"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg hidden lg:block"></div>
            </div>

            {/* Right Side - Let's Build Something Great (Accent Color) */}
            <div className="relative bg-gradient-to-br from-accent to-accent/80 text-accent-foreground p-8 lg:p-12 flex flex-col justify-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(225deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)]" />
              
              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 lg:mx-0 mx-auto">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                  Let's Build Something Great
                </h3>
                
                <p className="text-lg text-accent-foreground/90 leading-relaxed mb-8">
                  From concept to shelf, let’s bring your vision to life.
                </p>
                
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-accent hover:bg-white/90 px-8 py-3 group shadow-lg"
                  onClick={() => (window.location.href = '/contact')}
                >
                  Schedule a Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 left-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/15 rounded-full blur-lg"></div>
            </div>

            {/* Mobile Divider */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-accent/30 to-accent/20 transform -translate-y-0.5 lg:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolutionsHome;