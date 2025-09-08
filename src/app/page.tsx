import { Metadata } from "next";
// import About from "./_components/about";
// import AgricultureSuit from "./_components/agriculture-suit";
import ConsultingCards from "./_components/consulting-cards";
import CraftedERP from "./_components/crafted-erp";
import Hero from "./_components/hero";
import OurServices from "./_components/our-services";
import TrustUs from "./_components/trust-us";
import HowWeWork from "./_components/how-we-work";


export const metadata: Metadata = {
  title: 'Cloudsuite Flemingo Services ',
  description: 'At Cloudsuite Flemingo Services, we specialize in delivering tailored NetSuite ERP solutions to streamline your business processes and boost your productivity.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ConsultingCards />
      <TrustUs />
      <HowWeWork />
      <OurServices />
      <CraftedERP />
      {/* <AgricultureSuit /> */}
      {/* <About /> */}
    </>
  );
}
