"use client";

import Button from "@/components/btn/Button"; 
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] pt-8 pb-20 md:pt-10 md:pb-10 z-10">
  <div className="container relative">
    <div className="flex flex-col items-center mt-6 text-center">
      <h1 className="max-w-full sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] text-4xl sm:text-6xl lg:text-7xl tracking-wide mx-auto">
        Transform Your Hospital with
        <span className="bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text">
          {" "}
          Verbum Health HMS
        </span>
      </h1>

      <p className="mt-8 text-lg text-neutral-500 max-w-4xl">
        Streamline processes, enhance patient care, and improve efficiency
        with our intuitive, custom-made software solution.
      </p>

      <div className="flex justify-center my-10 gap-4 flex-wrap">
        <Button
          label="Get Started"
          variant="primary"
          onClick={() => (window.location.href = "#")}
        />
        <Button
          label="Request a Demo"
          variant="outline"
          onClick={() => (window.location.href = "#")}
        />
      </div>
    </div>
  </div>

  <div className="absolute inset-0 flex items-center justify-center z-0 pt-[35rem] md:pt-[40rem] lg:pt-[50rem] ">
    <Image
      src="/assets/placeholder.png"
      alt="place"
      width={500}
      height={500}
       className="w-[80%]" 
    />
  </div>
</section>

  );
};

export default HeroSection;