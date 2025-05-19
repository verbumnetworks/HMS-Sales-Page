"use client";

import { useState, useRef, useEffect } from "react";
import { faqData } from "@/constants/Constant";
import { Minus, Plus } from "lucide-react";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 font-bold tracking-wide mb-8 bg">
          Frequently Asked Questions
        </h2>
        <p className="text-color text-center mb-12 max-w-3xl mx-auto">
           Find answers to common questions about our Hospital Management System. If you have more inquiries, feel free to reach out to us.
        </p>
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left font-semibold bg-gradient-to-r from-[#137c7f] to-[#20a1a5] text-white hover:opacity-90 transition-all"
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
