"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import AciSunyaLogo from "@/assets/brand-logos/acisunya.svg"
import FutureWaveLogo from "@/assets/brand-logos/future-wave.svg";
import IgnitiveLogo from "@/assets/brand-logos/ignitive.svg";
import AutoScroll from "embla-carousel-auto-scroll";
import LeftGradient from "@/assets/left-gradient.png";
import RightGradient from "@/assets/right-gradient.png";



const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  }, [AutoScroll({
    speed: 0.8,
    playOnInit: true

  })])

  return (
    <section className="container entities py-14 relative">
      <h3 className="text-2xl font-semibold mb-12 text-center">Our <span className="text-orange">Partners</span></h3>
      <Image className="absolute left-0 bottom-0 z-10" src={LeftGradient} alt="" width={80} height={204} />
      <Image className="absolute right-0 bottom-0 z-10" src={RightGradient} alt="" width={80} height={204} />
      <div className="embla relative" ref={emblaRef}>

        <div className="embla__container flex items-center gap-x-10 lg:gap-x-20">
          <div className="embla__slide w-44">
            <figure>
              <Image src={AciSunyaLogo} alt="aci sunya" width={170} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={FutureWaveLogo} alt="future wave infra solution" width={130} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={IgnitiveLogo} alt="ignitive software labs" width={160} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={AciSunyaLogo} alt="aci sunya" width={170} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={FutureWaveLogo} alt="future wave infra solution" width={130} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={IgnitiveLogo} alt="ignitive software labs" width={160} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={AciSunyaLogo} alt="aci sunya" width={170} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={FutureWaveLogo} alt="future wave infra solution" width={130} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={IgnitiveLogo} alt="ignitive software labs" width={160} />
            </figure>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Carousel