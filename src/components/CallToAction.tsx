import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with Zakaria Concepts for reliable, efficient global distribution solutions. 
            Let's discuss how we can help grow your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              Contact Our Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <div className="flex gap-4">
              <a 
                href="mailto:info@zakariaconcepts.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
              
              <a 
                href="tel:+1234567890"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Contact form preview */}
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-semibold text-xl text-foreground mb-6">Get Started Today</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">Your Name</div>
                <div className="h-4 bg-muted-foreground/20 rounded"></div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">Company</div>
                <div className="h-4 bg-muted-foreground/20 rounded"></div>
              </div>
              <div className="sm:col-span-2 bg-muted rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">Message</div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted-foreground/20 rounded"></div>
                  <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;