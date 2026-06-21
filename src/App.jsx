import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [loading, setLoading] = useState(true);

  // Force dark theme and remove light mode toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Initialize Intersection Observer scroll reveal animations only after loader finishes
  useScrollReveal(!loading);

  return (
    <div className="app">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Team />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
