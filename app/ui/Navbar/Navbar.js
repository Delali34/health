"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the necessary icons

import Button from "../Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white  border-b font-mont">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full  flex justify-between">
          <Link href="/">
            <Image
              src="/ahpo-Logo-768x183.png"
              width={550}
              height={500}
              alt="logo"
              className="md:cursor-pointer w-[90px] h-[30px]"
            />
          </Link>

          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes className="text-white" /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden  items-center gap-1 font-mont">
          <Link
            className="lg:text-[12px] -mb-1 md:text-[10px] text-[14px] md:px-2 px-5 py-2 hover:bg-blue-500 rounded-lg duration-200 text-white md:text-black"
            href="/"
          >
            Home
          </Link>
          <NavLinks />
          <Link
            className="lg:text-[12px] -mb-1 md:text-[10px] text-[14px] md:px-2 px-5 py-2 hover:bg-blue-500 rounded-lg duration-200 text-white md:text-black"
            href="/Partner"
          >
            Partner Us
          </Link>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-primary z-20 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <div className="text-xl">
            <Link
              className="lg:text-[12px] pl-8  -mb-1 md:text-[10px] text-[14px] md:px-2 px-5 py-2 hover:bg-blue-500 rounded-lg duration-200 text-white md:text-black"
              href="/"
            >
              Home
            </Link>

            <NavLinks />
            <Link
              className="lg:text-[12px] pl-8  -mb-1 md:text-[10px] text-[14px] md:px-2 px-5 py-2 hover:bg-blue-500 rounded-lg duration-200 text-white md:text-black"
              href="/Partner"
            >
              Partner Us
            </Link>
          </div>
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
