import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Search, Package, Globe, ShoppingCart, Computer, ArrowRight } from "lucide-react";

const servicesSnapshot = [
  { icon: Lightbulb,     title: "Consulting",           description: "Market strategy, operations, go‑to‑market planning" },
  { icon: Search,        title: "Global Sourcing",      description: "Trusted suppliers, cost‑optimized procurement" },
  { icon: Package,       title: "White Label Products", description: "Ready‑to‑sell solutions, customized branding" },
  { icon: Globe,         title: "Distribution",         description: "Entry into U.S., GCC, LATAM markets" },
  { icon: ShoppingCart,  title: "Product Sales",        description: "Buy direct or collaborate on private label" },
  { icon: Computer,      title: "Tech Advisory",        description: "E-commerce, AI Agentic solutions, Digital Marketing" },
];

export const WhatWeOffer: React.FC = () => {
  return (
    <section className="relative py-4 lg:py-10 overflow-hidden bg-muted/30 shadow-xl">
      {/* subtle section background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(0,0,0,0.06),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
            What We Offer
          </h2>
          <p className="mt-4 text-2xl text-muted-foreground">
            All-in-One Solutions for Growth-Driven Brands
          </p>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesSnapshot.map((s, i) => (
            <Card
              key={s.title}
              className="
                group relative p-6 rounded-2xl border border-border/80
                bg-card/70 supports-[backdrop-filter]:bg-card/50 backdrop-blur
                shadow-sm hover:shadow-xl transition-all duration-300
                hover:-translate-y-1
              "
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* glow ring on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ boxShadow: "0 0 0 1px hsl(var(--primary)/.25), 0 10px 30px rgba(0,0,0,.15)" }} />

              <div className="flex items-start gap-4">
                {/* icon pill */}
                <div className="shrink-0 rounded-xl p-3 bg-primary/10 ring-1 ring-primary/15 group-hover:bg-primary/15 transition">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    {/* tiny affordance */}
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>

                  {/* mini tags (optional): remove if not needed */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.title === "Tech Advisory" && ["Shopify", "ERP", "Automations"].map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/15">
                        {t}
                      </span>
                    ))}
                    {s.title === "Distribution" && ["GCC", "USA", "LATAM"].map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/15">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => (window.location.href = "/services")}
          >
            See How We Can Help You Grow
          </Button>
        </div>
      </div>
    </section>
  );
};
