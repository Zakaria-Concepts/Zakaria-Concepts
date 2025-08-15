import { Truck, Globe, Shield, Zap, Network, Users, Search, Package, MapPin, ShoppingCart, Computer, CheckCircle, Target, Award, Lightbulb, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechSolutionsCTA from '@/components/TechSolutionsCTA';
import { WhatWeOffer } from '@/components/Whatweoffer';

const Services = () => {


  const detailedServices = [
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Comprehensive distribution networks spanning USA, Canada, and the Middle East with strategic partnerships across key markets. We handle end-to-end market entry, from regulatory compliance to local partnerships.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Multi-region coverage', 'Local partnerships', 'Regulatory compliance', 'Market entry strategy']
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'End-to-end logistics management with streamlined supply chain solutions for reliable, timely delivery worldwide. Our advanced tracking systems ensure transparency throughout the entire process.',
      image: 'https://media.istockphoto.com/id/1279002529/photo/long-haul-semi-truck-on-a-rural-western-usa-interstate-highway.jpg?s=2048x2048&w=is&k=20&c=evW3xkIOmoe3-b58N53MgvlUfH4I_KqOwGLadMEJ7yo=',
      features: ['Real-time tracking', 'Warehousing solutions', 'Inventory management', 'Last-mile delivery']
    },
    {
      icon: Network,
      title: 'International Market Access',
      description: 'Expert guidance and strategic partnerships to help businesses enter and succeed in new international markets. We provide cultural insights, local connections, and proven market entry strategies.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Market research', 'Cultural adaptation', 'Local partnerships', 'Entry strategy']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring all products meet international standards and regulatory requirements. Our comprehensive testing and certification programs guarantee product excellence.',
      image: 'https://img.freepik.com/foto-gratis/collaje-control-calidad-estandar_23-2149631023.jpg?semt=ais_hybrid&w=740&q=80',
      features: ['Product testing', 'Certification support', 'Standards compliance', 'Quality monitoring']
    },
    {
      icon: Zap,
      title: 'Technology Integration',
      description: 'Advanced technology solutions for inventory management, tracking, and supply chain optimization. We help you leverage cutting-edge tools to streamline operations and enhance efficiency.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['ERP integration', 'Automation tools', 'Analytics dashboard', 'Process optimization']
    },
  ];

  const clientTypes = [
    { icon: '🚀', title: 'Startups', description: 'Needing full-scope support' },
    { icon: '🏢', title: 'Established Brands', description: 'Entering new markets' },
    { icon: '🌿', title: 'Health & Wellness', description: 'Seeking white label solutions' },
    { icon: '🛒', title: 'Retailers & Wholesalers', description: 'Expanding product lines' },
  ];

  const featuredProducts = [
    { name: 'Premium Textiles', useCase: 'Fashion & Home', benefits: 'High-quality, sustainable materials' },
    { name: 'Organic Supplements', useCase: 'Health & Wellness', benefits: 'Certified organic, lab-tested' },
    { name: 'Smart Home Devices', useCase: 'Technology', benefits: 'IoT-enabled, user-friendly' },
    { name: 'Personal Care Products', useCase: 'Beauty & Wellness', benefits: 'Natural ingredients, proven results' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
{/* Hero Section  */}
<section className="relative min-h-[50vh] lg:min-h-[64vh] flex items-center overflow-hidden">
  <div
    aria-hidden
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
    }}
  />
  {/* Dark scrim + brand tint */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/35" />
  <div className="absolute inset-0 mix-blend-multiply bg-primary/20" />

  {/* Content */}
  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="font-heading text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] text-5xl lg:text-7xl font-bold mb-8 animate-fade-in">
        From Vision to Global Reach      
      </h1>
      <p
      className="text-xl lg:text-3xl text-white/90 leading-relaxed mb-6 animate-fade-in"
      style={{ animationDelay: '0.15s' }}
      >
      We help ambitious brands scale confidently into new markets with strategy, sourcing, technology, and execution.  
      </p>

    </div>
  </div>
</section>


      {/* What We Offer - Services Snapshot Grid */}
      <WhatWeOffer/>



      {/* Detailed Service Sections - Cascade Layout */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {detailedServices.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-20 last:mb-0 animate-fade-in ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 rounded-lg p-3 mr-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Built for Founders, Operators, and Innovators
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We partner with ambitious businesses at every stage of growth, from startups to established brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{client.icon}</div>
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {client.title}
                </h3>
                <p className="text-muted-foreground text-sm">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zakaria Concepts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Strategy + Execution. Backed by 30+ Years of Experience.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                { icon: Award, title: 'Decades of international business experience' },
                { icon: Globe, title: 'Cross-industry sourcing and compliance know-how' },
                { icon: Network, title: 'Strong U.S. & LATAM supply chain network' },
                { icon: Users, title: 'Personalized, boutique-style partnership approach' },
              ].map((item, index) => (
                <div key={index} className="flex items-center text-left animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-primary/10 rounded-lg p-3 mr-4 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.title}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.location.href = '/philosophy'}
            >
              Why Our Clients Trust Us
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Featured White Label Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready-to-market solutions across our core industries, customizable to your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card border-border hover:border-primary/50 hover:shadow-lg p-6 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4">
                  <Package className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.useCase}</p>
                  <p className="text-sm text-primary font-medium">{product.benefits}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center space-x-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.location.href = '/contact'}
            >
              View Full Catalog
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.location.href = '/contact'}
            >
              Request Sample Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Solutions */}
      <TechSolutionsCTA />

      <Footer />
    </div>
  );
};

export default Services;