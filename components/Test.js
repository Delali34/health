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

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="bg3 py-10 pb-10 px-5">
      <div className="h-[85vh] max-w-[1280px] mx-auto font-mont lg:mb-20 mb-10 ">
        <h1 className="md:text-5xl text-3xl text-center font-bold lg:py-5">
          Testimonies
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
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-full ">
              <div className="max-w-[700px] flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white  p-4 text-black border-4 border-blue-300 rounded-xl">
                <div className="w-[200px] h-[200px] ">
                  <Image
                    src="/health1.jpg"
                    className="p-5 rounded-3xl"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                The program has greatly benefited final-year students, enhancing
                their skills in presentation, leadership, and entrepreneurship.
                The SRC President commends Eminence Lead International for their
                inspiring role and urges continued support for Ghana's
                <div className="mt-2">
                  <h3 className="font-bold">
                    Bonsu Ransford – SRC President – Presbyterian Midwifery
                    &amp; Nursing Training College
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white  p-4 text-black border-4 border-blue-300 rounded-xl">
                <div className="w-[200px] h-[200px] ">
                  <Image
                    src="/health1.jpg"
                    className="p-5 rounded-3xl"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                ……., and leadership programs have built my confidence level as a
                medical student , helped me with learning tools, how to plan and
                set personal goals , and how to take leadership initiatives. The
                organization has really helped me to excel academically,
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Prince Yawanke – Student of Presbyterian Midwifery &amp;
                    Nursing Training College Agogo
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] flex flex-col items-center mx-auto px-5 text-[12px] md:text-[16px] bg-white  p-4 text-black border-4 border-blue-300 rounded-xl">
                <div className="w-[200px] h-[200px] ">
                  <Image
                    src="/health1.jpg"
                    className="p-5 rounded-3xl"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                …... I have learnt a lot from International’s engagement program
                for the past months, I can boldly say that I’m ready for the
                future. I have learnt how to lead people with good leadership
                tools, self-presentation, confidence, public speaking skills,
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Kezia Quansah – Student of Presbyterian Midwifery &amp;
                    Nursing Training College Agogo
                  </h3>
                </div>
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
