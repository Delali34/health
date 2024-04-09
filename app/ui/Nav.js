import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import logo from "../../public/ahpo-Logo-768x183.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const navItems = [
  {
    label: "Our Experience",
    link: "#",
    children: [
      {
        label: "Todo list",
        link: "#",
      },
      {
        label: "Calendar",
        link: "#",
      },
      {
        label: "Reminders",
        link: "#",
      },
      {
        label: "Planning",
        link: "#",
      },
    ],
  },
  {
    label: "About us",
    link: "#",
    children: [
      {
        label: "History",
        link: "/contact",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    label: "Careers",
    link: "/Partner",
  },
  {
    label: "About",
    link: "/blog",
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
  }

  return (
    <div className="mx-auto  flex w-full max-w-7xl justify-between px-4 py-5 text-sm">
      {/* left side */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Link href="/">
          {" "}
          <Image src={logo} className="w-[100px]" alt=" logo" />
        </Link>

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

        {/* navitems */}
      </section>
      <div
        className="hidden z-[999] md:flex items-center gap-4 transition-all"
        ref={navRef}
      >
        {navItems.map((d, i) => (
          <Link key={i} href={d.link ?? "#"} className="relative group">
            <button
              onClick={() => handleButtonClick(i)}
              className={`p-1 px-2 rounded-md transition-all ${
                activeButton === i ? "bg-blue-500 text-black" : ""
              }`}
            >
              <p className="flex cursor-pointer items-center gap-2 text-black-400  rounded-[5px] group-hover:text-black/80">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown
                    className={`rotate-180 transition-all group-hover:rotate-0 ${
                      activeButton === i ? "text-black" : "text-neutral-400"
                    }`}
                  />
                )}
              </p>
            </button>

            {/* dropdown */}
            {activeButton === i && d.children && (
              <div className="absolute right-0 top-10 w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all">
                {d.children.map((ch, index) => (
                  <Link
                    key={index}
                    href={ch.link ?? "#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:bg-blue-400 hover:text-black"
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

      {/* right side data */}
      <section className="hidden md:flex items-center gap-8">
        <Link href="/Partner">
          {" "}
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Partner Us
          </button>
        </Link>

        <Link href="https://wa.me/233246622156" target="_blank">
          <button className="bg-green-400  hover:bg-green-700 duration-200 text-white flex items-center gap-2 px-3 py-1  lg:px-6 lg:py-2 rounded-full">
            <FaWhatsapp className="text-sm" />{" "}
            <p className="lg:text-sm text-[10px]">WhatsApp Us</p>
          </button>
        </Link>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed z-[999] left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
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
            />
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem({ label, iconImage, link, children }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={link ?? "#"}
      className="relative px-2 py-3 transition-all"
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{label}</span>
        {children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${
              isItemOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
