"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type ImageCard = {
  id: number;
  imageUrl: string;
};

const imageCards: ImageCard[] = [
  { id: 1, imageUrl: "/assets/vh1.jpg" },
  { id: 2, imageUrl: "/assets/vh2.jpg" },
  { id: 3, imageUrl: "/assets/vh3.jpg" },
  { id: 4, imageUrl: "/assets/vh4.jpg" },
  { id: 5, imageUrl: "/assets/vh5.jpg" },
  { id: 6, imageUrl: "/assets/vh6.jpg" },
];

export default function ImageCardSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // This ensures Swiper has access to navigation refs when mounted
  }, []);

  return (
    <section className="w-full px-4 py-10 md:px-10 relative bg-gradient-to-b from-[#0de4d6] to-black">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide text-white mb-4 font-bold">Image Gallery</h2>
        <div className="space-x-2 flex">
          <button
            ref={prevRef}
            className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onBeforeInit={(swiper: SwiperClass) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation!.prevEl = prevRef.current!;
            swiper.params.navigation!.nextEl = nextRef.current!;
          }
          if (typeof swiper.params.pagination !== "boolean") {
            swiper.params.pagination!.el = ".custom-swiper-pagination";
          }
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {imageCards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="overflow-hidden rounded-2xl shadow-lg h-64">
              <Image
                width={200}
                height={200}
                src={card.imageUrl}
                alt={`Slide ${card.id}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination container */}
      <div className="custom-swiper-pagination mt-4 text-center"></div>
    </section>
  );
}
