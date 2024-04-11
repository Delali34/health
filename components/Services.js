"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaSyringe } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { AiFillTool } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceContent = {
  heading: {
    headingSubTitle: "Our Awesome Services",
    headingTitle: "Our Experience",
    description: " ",
  },
  items: [
    {
      icon: "/prevent.jpg",
      title: "Community Nutrition Project",
      description:
        "Our food and nutrition projects were community based. We taught mothers how to cook nutritious foods. And we learnt what different community cultures mean by “food”.",
    },
    {
      icon: "/vaccine.jpg",
      title: "COVID-19 Frontline Support",
      description:
        "We played frontline roles in the fight against COVID-19 outbreak. This was one of our groundbreaking experiences. We thought we did little but beneficiaries were overwhelmed… We worked with our communities, shared accurate information with them and they took the necessary precautions to protect themselves.",
    },
    {
      icon: "/education.jpg",
      title: "Star Readers Initiative",
      description:
        " We developed one of the most exciting reading programmes for basic school children in 5 regions of Ghana. Our young stars are now doing well in digesting complex sentences, making coherent arguments and developing their own storylines…",
    },
    {
      icon: "/maternal.jpg",
      title: "Livelihood Capacity Building",
      description:
        " Small scale business enterprises are at our heart. This project focused on building capacity of petty traders on managing their businesses in the current era of advanced technology. We helped business owners to learn new ways of managing their finances ….",
    },
    {
      icon: "/mental.jpg",
      title: "Family Planning Intervention",
      description:
        "We helped families to determine when to have their children with the most convenient intervals. Our family planning interventions targeted the youth and new couples. Our beneficiaries gave heartwarming testimonies…..",
    },
    {
      icon: "/develop.jpg",
      title: "Water is Life Project",
      description:
        " Our water and sanitation projects targeted the rural areas in Upper East, Oti, Volta and Bono regions. The “Water is Life” project was a lifesaving intervention that cannot be forgotten in our records……",
    },
  ],
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section className="py-20 bg2 font-mont">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl text-[#092862] text-center font-bold">
          {serviceContent.heading.headingTitle}
        </h1>
        <div className=" max-w-[450px] mx-auto pt-2">
          <p className=" text-[13px]">{serviceContent.heading.description}</p>
        </div>

        <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceContent.items.map((items, index) => {
            index *= 100;
            return (
              <div
                className="bg-light mt-10 p-5 flex flex-col justify-center items-center  shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index}
              >
                <div>
                  <Image src={items.icon} width={500} height={500} alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="text-xl text-[#092862] text-center font-medium">
                    {items.title}
                  </h1>
                  <p className="text-sm text-[#092862] pt-2 text-center">
                    {items.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
