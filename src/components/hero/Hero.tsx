"use client";

import { motion } from "framer-motion";
import Button from "@/components/btn/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] px-6 pt-32 pb-20 md:pb-10 z-10">
      <div className="container relative">
        <motion.div
          className="flex flex-col items-center mt-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="max-w-full sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] text-4xl sm:text-6xl lg:text-7xl tracking-wide mx-auto">
            Transform Your Hospital with
            <span className="bg">
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
              onClick={() => (window.location.href = "#contact")}
            />
            <Button
              label="Request a Demo"
              variant="outline"
              onClick={() => (window.location.href = "#contact")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
