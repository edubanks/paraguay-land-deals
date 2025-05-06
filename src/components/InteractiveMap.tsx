
import React, { useState } from 'react';
import { Map } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  { id: 1, name: "San Pedro", description: "Fertile agricultural region, ideal for soybean and corn", coordinates: { top: "25%", left: "45%" } },
  { id: 2, name: "Alto Paraná", description: "Prime farmland with excellent infrastructure", coordinates: { top: "40%", left: "75%" } },
  { id: 3, name: "Itapúa", description: "Region with rich soil, suitable for various crops", coordinates: { top: "60%", left: "65%" } },
  { id: 4, name: "Concepción", description: "Excellent for cattle ranching and forestry", coordinates: { top: "15%", left: "40%" } },
  { id: 5, name: "Canindeyú", description: "Growing agricultural frontier with affordable land", coordinates: { top: "30%", left: "65%" } }
];

const InteractiveMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  
  const handlePinClick = (id: number) => {
    setActiveLocation(activeLocation === id ? null : id);
  };

  return (
    <section id="map" className="py-16 md:py-24 bg-forest-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-forest-100 p-3 rounded-full">
              <Map className="h-8 w-8 text-forest-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Investment Regions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore prime agricultural locations throughout Paraguay
          </p>
        </div>
        
        <div className="relative w-full h-[600px] border-2 border-forest-200 rounded-xl overflow-hidden shadow-lg bg-white">
          {/* Map image */}
          <img 
            src="https://images.unsplash.com/photo-1643033502131-69e09cc0edfd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Map of Paraguay" 
            className="w-full h-full object-cover"
          />
          
          {/* Location pins */}
          {locations.map((location) => (
            <div 
              key={location.id}
              className="absolute cursor-pointer transition-all duration-300 transform hover:scale-110"
              style={{ top: location.coordinates.top, left: location.coordinates.left }}
              onClick={() => handlePinClick(location.id)}
            >
              <div className={`w-6 h-6 rounded-full ${activeLocation === location.id ? 'bg-gold-500' : 'bg-forest-600'} flex items-center justify-center text-white font-bold text-sm`}>
                {location.id}
              </div>
              
              {/* Info popup */}
              {activeLocation === location.id && (
                <div className="absolute z-10 bg-white rounded-lg shadow-xl p-4 w-64 text-left -translate-x-1/2 mt-2 border border-gray-200">
                  <h3 className="font-bold text-forest-800">{location.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{location.description}</p>
                  <Button 
                    variant="link" 
                    className="text-forest-600 p-0 h-auto mt-2 text-sm"
                    onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View properties in this area
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Click on the markers to learn more about each investment region.
          </p>
          <Button 
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-forest-600 hover:bg-forest-700 text-white"
          >
            Request Regional Investment Guide
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
