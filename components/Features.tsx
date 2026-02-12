import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Check } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { cn } from '../utils';

const materials = [
  {
    id: 1,
    title: "Asphalt Shingles",
    subtitle: "The Versatile Classic",
    description: "Cost-effective durability with a wide range of colors. Our architectural shingles offer depth and superior weather resistance.",
    image: "https://images.unsplash.com/photo-1628135899732-c11578e06380?auto=format&fit=crop&q=80&w=1600",
    features: ["Most Popular Choice", "25-50 Year Lifespan", "Class A Fire Rating"]
  },
  {
    id: 2,
    title: "Metal Roofing",
    subtitle: "Modern Longevity",
    description: "Standing seam metal roofs provide a sleek, contemporary look with unmatched durability against wind, hail, and fire.",
    image: "https://images.unsplash.com/photo-1621255557766-c958619bc306?auto=format&fit=crop&q=80&w=1600",
    features: ["70+ Year Lifespan", "Energy Efficient", "Recyclable Material"]
  },
  {
    id: 3,
    title: "Tile & Slate",
    subtitle: "Timeless Elegance",
    description: "For the discerning homeowner. Clay tile and natural slate offer distinct beauty and old-world charm that lasts a century.",
    image: "https://images.unsplash.com/photo-1596253457597-2a6c38290327?auto=format&fit=crop&q=80&w=1600",
    features: ["Premium Aesthetic", "Natural Insulation", "Century Durability"]
  },
  {
    id: 4,
    title: "Flat Roofing",
    subtitle: "TPO & PVC Systems",
    description: "Advanced membrane solutions for modern flat-roof structures, ensuring watertight integrity and heat reflection.",
    image: "https://images.unsplash.com/photo-1621255557833-255d65457223?auto=format&fit=crop&q=80&w=1600",
    features: ["UV Resistant", "Waterproof Seal", "Low Maintenance"]
  }
];

export const Materials = () => {
  const [activeMaterial, setActiveMaterial] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Breakpoints for 4 items: 0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1
    if (latest < 0.25) setActiveMaterial(0);
    else if (latest < 0.5) setActiveMaterial(1);
    else if (latest < 0.75) setActiveMaterial(2);
    else setActiveMaterial(3);
  });

  return (
    <section ref={containerRef} className="relative bg-background" id="materials">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Sticky Image Section */}
          <div className="hidden lg:block w-1/2 relative h-[400vh]">
            <div className="sticky top-24 w-full h-[80vh] rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl">
              {materials.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeMaterial === index ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-8 left-8">
                    <h4 className="text-white text-3xl font-bold">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scrolling Content Section */}
          <div className="w-full lg:w-1/2 py-24 lg:py-0">
            <div className="mb-24 lg:h-[40vh] flex flex-col justify-center">
              <Reveal>
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Material Selection</span>
                <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">
                  Curated <br /> <span className="text-zinc-400">Excellence.</span>
                </h2>
                <p className="text-xl text-secondary">
                  We only install materials from manufacturers we trust on our own homes.
                </p>
              </Reveal>
            </div>

            {materials.map((item, index) => (
              <div key={item.id} className="min-h-[80vh] flex flex-col justify-center mb-12 lg:mb-0">
                {/* Mobile Image */}
                <div className="lg:hidden w-full h-64 rounded-2xl overflow-hidden mb-8 shadow-lg relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 text-white font-bold text-xl">{item.title}</div>
                </div>

                <Reveal>
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300",
                    activeMaterial === index ? "text-primary" : "text-zinc-300 lg:text-zinc-300"
                  )}>
                    {item.subtitle}
                  </h3>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-lg text-secondary leading-relaxed max-w-md mb-8">
                    {item.description}
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <ul className="space-y-4">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-primary font-medium">
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                          <Check className="w-3 h-3" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};