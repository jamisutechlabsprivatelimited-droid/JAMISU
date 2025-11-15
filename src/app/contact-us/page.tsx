
import { Metadata } from "next"
import Image from "next/image";
import PinIcon from "@/assets/icons/location-pin.svg"
import Link from "next/link";
import WhatsappIcon from "@/assets/icons/chat-on-whatsapp.svg"
import ContactForm from "@/components/globals/contact-form";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Us : Schedule a free 1:1 call with Jamisu',
}


const ContactUsPage = () => {


  return <>
    <section className="container pb-20">
      <h1 className="text-3xl lg:text-5xl font-semibold mt-10 text-center">Get in Touch</h1>

      <ContactForm />
      <div className="">
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
          <div className="font-medium text-15 bg-white-secondary/20 p-4 space-y-4">
            <p className="space-x-3">
              <span className="inline-block">
                📞
              </span>
              <Link href="tel:+919975549318" className="hover:underline">  +919975549318 </Link>

            </p>

            <p className="space-x-3">
              <span className="inline-block text-lg">
                📧
              </span>
              <Link href="mailto:sales@jamisu.com" className="hover:underline">
                sales@jamisu.com
              </Link>
            </p>
            <p className="space-x-3">
              <span className="inline-block text-lg">
                📧
              </span>
              <Link href="mailto:info@ignitivelabs.in" className="hover:underline">
                info@ignitivelabs.in
              </Link>
            </p>

            <Link href={"https://wa.me/+919975549318"}>
              <Image
                src={WhatsappIcon}
                alt="chat on whatsapp"
                width={180}
                className="hover:opacity-80"
              />
            </Link>
          </div>
          <div className="space-y-3 bg-white-secondary/20 p-4 rounded-md">
            <Image
              src={PinIcon}
              alt=""
              width={40} height={40}
            />
            <p className="text-15">
              Ignitive Software Labs, 203, plot No 53,
              <br />
              Above Destiny Cafe, Near Medanta Hospital,
              <br />
              Vijaynagar, Indore (M.P)
              <br />
              INDIA
            </p>
          </div>
          <div className="space-y-3 bg-white-secondary/20 p-4 rounded-md">
            <Image
              src={PinIcon}
              alt=""
              width={40} height={40}
            />
            <p className="text-15">
              Tower - D, The Golden Palm Sector - 168,
              <br />
              Noida - 201304
              <br />
              INDIA
            </p>
          </div>

          
        </div>

      </div>

      <div className="w-full h-[390px] md:h-[500px] mt-10 rounded-md overflow-hidden">
        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4567917445474!2d75.8978558!3d22.748423199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963029b6938d575%3A0x64668708c2606553!2sIgnitive%20Software%20Labs!5e0!3m2!1sen!2sin!4v1758636172509!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy"></iframe>
      </div>

    </section>
  </>
}


export default ContactUsPage