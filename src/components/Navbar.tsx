"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/constants/Constant";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image className="h-10 w-10 mr-2" src="/image.png" alt="Logo" width={40}  height={40}/>
            <span className="text-xl tracking-tight">Verbum Networks</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


