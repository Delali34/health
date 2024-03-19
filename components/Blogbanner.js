import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getLatestPost } from "../services/index"; // Import the function to fetch the latest post

const Blogbanner = () => {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const fetchLatestPostData = async () => {
      try {
        const latestPostData = await getLatestPost();
        setLatestPost(latestPostData);
      } catch (error) {
        console.error("Error fetching latest post:", error);
      }
    };

    fetchLatestPostData();
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  if (!latestPost) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="">
        <div className="relative">
          <img
            width={2500}
            height={2500}
            src={latestPost?.featuredImage?.url || ""}
            alt="the bro code blog"
            className="md:h-[750px] h-[550px] w-full object-cover"
          />
          <div className="gradient-overlay2"></div>

          <div className="bg-black absolute lg:top-[55%] top-[50%] hover:scale-110 left-[4%] text-white py-2 border-white border-2 px-10 rounded-[35px] cursor-pointer">
            <h2 className="lg:text-2xl">Latest News</h2>
          </div>

          <Link href={`/post/${latestPost?.slug || "#"}`}>
            <div className="absolute lg:top-[70%] top-[60%] left-[4%] text-secondary py-2 cursor-pointer">
              <h2 className="md:text-3xl text-[16px] font-extrabold">
                {latestPost?.title || "Title"}
              </h2>
            </div>
          </Link>
          <div className="absolute lg:top-[85%] top-[70%] left-[4%] text-white py-2 ">
            <p className="md:text-xl text-sm w-full">
              {truncateText(latestPost?.excerpt || "", 150)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogbanner;
