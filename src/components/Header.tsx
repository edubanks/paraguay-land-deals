
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full h-screen min-h-[600px] flex items-center justify-center parallax bg-image-overlay bg-[url('https://images.unsplash.com/photo-1503437313881-503a91226402')] text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-16 md:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
          Exclusive Land Investment <br className="hidden md:block" />
          in Paraguay
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
          Discover profitable farmland opportunities. Trusted by international investors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.4s"}}>
          <Button 
            onClick={scrollToForm}
            className="bg-forest-600 hover:bg-forest-700 text-white text-lg px-8 py-6"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            onClick={() => document.getElementById('why-paraguay')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
