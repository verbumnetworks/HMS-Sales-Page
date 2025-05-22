import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Banner from "@/components/Banner";
import Contact from "@/components/contact/Contact";
import Features from "@/components/feature/Features";
import Hero from "@/components/hero/Hero";
import Choose from "@/components/whyChooseUs/Choose";
import Navbar from "@/components/navbar/Navbar";
import FaqAccordion from "@/components/faq/FaqAccordion";
import ImageCardSection from "@/components/imageSlider/ImageCardSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className=" max-w-[100vw]">
        <Hero />
        <About />
        <ImageCardSection />
        <Features />
        <Choose />
        <FaqAccordion />

        <Contact />

        <Banner />
      </main>
      <footer>
        <Footer />{" "}
      </footer>
    </div>
  );
}
