import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const footerContent = {
  about: {
    logo: "/ahpo-Logo-768x183.png",
    description: "",
    cta: {
      href: "#",
      label: "",
    },
  },
  footerLinks: [
    {
      heading: "Organization",
      links: [
        {
          href: "/",
          label: "Home",
        },

        {
          href: "/AboutUs",
          label: "About",
        },
        {
          href: "/contact",
          label: "Contact",
        },
      ],
    },
    {
      heading: "Resources",
      links: [
        {
          href: "/blog",
          label: "Blog",
        },
        {
          href: "/contact",
          label: "Lodge Complain",
        },
        {
          href: "/experience",
          label: "Our Experience",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact Us",
    description: "",
    address: {
      street: "92 Dr. Hutton Mills Street, Accra Ghana",
      phone: "+233-50 850 9911",
      website: "https://africahealthpromotion.org",
    },
  },
  copyright: {
    labelOne: "Copyright  © 2024. Africa HPO",
  },
};

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="py-20 bg-primary text-white font-mont"
    >
      <div className="container px-4 mx-auto ">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full mb-10 lg:mb-0 lg:w-4/12">
            <Link href={""} className="mb-4 bg-white p-2 inline-block">
              <Image
                src={footerContent.about.logo}
                width={157}
                height={30}
                alt="africahealthpromotion"
              />
            </Link>
            <p className="leading-relaxed mb-7">
              {footerContent.about.description}
            </p>
            <p>
              <Link
                href={footerContent.about.cta.href}
                className="flex space-x-2 outline-none items-center font-semibold text-white group"
              >
                <span>{footerContent.about.cta.label}</span>
                {/* <span className="w-6 h-6 rounded-full bg-primary group-hover:bg-secondary duration-300 transition-all ease-in-out text-white inline-flex items-center justify-center">
                  <BiChevronRight className="text-lg " />
                </span> */}
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg-mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-white mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, index) => (
                      <li className="mb-3" key={link.label}>
                        <Link
                          href={link.href}
                          className="group flex items-center duration-300 text-white transition-all ease-in-out hover:text-white "
                        >
                          <span>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3 ">
                            <BiChevronRight className="text-xl " />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-4/12 w-full">
            <h3 className="font-semibold text-white mb-5">
              {footerContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-7">
              {footerContent.contact.description}
            </p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <FaLocationDot className="text-xl text-white" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiPhone className="text-xl text-white" />
                <span>{footerContent.contact.address.phone}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiMiniGlobeAmericas className="text-xl text-white" />
                <span>{footerContent.contact.address.website}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiOutlineMail className="text-xl text-white" />
                <span>info@africahealthpromotion.org</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 text-white pb-5 text-5xl ">
          <Link href="https://wa.me/233246622156" target="_blank">
            {" "}
            <FaWhatsappSquare className="hover:animate-bounce" />
          </Link>
          <Link href="#">
            {" "}
            <FaLinkedin className="hover:animate-bounce" />
          </Link>
          <Link href="#">
            {" "}
            <FaFacebookSquare className="hover:animate-bounce" />
          </Link>
          <Link href="#">
            {" "}
            <FaSquareXTwitter className="hover:animate-bounce" />
          </Link>
          <Link href="#">
            {" "}
            <FaInstagramSquare className="hover:animate-bounce" />
          </Link>
        </div>

        <div className="text-center pt-10 border-t border-gray-200">
          <p>{footerContent.copyright.labelOne}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
