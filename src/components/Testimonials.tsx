
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Working with Eduardo was the best investment decision I've made. The land appreciation has been impressive, and the agricultural returns exceed my expectations.",
    author: "Michael K.",
    location: "Germany",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    quote: "As an investor from Spain, I was concerned about buying land abroad. Eduardo made the process transparent and secure. Three years later, my investment has grown by 42%.",
    author: "Carlos M.",
    location: "Spain",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    quote: "The farmland Eduardo helped me acquire is now producing soybeans with excellent yields. The entire investment process was professional from start to finish.",
    author: "Sophia W.",
    location: "United States",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-forest-900 to-forest-950 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Investors Say</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join our community of satisfied international investors who have successfully secured their future with Paraguay farmland.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-forest-800 border-forest-700 hover:border-gold-500 transition-colors duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-gray-200 mb-4 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center mt-4 pt-4 border-t border-forest-700">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-300">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
