"use client";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const StatContent = {
  stats: [
    {
      number: "99.9%",
      label: "Accurate Information",
    },
    {
      number: "3,900",
      label: "Safe Health Screening",
    },
    {
      number: "27,00",
      label: "Impacted Accurate Information",
    },
  ],
  getStarted: {
    heading: "Get started with Our Service",
    description:
      " An NGO dedicated to promoting public health using research-driven and evidence-based approaches promoting public health.",
    img: "/info3.svg",
    cta: {
      cta_href: "#",
      cta_label: "Learn more",
    },
  },
};

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section className="pt-20 pb-10 font-mont">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0  ">
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {StatContent.stats.map((stat, index) => {
                index *= 100;
                return (
                  <div
                    className="text-center lg:text-left"
                    key={stat.label}
                    data-aos="fade-up"
                    data-aos-delay={index}
                  >
                    <strong className="text-primary text-4xl xl:text-[52px] font-bold block leading-tight">
                      {stat.number}
                    </strong>
                    <span>{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="bg-light py-10 px-7 lg:px-10 !pr-28 md:!pr-32 lg:!pr-40 rounded-lg relative">
              {StatContent.getStarted.img && (
                <img
                  src={StatContent.getStarted.img}
                  alt=""
                  className="absolute right-0 lg:right-6 -top-14 w-24"
                  data-aos="fade-right"
                  data-aos-delay="300"
                />
              )}
              {StatContent.getStarted.heading && (
                <h3
                  className="text-heading font-bold text-xl mb-3"
                  data-aos="fade-left"
                >
                  {StatContent.getStarted.heading}
                </h3>
              )}
              {StatContent.getStarted.description && (
                <p
                  className=" text-xl mb-5"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  {StatContent.getStarted.description}
                </p>
              )}
              {StatContent.getStarted.cta.cta_label && (
                <Link
                  href={StatContent.getStarted.cta.cta_href}
                  className=" flex space-x-2 outline-none items-center font-semibold text-primary group"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <span>{StatContent.getStarted.cta.cta_label}</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex  items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary">
                    <FaChevronRight className="text-lg" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
