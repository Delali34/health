"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaSyringe } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { AiFillTool } from "react-icons/ai";
import { FaCheckDouble } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceContent = {
  heading: {
    headingSubTitle: "Our Experiences",
    headingTitle: "Our Experiences",
    description:
      " AfricaHPO Experiences Since the conception of Africa HPO, we have led and provided support to international and local development partners including the Ghana Health Service, GIZ, World Vision Ghana, UNICEF, WHO amongst others on health promotion policy, programme planning and implementation.",
  },
  items: [
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Disease Prevention Campaigns",
      description:
        "Partnered with GIZ Ghana and enrolled a total of Sixty-seven Thousand (67,000) Students and community members in ninty nine (99) junior and senior high schools and catchment communities onto the National Health Insurance Scheme to promote accessibility and affordability of healthcare.",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Health Infrastructure Development",
      description:
        " Partnered with GIZ Ghana, “COVID-19: Comprehensive Pandemic Management for Employees, Families and Communities” enrolled a ballpark of Sixteen Thousand (16,000) Youth Employment Agency (YEA) Fellows in Eight (8) regions onto the National Health Insurance Scheme to promote accessibility and affordability of healthcare.",
    },

    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Nutrition and Hygiene Education",
      description:
        " Provided support to UNIDO on capacity building of apparel industries and small scale businesses on building resilience during public health emergencies and pandemics.",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Maternal and Child Health Services",
      description:
        " Provided technical and community level services to UN Food and Agriculture Organization on the One Health framework for West Africa.",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Mental Health Support",
      description:
        " Conducted research on non-communicable behavioural landscape in six regions to establish evidence for NCDs intervention in Ghana",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Health Infrastructure Development",
      description:
        " We have been part of the working groups for planning polio and COVID-19 vaccination activities, review and development of social and behaviour change communication materials and tools.",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Maternal and Child Health Services",
      description:
        " Provided technical and community level services to UN Food and Agriculture Organization on the One Health framework for West Africa.",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Mental Health Support",
      description:
        " Partnered with GIZ Ghana and enrolled a total of Three Thousand Eight Hundred (3,800) students and community members at Academic City University College onto the National Health Insurance Scheme to promote accessibility and affordability of healthcare",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Health Infrastructure Development",
      description:
        "Production of fine-arts banners, posters, 3D signage for branding the Call Centre at the National level, pull-up banners for UNICEF funded risk communication and community engagement capacity building in 150 districts.",
    },

    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Maternal and Child Health Services",
      description:
        " Production of braille material on COVID-19 FAQs and vaccination in collaboration with WHO and Ghana Health Service for the blind union.",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Mental Health Support",
      description:
        " AFRICA HPO partnered with World Vision Ghana to produce an educative audio-visual documentary targeted at persons living with hearing impairment for COVID-19 vaccine demand generation and acceptance.",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Health Infrastructure Development",
      description:
        " Lead the production of Frequently Asked Questions (FAQ) manual and build the capacity of staff manning the Ghana Health Service-Health Promotion Division call centre.",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Maternal and Child Health Services",
      description:
        "Provided capacity building support on behavioural change to social mobilizers on climate change activities in the six northern regions",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Mental Health Support",
      description:
        " As part of our social responsibilities, we supported the Ghana Health Service at Prampram Polyclinic and New Ningo CHPS to provide free health screening for 2,244 persons during the 2022 Homowo festivities.",
    },
    {
      icon: <FaCheckDouble className="text-primary text-4xl" />,
      title: "Vaccination Drives",
      description:
        "Partnered with WHO and AMA on air pollution and climate change mitigations.",
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
    <section className="py-20 font-mont">
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
