"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "../Modal";
import { featurescard } from "@/constants/Constant";

const Features: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState< 
    (typeof featurescard)[0] | null 
  >(null);

  const openModal = (feature: (typeof featurescard)[0]) => {
    setSelectedFeature(feature);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section id="features" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide mb-8 bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text">
          Our Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featurescard.map((feature) => (
            <div
              key={feature.id}
              onClick={() => openModal(feature)}
              className="cursor-pointer flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="mb-4 text-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  height={60}
                  width={60}
                  sizes="100vw"
                  className="w-28 h-28 rounded-md"
                />
              </div>

              <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{feature.description}</p>

              <p className="bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text text-2xl font-bold text-center mt-2">
                Click to learn more
              </p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isOpen && selectedFeature && (
          <Modal onClose={closeModal}>
            <h2 className="text-2xl font-bold text-white">
              {selectedFeature.title}
            </h2>
            <p className="mt-4 text-white">{selectedFeature.details}</p>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Features;
