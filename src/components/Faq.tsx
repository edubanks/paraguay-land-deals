
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText } from "lucide-react";

const faqItems = [
  {
    question: "Why is Paraguay a good place to invest?",
    answer: "Paraguay offers some of the world's most fertile soil at competitive prices, stable political environment, favorable tax laws, strong property rights, and consistent land appreciation. Additionally, Paraguay has a growing agricultural export market and relatively low barriers to foreign investment."
  },
  {
    question: "What types of properties are available?",
    answer: "We offer various types of agricultural investments including farmland (suitable for soybeans, corn, wheat), cattle ranches, and timber plantations. Properties range from 50 to 1000+ hectares and are located throughout Paraguay's most productive regions."
  },
  {
    question: "How do I verify land titles in Paraguay?",
    answer: "Paraguay uses a title registration system. All our properties come with verified titles from the National Public Registry. We perform thorough due diligence including title searches going back at least 20 years, boundary verification, and ensuring no overlapping claims exist."
  },
  {
    question: "What are the costs beyond the purchase price?",
    answer: "Additional costs include legal fees (1-2%), property transfer tax (1.5%), and annual property taxes (which are very low in Paraguay, typically less than 1% of the assessed value). Operational costs for agricultural activities vary depending on the type of property and intended use."
  },
  {
    question: "Can foreigners own land in Paraguay?",
    answer: "Yes, foreigners can own land in Paraguay with almost the same rights as Paraguayan citizens. The main restriction is on properties within 50km of the border, which require additional authorization. We can guide you through any regulatory requirements."
  },
  {
    question: "What is the investment process?",
    answer: "The process typically involves property selection, due diligence, purchase agreement, title transfer, and registration. We guide investors through every step, providing legal assistance, translation services, and local expertise to ensure a smooth transaction."
  },
  {
    question: "What is the typical return on investment?",
    answer: "Land values in Paraguay have appreciated 10-15% annually over the past decade. Agricultural operations can yield 8-20% annual returns depending on the crop and management efficiency. Our ROI calculator can help you estimate potential returns based on current market conditions."
  }
];

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-forest-100 p-3 rounded-full">
              <FileText className="h-8 w-8 text-forest-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about investing in Paraguayan farmland
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
