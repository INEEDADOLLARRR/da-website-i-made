import React from 'react';
import { Reveal } from './ui/Reveal';
import { Star, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export const TrustBar = () => {
  return (
    <section className="py-16 border-b border-zinc-100 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

            {/* Stats */}
            <div className="flex gap-12 items-center border-r border-zinc-200 pr-12 hidden md:flex">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 font-black text-2xl text-primary">
                  5.0 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mt-1">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="font-black text-2xl text-primary tracking-tighter">1.2k+</div>
                <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mt-1">Projects Done</div>
              </div>
            </div>

            {/* Certifications & Partners */}
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex flex-col items-center">
                <span className="font-black text-2xl tracking-tighter text-zinc-800 italic">GAF</span>
                <span className="text-[9px] font-extrabold bg-primary text-white px-2 py-0.5 rounded-sm uppercase tracking-tighter -mt-1">Master Elite®</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <span className="font-black text-xl italic text-red-600">Owens</span>
                  <span className="font-black text-xl italic text-zinc-900 ml-1">Corning</span>
                </div>
                <span className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-1">Platinum® Partner</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-900" />
                <span className="font-serif font-bold text-xl text-blue-900">CertainTeed</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-zinc-900 px-3 py-1">
                <span className="font-black text-xl italic tracking-tighter">BBB</span>
                <div className="w-[1px] h-6 bg-zinc-900 mx-1"></div>
                <span className="text-[10px] font-black uppercase text-zinc-900 leading-none">Accredited<br />A+ Rating</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-4 text-accent font-bold text-sm bg-accent/5 px-5 py-3 rounded-full border border-accent/10">
              <Award className="w-5 h-5" />
              <span>Top Rated 2024</span>
              <div className="w-1 h-1 bg-accent/30 rounded-full" />
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Local Family Owned
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};