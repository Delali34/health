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
      icon: "/education.jpg",
      title: "Disease Prevention Campaigns",
      description:
        "Partnered with GIZ Ghana and enrolled a total of Sixty-seven Thousand (67,000) Students and community members in ninty nine (99) junior and senior high schools and catchment communities onto the National Health Insurance Scheme to promote accessibility and affordability of healthcare.",
    },
    {
      icon: "/health3.png",
      title: "Health Infrastructure Development",
      description:
        " Partnered with GIZ Ghana, “COVID-19: Comprehensive Pandemic Management for Employees, Families and Communities” enrolled a ballpark of Sixteen Thousand (16,000) Youth Employment Agency (YEA) Fellows in Eight (8) regions onto the National Health Insurance Scheme to promote accessibility and affordability of healthcare.",
    },

    {
      icon: "/small.jpg",
      title: "Nutrition and Hygiene Education",
      description:
        " Provided support to UNIDO on capacity building of apparel industries and small scale businesses on building resilience during public health emergencies and pandemics.",
    },
    {
      icon: "/food.jpg",
      title: "Maternal and Child Health Services",
      description:
        " Provided technical and community level services to UN Food and Agriculture Organization on the One Health framework for West Africa.",
    },
    {
      icon: "/health1.jpg",
      title: "Mental Health Support",
      description:
        " Conducted research on non-communicable behavioural landscape in six regions to establish evidence for NCDs intervention in Ghana",
    },
    {
      icon: "/health3.png",
      title: "Health Infrastructure Development",
      description:
        " We have been part of the working groups for planning polio and COVID-19 vaccination activities, review and development of social and behaviour change communication materials and tools.",
    },

    {
      icon: "/education.jpg",
      title: "Mental Health Support",
      description:
        " Partnered with GIZ Ghana and enrolled a total of Three Thousand Eight Hundred (3,800) students and community members at Academic City University College onto the National Health Insurance Scheme to promote accessibility and affordability of healthcare",
    },
    {
      icon: "/city.jpg",
      title: "Health Infrastructure Development",
      description:
        "Production of fine-arts banners, posters, 3D signage for branding the Call Centre at the National level, pull-up banners for UNICEF funded risk communication and community engagement capacity building in 150 districts.",
    },

    {
      icon: "/image5.jpg",
      title: "Maternal and Child Health Services",
      description:
        " Production of braille material on COVID-19 FAQs and vaccination in collaboration with WHO and Ghana Health Service for the blind union.",
    },
    {
      icon: "/image2.jpg",
      title: "Mental Health Support",
      description:
        " AFRICA HPO partnered with World Vision Ghana to produce an educative audio-visual documentary targeted at persons living with hearing impairment for COVID-19 vaccine demand generation and acceptance.",
    },
    {
      icon: "/image5.jpg",
      title: "Health Infrastructure Development",
      description:
        " Lead the production of Frequently Asked Questions (FAQ) manual and build the capacity of staff manning the Ghana Health Service-Health Promotion Division call centre.",
    },
    {
      icon: "/image4.jpg",
      title: "Maternal and Child Health Services",
      description:
        "Provided capacity building support on behavioural change to social mobilizers on climate change activities in the six northern regions",
    },
    {
      icon: "/image1.jpg",
      title: "Mental Health Support",
      description:
        " As part of our social responsibilities, we supported the Ghana Health Service at Prampram Polyclinic and New Ningo CHPS to provide free health screening for 2,244 persons during the 2022 Homowo festivities.",
    },
    {
      icon: "/vaccine.jpg",
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
    <section className="font-mont">
      <div className="relative  ">
        <Image
          src="/solution.jpg"
          className=" w-full h-[50vh] object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <div className="bg-black/60 inset-0 top-0 right-0 left-0  h-[50vh] bottom-0 absolute"></div>

        <div className="absolute top-[50%] right-0 left-0 bottom-0 flex justify-center">
          <h1 className="text-white md:text-7xl text-4xl font-bold">
            Our Experience
          </h1>
        </div>
      </div>
      <div className="container px-4 mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {serviceContent.items.map((item, index) => {
            index *= 100;
            return (
              <div
                className=""
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index}
              >
                <div className="">
                  <Image src={item.icon} width={600} height={600} alt="" />
                </div>
                <div>
                  {item.description && (
                    <p className="leading-relaxed py-5">{item.description}</p>
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
