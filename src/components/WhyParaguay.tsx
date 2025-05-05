
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Fertile Land",
    description: "Some of the world's most productive soil for agriculture, ideal for crops like soybeans, corn, and wheat.",
    icon: "🌱"
  },
  {
    title: "Strong ROI",
    description: "Land appreciation of 12-15% annually over the past decade, outperforming many traditional investments.",
    icon: "📈"
  },
  {
    title: "Tax Benefits",
    description: "Favorable tax environment with low property taxes and agricultural tax incentives for foreign investors.",
    icon: "💰"
  },
  {
    title: "Political Stability",
    description: "Stable democratic government with policies favorable to foreign investment and property ownership.",
    icon: "🏛️"
  },
  {
    title: "Growing Market",
    description: "Expanding agricultural exports to global markets including Brazil, Argentina, and Asia.",
    icon: "🌍"
  },
  {
    title: "Clear Title",
    description: "Our properties come with clear, legally-verified titles and complete documentation.",
    icon: "📄"
  }
];

const WhyParaguay: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Invest in Paraguay?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Paraguay offers exceptional value for agricultural land investors, with rich soil, favorable climate, and strong economic growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParaguay;
