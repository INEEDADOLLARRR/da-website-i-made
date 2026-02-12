import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Materials } from './components/Features'; // Renamed logically in UI but kept filename
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { SEO } from './components/SEO';

function App() {
  return (
    <div className="antialiased text-primary selection:bg-blue-100 selection:text-blue-900">
      <SEO />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Materials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;