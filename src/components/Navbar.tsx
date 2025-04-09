'use client';

import Link from 'next/link';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600 cursor-pointer">
            Verbum Networks
          </span>
        </Link>

        {/* Dynamic Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        <Link href="#demo">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
            Book a Demo
          </button>
        </Link>
      </div>
    </nav>
  );
}
