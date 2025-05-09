"use client";
import * as motion from "motion/react-client"

import Button from "@/components/btn/Button"; 
// import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] pb-20 md:pt-10 md:pb-10 z-10">
 <motion.div
  className="container relative"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1.5, // slower and smoother
    ease: "easeOut", // optional easing for smoother transition
  }}
>
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
          onClick={() => (window.location.href = "https://dev.verbumhealth.com/login")}
        />
        <Button
          label="Request a Demo"
          variant="outline"
          onClick={() => (window.location.href = "#contact")}
        />
      </div>
    </div>
  </motion.div>
</section>

  );
};

export default HeroSection;