import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageWidth = useTransform(scrollYProgress, [0, 0.3], ["94%", "100%"]);
  const imageRadius = useTransform(scrollYProgress, [0, 0.3], ["2.5rem", "0rem"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex flex-col items-center pt-32 bg-background overflow-hidden">

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl mb-16">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary/80">Roofing Contractor Website Design • SEO & Lead Gen</span>
          </div>
        </Reveal>

        <Reveal>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-8 leading-[0.9]">
            Your Roofing Website Should Be Your <br />
            <span className="text-accent underline decoration-blue-200/50 underline-offset-8">#1 Salesperson.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            We build high-converting, SEO-optimized websites for roofing contractors that generate <span className="text-primary font-bold">3x more leads</span> — guaranteed.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button onClick={scrollToContact} className="px-12 py-5 text-lg shadow-xl shadow-accent/20">
              Schedule Your Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <div className="text-sm text-secondary font-medium text-left">
              <span className="block mb-1">✓ Built for Roofers</span>
              <span className="block">✓ Launch in 14 Days</span>
            </div>
          </div>
        </Reveal>

        <motion.div style={{ opacity }} className="mt-12 flex items-center justify-center gap-6 text-secondary/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Serving Contractors Nationwide</span>
          </div>
          <div className="w-1 h-1 bg-zinc-300 rounded-full" />
          <div className="text-sm font-medium">Google Certified Partners</div>
        </motion.div>
      </div>

      {/* Expanding Hero Image */}
      <motion.div
        style={{ width: imageWidth, borderRadius: imageRadius }}
        className="relative z-10 w-full h-[85vh] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] mx-auto border-x border-t border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent z-10" />
        {/* Laptop/Dashboard Image for SaaS/Agency vibe */}
        <motion.img
          style={{ y, scale }}
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2560"
          alt="Roofing Website Analytics Dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-16 left-8 md:left-24 z-20 text-white max-w-xl flex items-end gap-6">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              Proven Results
            </p>
            <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight">Stop buying shared leads. <br />Start owning your market.</p>
          </div>
        </div>
      </motion.div>

    </section>
  );
};