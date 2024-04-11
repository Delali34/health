"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const About = [
  {
    name: "Vision",
    src: "vision.jpg",
    item: "We envisage an empowered society where all persons irrespective of their race, gender, age or state of disability, are well informed, and have the needed capacity to positively influence their health determinants.",
  },
  {
    name: "Mission",
    src: "mission.jpg",
    item: "We exist to promote public health through health literacy capacity building, advocacy for social equity and community development interventions.",
  },
  {
    name: "Our Services",
    src: "ourservices.jpg",
    item: "Our services are not-for-profit. We drive community-health and development agenda even to the remotest parts. We spearhead programmes and projects in collaboration with philanthropies, government and private sector organizations, local and international development partners to reach out to communities via context specific strategies. Our strategies are aimed at promoting the health of children, women, young adults and the aged.",
  },
];

const paragraphStyle = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-light  font-mont">
      {About.map((about, index) => (
        <div key={index} className="container px-4 mx-auto bg-white rounded-md">
          <div className="flex justify-center items-center">
            <div
              className=" relative mx-auto bg-light   mt-20 flex justify-center items-center"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <Image
                className="object-cover md:h-[400px] h-[320px] md:max-w-[80vw] max-w-[90vw] rounded-t-3xl"
                src={`/${about.src}`}
                width={1000}
                height={1000}
                alt=""
              />
              <div className="bg-black/60 inset-0 top-0 right-0 left-0 rounded-t-3xl md:h-[400px] h-[320px] md:max-w-[80vw] max-w-[90vw] bottom-0 absolute"></div>
              <div className="pl-5 pr-1 absolute top-0 flex items-center text-white right-0 bottom-0 left-0">
                <div>
                  <h1 className="text-center md:text-4xl text-2xl font-bold">
                    {about.name}
                  </h1>
                  <p
                    className="pt-5 md:text-xl  text-[12px] "
                    style={index === 2 && !isOpen ? paragraphStyle : null}
                  >
                    {about.item}
                  </p>
                  {index === 2 && (
                    <p
                      className="text-blue-400 underline cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? "read less" : "read more"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhoWeAre;
