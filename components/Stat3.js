"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const StatContent = {
  stats: [
    {
      img: "/information.jpg",
      number: "100%",
      label: "Nationwide Coverage ",
    },
    {
      img: "/screening.jpg",
      number: "6.9 Million",
      label: "Direct Beneficiaries",
    },
    {
      img: "/lives.jpg",
      number: "106",
      label: "Community Projects Implemented ",
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

const Stats2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section className="bg  pt-20 pb-10 font-mont">
      {/* statistic component */}
      <div className="container px-4 mx-auto">
        {/* cards */}
        <div>
          <div className="grid place-items-center grid-cols-1 gap-6 md:grid-cols-3">
            {StatContent.stats.map((stat, index) => {
              index *= 100;
              return (
                <div key={index} data-aos="fade-down" data-aos-delay={index}>
                  <div>
                    <Image
                      src={stat.img}
                      width={1500}
                      height={1500}
                      className="lg:w-[400px] md:w-[300px] md:h-[200px] lg:h-[300px] object-cover"
                      alt=""
                    />
                  </div>
                  <h1 className="text-center pt-3 lg:text-3xl text-2xl font-bold">
                    {stat.number}
                  </h1>
                  <p className="text-center lg:text-2xl text-xl pt-3 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats2;
