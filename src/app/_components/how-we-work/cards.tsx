"use client";

import ProjectRequirementImage from "@/assets/project-requirement.png";
import ProjectManagementImage from "@/assets/project-management.png";
import ProjectDeliveryImage from "@/assets/project-delivery.png";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const cardsData = [
  {
    number: '01',
    title: 'Requirement',
    image: ProjectRequirementImage,
    description: 'We proactively analyse the requirement of the task to develop a deep understanding of the pain points. Proactively analyse the requirement of the task.'
  },
  {
    number: '02',
    title: 'Project Mangement',
    image: ProjectManagementImage,

    description: 'We proactively analyse the requirement of the task to develop a deep understanding of the pain points. Proactively analyse the requirement of the task.'
  },
  {
    number: '03',
    title: 'Delivery Management',
    image: ProjectDeliveryImage,
    description: 'We proactively analyse the requirement of the task to develop a deep understanding of the pain points. Proactively analyse the requirement of the task.'
  },

]
const Cards = () => {

  let containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const progressLine = containerRef.current?.querySelector('.progress-line');

    if (!progressLine) return;

    gsap.fromTo(progressLine, {
      y: '-100%'
    }, {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 120px',
        end: 'bottom 60%',
        scrub: true,
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="space-y-20 lg:space-y-32 relative overflow-hidden pt-8">
      {
        cardsData.map(data => <Card {...data} key={data.number} />)
      }

      {/* Scrolling Line Animation  */}
      <div className="absolute h-[calc(100%-50px)] lg:h-[calc(100%-100px)] top-0 max-lg:right-0 lg:left-1/2 -translate-x-4 lg:-translate-x-1/2">
        <div className="w-1 h-full bg-gray/20"></div>
        <div className="progress-line absolute top-0 h-full -translate-y-full">
          <div className="  h-full">
            <div className="w-1 bg-orange h-full"></div>
            <div className="w-7 h-7 bg-orange rounded-full -translate-x-3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;


const Card = ({ title, description, image, number }:
  typeof cardsData[number]
) => {

  let containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {

    gsap.fromTo(containerRef.current, {
      opacity: 0.4
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: 'top 80%',
        end: "top center"
      }
    })

  }, { scope: containerRef })
  return <div ref={containerRef} className="max-lg:w-11/12 max-lg:mr-auto grid lg:grid-cols-2 gap-10">

    <div className="flex lg:justify-end">
      <figure className="w-20 lg:w-[155px] h-20 lg:h-[155px] relative lg:mr-20">
        <Image src={image} layout="fill" alt={title} className="" />
      </figure>
    </div>

    <div className="grid lg:grid-cols-[auto_1fr] gap-4 items-start max-w-lg lg:mr-auto max-lg:ml-auto ml-20">
      <span className="blocktext-xl font-semibold h-10 w-10 flex justify-center items-center bg-green text-white rounded-full">{number}</span>
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-gray">{description}</p>
      </div>
    </div>
  </div>
}