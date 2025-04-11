"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../btn/Button";
import { navLinks } from "@/constants/Constant";
const Navbar: React.FC = () => {
  return (
    <nav className="h-[12vh] px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image src="/assets/logo.png" alt="VHMS-Logo" width={40} height={40} />
        <span className="font-extrabold text-lg italic">Verbum Health</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-sm">
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
      </ul>

      {/* CTA Button */}
      <Link href="#contact" className="">
        <Button>Get started →</Button>
      </Link>


      {/*mobile menu*/}

    </nav>
  );
};
export default Navbar;

