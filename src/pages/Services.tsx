import { 
  Globe, 
  Package, 
  Truck, 
  Shield, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Award,
  Users,
  MapPin,
  Star,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Global Sourcing & Procurement',
      description: 'Vetted supplier network across industries ensuring cost-efficient, quality-assured procurement.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bullets: [
        'Competitive supplier pricing',
        'Verified manufacturing partners',
        'Ethical sourcing practices'
      ]
    },
    {
      icon: Package,
      title: 'White Label & Private Label Solutions',
      description: 'Bring products to market faster with ready-to-sell solutions under your own brand identity.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bullets: [
        'Premium textiles',
        'Organic supplements',
        'Smart home devices',
        'Personal care products'
      ]
    },
    {
      icon: MapPin,
      title: 'International Distribution',
      description: 'Seamless entry into USA, GCC, and LATAM with local compliance, partnerships, and optimized inventory positioning.',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bullets: [
        'Multi-region compliance',
        'Local partnerships',
        'Strategic inventory positioning'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain Management',
      description: 'End-to-end logistics solutions for reliable, on-time delivery worldwide.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bullets: [
        'Real-time tracking',
        'Warehousing & inventory control',
        'Last-mile optimization'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Market Entry & Expansion Advisory',
      description: 'Data-driven strategies to adapt and thrive in new markets.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bullets: [
        'Market research & analysis',
        'Localized branding',
        'Distributor matching'
      ]
    },
    {
      icon: Shield,
      title: 'Quality Assurance & Compliance',
      description: 'Rigorous quality control to meet international standards.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bullets: [
        'Pre-shipment inspections',
        'Product testing & certification',
        'Ongoing quality monitoring'
      ]
    },
    {
      icon: Zap,
      title: 'Technology Integration & E-Commerce Solutions',
      description: 'Scalable digital infrastructure to support growth.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bullets: [
        'Shopify store creation',
        'ERP integration',
        'Automation & dashboards'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '30+ years of international trade and distribution expertise'
    },
    {
      icon: Globe,
      title: 'Strong networks in U.S., LATAM, and GCC (Gulf Cooperation Council)'
    },
    {
      icon: Users,
      title: 'Cross-industry knowledge in retail, wellness, fashion, and tech'
    },
    {
      icon: Star,
      title: 'Boutique-style, client-focused service'
    }
  ];

  const testimonials = [
    {
      quote: "Zakaria Concepts helped us expand into the Middle East market seamlessly. Their local partnerships and compliance expertise saved us months of preparation time.",
      author: "Sarah Mitchell",
      company: "TechFlow Solutions",
      result: "150% revenue increase in first year"
    },
    {
      quote: "The white-label solutions provided by Zakaria allowed us to launch three new product lines 6 months ahead of schedule. Their quality standards are exceptional.",
      author: "David Rodriguez", 
      company: "Wellness Plus",
      result: "6 months faster to market"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
<section className="relative min-h-[50vh] lg:min-h-[64vh] flex items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-primary/10" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-foreground text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              From Vision to Global Reach
            </h1>
            <p 
              className="text-xl lg:text-2xl text-white leading-relaxed mb-8 animate-fade-in max-w-3xl"
              style={{ animationDelay: '0.2s' }}
            >
              We help ambitious brands scale confidently into new markets with strategy, sourcing, technology, and execution.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 animate-fade-in group"
              style={{ animationDelay: '0.4s' }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid - Cascade Layout */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to help your business expand globally with confidence and efficiency.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 animate-fade-in ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-3">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zakaria Concepts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose Zakaria Concepts?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Decades of expertise, proven results, and a commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-card rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-in group hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from businesses that trusted us with their global expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-semibold text-sm">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Expand Globally?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Whether you're a startup or an established brand, we deliver the expertise, infrastructure, and network to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
              >
                Download Our Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;