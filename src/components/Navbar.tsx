
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-forest-950/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Eduardo Banks</div>
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('why-paraguay')} className="text-white hover:text-gold-300 transition-colors">Why Paraguay</button>
          <button onClick={() => scrollToSection('properties')} className="text-white hover:text-gold-300 transition-colors">Properties</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-gold-300 transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-gold-300 transition-colors">About</button>
          <Button 
            onClick={() => scrollToSection('lead-form')} 
            className="bg-gold-500 hover:bg-gold-600 text-forest-950 font-medium"
          >
            Contact Us
          </Button>
        </div>
        <div className="md:hidden">
          <Button 
            onClick={() => scrollToSection('lead-form')}
            className="bg-gold-500 hover:bg-gold-600 text-forest-950 font-medium text-sm px-3 py-1"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
