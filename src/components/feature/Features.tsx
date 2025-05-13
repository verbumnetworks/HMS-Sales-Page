"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
    <section id="features">
      <div className="py-10 bg-gray-100">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-4 bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text">
          Our Features
        </h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {featurescard.map((feature) => (
            <SwiperSlide key={feature.id}>
              <div
                onClick={() => openModal(feature)}
                className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition mx-8"
              >
                <div className="mb-4 text-center">
                  <Image
                      src={feature.icon}
                    alt="lo"
                    height={100}
                    width={100}
                      sizes="100vw"
  className="w-full h-auto rounded-md"
                  />
                </div>

                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>

                <p className="bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text text-2xl text-bold mt-2">
                  Click to learn more
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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
