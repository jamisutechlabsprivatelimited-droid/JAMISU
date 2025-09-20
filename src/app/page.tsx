import { Metadata } from "next";
// import About from "./_components/about";
// import AgricultureSuit from "./_components/agriculture-suit";
import OurExpertise from "./_components/our-expertise";
import Hero from "./_components/hero";
import OurServices from "./_components/our-services";
import TrustUs from "./_components/trust-us";
import HowWeWork from "./_components/how-we-work";


export const metadata: Metadata = {
  title: 'Jamisu',
  description: 'At Jamisu, we specialize in delivering tailored NetSuite ERP solutions to streamline your business processes and boost your productivity.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <OurExpertise />
      <TrustUs />
      <HowWeWork />
      <OurServices />
      {/* <AgricultureSuit /> */}
      {/* <About /> */}
    </>
  );
}
