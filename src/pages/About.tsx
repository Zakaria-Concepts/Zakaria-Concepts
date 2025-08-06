import { ArrowRight, Globe, Heart, Shield, Lightbulb, Leaf, Users, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparency, reliability, and unwavering commitment to our partners\' success.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Connecting markets across continents with deep understanding of local needs and international standards.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Through Feedback',
      description: 'Continuously evolving our services based on real insights from manufacturers and distributors worldwide.'
    },
    {
      icon: Leaf,
      title: 'Sustainability Focus',
      description: 'Promoting responsible business practices that benefit communities and preserve our planet for future generations.'
    }
  ];

  const regions = [
    {
      name: 'North America',
      description: 'Strategic operations across the United States and Canada, serving diverse markets with precision.',
      flag: '🇺🇸🇨🇦'
    },
    {
      name: 'Middle East',
      description: 'Deep regional expertise connecting manufacturers with growing markets across the Middle East.',
      flag: '🌍'
    }
  ];

  const sectors = [
    { name: 'Textiles', description: 'Quality fabrics and materials connecting global suppliers with regional markets.' },
    { name: 'Health Food', description: 'Nutritious products that promote wellness across diverse communities.' },
    { name: 'Technology', description: 'Innovative solutions bridging the gap between cutting-edge manufacturers and end users.' },
    { name: 'Personal Care', description: 'Premium beauty and wellness products that enhance daily life.' }
  ];

  const teamMembers = [
    {
      name: 'Zakaria Al-Hassan',
      role: 'President & Founder',
      description: 'Visionary leader with 15+ years building strategic partnerships across global markets.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Operations Director',
      description: 'Expert in international logistics and supply chain optimization across three continents.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Marcus Chen',
      role: 'Business Development Lead',
      description: 'Specialist in manufacturer relationships and market expansion in North America and Asia.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Amira Kassem',
      role: 'Regional Manager - Middle East',
      description: 'Deep expertise in Middle Eastern markets with a focus on sustainable business practices.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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
              Building Bridges Across 
              <span className="text-primary"> Global Markets</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
              At Zakaria Concepts, we don't just move products—we forge partnerships that transform businesses and connect cultures. Every relationship we build is rooted in trust, transparency, and a shared vision for growth.
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <Users className="w-5 h-5" />
              <span>Trusted by manufacturers and distributors worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We specialize in connecting exceptional manufacturers with thriving businesses across key sectors, creating value through strategic partnerships and seamless logistics.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {sectors.map((sector, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{sector.name}</h3>
                  <p className="text-muted-foreground">{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Our Mission & Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every decision we make is guided by our core values, ensuring that we create lasting impact for our partners and the communities they serve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
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

      {/* Where We Operate */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Where We Operate
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our strategic presence across key global markets enables us to provide localized expertise with international reach.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {regions.map((region, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="text-4xl mb-4">{region.flag}</div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{region.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{region.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <Globe className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Expanding our reach to serve more markets globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the passionate people behind Zakaria Concepts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group-hover:scale-[1.02] hover:shadow-lg">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.description}</p>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                          <Mail className="w-4 h-4 text-primary" />
                        </div>
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                          <Linkedin className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Connect */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
              <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Build Something Great Together?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're a manufacturer seeking new markets or a distributor looking for quality products, we're here to create partnerships that drive mutual success. Let's explore how we can grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start a Conversation
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

export default About;