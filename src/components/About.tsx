
import React from 'react';
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Eduardo Banks</h2>
            <p className="text-lg text-gray-700 mb-6">
              For over a decade, I've specialized in helping international investors find exceptional agricultural land opportunities in Paraguay. My deep local knowledge and extensive network enable me to connect clients with premium properties that offer both long-term appreciation and sustainable returns.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I personally handle every aspect of the investment process, from property selection to legal verification, ensuring a secure and transparent experience. I'm proud to have helped dozens of clients build wealth through strategic land investments.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              My commitment is to your success. I only recommend properties I would invest in myself, and I provide ongoing support long after the purchase is complete.
            </p>
            <Button 
              onClick={scrollToForm}
              className="bg-forest-600 hover:bg-forest-700 text-white py-6 px-8 text-lg"
            >
              Let's Connect
            </Button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gold-500 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                alt="Eduardo Banks"
                className="relative z-10 rounded-lg w-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
