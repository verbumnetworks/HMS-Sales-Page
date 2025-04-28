// "use client";

import About from "@/components/about/About";
// import Banner from "@/components/Banner";
// import Contact from "@/components/contact/Contact";
// import Features from "@/components/feature/Features";
// import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
// import Pricing from "@/components/pricing/Pricing";
// import Testimony from "@/components/Testimony";
// import Workflow from "@/components/workflow/Workflow";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto pt-20 px-6">
      <Hero />
      <About />
            </main>
         {/*  
        <Features />
        <Workflow />
        <Pricing />
        <Testimony />
        <Banner />
        <Contact />
  
      <footer>
        <Footer />{" "}
      </footer> */}
    </div>
  );
}
