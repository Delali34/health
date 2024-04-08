"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const About = [
  {
    name: "Vision",
    item: "We envisage an empowered society where all persons irrespective of race, gender, age or state of their disability, are well informed, and have the needed capacity to positively influence their health determinants.",
  },
  {
    name1: "Mission",
    item2:
      "We exist to promote public health through health literacy capacity building, advocacy for social equity and community development interventions.",
  },
];

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section className="py-20 bg-light  font-mont">
      <div id="Vission" className="container px-4 mx-auto bg-white rounded-md">
        <div className="flex justify-center items-center">
          <div
            className=" relative mx-auto bg-light   mt-20 flex justify-center items-center"
            data-aos="zoom-out-up"
            data-aos-duration="1000"
          >
            <Image
              className="object-cover md:h-[400px] h-[320px] md:max-w-[80vw] max-w-[90vw] rounded-t-3xl"
              src="/vision.jpg"
              width={1000}
              height={1000}
              alt=""
            />
            <div className="bg-black/60 inset-0 top-0 right-0 left-0 rounded-t-3xl md:h-[400px] h-[320px] md:max-w-[80vw] max-w-[90vw] bottom-0 absolute"></div>
            {About.map((about, index) => {
              return (
                <div className="pl-5 absolute top-0 flex items-center text-white right-0 bottom-0 left-0">
                  <div>
                    <h1 className="text-center md:text-4xl text-3xl font-bold">
                      {about.name}
                    </h1>
                    <p className="pt-5 md:text-xl text-[15px] ">{about.item}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="Mission" className="container px-4 mx-auto bg-white rounded-md">
        <div className="flex justify-center items-center">
          <div
            className=" relative mx-auto bg-light   mt-20 flex justify-center items-center"
            data-aos="zoom-out-up"
            data-aos-duration="1000"
          >
            <Image
              className="object-cover md:h-[400px] h-[320px] md:max-w-[80vw] max-w-[90vw] rounded-t-3xl"
              src="/mission.jpg"
              width={1000}
              height={1000}
              alt=""
            />
            <div className="bg-black/60 inset-0 top-0 right-0 left-0 rounded-t-3xl md:h-[400px] h-[320px] md:max-w-[80vw] max-w-[90vw] bottom-0 absolute"></div>
            {About.map((about, index) => {
              return (
                <div className="pl-5 pr-1 absolute top-0 flex items-center text-white right-0 bottom-0 left-0">
                  <div>
                    <h1 className="text-center md:text-4xl text-3xl font-bold">
                      {about.name1}
                    </h1>
                    <p className="pt-5 md:text-xl text-[15px] ">
                      {about.item2}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
