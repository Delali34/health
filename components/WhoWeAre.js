"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const About = [
  {
    name: "Vision",
    item: "Africa Health Promotion Organization is an NGO dedicated to promoting public health using research-driven and evidence-based approaches. We are a centre of excellence for capacity building, community engagement and advocacy within the One Health concept",
  },
  {
    name1: "Mission",
    item2:
      "We are strategically positioned within Africa’s most pressing priorities in the areas of public health and health promotion. Our operations are driven by scientific research and evidence",
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
      <div className="container px-4 mx-auto bg-white rounded-md">
        <div className="flex justify-center items-center">
          <div
            className=" relative mx-auto bg-light   mt-20 flex justify-center items-center"
            data-aos="zoom-out-up"
            data-aos-duration="1000"
          >
            <Image
              className="object-cover h-[400px] md:max-w-[80vw] max-w-[90vw] rounded-t-3xl"
              src="/vision.jpg"
              width={1000}
              height={1000}
              alt=""
            />
            <div className="bg-black/60 inset-0 top-0 right-0 left-0 rounded-t-3xl h-[400px] md:max-w-[80vw] max-w-[90vw] bottom-0 absolute"></div>
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
    </section>
  );
};

export default WhoWeAre;
