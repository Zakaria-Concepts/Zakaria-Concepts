import React from 'react';
import { Settings, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const points = [
  'Shopify & storefronts listos para escalar',
  'ERP / inventario integrados a logística',
  'Automatización de fulfillment y facturación',
  'Asesoría técnica continua para crecer sin fricción',
];

const TechSolutionsCTA: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* background: sutil, coherente con tu theme */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(0,0,0,0.06),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Lado izquierdo: icono, título, copy */}
          <div>
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-2xl p-4 mb-6">
              <Settings className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              E‑commerce & Tech Solutions That Scale With You
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We help you launch or optimize your Shopify store, ERP systems, and fulfillment automation.
              Our tech advisory ensures your infrastructure grows alongside your business.
            </p>

            {/* Bullets de valor */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>

            {/* CTAs unificados */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                onClick={() => (window.location.href = '/contact')}
              >
                Talk to a Tech Advisor
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
                onClick={() => (window.location.href = '/contact')}
              >
                Start Your Journey
              </Button>
            </div>
          </div>

          {/* Lado derecho: card destacada con mini‑CTA dentro */}
          <div className="rounded-2xl border border-border bg-card/70 supports-[backdrop-filter]:bg-card/50 backdrop-blur p-6 lg:p-8 shadow-lg">
            <div className="rounded-xl overflow-hidden border border-border mb-6">
              <img
                src="https://img.freepik.com/free-photo/data-analytics-dashboard_23-2152001529.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Operations dashboard"
                className="w-full h-56 lg:h-64 object-cover"
                loading="lazy"
              />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Built for Scale, Ready from Day One
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From data architecture to last‑mile integrations, we set up a reliable stack so you can focus on growth.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Shopify', 'ERP', '3PL', 'Automations', 'Analytics'].map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Banda final dentro de la MISMA sección */}
        <div className="mt-14">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 px-6 py-8 lg:px-10 lg:py-10 text-center">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
              Let’s Build Something Great Together
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Ready to scale globally? Let’s discuss how our solutions can accelerate your growth.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-3"
              onClick={() => (window.location.href = '/contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolutionsCTA;
