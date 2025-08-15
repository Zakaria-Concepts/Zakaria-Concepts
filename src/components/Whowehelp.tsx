import React from "react";
import { Rocket, ShoppingBag, PackageSearch, Workflow } from "lucide-react";

const clients = [
  {
    icon: Rocket,
    title: "Startups  new product lines",
    copy: "From concept validation to market launch, we support your entire journey.",
  },
  {
    icon: ShoppingBag,
    title: "Retailers expanding into wellness",
    copy: "Access ready-to-sell white-label wellness products tailored to your market.",
  },
  {
    icon: PackageSearch,
    title: "Distributors seeking private label",
    copy: "Reliable sourcing and brand-ready SKUs with full compliance handled.",
  },
  {
    icon: Workflow,
    title: "Founders needing operational support",
    copy: "GTM execution, operational setup, and performance optimization.",
  },
];

export const WhoWeHelp: React.FC = () => (
  // <section aria-labelledby="who-heading" className="relative py-35 lg:py-24 overflow-hidden bg-muted/30 shadow-xl">
  <section aria-labelledby="who-heading" className="relative py-35 lg:py-5 overflow-hidden bg-muted/30 shadow-xl">

    {/* Subtle background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(0,0,0,0.06),transparent)]" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary text-md font-medium">
          Who We Help
        </span>
        <h2 id="who-heading" className="mt-4 font-heading text-3xl lg:text-4xl font-bold text-foreground">
          Built for Founders, Operators, and Innovators
        </h2>
        {/* <p className="mt-4 text-lg text-muted-foreground">
          We work with ambitious brands and leaders ready to scale.
        </p> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {clients.map((c, i) => (
          <div key={c.title} className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <c.icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.copy}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default WhoWeHelp;