"use client";
import Image from "next/image";
// import styles from "./page.module.css";
// import Button from "@/components/Button";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <About />
        <Features />
        <Workflow />
        <Pricing />
        <Testimony />
        <Contact />
        <Banner />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
