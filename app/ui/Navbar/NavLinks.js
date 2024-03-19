import React, { useState } from "react";
import Link from "next/link";
import { links } from "./Mylinks";
import { FaAngleDown, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const handleLinkClick = () => {
    setOpen(false); // Close the nav
  };

  return (
    <>
      {links.map((link) => (
        <div className="z-10" key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group font-mont">
            <div
              className={`lg:text-[12px] md:px-2 px-5 md:text-[10px] text-[14px] flex py-2 items-center justify-between md:justify-center hover:bg-blue-500 rounded-lg duration-200 text-white md:text-black group ${
                heading === link.name ? "bg-blue-500 rounded-lg" : ""
              }`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <h1 className="-mb-1"> {link.name}</h1>

              <span className="text-sm md:hidden inline">
                {heading === link.name ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              <span className="text-sm md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-1">
                <FaAngleDown />
              </span>
            </div>
            {link.submenu && (
              <div>
                <div
                  className={`hidden absolute top-[55px] ${
                    heading === link.name ? "md:block" : "hidden"
                  }`}
                >
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-14 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white w-[200px] p-3 rounded-[10px]  gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-[10px] text-white text-center p-2 bg-primary font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <Link
                            key={slink.name}
                            href={slink.link}
                            onClick={handleLinkClick}
                            className="hover:text-primary"
                          >
                            <li className="text-[14px] text-black hover:text-primary hover:font-bold my-2.5">
                              {slink.name}
                            </li>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={` 
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7  font-semibold text-[13px] text-white  flex justify-between mx-7 items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                    <span className="text-[13px] text-white md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                    <span className="text-[13px] md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <Link
                        key={slink.name}
                        href={slink.link}
                        onClick={handleLinkClick}
                      >
                        {" "}
                        <li className="py-3 pl-14 text-[12px] text-white">
                          <div className="flex items-center gap-2">
                            {slink.name}
                            <FaExternalLinkAlt />
                          </div>
                        </li>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
