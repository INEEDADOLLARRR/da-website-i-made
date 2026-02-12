import React from 'react';
import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal';
import { Home, Hammer, CloudLightning, Layers, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

const services = [
  {
    icon: <ArrowUpRight className="w-6 h-6" />,
    title: "Double Your Leads",
    description: "Stop relying on shared leads like Angi. We build systems that generate exclusive, high-quality appointments directly to your phone.",
    tags: ["SEO Optimized", "Lead Capture", "Google Maps"]
  },
  {
    icon: <CloudLightning className="w-6 h-6" />,
    title: "Convert More Visitors",
    description: "Most roofer websites leak money. We implement high-converting quote forms, click-to-call buttons, and trust signals.",
    tags: ["Quote Forms", "Click-to-Call", "Fast Loading"]
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Own Your Local Market",
    description: "Dominate search results for 'roofer near me' with city-specific landing pages and schema markup that Google loves.",
    tags: ["City Pages", "Local SEO", "Schema Markup"]
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Look Like a $10M Company",
    description: "First impressions matter. We design premium, mobile-first websites that position you as the authority in your area.",
    tags: ["Premium Design", "Project Gallery", "Brand Authority"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Everything Your Roofing Business <br /><span className="text-zinc-400">Needs to Dominate Online.</span>
            </h2>
            <p className="text-xl text-secondary font-normal">
              We don't just build pretty websites. We build 24/7 sales machines that fill your calendar with inspections.
            </p>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index} className="h-full">
              <div className="h-full bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-2xl hover:border-accent/20 transition-all duration-500 group flex flex-col relative overflow-hidden">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 text-zinc-900 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">{service.title}</h3>
                <p className="text-secondary text-base leading-relaxed mb-8 font-normal">
                  {service.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-zinc-50 text-secondary rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-8 right-8 text-zinc-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  →
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
            <Button onClick={() => document.getElementById('materials')?.scrollIntoView({ behavior: 'smooth' })} variant="secondary" className="px-8">
              See Demo Websites
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};