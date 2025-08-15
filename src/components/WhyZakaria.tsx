import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Network, Handshake, Layers } from "lucide-react";

const points = [
  { icon: ShieldCheck, text: "Decades of international business experience" },
  { icon: Network, text: "Cross-industry sourcing and compliance know-how" },
  { icon: Handshake, text: "Strong U.S. & LATAM supply chain network" },
  { icon: Layers, text: "Personalized, boutique-style partnership approach" },
];

const WhyZakaria: React.FC = () => (
  <section aria-labelledby="why-heading" className="relative py-16 lg:py-24 overflow-hidden bg-muted/30 shadow-xl">
    {/* Subtle background for depth */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(0,0,0,0.06),transparent)]" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
        {/* Left: headline + intro copy */}
        <div>
          <span className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary text-medium font-medium">
            Why Zakaria Concepts?
          </span>
          <h2
            id="why-heading"
            className="mt-4 font-heading text-3xl lg:text-4xl font-bold text-foreground"
          >
            Strategy + Execution. Backed by 30+ Years of Experience.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
          We help brands launch, scale, and thrive through high-quality products, turnkey services, and innovative strategies. With operations in the U.S., Canada, and GCC, our global network and decades of expertise deliver exceptional value—from sourcing and white-label solutions to tech consulting and market entry support.
          </p>
        </div>

        {/* Right: bullet list with icons */}
        <div className="grid gap-4">
          {points.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl border border-border/70 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60
                         transition-colors hover:border-primary/40"
            >
              <div className="mt-0.5 shrink-0 rounded-lg p-2 bg-primary/10 text-primary">
                <Icon className="w-5 h-6" />
              </div>
              <p className="text-foreground/90">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center lg:text-left">
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10"
          onClick={() => (window.location.href = "/philosophy")}
        >
          Why Our Clients Trust Us
        </Button>
      </div>
    </div>
  </section>
);

export default WhyZakaria;
