import { ArrowRight, Globe, Heart, Shield, Lightbulb, Leaf, Users, Mail, Linkedin, Truck, Zap, ShirtIcon as Textile, Utensils, Award, Clock, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZakariaTeam from '@/components/ZakariaTeam';
import CallToConnect from '@/components/Calltoconnect';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparency, reliability, and unwavering commitment to our partners\' success.',
      impact: 'Achieved 98% client retention rate over 5 years'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Connecting markets across continents with deep understanding of local needs and international standards.',
      impact: 'Operating in 15+ countries with localized expertise'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Through Feedback',
      description: 'Continuously evolving our services based on real insights from manufacturers and distributors worldwide.',
      impact: 'Launched 12 new service offerings based on client needs'
    },
    {
      icon: Leaf,
      title: 'Sustainability Focus',
      description: 'Promoting responsible business practices that benefit communities and preserve our planet for future generations.',
      impact: 'Reduced carbon footprint by 30% through optimized logistics'
    }
  ];

  const sectors = [
    { 
      icon: Textile, 
      name: 'Textiles', 
      description: 'Quality fabrics and materials connecting global suppliers with regional markets.',
      image: 'https://images.unsplash.com/photo-1558969114-f0492f0dd19d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Utensils, 
      name: 'Healthy Food', 
      description: 'Nutritious products that promote wellness across diverse communities.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Zap, 
      name: 'Technology', 
      description: 'Innovative solutions bridging the gap between cutting-edge manufacturers and end users.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Heart, 
      name: 'Personal Care', 
      description: 'Premium beauty and wellness products that enhance daily life.',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const regions = [
    {
      name: 'North America',
      description: 'Strategic operations across the United States and Canada, serving diverse markets with precision.',
      flag: '🇺🇸🇨🇦',
      details: 'Major hubs in New York, Toronto, and Los Angeles',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Middle East',
      description: 'Deep regional expertise connecting manufacturers with growing markets across the Middle East.',
      flag: '🌍',
      details: 'Regional offices in Dubai, Qatar, and Kuwait',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const journey = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'Started as a boutique distribution firm focusing on textile imports',
      icon: Calendar
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Extended operations to personal care and health food sectors',
      icon: ArrowRight
    },
    {
      year: '2016',
      title: 'Technology Integration',
      description: 'Launched digital platform for streamlined supply chain management',
      icon: Zap
    },
    {
      year: '2020',
      title: 'Global Reach',
      description: 'Established strategic partnerships across 15+ countries',
      icon: Globe
    },
    {
      year: '2024',
      title: 'Innovation Leader',
      description: 'Recognized as top distribution partner in multiple industry awards',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-8">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">
                Connecting businesses across 3 continents
              </span>
            </div>

            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground mb-8">
              Building Bridges Across
              <span className="text-primary block"> Global Markets</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
              We forge partnerships that transform businesses and connect cultures across textiles, food, technology, and personal care sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-scale-in">
                Our Story <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Visual Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in connecting exceptional manufacturers with thriving businesses across four key sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <sector.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{sector.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values - Icon-Based Presentation */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every decision is guided by our core values, creating lasting impact for partners and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <Card key={index} className="group p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 rounded-2xl p-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{value.description}</p>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-sm font-medium text-primary">{value.impact}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Operate - Interactive Map */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Where We Operate
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic presence across key global markets with localized expertise and international reach
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {regions.map((region, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="text-3xl">{region.flag}</div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{region.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{region.description}</p>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-sm font-medium text-primary">{region.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl p-6">
              <Globe className="w-8 h-8 text-primary" />
              <span className="text-foreground font-semibold text-lg">Expanding our reach to serve more markets globally</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a boutique firm to a global distribution leader - every milestone shaped our commitment to excellence
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            {journey.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-16 animate-fade-in ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'} hover:shadow-xl transition-all duration-500`}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <milestone.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <ZakariaTeam />

      {/* Closing CTA */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-8">
              Ready to Build Something
              <span className="text-primary block"> Great Together?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Let's create lasting partnerships that drive growth and connect markets across the globe
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="animate-scale-in text-lg px-8 py-4">
                Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="animate-scale-in text-lg px-8 py-4" style={{ animationDelay: '0.2s' }}>
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;