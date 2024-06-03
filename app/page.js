"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero2";
import Stats from "@/components/Stats2";
import Services from "@/components/Services";
import Infographics from "@/components/Infographics";
import Solutions from "@/components/Solutions2";
import Testimonials from "@/components/Test";
import RecentBlog from "@/components/RecentBlog";
import WhoWeAre from "@/components/WhoWeAre";
import Stats2 from "@/components/Stat3";
import Accordion from "@/components/Accordion";
import Report from "@/components/Report";

import { GrLinkTop } from "react-icons/gr";
const Organogram = dynamic(() => import("@/components/Organogram"), {
  ssr: false,
});

function page() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Hero />
      <div className="hidden md:block">
        <Stats />
      </div>
      <div className="md:hidden block">
        <Stats2 />
      </div>

      {/* <Infographics /> */}
      <WhoWeAre />
      <Organogram />
      <Services />

      {/* <Solutions /> */}
      <Testimonials />
      <RecentBlog />
      {showScrollTop && (
        <button
          className="fixed md:bottom-0 -bottom-1  md:right-3 right-5 m-5 p-3 font-font bg-primary border border-white rounded-full shadow-md text-[#FFFDF1] hover:bg-[#FFFDF1] hover:text-black transition transform duration-200 ease-in-out z-[200]"
          onClick={handleScrollToTop}
        >
          <GrLinkTop />
        </button>
      )}

      {/* <Accordion /> */}
    </div>
  );
}

export default page;
