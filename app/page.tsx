import About from "@/components/About";

import Contact from "@/components/Contact";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Location from "@/components/Location";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
      <Header />
      <Hero />
      <Intro />
      <About />
      <WhyChooseUs />
      <Services />
      <Facilities />
      <Gallery />
      <Location />
      <Contact />

      <Footer />
      </main>
    </div>
  );
}
