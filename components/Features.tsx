import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Check } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { cn } from '../utils';

const materials = [
  {
    id: 1,
    title: "SEO-Optimized Pages",
    subtitle: "Dominate Local Search",
    description: "We create specific landing pages for every city you serve and every service you offer (Repair, Replacement, Gutter). This is the secret to ranking #1 for 'roofer in [city]'.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1600",
    features: ["City-Specific Pages", "Keyword Rich Content", "Google Maps Integration"]
  },
  {
    id: 2,
    title: "Lead Capture System",
    subtitle: "Automated Lead Gen",
    description: "Never miss a lead. Our websites come with high-converting quote forms, CRM integration, and instant lead notifications sent directly to your phone/email.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1600",
    features: ["Instant Notifications", "CRM Connection", "Spam Protection"]
  },
  {
    id: 3,
    title: "Mobile-First Design",
    subtitle: "Perfect on Phones",
    description: "70% of homeowners search for roofers on their phones. We design mobile-first to ensure your site is fast, easy to use, and has one-click calling.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600",
    features: ["Fast Loading Speed", "Click-to-Call Sticky", "Thumb-Friendly"]
  },
  {
    id: 4,
    title: "Ongoing Support",
    subtitle: "We've Got Your Back",
    description: "We don't just launch and leave. We handle hosting, security updates, image changes, and monthly SEO reporting so you can focus on roofing.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
    features: ["Hosting Included", "Security Updates", "Monthly Reports"]
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
                  <div className="absolute inset-0 bg-black/40" />
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
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">What's Included</span>
                <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">
                  Curated <br /> <span className="text-zinc-400">Excellence.</span>
                </h2>
                <p className="text-xl text-secondary">
                  Every website we build is engineered for one purpose: to get you more booked jobs.
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