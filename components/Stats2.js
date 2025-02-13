"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const stats = [
  {
    img: "/information.jpg",
    number: "100%",
    label: "Nationwide Coverage",
    description: "Serving communities across the entire country",
    icon: "🌍",
  },
  {
    img: "/screening.jpg",
    number: "6.9M",
    label: "Direct Beneficiaries",
    description: "Lives positively impacted through our initiatives",
    icon: "👥",
  },
  {
    img: "/lives.jpg",
    number: "106",
    label: "Community Projects",
    description: "Successfully implemented projects nationwide",
    icon: "🏗️",
  },
];

const Stats2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative font-mont min-h-screen bg-[#172554] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#172554_70%,transparent_110%)]" />

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-700" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-20 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Impact Metrics
            </h2>
            <div className="h-1 w-20 bg-blue-400 mx-auto rounded-full" />
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-500 border border-white/10 hover:border-white/20">
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={stat.img}
                      alt={stat.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#172554]/90" />
                  </div>

                  {/* Icon */}
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center text-2xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-200">
                      {stat.label}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Indicator */}
          <div className="flex justify-center gap-2 mt-8 ">
            {stats.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-blue-400 w-6" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats2;
