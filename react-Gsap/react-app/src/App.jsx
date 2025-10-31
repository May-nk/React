import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import LogosSection from './components/LogosSection';
import ServicesSection from './components/ServicesSection';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <LogosSection />
      <ServicesSection />
    </div>
  );
}
