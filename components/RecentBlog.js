"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { getPosts } from "@/services/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Typewriter from "typewriter-effect";

const blogContent = {
  heading: {
    headingSubTitle: "Our Write Ups",
    headingTitle: "Our Latest Articles",
    description:
      "We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations. ",
  },
  recentBlog: [
    {
      permalink: "#_",
      featuredImg: "/image2.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      exerpt:
        "Hypertension, waist pains and diabetic conditions topped the list of health-related problems Africa Health Promotion Organisation (AfricaHPO) recorded at a day’s free health screening exercise it organised at New Ningo",
      author: {
        img: "/image5.jpg",
        name: "Africa HPO",
        titleRole: "Health Promotion",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/image2.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      exerpt:
        "Hypertension, waist pains and diabetic conditions topped the list of health-related problems Africa Health Promotion Organisation (AfricaHPO) recorded at a day’s free health screening exercise it organised at New Ningo",
      author: {
        img: "/image5.jpg",
        name: "Africa HPO",
        titleRole: "Health Promotion",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/image3.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      exerpt:
        "Hypertension, waist pains and diabetic conditions topped the list of health-related problems Africa Health Promotion Organisation (AfricaHPO) recorded at a day’s free health screening exercise it organised at New Ningo",
      author: {
        img: "/image5.jpg",
        name: "Africa HPO",
        titleRole: "Health Promotion",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/image4.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      exerpt:
        "Hypertension, waist pains and diabetic conditions topped the list of health-related problems Africa Health Promotion Organisation (AfricaHPO) recorded at a day’s free health screening exercise it organised at New Ningo",
      author: {
        img: "/image5.jpg",
        name: "Africa HPO",
        titleRole: "Health Promotion",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/image2.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      exerpt:
        "Hypertension, waist pains and diabetic conditions topped the list of health-related problems Africa Health Promotion Organisation (AfricaHPO) recorded at a day’s free health screening exercise it organised at New Ningo",
      author: {
        img: "/image5.jpg",
        name: "Africa HPO",
        titleRole: "Health Promotion",
      },
    },
  ],
  cta: {
    href: "/blog",
    label: "To View All posts",
    labelSuffix: "Click here",
  },
};

const RecentBlog = ({ post }) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsEnd(sliderRef.current?.swiper.isEnd);
    setIsBeginning(sliderRef.current?.swiper.isBeginning);
  });

  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  });
  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  });
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();
        setPosts(data.slice(0, 5)); // Only keep the first 5 posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  const [text] = useTypewriter({
    words: ["News", "Updates", "Campaignes", "Articles"],
    loop: false,
    delaySpeed: 1500,
  });
  return (
    <section className="py-20 bg-light overflow-x-hidden font-mont">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <span
              className="inline-block z-50 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10 "
              data-aos="fade-up"
            >
              {blogContent.heading.headingSubTitle}
            </span>
            <div
              className="text-heading text-2xl lg:text-4xl font-bold mb-5 gap-2 flex items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="text-black  text-2xl  font-bold">
                Get Our Latest
              </h1>
              <span className="text-blue-500 text-2xl">
                <Typewriter
                  options={{
                    strings: ["Updates", "Campaigns", "News"],
                    autoStart: true,
                    loop: true,
                    pauseFor: 5000,
                  }}
                />
              </span>
            </div>
            <p
              className="text-body leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {" "}
              {blogContent.heading.description}
            </p>
          </div>
          <div
            className="lg:w-5/12 text-left lg:text-right"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="inline-flex ml-auto space-x-3">
              <div
                onClick={prevHandler}
                className={`${
                  isBeginning == true
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto"
                    : "opacity-100 hover:bg-primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronLeft
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isBeginning == true
                      ? "group-hover:!text-primary"
                      : "group-hover:text-white"
                  }`}
                />
              </div>
              <div
                onClick={nextHandler}
                className={`${
                  isEnd == true
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto"
                    : "opacity-100 hover:bg-primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronRight
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isEnd == true
                      ? "group-hover:!text-primary"
                      : "group-hover:text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            968: {
              width: 968,
              slidesPerView: 2,
            },
          }}
          ref={sliderRef}
          speed={700}
          spaceBetween={30}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:content-[''] before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
        >
          {posts.map(({ node: post }, index) => (
            <SwiperSlide className="overflow-visible h-full" key={index}>
              <div
                className="p-5 rounded-lg bg-white relative mt-10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link
                  href={`/post/${post.slug}`}
                  className="relative -mt-10 inline-block overflow-hidden rounded-lg mb-4"
                >
                  {post.featuredImage?.url ? (
                    <Image
                      src={post.featuredImage.url}
                      width={782}
                      height={467}
                      alt={post.title || "Post image"}
                    />
                  ) : (
                    <div style={{ width: "782px", height: "467px" }}>
                      Image not available
                    </div>
                  )}
                </Link>
                <div className="text-primary ">
                  <h2 className="lg:text-xl">
                    #{post.categories[0]?.name || "Category"}
                  </h2>
                </div>
                <h2 className="text-heading text-[13px] font-bold leading-7 mb-5 mt-2">
                  <Link
                    href={`/post/${post.slug}`}
                    className="relative text-heading"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="relative mb-6 text-[10px]">
                  {post.excerpt || "No excerpt available."}
                </p>
                {/* Add author and other post details as needed */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="mx-auto flex items-center justify-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link
            href={blogContent.cta.href}
            className="duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
          >
            {blogContent.cta.label}{" "}
            <strong className="text-primary pl-1 font-semibold">
              {blogContent.cta.labelSuffix}
            </strong>
            <span className="text-gray-300"></span>
            <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
              <BiChevronRight className="w-6 h-6 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
