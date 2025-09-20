
import { Metadata } from "next"
import CalendlyEmbed from "./calendly-embed"


export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Us : Schedule a free 1:1 call with Jamisu',
}
 



const ContactUsPage = () => {


  return <>
    <section className="container">
      <h1 className="text-3xl lg:text-5xl text-center font-semibold mt-10">Book a Free 1:1 Call Today</h1>
      <CalendlyEmbed url="https://calendly.com/aamirk51/30min" />
    </section>
  </>
}

export default ContactUsPage