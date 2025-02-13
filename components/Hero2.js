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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative font-mont min-h-screen overflow-hidden">
      {/* Full-screen background images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            layout="fill"
            className="object-cover"
            priority={index === 0}
            alt={`Healthcare image ${index + 1}`}
          />
        </div>
      ))}

      {/* Gradient overlay that fades in from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/60 to-transparent" />

      {/* Content Container */}
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 lg:px-8">
        <div className="min-h-screen flex items-center">
          {/* Content Section */}
          <div className="max-w-2xl">
            {/* Animated Line */}
            <div className="relative">
              {/* Welcome Text */}
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  !isLoading
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <span className="text-blue-400 text-xl font-medium tracking-wider">
                  Welcome to
                </span>
                <h1 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Africa Health{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Promotion
                  </span>{" "}
                  Organization
                </h1>
              </div>

              {/* Text Component */}
              <div
                className={`mt-8 transform transition-all duration-1000 delay-500 ${
                  !isLoading
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <Text />
              </div>

              {/* Navigation Dots */}
              <div
                className={`mt-12 flex space-x-3 transform transition-all duration-1000 delay-700 ${
                  !isLoading
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1 transition-all duration-300 rounded-full ${
                      currentImageIndex === index
                        ? "w-8 bg-blue-400"
                        : "w-4 bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
