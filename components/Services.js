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
    headingTitle: "Our Services",
    description:
      "Our services are not-for-profit. We drive community-health and development agenda even to the remotest parts. We spearhead programmes and projects in collaboration with philanthropies, government and private sector organizations, local and international development partners to reach out to communities via context specific strategies. Our strategies are aimed at promoting the health of children, women, young adults and the aged. ",
  },
  items: [
    {
      icon: "/prevent.jpg",
      title: "Disease Prevention Campaigns",
      description:
        "These would involve spreading awareness about common diseases in the region, such as malaria, HIV/AIDS, and tuberculosis. The organization could conduct workshops, distribute informational pamphlets, and use local media to educate the public on prevention methods, signs, and symptoms, and the importance of early treatment.",
    },
    {
      icon: "/vaccine.jpg",
      title: "Vaccination Drives",
      description:
        "Organizing and implementing vaccination campaigns for preventable diseases, especially for children and vulnerable populations. This might include coordination with local health clinics to provide vaccines for diseases like measles, polio, and human papillomavirus (HPV).",
    },
    {
      icon: "/education.jpg",
      title: "Nutrition and Hygiene Education",
      description:
        " Providing education on proper nutrition, hygiene practices, and clean water usage to prevent malnutrition and waterborne diseases. This could involve teaching about the importance of a balanced diet, safe cooking practices, and the need for regular handwashing.",
    },
    {
      icon: "/maternal.jpg",
      title: "Maternal and Child Health Services",
      description:
        " Offering services focused on the health of mothers and children, including prenatal care, safe childbirth practices, breastfeeding support, and child immunizations. Programs might also provide nutritional supplements for pregnant and nursing mothers and young children.",
    },
    {
      icon: "/mental.jpg",
      title: "Mental Health Support",
      description:
        " Establishing support systems for mental health, including counseling services, support groups, and awareness campaigns to destigmatize mental health issues. This could also involve training community members in basic psychological first aid and mental health awareness.",
    },
    {
      icon: "/develop.jpg",
      title: "Health Infrastructure Development",
      description:
        " Working to improve health infrastructure by supporting the construction or enhancement of local clinics and hospitals, providing medical equipment, and training healthcare workers and community health volunteers to provide better health services.",
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
        <h1 className="text-3xl text-center font-bold">
          {serviceContent.heading.headingTitle}
        </h1>
        <div className=" max-w-[450px] mx-auto pt-2">
          <p className="text-center text-[17px]">
            {serviceContent.heading.description}
          </p>
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
                  <h1 className="text-xl text-center font-medium">
                    {items.title}
                  </h1>
                  <p className="text-sm pt-2 text-center">
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
