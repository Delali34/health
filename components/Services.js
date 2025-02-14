"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const serviceContent = {
  heading: {
    headingTitle: "Our Projects",
    subheading: "Transforming communities through impactful initiatives.",
  },
  items: [
    {
      icon: "/nutrition.jpg",
      title: "Community Nutrition Project",
      description:
        "Our food and nutrition projects were community based. We taught parents how to cook nutritious foods. We also learnt what food means to different cultures.",
    },
    {
      icon: "/vaccine.jpg",
      title: "Disease Outbreak Response",
      description:
        "We played frontline roles in the fight against COVID-19, meningitis, rabbies, and other disease outbreaks. We conducted risk communication, community engagement, and facilitated case referrals to health facilities.",
    },
    {
      icon: "/education.jpg",
      title: "Star Readers Initiative",
      description:
        "We developed one of the most exciting reading programmes for basic school children in 5 regions of Ghana. Our young stars are now excelling in reading and comprehension.",
    },
    {
      icon: "/selling.jpg",
      title: "Livelihood Capacity Building",
      description:
        "Small-scale business enterprises are at the core of our mandate. This project focused on building the capacity of traders, livestock, and crop farmers on financial literacy and increasing yield.",
    },
    {
      icon: "/plan.jpg",
      title: "Family Planning Intervention",
      description:
        "We helped families determine when to have children with convenient intervals. Our family planning interventions targeted youth and new couples, increasing family planning acceptor rates.",
    },
    {
      icon: "/water.jpg",
      title: "Water is Life Project",
      description:
        "Our water and sanitation projects targeted communities practicing open defecation. We provided 49 mechanized boreholes and 88 improved facilities.",
    },
  ],
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % serviceContent.items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative font-mont min-h-screen bg-white text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute opacity-15 inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#172554_70%,transparent_110%)]" />

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
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-black via-blue-900 to-black bg-clip-text text-transparent">
              {serviceContent.heading.headingTitle}
            </h2>
            <p className="text-lg text-black">
              {serviceContent.heading.subheading}
            </p>
            <div className="h-1 w-20 bg-blue-900 mx-auto rounded-full mt-4" />
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {serviceContent.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-[#172554] rounded-xl overflow-hidden backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-500 border border-white/10 hover:border-white/20"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#172554]/90" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                  <motion.button
                    className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm md:text-base font-medium transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Mobile Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {serviceContent.items.map((_, index) => (
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

export default Services;
