"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="relative pt-4 md:pt-40 pb-20 overflow-x-clip" id="about">
      <div className="container px-4 sm:px-6 max-w-screen-xl mx-auto">
        <div className="flex md:flex-row items-center gap-12 flex-col-reverse">
          
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl  bg sm:text-4xl md:text-5xl tracking-tight font-bold">
              Verbum Health: Hospital Management System (VH:HMS)
            </h2>
            <p className="text-base text-color text-justify mt-3">
              Verbum Network Ltd, a leading Nigerian tech company, has launched
              Verbum Health Hospital Management System (VH-HSM)—a powerful,
              all-in-one digital platform built to streamline hospital
              operations and transform healthcare delivery across Africa and
              beyond. VH-HSM addresses key challenges facing healthcare
              institutions today, such as inefficient record-keeping, long
              patient wait times, poor resource management, and lack of
              real-time data for decision-making. Many hospitals still rely on
              manual systems, leading to errors, delays, and administrative
              bottlenecks. What makes VH-HSM unique is its local relevance—it is
              designed with the realities of African hospitals in mind, offering
              a cost-effective, user-friendly, and cloud-based solution that
              improves care quality, efficiency, and transparency. Now available
              across Nigeria and other African markets, VH-HSM is a game-changer
              for hospitals ready to embrace digital transformation.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/img1.jpg"
              alt="Productivity Illustration"
              width={200}
              height={200}
              loading="lazy"
              className="w-full h-auto object-cover rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
