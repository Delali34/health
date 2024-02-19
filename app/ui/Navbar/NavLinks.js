import React, { useState } from "react";
import Link from "next/link";
import { links } from "./Mylinks";
import { FaAngleDown, FaChevronUp, FaChevronDown } from "react-icons/fa";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div className="z-10" key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group font-mont">
            <h1
              className={`bg-primary  px-5 flex py-2 items-center justify-between md:justify-center hover:bg-blue-500 duration-200 text-white group ${
                heading === link.name ? "bg-blue-500" : ""
              }`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <FaAngleDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div
                  className={`hidden absolute top-[55px] ${
                    heading === link.name ? "md:block" : "hidden"
                  }`}
                >
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45 "
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-[14px] text-white text-center p-2 bg-primary font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <Link
                            key={slink.name}
                            href={slink.link}
                            className="hover:text-primary"
                          >
                            <li className="text-sm text-black my-2.5">
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
                    className="py-4 pl-7  font-semibold text-white  flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                    <span className="text-xl text-white md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <Link key={slink.name} href={slink.link}>
                        {" "}
                        <li className="py-3 pl-14 text-white">{slink.name} </li>
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
