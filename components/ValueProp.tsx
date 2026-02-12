import React from 'react';
import { Reveal, ParallaxImage } from './ui/Reveal';
import { Button } from './ui/Button';

export const ValueProp = () => {
   return (
      <section className="bg-surface relative overflow-hidden">

         {/* Large Parallax Image Container */}
         <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
            <ParallaxImage
               src="https://images.unsplash.com/photo-1600596542815-3ad19fb812a7?auto=format&fit=crop&q=80&w=2560"
               alt="Luxury Minimalist White Home"
               className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Floating Card */}
            <div className="absolute bottom-0 left-0 p-4 md:p-12 w-full md:w-auto">
               <Reveal>
                  <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl max-w-xl border border-white/50">
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-6">
                        Stop losing money on<br /> wasted energy bills.
                     </h2>
                     <p className="text-lg text-secondary leading-relaxed mb-8">
                        A new Apex Roof System lowers cooling costs by up to 30% and adds instant curb appeal. It's not just a repair—it's an investment with 85% ROI.
                     </p>
                     <Button className="w-full md:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get My ROI Report</Button>
                  </div>
               </Reveal>
            </div>
         </div>

         <div className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12">
               <Reveal className="flex-1">
                  <h3 className="text-4xl font-semibold tracking-tighter">
                     "The detail is not just a detail. <br /> <span className="text-zinc-500">They make the design.</span>"
                  </h3>
               </Reveal>
               <Reveal className="flex-1" delay={0.2}>
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-4xl font-bold mb-2">25yr</p>
                        <p className="text-zinc-500">Labor Warranty</p>
                     </div>
                     <div>
                        <p className="text-4xl font-bold mb-2">500+</p>
                        <p className="text-zinc-500">Projects Completed</p>
                     </div>
                     <div>
                        <p className="text-4xl font-bold mb-2">A+</p>
                        <p className="text-zinc-500">BBB Rating</p>
                     </div>
                     <div>
                        <p className="text-4xl font-bold mb-2">24h</p>
                        <p className="text-zinc-500">Response Time</p>
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>
   );
};