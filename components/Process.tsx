import React from 'react';
import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal';
import { ClipboardList, Calculator, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    step: "01",
    title: "Initial Inspection",
    description: "Free, no-obligation comprehensive roof analysis using drone technology."
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    step: "02",
    title: "Detailed Estimate",
    description: "Transparent pricing with material options tailored to your budget."
  },
  {
    icon: <HardHat className="w-6 h-6" />,
    step: "03",
    title: "Professional Install",
    description: "Most residential projects are completed in just one day by our master crew."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    step: "04",
    title: "Final Walkthrough",
    description: "Rigorous quality control check and magnetic sweep for total site cleanup."
  }
];

export const Process = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="mb-16">
          <Reveal>
            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Simple. Transparent. <br/><span className="text-zinc-500">Efficient.</span>
            </h2>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 z-0" />

           {steps.map((item, i) => (
             <StaggerItem key={i}>
                <div className="relative z-10">
                   <div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-black/50 text-blue-400">
                      {item.icon}
                   </div>
                   <div className="text-zinc-600 font-mono text-sm mb-2">STEP {item.step}</div>
                   <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                   <p className="text-zinc-400 text-sm leading-relaxed max-w-[240px]">
                      {item.description}
                   </p>
                </div>
             </StaggerItem>
           ))}
        </StaggerContainer>
      </div>
    </section>
  );
};