import React from 'react';
import { Reveal, ParallaxImage } from './ui/Reveal';
import { Button } from './ui/Button';

export const ValueProp = () => {
   return (
      <section className="bg-surface relative overflow-hidden" id="results">

         {/* Large Parallax Image Container */}
         <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
            <ParallaxImage
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2560"
               alt="Roofing Agency Team Meeting"
               className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Floating Card */}
            <div className="absolute bottom-0 left-0 p-4 md:p-12 w-full md:w-auto">
               <Reveal>
                  <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl max-w-xl border border-white/50">
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-6">
                        Stop losing jobs to<br /> competitors with better websites.
                     </h2>
                     <p className="text-lg text-secondary leading-relaxed mb-8">
                        The average roofing contractor loses 60% of potential leads because their website doesn't convert. Our roofing-specific sites average a <span className="text-primary font-bold">12% visitor-to-lead conversion rate</span>.
                     </p>
                     <Button className="w-full md:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get My Custom Demo</Button>
                  </div>
               </Reveal>
            </div>
         </div>

         <div className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12">
               <Reveal className="flex-1">
                  <h3 className="text-4xl font-semibold tracking-tighter">
                     "We build assets, not expenses. <br /> <span className="text-zinc-500">ROI is our only metric.</span>"
                  </h3>
               </Reveal>
               <Reveal className="flex-1" delay={0.2}>
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-4xl font-bold mb-2">12%</p>
                        <p className="text-zinc-500">Conversion Rate</p>
                     </div>
                     <div>
                        <p className="text-4xl font-bold mb-2">150+</p>
                        <p className="text-zinc-500">Sites Launched</p>
                     </div>
                     <div>
                        <p className="text-4xl font-bold mb-2">3x</p>
                        <p className="text-zinc-500">More Leads</p>
                     </div>
                     <div>
                        <p className="text-4xl font-bold mb-2">14d</p>
                        <p className="text-zinc-500">Launch Time</p>
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>
   );
};