import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturedGrid from './components/FeaturedGrid.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b10] text-white selection:bg-fuchsia-500/30 selection:text-white antialiased">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <FeaturedGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
