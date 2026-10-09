import React from 'react';
import SolarSystemBackground from './components/SolarSystemBackground';
import CosmicCursor from './components/CosmicCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-[var(--text-primary)] relative overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-200">
      {/* 3D Solar System Full Website Background */}
      <SolarSystemBackground />


      {/* Cosmic Reactive Cursor */}
      <CosmicCursor />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Stats />
        <Contact />
      </main>

      {/* Cosmic Footer */}
      <Footer />
    </div>
  );
}

export default App;
