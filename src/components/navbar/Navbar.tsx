"use client";

import Link from "next/link";
import Image from "next/image";
// import Button from "../btn/Button";
import { navLinks } from "@/constants/Constant";
const Navbar: React.FC = () => {
  return (
    <header className="fixed right-0 left-0 top-0 backdrop-blur-sm z-20 ">
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <div className="inline-flex gap-1 items-center justify-center">
        <p>Get Starded for free</p>
        <p className="text-white/60 hidden md:block ">streamline your work flow</p>
        {/* <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" /> */}
      </div>
    </div>
    <div className="py-2">
      <div className="container">
        <div className="flex items-center justify-between space-x-2">
         <Image src="/assets/logo.png" alt="VHMS-Logo" width={40} height={40} />
        {/* <MenuIcon className="h-5 w-5 md:hidden" /> */}
          <ul className="hidden md:flex gap-6 text-black/60 items-center justify-center">
          {navLinks.map((link) => (
         <li key={link.id}>
           <Link
           href={link.url}
              className="hover:text-green-400 transition-colors duration-200"
         >
           {link.label}
         </Link>
          </li>
        ))}
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Request a demo</button>
          </ul>
        </div>
      </div>
    </div>
  </header>
    // <nav className="h-[12vh] px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
    //   {/* Logo Section */}
    //   <div className="flex items-center space-x-2">
    //     <Image src="/assets/logo.png" alt="VHMS-Logo" width={40} height={40} />
    //     <span className="font-extrabold text-lg italic">Verbum Health</span>
    //   </div>

    //   {/* Navigation Links */}
    //   <ul className="hidden md:flex space-x-6 text-sm">
    //     {navLinks.map((link) => (
    //       <li key={link.id}>
    //         <Link
    //           href={link.url}
    //           className="hover:text-green-400 transition-colors duration-200"
    //         >
    //           {link.label}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>

    //   {/* CTA Button */}
    //   <Link href="#contact" className="">
    //     <Button label="Get started →"></Button>
    //   </Link>


    //   {/*mobile menu*/}

    // </nav>
  );
};
export default Navbar;

