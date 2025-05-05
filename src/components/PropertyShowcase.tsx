
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const properties = [
  {
    title: "Fertile Farmland - San Pedro",
    size: "200 hectares",
    price: "$800,000",
    description: "Prime agricultural land with excellent soil quality, suitable for soybean and corn cultivation. Includes water access and road frontage.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  },
  {
    title: "Cattle Ranch - Concepción",
    size: "500 hectares",
    price: "$1,200,000",
    description: "Established ranch with natural pastures, fencing, water wells, and basic infrastructure. Perfect for cattle breeding operations.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  },
  {
    title: "Agricultural Development - Alto Paraná",
    size: "350 hectares",
    price: "$1,500,000",
    description: "Strategic location near export routes with highly productive soil. Currently planted with wheat, with excellent yield history.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
];

const PropertyShowcase: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="properties" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These are examples of the type of properties available for investment. Contact us for current opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                    <span className="bg-forest-100 text-forest-800 px-2 py-1 rounded text-sm font-medium">{property.size}</span>
                  </div>
                  <p className="text-forest-700 font-bold text-lg mb-3">{property.price}</p>
                  <p className="text-gray-600 mb-6">{property.description}</p>
                </div>
                <Button 
                  onClick={scrollToForm}
                  variant="outline" 
                  className="w-full mt-auto border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white"
                >
                  Request Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
