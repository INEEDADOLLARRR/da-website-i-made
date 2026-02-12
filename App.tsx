import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { ValueProp } from './components/ValueProp';
import { Process } from './components/Process';
import { Materials as Features } from './components/Features';
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
        <ValueProp />
        <Process />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;