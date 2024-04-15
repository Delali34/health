"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const paragraphStyle = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDescription = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
  return (
    <div className="bg3 py-10 pb-10 px-5">
      <div className="h-[85vh] max-w-[1280px] mx-auto font-mont lg:mb-20 mb-10 ">
        <h1 className="md:text-5xl text-3xl text-center font-bold lg:py-5">
          Success Stories
        </h1>
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            top: 10px; /* Adjust as needed */
            color: #ff521a; /* Replace with your desired color */
          }
          .swiper-button-next {
            right: 10px;
          }
          .swiper-button-prev {
            left: 10px;
          }
        `}</style>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-full ">
              <div className="max-w-[700px] text-left flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white  p-4 text-black border-4 border-blue-300 rounded-xl">
                <div className="w-[200px] h-[200px] ">
                  <Image
                    src="/noimage.png"
                    className="p-5 rounded-3xl"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <p style={isOpen ? null : paragraphStyle}>
                  At first, reading was my biggest problem in school. My friends
                  used to mock at me and I felt like dropping out. So when I
                  heard that we are going to have a reading programme, I was the
                  first person to show up. Now I can read like any other
                  student…. Thanks to the people who brought this programme to
                  our school.
                </p>
                <p
                  className="text-blue-400 underline cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "read less" : "read more"}
                </p>

                <div className="mt-2"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] text-left  flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white  p-4 text-black border-4 border-blue-300 rounded-xl">
                <div className="w-[200px] h-[200px] ">
                  <Image
                    src="/noimage.png"
                    className="p-5 rounded-3xl"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <p style={isOpen ? null : paragraphStyle}>
                  This nutrition programme taught me a life lesson. I thought I
                  needed lots of money to prepare good food for my family. This
                  programme taught me how to combine our local foods to make my
                  children grow healthy and strong.
                </p>
                <p
                  className="text-blue-400 underline cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "read less" : "read more"}
                </p>

                <div className="mt-2"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] text-left  flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white  p-4 text-black border-4 border-blue-300 rounded-xl">
                <div className="w-[200px] h-[200px] ">
                  <Image
                    src="/noimage.png"
                    className="p-5 rounded-3xl"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <p style={isOpen ? null : paragraphStyle}>
                  {" "}
                  How I wish this training programme came earlier to our
                  community. Those times we used get a lot of money from our
                  businesses but we didn’t manage it well. It’s not like now
                  that things are difficult. But with this knowledge I am sure I
                  can save some money and expand my business
                </p>

                <p
                  className="text-blue-400 underline cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "read less" : "read more"}
                </p>
                <div className="mt-2"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] text-left  flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white  p-4 text-black border-4 border-blue-300 rounded-xl">
                <div className="w-[200px] h-[200px] ">
                  <Image
                    src="/noimage.png"
                    className="p-5 rounded-3xl"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <p style={isOpen ? null : paragraphStyle}>
                  I never did family planning because the way people talk about
                  family planning was frightening. I now understand that family
                  planning is not only by injection. I didn’t know you have to
                  make your own choice. Now I can have my next child when I am
                  ready. I thank Africa HPO.
                </p>

                <p
                  className="text-blue-400 underline cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "read less" : "read more"}
                </p>
                <div className="mt-2"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] text-left  flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white  p-4 text-black border-4 border-blue-300 rounded-xl">
                <div className="w-[200px] h-[200px] ">
                  <Image
                    src="/noimage.png"
                    className="p-5 rounded-3xl"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <p style={isOpen ? null : paragraphStyle}>
                  I was not going to the hospital because my insurance was dead
                  some long time ago. But after GIZ and the NGO came and renewed
                  it, I started visiting the hospital. That was when I realized
                  I had a serious health problem but thank God I have been
                  treated.
                </p>

                <p
                  className="text-blue-400 underline cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "read less" : "read more"}
                </p>
                <div className="mt-2"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] text-left  flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white  p-4 text-black border-4 border-blue-300 rounded-xl">
                <div className="w-[200px] h-[200px] ">
                  <Image
                    src="/noimage.png"
                    className="p-5 rounded-3xl"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <p style={isOpen ? null : paragraphStyle}>
                  How I wish this training programme came earlier to our
                  community. Those times we used get a lot of money from our
                  businesses but we didn’t manage it well. It’s not like now
                  that things are difficult. But with this knowledge I am sure I
                  can save some money and expand my business
                </p>

                <p
                  className="text-blue-400 underline cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "read less" : "read more"}
                </p>
                <div className="mt-2"></div>
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
