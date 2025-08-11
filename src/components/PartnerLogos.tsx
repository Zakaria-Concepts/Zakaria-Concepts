import React from 'react';

const logos = [
    { src: '/assets/CompanyLogos/galax.png', alt: 'Galax' },
    { src: '/assets/CompanyLogos/stitch.png', alt: 'Stitch' },
    { src: '/assets/logoalt.png', alt: 'Zakaria Concepts' },
];

// Duplicate logos for seamless loop
const Track: React.FC = () => (
    <div className="flex items-center gap-12 pr-12">
        {[...logos, ...logos].map((l, i) => (
            <div key={i} className="group shrink-0">
                <img
                    src={l.src}
                    alt={l.alt}
                    loading="lazy"
                    className="
                        h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain
                        opacity-90 hover:opacity-100 transition
                        drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                        invert-[0] brightness-100
                        group-hover:brightness-0
                        group-hover:invert
                        group-hover:hue-rotate-[var(--tw-hue,0deg)]
                        group-hover:saturate-[8]
                        group-hover:contrast-125
                        group-hover:drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]
                    "
                    style={{
                        filter: 'invert(0) brightness(1)',
                    }}
                />
            </div>
        ))}
    </div>
);

const PartnerLogosMarquee: React.FC = () => {
    return (
        <section
            aria-label="Partner Logos"
            className="relative py-10 lg:py-14 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0)_60%)]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
                    Trusted by <span className="italic">Industry Leaders</span>
                </h2>

                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

                    {/* Only one Track, duplicated logos */}
                    <div className="flex w-max animate-marquee-ltr will-change-transform">
                        <Track />
                        <Track />

                    </div>
                </div>

                <noscript>
                    <div className="mt-6 flex flex-wrap justify-center gap-12">
                        <Track />}
                    </div>
                </noscript>
            </div>

            <style>{`
                @keyframes marquee-ltr {
                    0%   { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-ltr {
                    animation: marquee-ltr 28s linear infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .animate-marquee-ltr { animation: none; transform: none; }
                }
            `}</style>
        </section>
    );
};

export default PartnerLogosMarquee;
