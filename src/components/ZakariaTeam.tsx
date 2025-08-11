import React from 'react';
const team = [
  {
    name: 'Sohail Zakaria',
    role: 'CEO',
    image: 'assets/teamphotos/TeamZaksohail.webp',
    description:
      "Visionary leader with over 15 years of experience forging strategic partnerships between manufacturers and distributors across global markets.",
  },
  {
    name: 'Vanessa',
    role: 'Production quality & operations lead',
    image: 'assets/teamphotos/Teamvanessa.webp',
    description:
      'Expert in quality control and operations, leading processes that ensure product excellence from manufacturing to final delivery.',
  },
  {
    name: 'Karoline',
    role: 'International Sales Intern',
    image: 'assets/teamphotos/Teamkaroline.webp',
    description:
      'Passionate about international trade, supporting business expansion through market analysis and relationship management.',
  },
  {
    name: 'Asia and Middle East Extended Team',
    role: '',
    image: 'https://media.gettyimages.com/id/1284346714/es/foto/grupo-de-asiáticos-chino-exitoso-equipo-de-gestión-de-la-oficina-teniendo-discusión-mientras.jpg?s=612x612&w=0&k=20&c=IoKN3cUiFu91NYn-dQmzOHdsIO75viT-btRxYJOUZyM=',
    description:
      'A specialized team connecting manufacturers from Asia and the Middle East with emerging markets, ensuring culturally and commercially tailored solutions.',
  },  {
    name: 'USA Extended Team',
    role: '',
    image: 'https://media.gettyimages.com/id/1373240838/es/foto/motivación-positiva-del-equipo.jpg?s=612x612&w=0&k=20&c=MQ9txXTaL32cdjtke1DImI83qd8tZAq9Wt2yEBsdCJg=',
    description:
      'A dedicated team focused on streamlining operations and strengthening partnerships across North America, driving growth through local market expertise.',
  },
];

const ZakariaTeam = () => {
  return (
    <section className="py-16 lg:py-11 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="text-primary font-heading text-4xl mb-3">Meet Our Team</h1>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground pb-2">
              The Talented People Behind <span className="italic text-primary">Zakaria Concepts</span>
            </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-80 bg-card border border-border rounded-xl shadow-md p-10 relative animate-fade-in hover:border-primary hover:shadow-lg hover:scale-110 transition-transform duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg"
                />
              </div>
              <div className="pt-14 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-3">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZakariaTeam;
