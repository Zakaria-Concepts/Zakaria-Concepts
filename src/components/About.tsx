import { ShirtIcon as Textile, Utensils, Heart, Smartphone } from 'lucide-react';

const About = () => {
  const sectors = [
    { icon: Textile, name: 'Textiles', color: 'text-primary' },
    { icon: Utensils, name: 'Food', color: 'text-primary' },
    { icon: Heart, name: 'Personal Care', color: 'text-primary' },
    { icon: Smartphone, name: 'Technology', color: 'text-primary' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                About Zakaria Concepts
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are a leading global distribution company committed to excellence in connecting businesses with quality products across diverse industries. Our mission is to provide reliable, efficient, and innovative distribution solutions that drive growth for our partners worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With strategic operations spanning the United States, Canada, and the Middle East, we leverage our extensive network and industry expertise to deliver exceptional value to our clients.
              </p>
            </div>

            {/* Sectors Icons */}
            <div>
              <h3 className="font-semibold text-xl text-foreground mb-4">Our Sectors</h3>
              <div className="grid grid-cols-4 gap-6">
                {sectors.map((sector, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-all duration-300 group-hover:scale-105">
                      <sector.icon className={`w-8 h-8 mx-auto mb-2 ${sector.color}`} />
                      <p className="text-sm font-medium text-foreground">{sector.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                alt="Global distribution network"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;