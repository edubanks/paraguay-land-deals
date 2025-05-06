
import React from 'react';
import { Users } from "lucide-react";

// In a real implementation, these would be actual partner logos
const partners = [
  { name: "AgriTech Paraguay", logo: "🏢", description: "Agricultural technology consultancy" },
  { name: "Paraguay Land Registry", logo: "🏛️", description: "Official land registration authority" },
  { name: "International Investors Alliance", logo: "🌐", description: "Network of global agricultural investors" },
  { name: "Legal Associates", logo: "⚖️", description: "Specialized property law firm" },
  { name: "Sustainable Farming Institute", logo: "🌱", description: "Agricultural sustainability certification" },
  { name: "Global Export Partners", logo: "🚢", description: "International commodity trading" }
];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-forest-100 p-3 rounded-full">
              <Users className="h-8 w-8 text-forest-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Trusted Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with established organizations to ensure secure, profitable investments
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center text-center h-40 hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-3">{partner.logo}</div>
              <div className="font-bold text-gray-800">{partner.name}</div>
              <div className="text-xs text-gray-500">{partner.description}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-gray-600">
          <p>
            Our partnerships ensure you receive expert guidance throughout your investment journey, from legal considerations to agricultural best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
