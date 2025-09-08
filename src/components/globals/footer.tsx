import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-10">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

        {/* Quick Links */}
        <div>
          <h5 className="text-2xl font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-orange">Home</Link></li>
            <li><Link href="/services" className="hover:text-orange">Services</Link></li>
            <li><Link href="/about" className="hover:text-orange">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-orange">Contact Us</Link></li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h5 className="text-2xl font-semibold mb-4">Industries</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/industries/manufacturing" className="hover:text-orange">Manufacturing</Link></li>
            <li><Link href="/industries/ecommerce" className="hover:text-orange">Ecommerce</Link></li>
            <li><Link href="/industries/it-services" className="hover:text-orange">IT Services</Link></li>
            <li><Link href="/industries/retail" className="hover:text-orange">Retail</Link></li>
          </ul>
        </div>

        {/* NetSuite Services */}
        <div>
          <h5 className="text-2xl font-semibold mb-4">NetSuite Services</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/netsuite-consulting" className="hover:text-orange">NetSuite Consulting</Link></li>
            <li><Link href="/services/netsuite-implementation" className="hover:text-orange">NetSuite Implementation</Link></li>
            <li><Link href="/services/netsuite-customization" className="hover:text-orange">NetSuite Customization</Link></li>
            <li><Link href="/services/netsuite-support" className="hover:text-orange">NetSuite Support</Link></li>
          </ul>
        </div>

        {/* Get In Touch */}
       <div>
  <h5 className="text-2xl font-semibold mb-4">Get In Touch</h5>

  <div className="space-y-4 text-sm">
    {/* Phone numbers */}
    <div className="flex items-start gap-2">
      <span className="text-orange text-lg mt-1"></span>
      <div className="flex flex-col">
        <a href="tel:+919021023513" className="hover:underline"> 📞 +91 9021023513</a>
        <a href="tel:+919109301715" className="hover:underline"> 📞 +91 9109301715</a>
        <a href="tel:+919109301716" className="hover:underline"> 📞 +91 9109301716</a>
         <Link href="mailto:sales@flemingoservices.com" className="text-sm text-white hover:underline">
      📧 sales@flemingoservices.com
    </Link>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Bottom section: Address and Social Icons */}
      <div className="container max-w-7xl flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
        {/* Address */}
        <div className="text-sm text-white/90">
          <h5 className="text-orange text-xl mb-2">📍 INDIA</h5>
          <p>
            301 ,Airen Heights Opp<br />
            Near C-21Mall ,A.B.Road<br />
            Indore, Madhya Pradesh 452010
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/flemingoservices/?hl=en">
            <Image src="/Instgram.jpg" alt="Instagram" width={40} height={40} className="rounded-full hover:opacity-80" />
          </Link>
          <Link href="mailto:sales@flemingoservices.com">
            <Image src="/Gmail.png" alt="Email" width={40} height={40} className="rounded-full hover:opacity-80" />
          </Link>
          <Link href="https://www.linkedin.com/in/cloudsuite-flemingo-services-a375aa361/">
            <Image src="/Linkedln.png" alt="LinkedIn" width={40} height={40} className="rounded-full hover:opacity-80" />
          </Link>
          <Link href="https://wa.me/919021023513">
            <Image src="/Watsapp (1).png" alt="WhatsApp" width={40} height={40} className="rounded-full hover:opacity-80" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-sm text-white mt-10">
        &copy; 2025 All rights reserved. Cloudsuite Flemingo Services Pvt. Ltd.
      </p>
    </footer>
  );
};

export default Footer;
