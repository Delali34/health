"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Text from "./Text";

const Hero2 = () => {
  const images = [
    "/health5.jpg",
    "/health1.jpg",
    "/health2.jpg",
    "/health3.png",
    "/health4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="">
      {/* background image */}
      <div className=" relative w-full md:h-[850px] h-[650px] ">
        {images.map((image, index) => (
          <Image
            key={image}
            className={`object-cover cursor-pointer transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100 " : "opacity-0"
            } absolute top-0`}
            layout="fill"
            src={image}
          />
        ))}
        {/* background opacity */}
        <div className="bg-black/50 inset-0 top-0  right-0 left-0 md:h-[850px] h-[650px] bottom-0 absolute"></div>
        {/* text on image */}
        <div className="container font-mont lg:px-10  px-4 mx-auto absolute w-full md:h-[850px] h-[650px] flex flex-col justify-center   right-0 left-0 top-0 bottom-0">
          <div className="">
            <h2 className="text-blue-400 text-[16px] md:text-[20px] font-semibold">
              Welcome to: <br />
              <span className="font-bold lg:text-[38px] text-[26px] text-white">
                Africa Health Promotion Organization
              </span>
            </h2>
            <Text />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
