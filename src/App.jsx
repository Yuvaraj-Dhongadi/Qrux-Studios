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
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  // Force dark theme and remove light mode toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Initialize Intersection Observer scroll reveal animations
  useScrollReveal();

  return (
    <div className="app">
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
