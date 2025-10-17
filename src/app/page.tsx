import { Metadata } from "next";
// import About from "./_components/about";
// import AgricultureSuit from "./_components/agriculture-suit";
import OurExpertise from "./_components/our-expertise";
import Hero from "./_components/hero";
import OurServices from "./_components/our-services";
import TrustUs from "./_components/trust-us";
import HowWeWork from "./_components/how-we-work";
import WhatMakesUsDifferent from "./_components/WhatMakesUsDifferent";
import Carousel from "./_components/carousel";
import AboutUs from "./_components/about-us";
import Products from "./_components/products";


export const metadata: Metadata = {
  title: 'Jamisu Tech',
  description: 'At Jamisu Tech, we specialize in delivering tailored NetSuite ERP solutions to streamline your business processes and boost your productivity.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <OurExpertise />
      <TrustUs />
      <HowWeWork />
      <OurServices />
      <WhatMakesUsDifferent />
      <AboutUs />

      <Products />
      {/* <AgricultureSuit /> */}
      {/* <About /> */}
    </>
  );
}
