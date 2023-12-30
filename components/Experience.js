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
    headingSubTitle: "Our Experiences",
    headingTitle: "Our Services",
    description:
      "We provide ourselves in attention to details with content development, audio-visual, graphical layout and designs, and production of topnotch promotional materials and digital solution herein;",
  },
  items: [
    {
      icon: <MdOutlineLocalHospital className="text-primary text-4xl" />,
      title: "Disease Prevention Campaigns",
      description:
        "These would involve spreading awareness about common diseases in the region, such as malaria, HIV/AIDS, and tuberculosis. The organization could conduct workshops, distribute informational pamphlets, and use local media to educate the public on prevention methods, signs, and symptoms, and the importance of early treatment.",
    },
    {
      icon: <FaSyringe className="text-primary text-4xl" />,
      title: "Vaccination Drives",
      description:
        "Organizing and implementing vaccination campaigns for preventable diseases, especially for children and vulnerable populations. This might include coordination with local health clinics to provide vaccines for diseases like measles, polio, and human papillomavirus (HPV).",
    },
    {
      icon: <GiFruitBowl className="text-primary text-4xl" />,
      title: "Nutrition and Hygiene Education",
      description:
        " Providing education on proper nutrition, hygiene practices, and clean water usage to prevent malnutrition and waterborne diseases. This could involve teaching about the importance of a balanced diet, safe cooking practices, and the need for regular handwashing.",
    },
    {
      icon: <FaBaby className="text-primary text-4xl" />,
      title: "Maternal and Child Health Services",
      description:
        " Offering services focused on the health of mothers and children, including prenatal care, safe childbirth practices, breastfeeding support, and child immunizations. Programs might also provide nutritional supplements for pregnant and nursing mothers and young children.",
    },
    {
      icon: <IoMdHappy className="text-primary text-4xl" />,
      title: "Mental Health Support",
      description:
        " Establishing support systems for mental health, including counseling services, support groups, and awareness campaigns to destigmatize mental health issues. This could also involve training community members in basic psychological first aid and mental health awareness.",
    },
    {
      icon: <AiFillTool className="text-primary text-4xl" />,
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
    <section className="py-20 bg-light font-mont">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20">
          <span
            className="inline-block z-50 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10 "
            data-aos="fade-up"
          >
            {serviceContent.heading.headingSubTitle}
          </span>
          <h2
            className="text-heading text-2xl lg:text-4xl font-bold mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {serviceContent.heading.headingTitle}
          </h2>
          <p
            className="text-body leading-relaxed "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {serviceContent.heading.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {serviceContent.items.map((item, index) => {
            index *= 100;
            return (
              <div className="flex space-x-10" key={item.title}>
                <div
                  className="w-14 shrink-0 "
                  data-aos="fade-up"
                  data-aos-delay={index}
                >
                  <span className="inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl ">
                    {item.icon}
                  </span>
                </div>
                <div>
                  {item.title && (
                    <h3
                      className="text-heading font-bold text-md mb-3"
                      data-aos="fade-up"
                      data-aos-delay={index}
                    >
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p
                      className="leading-relaxed"
                      data-aos="fade-up"
                      data-aos-delay={index}
                    >
                      {item.description}
                    </p>
                  )}
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
