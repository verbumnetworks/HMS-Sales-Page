"use client";
// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 ">
      <h1 className="max-w-full sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mx-auto">
        Transform Your Hospital with 
        <span className="bg-gradient-to-r from-amber-500 to-red-800 text-transparent bg-clip-text">
          Verbum Health HMS
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Streamline processes, enhance patient care, and improve efficiency with our intuitive, Custom made software solution
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started 
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
        Request a Demo
        </a>
      </div>
      {/* <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default HeroSection;

// 'use client'

// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <>
//       <section className="bg-gradient-to-b from-red-300 to-purple-50 pt-20 pb-10 px-4 mt-0">
//         <div className="max-w-[600px] mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Boost your marketing and sales with <span className="text-purple-600">Omeya Sale</span>
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-6">
//             Dashboard platform that was crafted with the art of making it easier for business people to manage sales leads, tasks, and sales reports.
//           </p>

//           <form className="flex flex-col md:flex-row justify-center gap-4 mt-6 px-4">
//             <input
//               type="email"
//               placeholder="Enter email address"
//               className="px-4 py-3 rounded-md border border-gray-300 w-full md:w-80"
//             />
//             <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
//               Get started
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Push Image slightly up to overlap Hero and Features */}
//       {/* <div className="relative z-10 -mt-20 px-4">
//         <Image
//           src="/image.png"
//           alt="Dashboard screenshot"
//           width={1000}
//           height={600}
//           className="mx-auto rounded-xl shadow-2xl w-full max-w-5xl"
//         />
//       </div> */}
//     </>
//   )
// }

// export default Hero
