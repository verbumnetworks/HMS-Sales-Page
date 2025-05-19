"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Button from "@/components/btn/Button";
import Link from "next/link";

const HeroSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [navReady, setNavReady] = useState(false);

  // Wait for refs to be set before initializing navigation
   useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavReady(true);
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[40vh] md:min-h-[90vh] pb-2 pt-10 md:pt-10 md:pb-10 z-10 mx-auto">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={
            navReady
              ? {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }
              : false
          }
          onBeforeInit={(swiper) => {
  if (navReady && swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
    (swiper.params.navigation as any).prevEl = prevRef.current;
    (swiper.params.navigation as any).nextEl = nextRef.current;
  }
}}
          className="w-full h-full"
        >
          {["about3.jpg", "photo1.jpg", "about3.jpg", "about4.jpg"].map(
            (img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(/assets/${img})`,
                  }}
                >
                  <div className="w-full h-full bg-black/80"></div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>

        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-70 transition"
          aria-label="Previous Slide"
        >
          ‹
        </button>
        <button
          ref={nextRef}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-70 transition"
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>

      {/* Foreground Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center mt-6 text-center pt-20">
          <h1 className="max-w-[95%] text-amber-100 sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] text-4xl sm:text-6xl lg:text-7xl tracking-normal mx-auto font-bold">
            Transform Your Hospital with Verbum Health HMS
          </h1>

          <p className="mt-8 text-lg max-w-4xl text-white font-bold">
            Streamline processes, enhance patient care, and improve efficiency
            with our intuitive, custom-made software solution.
          </p>

          <div className="flex justify-center my-10 gap-4 flex-wrap">
            <Link href={"#contact"}>
              <Button label="Get Started" variant="primary" />
            </Link>
            <Link href={"#contact"}>
              <Button label="Request a Demo" variant="outline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
