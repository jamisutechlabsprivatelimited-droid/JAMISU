import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import AboutImage from "@/assets/about.webp";

const About = () => {
  return (
    <section id="About Flemingo Services" className="container pt-32">
      <div className="text-center">
        <h2 className="text-5xl font-primary">
          About
          <span className="text-orange">Cloudsuite Flemingo Services </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 font-secondary mt-10 items-center max-w-5xl mx-auto">
          <figure className="max-md:order-last w-full flex justify-center items-center">
              <Image
                alt="Agriculture NetSuite"
                src={AboutImage}
                width={600}
                height={400}
                className="object-contain rounded-xl"
              />
            </figure>

        <div>
          <div className="space-y-6 text-sm text-gray-600">
            <p className="font-bold">
              Cloudsuite Flemingo Services, a proud member of the LanceSoft Inc family, excels in  empowering  businesses
              with cutting-edge solutions. Our expertise lies in ERP implementation and consulting, enabling organizations
              to streamline operations through intelligent automation and bespoke ERP strategies.  Beyond ERP, we offer a
              comprehensive suite of IT services, including software development, cloud solutions, cybersecurity, IT
              consulting, and much more.
            </p>

            <p className="font-bold">
              At Cloudsuite Flemingo Services, we specialize in delivering tailored NetSuite ERP solutions to streamline
              your business processes and boost your productivity. With years of expertise, our certified professionals
              provide end-to-end NetSuite services that drive growth and innovation.
            </p>

            <p className="font-bold">
              Helping companies buy, implement and get ROI from NetSuite (and products that integrate with NetSuite) is what we do.
            </p>

            <h4 className="text-xl">
              But enough talking about us. Let&apos;s talk about&nbsp;you.
            </h4>

            <div className="w-max">
              <ButtonLink href="mailto:sales@flemingoservices.com" variant="blue">
                Say Hey
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
