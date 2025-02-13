"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useInView } from "framer-motion";

const About = [
  {
    name: "Vision",
    src: "vision.jpg",
    item: "We envisage an empowered society where all persons irrespective of their race, gender, age or state of disability, are well informed, and have the needed capacity to positively influence their health determinants.",
    accent: "bg-blue-500",
  },
  {
    name: "Mission",
    src: "mission.jpg",
    item: "We exist to promote public health through health literacy capacity building, advocacy for social equity and community development interventions.",
    accent: "bg-emerald-500",
  },
  {
    name: "Our Services",
    src: "ourservices.jpg",
    item: "Our services are not-for-profit. We drive community-health and development agenda even to the remotest parts. We spearhead programmes and projects in collaboration with philanthropies, government and private sector organizations, local and international development partners to reach out to communities via context specific strategies. Our strategies are aimed at promoting the health of children, women, young adults and the aged.",
    accent: "bg-purple-500",
  },
];

const Card = ({ item, index, selectedCard, setSelectedCard }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="mb-8"
    >
      <div
        className={`group relative overflow-hidden rounded-lg transition-all duration-700 ease-out
          ${
            selectedCard === index ? "h-[500px]" : "h-[120px] hover:h-[140px]"
          }`}
        onClick={() => setSelectedCard(selectedCard === index ? null : index)}
      >
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />
          <img
            src={`/${item.src}`}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20 h-full p-8 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`w-8 h-8 rounded-full ${item.accent} transition-all duration-500 
                group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-${item.accent}/20`}
              />
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {item.name}
              </h2>
            </div>

            <ChevronRight
              className={`text-white transition-all duration-500 transform
                ${
                  selectedCard === index
                    ? "rotate-90"
                    : "group-hover:translate-x-2"
                }`}
            />
          </div>

          {/* Expandable Content */}
          <motion.div
            initial={false}
            animate={{
              opacity: selectedCard === index ? 1 : 0,
              y: selectedCard === index ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
              {item.item}
            </p>

            <button className="mt-6 group/btn flex items-center gap-2 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <span>Learn more</span>
              <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-2" />
            </button>
          </motion.div>
        </div>

        {/* Animated Border */}
        <div
          className={`absolute inset-0 border-2 rounded-lg transition-colors duration-500
          ${selectedCard === index ? "border-white/20" : "border-transparent"}`}
        />
      </div>
    </motion.div>
  );
};

const WhoWeAre = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          Who We Are
        </motion.h1>
        {About.map((item, index) => (
          <Card
            key={index}
            item={item}
            index={index}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
