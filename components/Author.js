import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="max-w-[1280px]  px-5 flex justify-between mx-auto">
      <div></div>
      <div className="text-center w-full right-0 mt-20 mb-8 p-12 relative rounded-lg bg-primary ">
        <div className="absolute w-full flex justify-center left-0 right-0 -top-14">
          <Image
            src={author.photo.url}
            alt={author.name}
            unoptimized
            width={50}
            height={50}
            className="align-middle rounded-full w-[100px] h-[100px] "
          />
        </div>
        <h3 className="text-white my-4 text-xl font-semibold">{author.name}</h3>
        <p className="text-white text-lg">{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
