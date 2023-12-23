"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const solutionContent = {
  text: {
    headingSubTitle: "Our Experiences",
    headTitle:
      "Africa HPO collaborates with major partners for health promotion in Ghana.",
    description:
      "Partnered with GIZ Ghana and enrolled a total of Sixty-seven Thousand (67,000) Students and community members in ninty nine (99) junior and senior high schools and catchment communities onto the National Health Insurance Scheme to promote accessibility and affordability of healthcare.",
    features: [
      {
        title: "Partnered with GIZ Ghana..",
      },
      {
        title: "Partnered with WHO and AMA.. ",
      },
      {
        title: "Provided support to UNIDO...",
      },
      {
        title: "Provided level services to UN..",
      },
    ],
    cta: {
      btn1: {
        href: "#",
        label: "Read More",
      },
    },
  },

  images: {
    img1: "/image1.jpg",
    img2: "/image2.jpg",
    img3: "/image3.jpg",
  },
  experience: {
    year: "25+",
    label: "years of experience",
  },
};

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section className="py-32 bg-light overflow-x-hidden font-mont">
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-2 justify-between ">
          <div
            className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] 
            before:-top-20 before:z-[-1] before:rounded-br-3xl before:py-28 before:bg-white before:-bottom-20"
          >
            <div className="flex gap-2">
              <div className="flex flex-col space-y-2 ">
                <div>
                  <Image
                    src={solutionContent.images.img1}
                    width={626}
                    height={640}
                    className="object-cover h-full w-full rounded-lg"
                    alt="africahealthpromotion"
                    data-aos="fade-right"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <div className="w-4/12 flex ">
                    <div className="ml-auto">
                      <div
                        className="bg-greenLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px] "
                        data-aos="fade-in"
                        data-aos-delay="400"
                      ></div>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <Image
                      src={solutionContent.images.img3}
                      width={626}
                      height={640}
                      className="object-cover h-full w-full rounded-lg"
                      alt="africahealthpromotion"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex flex-col gap-2">
                  <div>
                    <div
                      className="bg-purpleLight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px] "
                      data-aos="fade-in"
                      data-aos-delay="400"
                    ></div>
                  </div>
                  <div>
                    <Image
                      src={solutionContent.images.img2}
                      width={547}
                      height={573}
                      alt="africahealthpromotion"
                      className="object-cover h-full w-full rounded-lg shadow-2xl"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    />
                  </div>
                  {solutionContent.experience.label && (
                    <div>
                      <div
                        className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5 "
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <strong className="block font-bold text-primary text-xl lg:text-5xl">
                          {solutionContent.experience.year}
                        </strong>
                        <span>{solutionContent.experience.label}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 relative z-10">
            <span
              className="inline-block z-50 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10 "
              data-aos="fade-up"
            >
              {solutionContent.text.headingSubTitle}
            </span>
            {solutionContent.text.headTitle && (
              <h2
                className="text-heading text-2xl lg:text-4xl font-bold mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {solutionContent.text.headTitle}
              </h2>
            )}
            {solutionContent.text.description && (
              <p
                className="text-body mb-10 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {solutionContent.text.description}
              </p>
            )}
            <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10">
              {solutionContent.text.features.map((feature, index) => {
                index *= 100;
                return (
                  <li
                    className="flex flex-grow items-center space-x-5"
                    key={feature.title}
                    data-aos="fade-left"
                    data-aos-delay={index}
                  >
                    <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center ">
                      <BiCheck className="text-white text-xl" />
                    </span>
                    <span>{feature.title}</span>
                  </li>
                );
              })}
            </ul>
            <div
              className="flex space-x-3 "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link
                href={solutionContent.text.cta.btn1.href}
                className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block hover:-top-1 relative top-0"
              >
                {solutionContent.text.cta.btn1.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
