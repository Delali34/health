import React from "react";
import Image from "next/image";
import gif from "@/public/thank.gif";
import Link from "next/link";

const thankyou = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-10 py-10">
      <div className="flex flex-col justify-center items-center">
        <Image src={gif} width={150} height={150} alt="" />
        <h1 className="text-center lg:text-3xl text-xl font-bold font-mont">
          Thank you for sending us a message
        </h1>
        <h1 className="text-center lg:text-xl text-[16px] font-medium mt-5 font-mont">
          We will get back to you shortly.
        </h1>
        <Link href="/contact">
          <button className="bg-blue-400 mt-10  hover:bg-blue-700 duration-200 text-white flex items-center gap-2 px-3 py-1  lg:px-6 lg:py-2 rounded-full">
            <p className="lg:text-sm text-[10px]">Go back</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default thankyou;
