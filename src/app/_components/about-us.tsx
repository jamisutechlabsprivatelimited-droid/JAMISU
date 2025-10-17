import Image from "next/image";
import JourneyImage from "@/assets/journey-image.png";
import DirectorImage from "@/assets/director.png"

const AboutUs = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h3 className="text-5xl text-center font-medium">Our
          <span className="text-orange"> Journey
          </span>
        </h3>

        <div className="mt-10 text-gray grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-2 max-md:text-center max-md:text-15">
            <p>We started <span className="font-semibold">Ignitive Labs</span> in <span className="font-semibold">Year 2019</span> with a small
              team in Indore. </p>

            <p>The problem was that small businesses
              couldn&apos;t afford Enterprise ERP solutions, so our idea was to
              create an affordable, AI-powered tool that automated the
              business with ERPs, CRMs, e-commerce solutions, business-to-business applications, business-to-client, Managed Services
              and web design and development.
            </p>

            <p>
              Satisfied clients around the
              globe bear testimony to the quality of our work.
            </p>

            <div>
              <Image src={DirectorImage} alt="jamisu journey" className="w-36 h-36 mt-8" />
              <h6 className="font-semibold mt-1">Director</h6>
            </div>
          </div>

          <figure className="relative w-full h-96">
            <Image src={JourneyImage} alt="jamisu journey" fill className="object-contain" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default AboutUs