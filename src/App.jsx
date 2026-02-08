import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import './App.css'
import StatsBar from './components/StarBar';
import AboutSection from './components/AboutSection';
import CategorySection from './components/CategorySection';
import TheBestSection from './components/TheBestSection';
import ProductSection from './components/ProductSection';
import TestimonialSection from './components/TestiSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <CategorySection />
        <TheBestSection />
        <ProductSection />
        <TestimonialSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;