import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="https://wa.me/233246622156" target="_blank">
      <button className="bg-green-400  hover:bg-green-700 duration-200 text-white flex items-center gap-2 px-3 py-1  lg:px-6 lg:py-2 rounded-full">
        <FaWhatsapp className="text-sm" />{" "}
        <p className="lg:text-sm text-[10px]">WhatsApp Us</p>
      </button>
    </Link>
  );
};

export default Button;
