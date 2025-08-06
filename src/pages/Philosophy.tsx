import { Shield, Globe, Lightbulb, Heart, Zap, Users, Target, TrendingUp, Handshake, Eye, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Philosophy = () => {
  const strengths = [
    {
      icon: Globe,
      title: 'Global Distribution Network',
      description: 'Strategic presence across North America and the Middle East with deep market knowledge and cultural understanding.'
    },
    {
      icon: Handshake,
      title: 'Trusted Partnerships',
      description: 'Long-standing relationships with premium manufacturers and distributors built on mutual respect and shared success.'
    },
    {
      icon: Users,
      title: 'Customer-Centricity',
      description: 'Every decision is made with our partners\' growth and satisfaction as the driving force behind our actions.'
    },
    {
      icon: Zap,
      title: 'Operational Excellence',
      description: 'Streamlined processes and cutting-edge logistics ensure reliable, efficient delivery across all markets.'
    }
  ];

  const approach = [
    {
      icon: Target,
      title: 'Market Research & Intelligence',
      description: 'Deep analysis of market trends, consumer behavior, and competitive landscapes to identify the best opportunities for our partners.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Through Collaboration',
      description: 'We work closely with manufacturers to understand their capabilities and help distributors find products that meet evolving market demands.'
    },
    {
      icon: Eye,
      title: 'Transparency & Communication',
      description: 'Open, honest communication at every step ensures all parties are informed and aligned throughout the partnership journey.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Regular feedback loops and performance analysis help us refine our processes and deliver ever-improving results.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'We conduct business with unwavering honesty, ethical standards, and respect for all stakeholders in every transaction.'
    },
    {
      icon: Star,
      title: 'Quality Excellence',
      description: 'Commitment to connecting only the highest quality products with markets that value premium standards and reliability.'
    },
    {
      icon: Users,
      title: 'People-Centered',
      description: 'Our success is measured by the relationships we build and the positive impact we create for people and communities.'
    },
    {
      icon: Heart,
      title: 'Sustainability Focus',
      description: 'Promoting responsible business practices that benefit the environment, communities, and future generations.'
    }
  ];

  const philosophy = [
    {
      icon: Globe,
      title: 'Value-Driven Growth',
      description: 'We believe sustainable business growth comes from creating genuine value for manufacturers, distributors, and end consumers.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Mindset',
      description: 'Embracing new technologies, processes, and ideas to stay ahead of market changes and exceed partner expectations.'
    },
    {
      icon: Handshake,
      title: 'Partnership Philosophy',
      description: 'Long-term success is built on mutual trust, shared goals, and collaborative problem-solving with all our partners.'
    },
    {
      icon: TrendingUp,
      title: 'Adaptive Excellence',
      description: 'Continuously evolving our strategies and capabilities to meet the changing needs of global markets and industries.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our Strengths &
              <span className="text-primary"> Philosophy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
              Discover what sets Zakaria Concepts apart—our unique strengths, proven approach, core values, and strategic philosophy that drive success for our global partners.
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <Shield className="w-5 h-5" />
              <span>Built on trust, powered by innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our distinctive strengths form the foundation of our success and the cornerstone of our partners' confidence in us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strengths.map((strength, index) => (
                <div 
                  key={index} 
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/50 transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                        <strength.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{strength.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven approach combines deep market intelligence with collaborative partnership to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {approach.map((item, index) => (
                <div 
                  key={index} 
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/50 transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every relationship we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/50 transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Philosophy */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Strategic Philosophy
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our strategic thinking shapes how we approach partnerships, innovation, and long-term growth for all stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {philosophy.map((item, index) => (
                <div 
                  key={index} 
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/50 transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
              <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Experience Our Philosophy in Action
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                See how our strengths, approach, values, and strategic thinking translate into real results for our partners. Let's discuss how we can apply our philosophy to your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  Learn About Our Services
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