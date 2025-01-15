"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import logo from "../../public/ahpo-Logo-768x183.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const navItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Our Experience",
    link: "#",
    children: [
      {
        label: "Projects",
        link: "/experience",
      },

      {
        label: "Success Stories",
        link: "/#success",
      },
    ],
  },
  {
    label: "About Us",
    link: "#",
    children: [
      {
        label: "Who We Are",
        link: "/AboutUs",
      },
      {
        label: "Our Team",
        link: "/AboutUs#team",
      },
      {
        label: "Contact Us",
        link: "/contact",
      },
    ],
  },

  {
    label: "Our Blog",
    link: "/blog",
  },
  {
    label: "Volunteer",
    link: "/form",
  },
  {
    label: "Lodge Complain",
    link: "/report",
  },
  {
    label: "Careers",
    link: "/careers",
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveButton(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  function handleButtonClick(index) {
    if (activeButton === index) {
      setActiveButton(null);
    } else {
      setActiveButton(index);
    }
  }
  function handleLinkClick() {
    setActiveButton(null);
    closeSideMenu();
  }

  return (
    <div>
      <div className="mx-auto font-mont  flex w-full max-w-7xl justify-between px-4 py-5 text-sm">
        {/* left side */}
        <section ref={animationParent} className="flex items-center gap-10">
          {/* logo */}
          <Link href="/">
            {" "}
            <Image
              src={logo}
              width={760}
              height={700}
              className="w-[200px]"
              alt=" logo"
            />
          </Link>

          {isSideMenuOpen && (
            <MobileNav
              closeSideMenu={closeSideMenu}
              handleLinkClick={handleLinkClick}
            />
          )}

          {/* navitems */}
        </section>

        {/* right side data */}
        <section className="hidden md:flex items-center gap-8">
          <Link href="/Partner">
            {" "}
            <button className="h-fit lg:text-[14px] text-[12px] text-[#092862]  transition-all hover:text-neutral-400">
              Partner Us
            </button>
          </Link>
          {/* <Link href="/Donate">
            <button className="bg-red-600  hover:bg-red-400 duration-200 text-white flex items-center gap-2 px-2 py-1  lg:px-6 lg:py-2 rounded-full">
              <FaDonate className="text-sm" />{" "}
              <p className="lg:text-[12px] text-[10px]">Donate</p>
            </button>
          </Link> */}

          <Link href="https://wa.me/233246622156" target="_blank">
            <button className="bg-green-400  hover:bg-green-700 duration-200 text-white flex items-center gap-2 px-2 py-1  lg:px-6 lg:py-2 rounded-full">
              <FaWhatsapp className="text-sm" />{" "}
              <p className="lg:text-[12px] text-[10px]">WhatsApp Us</p>
            </button>
          </Link>
        </section>

        <FiMenu
          onClick={openSideMenu}
          className="cursor-pointer text-3xl md:hidden"
        />
      </div>
      <div className="flex font-mont items-center justify-center bg-blue-950 py-3">
        <div
          className="hidden z-[999] md:flex items-center gap-4 transition-all"
          ref={navRef}
        >
          {navItems.map((d, i) => (
            <Link key={i} href={d.link ?? "#"} className="relative group">
              <button
                onClick={() => handleButtonClick(i)}
                className={`p-1 px-2 rounded-md text-white hover:bg-gray-100 transition-all ${
                  activeButton === i ? "bg-blue-500 text-white" : ""
                }`}
              >
                <p className="flex cursor-pointer items-center gap-2 text-black-400  rounded-[5px] group-hover:text-black">
                  <span className="lg:text-sm text-[12px]">{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown
                      className={`rotate-180 transition-all group-hover:text-black group-hover:rotate-0 ${
                        activeButton === i ? "text-white" : "text-white"
                      }`}
                    />
                  )}
                </p>
              </button>

              {/* dropdown */}
              {activeButton === i && d.children && (
                <div className="absolute right-0 left-0 top-10 w-[200px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all">
                  {d.children.map((ch, index) => (
                    <Link
                      key={index}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-[#092862] hover:bg-blue-400 hover:text-black"
                      onClick={handleLinkClick}
                    >
                      <span>{ch.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ closeSideMenu, handleLinkClick }) {
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeSideMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="fixed font-mont z-[999] left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[50%] bg-white px-4 py-4" ref={navRef}>
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
              children={d.children}
              handleLinkClick={handleLinkClick}
            />
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 ml-2">
          <Link href="/Partner">
            <button
              onClick={handleLinkClick}
              className="h-fit text-[16px] transition-all hover:text-neutral-400 text-[#092862]"
            >
              Partner Us
            </button>
          </Link>
          {/* <Link href="/Donate" className="">
            <button
              onClick={handleLinkClick}
              className="bg-red-700 w-[118px]  hover:bg-red-400 duration-200 text-white flex justify-center items-center gap-2 px-2 py-1  lg:px-6 lg:py-2 rounded-full"
            >
              <FaDonate className="text-sm" />{" "}
              <p className="lg:text-[12px] text-[10px]">Donate</p>
            </button>
          </Link> */}

          <Link href="https://wa.me/233246622156" target="_blank">
            <button
              onClick={handleLinkClick}
              className="bg-green-400  hover:bg-green-700 duration-200 text-white flex items-center gap-2 px-3 py-1  lg:px-6 lg:py-2 rounded-full"
            >
              <FaWhatsapp className="text-lg" />{" "}
              <p className="lg:text-sm text-[10px]">WhatsApp Us</p>
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem({ label, iconImage, link, children, handleLinkClick }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  // Add event handler to stop propagation
  function handleItemClick() {
    if (!children) {
      // If it's a button (no children), close the menu
      handleLinkClick();
    } else {
      // If it's a dropdown item, toggle the dropdown
      toggleItem();
    }
  }

  return (
    <div className="relative px-2 py-3 transition-all">
      <Link
        ref={animationParent}
        href={link ?? "#"}
        className="flex cursor-pointer items-center gap-2 text-[#092862] group-hover:text-black"
        onClick={handleItemClick}
      >
        <span>{label}</span>
        {children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${
              isItemOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      {/* Dropdown */}
      {isItemOpen && children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
              onClick={handleLinkClick} // Call handleLinkClick when a link is clicked
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap pl-3 text-[#092862]">
                {ch.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
