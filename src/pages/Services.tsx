import { Truck, Globe, Shield, Zap, Network } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Comprehensive distribution networks spanning USA, Canada, and the Middle East with strategic partnerships across key markets.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'End-to-end logistics management with streamlined supply chain solutions for reliable, timely delivery worldwide.',
      image: 'https://media.istockphoto.com/id/1279002529/photo/long-haul-semi-truck-on-a-rural-western-usa-interstate-highway.jpg?s=2048x2048&w=is&k=20&c=evW3xkIOmoe3-b58N53MgvlUfH4I_KqOwGLadMEJ7yo='
    },
    {
      icon: Network,
      title: 'International Market Access',
      description: 'Expert guidance and strategic partnerships to help businesses enter and succeed in new international markets.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring all products meet international standards and regulatory requirements.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Zap,
      title: 'Technology Integration',
      description: 'Advanced technology solutions for inventory management, tracking, and supply chain optimization.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Reliable, tailored distribution solutions across key global markets, connecting manufacturers with businesses in textiles, healthy food, technology, and personal care sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-all duration-300 bg-card border-border hover:border-primary/50 hover:shadow-xl cursor-pointer overflow-hidden animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-3">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across diverse sectors with tailored solutions for each industry's unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Textiles', icon: '🧵' },
              { name: 'Healthy Food', icon: '🥗' },
              { name: 'Technology', icon: '💻' },
              { name: 'Personal & Home Care', icon: '🧴' }
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-lg text-foreground">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Need a Custom Distribution Solution?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how we can help your business reach new markets and achieve sustainable growth.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-3"
              onClick={() => window.location.href = '/contact'}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;