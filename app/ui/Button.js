import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Button = () => {
  return (
    <button className="bg-green-400 hover:bg-green-700 duration-200 text-white flex items-center gap-2  px-6 py-2 rounded-full">
      <FaWhatsapp className="text-xl" /> WhatsApp Us
    </button>
  );
};

export default Button;
