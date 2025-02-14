"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const paragraphStyle = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const stories = [
  {
    image: "/noimage.png",
    text: "At first, reading was my biggest problem in school. My friends used to mock at me and I felt like dropping out. So when I heard that we are going to have a reading programme, I was the first person to show up. Now I can read like any other student…. Thanks to the people who brought this programme to our school.",
  },
  {
    image: "/noimage.png",
    text: "This nutrition programme taught me a life lesson. I thought I needed lots of money to prepare good food for my family. This programme taught me how to combine our local foods to make my children grow healthy and strong.",
  },
  {
    image: "/noimage.png",
    text: "How I wish this training programme came earlier to our community. Those times we used get a lot of money from our businesses but we didn’t manage it well. It’s not like now that things are difficult. But with this knowledge I am sure I can save some money and expand my business.",
  },
  {
    image: "/noimage.png",
    text: "I never did family planning because the way people talk about family planning was frightening. I now understand that family planning is not only by injection. I didn’t know you have to make your own choice. Now I can have my next child when I am ready. I thank Africa HPO.",
  },
  {
    image: "/noimage.png",
    text: "I was not going to the hospital because my insurance was dead some long time ago. But after GIZ and the NGO came and renewed it, I started visiting the hospital. That was when I realized I had a serious health problem but thank God I have been treated.",
  },
  {
    image: "/noimage.png",
    text: "How I wish this training programme came earlier to our community. Those times we used get a lot of money from our businesses but we didn’t manage it well. It’s not like now that things are difficult. But with this knowledge I am sure I can save some money and expand my business.",
  },
];

export default function SuccessStories() {
  const [isOpen, setIsOpen] = useState(Array(stories.length).fill(false));

  const toggleDescription = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <section
      id="success"
      className="relative font-mont min-h-screen bg-[#172554] text-white overflow-hidden"
    >
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
          <div className="text-center mb-16 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300">
              We give our best to society. Some of our beneficiaries have
              volunteered to share their stories with the world.
            </p>
            <div className="h-1 w-20 bg-blue-400 mx-auto rounded-full mt-4" />
          </div>

          {/* Swiper */}
          <div className="mt-12">
            {" "}
            {/* Adjusted margin to move Swiper down */}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 15000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {stories.map((story, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center justify-center h-full"
                  >
                    <div className="max-w-[700px] text-left flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white/10 backdrop-blur-sm p-6 text-white border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
                      <div className="w-[200px] h-[200px] relative overflow-hidden rounded-2xl">
                        <Image
                          src={story.image}
                          alt="Success Story"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p
                        className="mt-4 text-gray-200"
                        style={isOpen[index] ? null : paragraphStyle}
                      >
                        {story.text}
                      </p>
                      <button
                        className="mt-2 text-blue-400 underline cursor-pointer"
                        onClick={() => toggleDescription(index)}
                      >
                        {isOpen[index] ? "Read less" : "Read more"}
                      </button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
