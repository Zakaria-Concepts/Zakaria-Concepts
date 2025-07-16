import { MapPin, Users, Clock, Award } from 'lucide-react';

const GlobalPresence = () => {
  const regions = [
    {
      name: 'United States',
      description: 'Extensive distribution network covering major metropolitan areas',
      flag: '🇺🇸'
    },
    {
      name: 'Canada',
      description: 'Strategic partnerships ensuring comprehensive coverage',
      flag: '🇨🇦'
    },
    {
      name: 'Middle East',
      description: 'Regional expertise with deep market understanding',
      flag: '🌍'
    },
  ];

  const stats = [
    { icon: MapPin, value: '50+', label: 'Distribution Centers' },
    { icon: Users, value: '500+', label: 'Global Partners' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Award, value: '99.5%', label: 'Delivery Success Rate' },
  ];

  return (
    <section id="global" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Global Presence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our strategic locations and partnerships enable us to deliver exceptional service worldwide.
          </p>
        </div>

        {/* Regions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{region.flag}</div>
                <h3 className="font-semibold text-xl text-foreground mb-3">{region.name}</h3>
                <p className="text-muted-foreground text-sm">{region.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;