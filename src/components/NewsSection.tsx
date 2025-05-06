
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const newsItems = [
  {
    title: "Paraguay Agricultural Exports Reach Record High",
    date: "April 28, 2025",
    excerpt: "Paraguay's agricultural exports have reached a new record, with soybean exports increasing by 15% compared to last year...",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  },
  {
    title: "New Tax Incentives for Foreign Investors in Paraguay",
    date: "March 15, 2025",
    excerpt: "The Paraguayan government has announced new tax incentives for foreign investors in the agricultural sector, aiming to boost...",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  },
  {
    title: "Land Values in Eastern Paraguay Continue to Rise",
    date: "February 2, 2025",
    excerpt: "Farmland values in Paraguay's eastern regions have shown steady appreciation, with average prices increasing by 12% over the past 12 months...",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
];

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-forest-100 p-3 rounded-full">
              <FileText className="h-8 w-8 text-forest-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Market Updates</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about Paraguay's agricultural market trends and opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-forest-600 font-medium mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-forest-600 hover:text-forest-700">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-forest-600 hover:bg-forest-700 text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
