import React from 'react';

const logos = [
  {
    src: 'public/assets/CompanyLogos/galax.png',
    alt: 'Company 1',
  },
  {
    src: 'public/assets/CompanyLogos/stitch.png',
    alt: 'Company 2',
  },
  {
    src: 'public/assets/logoalt.png',
    alt: 'Company 3',
  },
];

const PartnerLogos = () => {
    return (
        <section className="py-16 lg:py-24 bg--50 relative">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Trusted by Industry Leaders
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-2">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out opacity-80 hover:opacity-100 flex items-center justify-center"
                            style={{ width: 370, height: 185 }} // Easily adjust width/height here
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="object-contain"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
