import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "The Harrison Residence",
    location: "Portland, OR",
    quote: "Absolutely transformed the look of our home. The team was surgical in their precision.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    rating: 5
  },
  {
    name: "Modern Farmhouse",
    location: "Austin, TX",
    quote: "Cleanest job site I've ever seen. The metal standing seam roof is flawless.",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f8e?auto=format&fit=crop&q=80&w=1200",
    rating: 5
  },
  {
    name: "Mid-Century Reno",
    location: "Seattle, WA",
    quote: "Apex handled the complex roof lines of our mid-century home with ease.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200",
    rating: 5
  },
  {
    name: "Coastal Villa",
    location: "San Diego, CA",
    quote: "We needed corrosion resistant materials. Apex delivered a solution that looks incredible.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1200",
    rating: 5
  }
];

export const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simple horizontal shift on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="py-32 bg-background overflow-hidden" id="proof">
      <div className="container mx-auto px-4 max-w-7xl mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
              Our Work. <br /> <span className="text-zinc-400">Your Vision.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="flex items-center gap-2 text-primary font-medium cursor-pointer group">
            View All Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Reveal>
      </div>

      {/* Horizontal Scroller */}
      <motion.div style={{ x }} className="flex gap-8 pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2))] w-max pb-12">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-[85vw] md:w-[600px] h-[500px] bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 group relative"
          >
            {/* Image takes up most of the card */}
            <div className="h-[70%] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="h-[30%] p-8 flex flex-col justify-center bg-white relative z-10">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold text-primary">{item.name}</h4>
                  <p className="text-sm text-zinc-400">{item.location}</p>
                </div>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
              <p className="text-secondary italic truncate">"{item.quote}"</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};