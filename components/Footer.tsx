import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 12H5V22H19V12H22L12 2Z" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter text-white leading-none">APEX</span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase leading-none mt-1">Roofing Systems</span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-xs">
              Austin's premier residential roofing experts. Specializing in high-performance installations and comprehensive storm restoration with master-level craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Service Areas</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="hover:text-accent transition-colors">Austin, TX</li>
              <li className="hover:text-accent transition-colors">Round Rock, TX</li>
              <li className="hover:text-accent transition-colors">West Lake Hills, TX</li>
              <li className="hover:text-accent transition-colors">Cedar Park, TX</li>
              <li className="hover:text-accent transition-colors">Pflugerville, TX</li>
              <li className="hover:text-accent transition-colors">Lakeway, TX</li>
            </ul>
          </div>

          {/* Excellence */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Excellence</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="hover:text-accent transition-colors">Lifetime Replacement</li>
              <li className="hover:text-accent transition-colors">Precision Repair</li>
              <li className="hover:text-accent transition-colors">Storm Restoration</li>
              <li className="hover:text-accent transition-colors">Gutter Systems</li>
              <li className="hover:text-accent transition-colors">Roof Inspections</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Headquarters</h4>
            <ul className="space-y-6 text-sm text-zinc-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>1234 Skyline Blvd, Suite 100<br />Austin, TX 78701</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+15125550199" className="text-white hover:text-accent transition-colors font-bold text-lg leading-none">(512) 555-0199</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">claims@apexroofing.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-zinc-500 font-medium">
            © {new Date().getFullYear()} Apex Roofing Systems. TX License #: CCC1329842
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors uppercase tracking-widest font-bold">Privacy Policy</a>
            <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};