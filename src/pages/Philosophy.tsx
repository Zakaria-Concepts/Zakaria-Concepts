import { Shield, Globe, Lightbulb, Heart, Zap, Users, Target, TrendingUp, Handshake, Eye, Star, ArrowRight, ChevronLeft, ChevronRight, Building2, Award, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

const Philosophy = () => {
  const [visibleSection, setVisibleSection] = useState('');

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-scroll-reveal]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      icon: Globe,
      title: 'Global Distribution Network',
      description: 'Strategic presence across North America and the Middle East with deep market knowledge and cultural understanding.',
      details: 'Our extensive network spans major trade hubs, enabling seamless cross-border commerce and localized market expertise.'
    },
    {
      icon: Handshake,
      title: 'Trusted Partnerships',
      description: 'Long-standing relationships with premium manufacturers and distributors built on mutual respect and shared success.',
      details: 'Over 30 years of building relationships that go beyond transactions to create lasting value for all parties.'
    },
    {
      icon: Users,
      title: 'Customer-Centricity',
      description: 'Every decision is made with our partners\' growth and satisfaction as the driving force behind our actions.',
      details: 'We measure our success by our partners\' success, ensuring every solution is tailored to drive growth.'
    },
    {
      icon: Zap,
      title: 'Operational Excellence',
      description: 'Streamlined processes and cutting-edge logistics ensure reliable, efficient delivery across all markets.',
      details: 'Advanced technology and proven methodologies guarantee consistent, high-quality service delivery.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality standards and continuous monitoring ensure only the finest products reach your markets.',
      details: 'Multi-layer quality control processes from sourcing to delivery maintain our reputation for excellence.'
    },
    {
      icon: Building2,
      title: 'Market Intelligence',
      description: 'Deep insights into consumer trends and market dynamics guide strategic decision-making.',
      details: 'Data-driven approach combined with local expertise provides competitive advantage in every market.'
    }
  ];

  const approach = [
    {
      step: '01',
      icon: Target,
      title: 'Market Research & Intelligence',
      description: 'Deep analysis of market trends, consumer behavior, and competitive landscapes to identify the best opportunities for our partners.'
    },
    {
      step: '02',
      icon: Lightbulb,
      title: 'Innovation Through Collaboration',
      description: 'We work closely with manufacturers to understand their capabilities and help distributors find products that meet evolving market demands.'
    },
    {
      step: '03',
      icon: Eye,
      title: 'Transparency & Communication',
      description: 'Open, honest communication at every step ensures all parties are informed and aligned throughout the partnership journey.'
    },
    {
      step: '04',
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Regular feedback loops and performance analysis help us refine our processes and deliver ever-improving results.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'We conduct business with unwavering honesty, ethical standards, and respect for all stakeholders in every transaction.',
      example: 'Transparent pricing and clear communication in every deal'
    },
    {
      icon: Star,
      title: 'Quality Excellence',
      description: 'Commitment to connecting only the highest quality products with markets that value premium standards and reliability.',
      example: 'Rigorous supplier vetting and quality control processes'
    },
    {
      icon: Users,
      title: 'People-Centered',
      description: 'Our success is measured by the relationships we build and the positive impact we create for people and communities.',
      example: 'Supporting local communities through ethical business practices'
    },
    {
      icon: Heart,
      title: 'Sustainability Focus',
      description: 'Promoting responsible business practices that benefit the environment, communities, and future generations.',
      example: 'Partnering with eco-conscious brands and sustainable suppliers'
    }
  ];

  const philosophy = [
    {
      icon: Globe,
      title: 'Value-Driven Growth',
      description: 'We believe sustainable business growth comes from creating genuine value for manufacturers, distributors, and end consumers.',
      image: '/assets/bg.png'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Mindset',
      description: 'Embracing new technologies, processes, and ideas to stay ahead of market changes and exceed partner expectations.',
      image: '/assets/bg2.png'
    },
    {
      icon: Handshake,
      title: 'Partnership Philosophy',
      description: 'Long-term success is built on mutual trust, shared goals, and collaborative problem-solving with all our partners.',
      image: '/assets/pexels-maxfrancis-2246476.jpg'
    },
    {
      icon: TrendingUp,
      title: 'Adaptive Excellence',
      description: 'Continuously evolving our strategies and capabilities to meet the changing needs of global markets and industries.',
      image: '/assets/bg.png'
    }
  ];

  const metrics = [
    { value: '30+', label: 'Years of Experience', icon: Clock },
    { value: '50+', label: 'Global Partners', icon: Globe },
    { value: '15+', label: 'Countries Served', icon: MapPin },
    { value: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
    {/* Hero Section */}
    <section className="relative pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/bg2.png')`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Optional subtle texture overlay */}
      <div
        className="absolute inset-0 bg-[url('/assets/bg.png')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl pt-7 mx-auto text-center animate-fade-in">
          <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground mb-6">
            Built on Trust,
            <span className="text-primary block">Powered by Innovation</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12">
            Discover the philosophy that drives three decades of successful partnerships and strategic growth across global markets.
          </p>
          <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 text-primary font-medium">
            <Shield className="w-6 h-6" />
            <span>Experience. Excellence. Evolution.</span>
          </div>
        </div>
      </div>
    </section>


      {/* Strengths Carousel */}
      <section className="py-16 lg:py-24 bg-muted/30" data-scroll-reveal id="strengths">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover the distinctive strengths that have made us a trusted partner for global brands and emerging businesses alike.
              </p>
            </div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-4">
                {strengths.map((strength, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full group hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <CardContent className="p-8">
                        <div className="bg-primary/10 rounded-xl p-4 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                          <strength.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">{strength.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{strength.description}</p>
                        <p className="text-sm text-primary font-medium">{strength.details}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* How We Work - Interactive Timeline */}
      <section className="py-16 lg:py-24" data-scroll-reveal id="approach">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology combines strategic thinking with tactical execution to deliver exceptional results.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 h-full hidden lg:block" />
              
              <div className="space-y-16">
                {approach.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-fade-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-1">
                      <Card className="bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="bg-primary/10 rounded-lg p-3">
                              <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-3xl font-bold text-primary/60">{item.step}</span>
                          </div>
                          <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-primary rounded-full border-4 border-background shadow-lg flex-shrink-0">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Animated Icon Grid */}
      <section className="py-16 lg:py-24 bg-muted/30" data-scroll-reveal id="values">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The fundamental principles that guide every decision and relationship we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="group hover:border-primary/50 transition-all duration-500 hover:scale-[1.05] animate-fade-in perspective-1000"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="bg-primary/10 rounded-xl p-4 w-fit mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{value.description}</p>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <p className="text-sm text-primary font-medium italic">{value.example}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Philosophy - Cascade Layout */}
      <section className="py-16 lg:py-24" data-scroll-reveal id="philosophy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Strategic Philosophy
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The strategic thinking that shapes our approach to partnerships, innovation, and sustainable growth.
              </p>
            </div>

            <div className="space-y-24">
              {philosophy.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary/10 rounded-xl p-4">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">{item.description}</p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="flex-1">
                    <div className="relative overflow-hidden rounded-2xl group">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Impact Section */}
      <section className="py-16 lg:py-24 bg-muted/30" data-scroll-reveal id="impact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Our Philosophy in Numbers
            </h2>
            <p className="text-lg text-muted-foreground mb-16 animate-fade-in">
              Three decades of building trust and delivering results across global markets.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card 
                  key={index} 
                  className="group hover:border-primary/50 transition-all duration-300 hover:scale-[1.05] animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <metric.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-foreground mb-2">{metric.value}</div>
                    <p className="text-muted-foreground">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 lg:p-16 animate-fade-in">
              <Globe className="w-16 h-16 text-primary mx-auto mb-8" />
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let's Put Our Philosophy to Work for You
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Ready to experience how our values, approach, and strategic thinking can transform your business? 
                Let's start a conversation about your goals and how we can help achieve them.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Philosophy;