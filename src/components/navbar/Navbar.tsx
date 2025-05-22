"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "../btn/Button";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/Constant";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-20 backdrop-blur-sm">
     
      {/* Navbar */}
      <div className="py-2 px-4 md:px-12 bg-white shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="Verbum Health Management System"
              width={40}
              height={40}
            />
            <p className="text-2xl hidden font-bold md:block bg">Verbum Health</p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-black/60 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="hover:text-[#0de4d6] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Button
              label="Get Started"
              variant="primary"
              onClick={() => (window.location.href = "#contact")}
              className="px-4 py-2 text-white rounded-lg font-medium"
            />
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md mt-4 rounded-md overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul className="flex flex-col space-y-4 p-4 text-center items-center justify-center">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.url}
                    className="text-sm font-medium text-gray-700 hover:text-[#0de4d6] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <Button
                label="Get Started"
                variant="primary"
                onClick={() => (window.location.href = "#contact")}
                className="px-4 py-2 mt-2 text-white rounded-lg font-medium"
              />
            </motion.ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
