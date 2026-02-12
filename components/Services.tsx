import React from 'react';
import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal';
import { Home, Hammer, CloudLightning, Layers, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Lifetime Replacement",
    description: "Architectural shingle and luxury metal installations engineered for Austin's unique climate and storms.",
    tags: ["GAF MasterElite", "Luxury Metal", "Lifetime Warranty"]
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "Precision Repair",
    description: "Expert leak detection and rapid structural repairs to stop damage before it compromises your home.",
    tags: ["24-Hour Tarping", "Leak Detection", "Shingle Repair"]
  },
  {
    icon: <CloudLightning className="w-6 h-6" />,
    title: "Storm Restoration",
    description: "Direct insurance coordination and comprehensive restoration after hail, wind, or fire damage.",
    tags: ["Hail Specialists", "Claims Liaison", "Fast Recovery"]
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Gutters & Exterior",
    description: "Seamless gutter systems and premium siding solutions that redirect water and enhance curb appeal.",
    tags: ["Seamless Systems", "Leaf Protection", "Vinyl & Fiber"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Engineering Your <br /><span className="text-zinc-400">First Line of Defense.</span>
            </h2>
            <p className="text-xl text-secondary font-normal">
              We don't just sit on roofs; we provide the ultimate peace of mind through master-level architecture and installation.
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
                <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-zinc-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};