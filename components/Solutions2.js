"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceContent = {
  heading: {
    headingSubTitle: "Our Experiences",
    headingTitle: "Our Experiences",
    description:
      " AfricaHPO Experiences Since the conception of Africa HPO, we have led and provided support to international and local development partners including the Ghana Health Service, GIZ, World Vision Ghana, UNICEF, WHO...",
  },
  items: [
    {
      icon: "/giz.png",
      title: "Disease Prevention Campaigns",
      description:
        "Partnered with GIZ Ghana and enrolled a total of Sixty-seven Thousand (67,000) Students and community members in ninty nine (99) junior and senior high schools and catchment communities onto the National Health Insurance Scheme...",
    },
    {
      icon: "/giz.png",
      title: "Health Infrastructure Development",
      description:
        " Partnered with GIZ Ghana, “COVID-19: Comprehensive Pandemic Management for Employees, Families and Communities” enrolled a ballpark of Sixteen Thousand (16,000) Youth Employment Agency (YEA) Fellows in Eight (8) regions onto the National Health Insurance Scheme...",
    },

    {
      icon: "/unido.png",
      title: "Nutrition and Hygiene Education",
      description:
        " Provided support to UNIDO on capacity building of apparel industries and small scale businesses on building resilience during public health emergencies and pandemics.",
    },
    {
      icon: "/un.png",
      title: "Maternal and Child Health Services",
      description:
        " Provided technical and community level services to UN Food and Agriculture Organization on the One Health framework for West Africa.",
    },
  ],
};

const Solutions2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section>
      <div className="relative md:h-[1000px] h-[1300px]">
        <Image
          src="/solution.jpg"
          width={2500}
          height={2500}
          alt=""
          className="object-cover  h-full"
        />
        <div className="bg-black/60 inset-0 top-0 right-0 left-0    bottom-0 absolute"></div>

        <div className="absolute top-0 right-0 left-0 bottom-0 pt-10 flex flex-col items-center ">
          <div>
            {" "}
            <h1 className="text-center text-white font-bold md:text-4xl text-2xl mb-1">
              Our Experiences
            </h1>
            <div className="md:w-[300px] w-[200px] h-1 bg-blue-400"></div>
          </div>

          <div className=" container mx-auto md:p-20 p-5 grid grid-cols-1 md:grid-cols-2 gap-5  place-items-center">
            {serviceContent.items.map((items, index) => {
              return (
                <div
                  className="flex justify-center gap-5  flex-col items-center bg-white p-4"
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <Image
                    className="w-[70px] h-[70px] "
                    src={items.icon}
                    width={100}
                    height={100}
                    alt=""
                  />
                  <div>
                    <h1 className="text-[17px] text-center font-semibold text-black">
                      {items.title}
                    </h1>
                    <p className="text-sm text-center pt-2">
                      {items.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex space-x-3 " data-aos="fade-up">
            <Link
              href="/experience"
              className="py-4 px-5 mb-10 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block hover:-top-1 relative top-0"
            >
              <h1 className="text-sm">Learn More</h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions2;
