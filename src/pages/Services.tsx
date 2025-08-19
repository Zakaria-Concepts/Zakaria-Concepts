import {
  Globe, Package, Truck, Shield, TrendingUp, Zap, CheckCircle, Award,
  Users, MapPin, Star, ArrowRight, Calendar
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Global Sourcing & Procurement',
      description: 'Vetted supplier network across industries ensuring cost‑efficient, quality‑assured procurement.',
      image: 'https://images.pexels.com/photos/8828624/pexels-photo-8828624.jpeg',
      bullets: ['Competitive supplier pricing', 'Verified manufacturing partners', 'Ethical sourcing practices'],
    },
    {
      icon: Package,
      title: 'White Label & Private Label Solutions',
      description: 'Bring products to market faster with ready‑to‑sell solutions under your brand.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      bullets: ['Premium textiles', 'Organic supplements', 'Smart home devices', 'Personal care products'],
    },
    {
      icon: MapPin,
      title: 'International Distribution',
      description: 'Seamless entry into USA, GCC, and LATAM with local compliance, partnerships, and optimized inventory.',
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg',
      bullets: ['Multi‑region compliance', 'Local partnerships', 'Strategic inventory positioning'],
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'End‑to‑end logistics solutions for reliable, on‑time delivery worldwide.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      bullets: ['Real‑time tracking', 'Warehousing & inventory control', 'Last‑mile optimization'],
    },
    {
      icon: TrendingUp,
      title: 'Market Entry & Expansion',
      description: 'Data‑driven strategies to adapt and thrive in new markets.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      bullets: ['Market research & analysis', 'Localized branding', 'Distributor matching'],
    },
    {
      icon: Shield,
      title: 'Quality Assurance & Compliance',
      description: 'Rigorous quality control to meet international standards.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      bullets: ['Pre‑shipment inspections', 'Product testing & certification', 'Ongoing quality monitoring'],
    },
    {
      icon: Zap,
      title: 'Technology & E‑Commerce',
      description: 'Scalable digital infrastructure to support growth.',
      image: '/assets/Generalphotos/ecommerce.png',
      bullets: ['Shopify stores', 'ERP integration', 'Automation & dashboards'],
    },
  ];

  const whyChooseUs = [
    { icon: Award, title: '30+ years of international trade & distribution' },
    { icon: Globe, title: 'Networks in U.S., LATAM, and GCC' },
    { icon: Users, title: 'Cross‑industry knowledge: retail, wellness, fashion, tech' },
    { icon: Star,  title: 'Boutique‑style, client‑first service' },
  ];

  const testimonials = [
    {
      quote:
        'Zakaria Concepts helped us expand into the Middle East seamlessly. Their partnerships and compliance expertise saved us months.',
      author: 'Sarah Mitchell',
      company: 'TechFlow Solutions',
      result: '150% revenue increase in year one',
    },
    {
      quote:
        'Their white‑label solutions let us launch three product lines 6 months early. Quality was exceptional.',
      author: 'David Rodriguez',
      company: 'Wellness Plus',
      result: '6 months faster to market',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO — responsive + legible */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/35" />
        <div className="absolute inset-0 mix-blend-multiply bg-primary/20" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
              From Vision to Global Reach
            </h1>
            <p className="text-white/90 text-base sm:text-lg lg:text-2xl leading-relaxed mb-6 sm:mb-8 max-w-3xl">
              Scale confidently into new markets with strategy, sourcing, technology, and execution.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 sm:px-8 py-4 group"
              onClick={() => window.location.href = '/contact'}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" />
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES — mobile-first, alternates on lg via order classes */}
      <section id="services" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to expand globally with confidence and efficiency.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Media */}
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover aspect-[16/9] transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-3">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                        {s.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-5">
                      {s.description}
                    </p>

                    <ul className="grid gap-2 mb-6">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — compact, responsive grid */}
      <section id="why-choose-us" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Zakaria Concepts?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Decades of expertise, proven results, and a commitment to your success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border hover:shadow-lg transition"
              >
                <div className="rounded-lg p-2 bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-foreground">{title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              onClick={() => window.location.href = '/contact'}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" />
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — 1col → 2col */}
      <section id="testimonials" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from businesses that trusted us with their global expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t) => (
              <Card key={t.author} className="p-8 bg-card border-border hover:border-primary/50 hover:shadow-xl transition">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                    “{t.quote}”
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{t.author}</p>
                      <p className="text-muted-foreground text-sm">{t.company}</p>
                    </div>
                    <p className="text-primary font-semibold text-sm">{t.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — stacked on mobile */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Expand Globally?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 lg:mb-8 max-w-3xl mx-auto">
              Startup or established brand—we deliver the expertise, infrastructure, and network to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 group"
                onClick={() => window.location.href = '/contact'}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
                onClick={() => window.location.href = '/contact'}
              >
                Download Our Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Motion accessibility */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition, .transition-all, .transition-transform { transition: none !important; }
          .hover\\:scale-105:hover, .hover\\:scale-110:hover { transform: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Services;
