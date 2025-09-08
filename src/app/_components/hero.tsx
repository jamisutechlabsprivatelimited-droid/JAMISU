"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react';

import ArrowIcon from "@/assets/icons/left-arrow.png"
import Image from 'next/image';

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  }, [])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="container h-full">
        <div className="embla h-full bg-white relative" ref={emblaRef}>
          <div className="embla__container h-full">

            {/* Slide 1 */}
            <div className="embla__slide h-full flex items-center justify-center">
              <h2 className='text-3xl md:text-5xl font-bold font-primary'>Oracle Netsuite</h2>
            </div>

            {/* Slide 2 */}
            <div className="embla__slide h-full flex items-center justify-center">
              <h2 className='text-3xl md:text-5xl font-bold font-primary'>Salesforce</h2>

            </div>

            {/* Slide 3 */}
            <div className="embla__slide h-full flex items-center justify-center">
              <h2 className='text-3xl md:text-5xl font-bold font-primary'>Microsoft Dynamic 365</h2>
            </div>

            {/* Slide 4 */}
            <div className="embla__slide h-full flex items-center justify-center">
              <h2 className='text-3xl md:text-5xl font-bold font-primary'>Zoho</h2>
            </div>
          </div>

          <button className="embla__prev absolute top-1/2 left-0 cursor-pointer bg-gray-200 p-2 rounded-full" onClick={scrollPrev}>
            <Image src={ArrowIcon} alt='left' width={30} height={30} />
          </button>
          <button className="embla__next absolute top-1/2 right-0 cursor-pointer bg-gray-200 p-2 rounded-full" onClick={scrollNext}>
            <Image src={ArrowIcon} alt='left' width={30} height={30} className='rotate-180' />

          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// <h1 className="text-4xl md:text-7xl font-bold font-primary">
//   Cloudsuite Flemingo Services
// </h1>

// <p className="text-base md:text-lg max-w-2xl font-secondary">
// We at Cloudsuite Flemingo Services have over a decade of experience in the field, providing complete ERP implementation solutions that are suited to a wide range of business requirements. Leading platforms like Oracle NetSuite , Salesforce, Zoho, and Microsoft Dynamics 365 are all areas in which we have extensive experience. With ten years of practical experience and a staff of qualified experts, we provide intelligent, scalable ERP systems that help businesses increase efficiency, streamline processes, and promote long-term success.
// </p>