"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const heroContent = {
  text: {
    subheading: "Welcome to Africa HPO",
    heading: "Leading Health Sector Agenda",
    description:
      "We are focused on leading, or complementing ongoing health sector agenda and other government initiative to improve access to quality healthcare for all individuals.",
  },
  images: {
    img1: "/image1.jpg",
    img2: "/image2.jpg",
    img3: "/image3.jpg",
    img4: "/image4.jpg",
    img5: "/image5.jpg",
  },
};

const Hero = () => {
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
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <span
              className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1] "
              data-aos="fade-up"
            >
              {heroContent.text.subheading}
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-heading mb-7"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {heroContent.text.heading}
            </h1>
            <p
              className="leading-relaxed text-body mb-10"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              {heroContent.text.description}
            </p>
            <div
              className="space-x-3 flex "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link
                href="#"
                className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block hover:-top-1 relative top-0"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg inline-block hover:-top-1 relative top-0"
              >
                How We Work
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2 ">
            <div className="flex space-x-2 items-stretch">
              {" "}
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={1560}
                    height={706}
                    alt="africahealthpromotion"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-right"
                  />
                )}
              </div>
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="africahealthpromotion.com"
                        className="object-cover h-full w-full rounded-2xl"
                        data-aos="fade-down"
                        data-aos-delay="100"
                      />
                    </div>
                  )}
                  <div
                    className="bg-yellowLight rounded-2xl rounded-tr-[200px]"
                    data-aos="fade-in"
                    data-aos-delay="300"
                  ></div>
                </div>
                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="africahealthpromotion.org"
                      className="object-cover h-full w-full rounded-2xl"
                      data-aos="fade-left"
                      data-aos-delay="200"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="bg-greenLight rounded-2xl rounded-bl-[200px]"
                    data-aos="fade-in"
                    data-aos-delay="300"
                  ></div>
                  {heroContent.images.img4 && (
                    <div>
                      <Image
                        src={heroContent.images.img4}
                        width={394}
                        height={394}
                        alt="africahealthpromotion"
                        className="object-cover h-full w-full rounded-2xl"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-5/12">
                {heroContent.images.img5 && (
                  <div>
                    <Image
                      src={heroContent.images.img5}
                      width={446}
                      height={495}
                      alt="africahealthpromotion"
                      className="object-cover h-full w-full rounded-2xl"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
