
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Scenic farmland with rolling hills",
    title: "Farmland in San Pedro"
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Mountain landscape in Paraguay",
    title: "Rural Paraguay landscape"
  },
  {
    src: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Fertile agricultural land",
    title: "Agricultural plots in Alto Paraná"
  },
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Modern farm equipment in field",
    title: "Modern farming operations"
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Sunset over farm fields",
    title: "Beautiful sunset in Concepción"
  },
  {
    src: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Cattle ranch in Paraguay",
    title: "Cattle ranch in Paraguarí"
  }
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Property Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of exclusive investment properties throughout Paraguay's most promising regions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-medium">View Larger</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{image.title}</h3>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-forest-600 hover:bg-forest-700 text-white"
          >
            <Image className="mr-2 h-5 w-5" />
            Request Full Property Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
