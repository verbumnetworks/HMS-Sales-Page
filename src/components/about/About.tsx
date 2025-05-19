import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      className="relative pt-4 md:pt-40 pb-20 overflow-x-clip"
      id="about"
    >
      <div className="container px-4 sm:px-6 max-w-screen-xl mx-auto">
        <div className="flex md:flex-row items-center gap-12 flex-col-reverse">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-bold bg">
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
          </div>

          <div className="w-full md:w-1/2 relative">
            <Image
              src="/assets/my.jpg"
              alt="Productivity Illustration"
              width={200}
              height={200}
              loading="lazy"
              className="w-full h-auto object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    // <section className="py-20 overflow-x-clip">
    //   <div className="container px-4 sm:px-6 max-w-screen-xl mx-auto">
    //     <div className="flex flex-col md:flex-row items-center gap-12">
    //       {/* Left Content */}
    //       <div className="w-full md:w-1/2">
    //         <div className="mb-4 text-sm uppercase tracking-widest text-white font-semibold">
    //           Version 2.0 is here
    //         </div>

    //         <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold bg-gradient-to-b  from-black to-[#0de4d6] text-transparent bg-clip-text leading-tight">
    //           Revolutionise your hospita operations
    //         </h2>

    //         <p className="text-base sm:text-lg md:text-xl mt-6 text-neutral-500">
    //         Streamline processes, enhance patient care, and improve efficiency
    //         with our intuitive, custom-made software solution.
    //         </p>

    //       </div>

    //       {/* Right Content (Image) */}
    //       <div className="w-full md:w-1/2 relative">
    //         <Image
    //           src="/assets/vector.jpg"
    //           alt="Productivity Illustration"
    //           width={600}
    //           height={600}
    //           className="w-full h-auto object-contain rounded-xl shadow-xl"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default About;
