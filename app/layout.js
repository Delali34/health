"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./ui/Navbar/Navbar";
import Navbar from "./ui/Nav";
import Footer from "./ui/Footer";
import { GrLinkTop } from "react-icons/gr";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "AfricaHPO",
  description:
    "Africa Health Promotion Organization is an NGO dedicated to empowering individuals and communities to improve their health. At Africa HPO, we believe everyone at all ages has the potential to achieve their life aspirations. We’re therefore poised to help address barriers that limit people in the pursuit of their life purposes. We are here to reach out to society through effective people engagement, health literacy capacity building, and community development. Every encounter with us leaves our beneficiaries with lovely memories for life.",
  logo: "../public/Africa HPO.png",
};

export default function RootLayout({ children }) {
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
    <html lang="en">
      <body className={inter.className}>
        <div className="z-[9999]">
          <Navbar />
        </div>

        {children}
        {showScrollTop && (
          <button
            className="fixed md:bottom-0 -bottom-1  md:right-3 right-5 m-5 p-3 font-font bg-primary border border-white rounded-full shadow-md text-[#FFFDF1] hover:bg-[#FFFDF1] hover:text-black transition transform duration-200 ease-in-out z-[200]"
            onClick={handleScrollToTop}
          >
            <GrLinkTop />
          </button>
        )}
        <Footer />
      </body>
    </html>
  );
}
