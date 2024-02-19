"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the necessary icons

import Button from "../Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white font-mont">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full  flex justify-between">
          <Image
            src="/ahpo-Logo-768x183.png"
            width={100}
            height={100}
            alt="logo"
            className="md:cursor-pointer h-9"
          />
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-mont">
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-white z-20 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <Link href="/" className="py-7 px-3 inline-block">
            <li>Home</li>
          </Link>
          <div className="">
            <NavLinks />
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
