"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

function Navigation() {
  const navigationMenu = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Our Experiences" },
    { href: "/blog", label: "Health News" },
    { href: "/AboutUs", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const navigationMenu2 = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Our Experiences" },
    { href: "/blog", label: "Health News" },
    { href: "/AboutUs", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "https://wa.me/233246622156", label: "Chat Us On WhatsApp" },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const [active, setActive] = useState(false);

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  const indicaticator = () => {
    setActive(true);
  };

  useEffect(() => {
    // This function is safe to run on the client side only
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      if (window.innerWidth > 768 && navOpen) {
        setNavOpen(false);
      }
    };

    // Set initial dimensions
    handleResize();

    // Setup event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navOpen]); // Only re-run the effect if navOpen changes

  return (
    <div className="py-7 font-mont">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/ahpo-Logo-768x183.png"
                width={157}
                height={30}
                alt="Africa-health-promotion-logo"
              />
            </Link>
          </div>
          <div
            className="hidden cursor-pointer  lg:block text-center"
            onClick={indicaticator}
          >
            <ul className="flex  space-x-7">
              {navigationMenu.map((item, index) => (
                <li
                  className={
                    item.href === "/"
                      ? active
                        ? "font-bold text-primary"
                        : ""
                      : "text-primary"
                  }
                  key={index}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link
              href="https://wa.me/233246622156"
              className="px-5 py-4 bg-primary text-white rounded-lg hidden lg:inline-block"
            >
              Chat Us On WhatsApp
            </Link>
            <button className="block lg:hidden" onClick={mobileMenuHandler}>
              <IoMenuOutline className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
      {navOpen && (
        <div className="py-0 block fixed w-screen z-[9999]">
          <div
            className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
            onClick={mobileMenuHandler}
          ></div>
          <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
            <div className="h-14 px-10 border-b flex items-center ">
              <button
                onClick={mobileMenuHandler}
                className="flex items-center space-x-3"
              >
                <IoMdClose />
                <span>Close</span>
              </button>
            </div>
            <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
              <ul className="block mb-7">
                {navigationMenu2.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={mobileMenuHandler}
                      className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                    >
                      <span>{item.label}</span>
                      <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                        <FaChevronRight className="text-xl" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
