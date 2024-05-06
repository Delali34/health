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
          href: "/form",
          label: "Volunteer",
        },

        {
          href: "/Partner",
          label: "Partner Us",
        },
      ],
    },
    {
      heading: "Resources",
      links: [
        {
          href: "/experience",
          label: "Our Experience",
        },
        {
          href: "/blog",
          label: "Our Blog",
        },
        {
          href: "/report",
          label: "Lodge Complain",
        },

        {
          href: "/Donate",
          label: "Donate",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact Us",
    description: "",
    address: {
      street: "Ring Road West, Accra Digital Center",
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
    <footer role="contentinfo" className="py-8 bg-primary text-white font-mont">
      <div className="max-w-5xl px-4 mx-auto ">
        <div className="block lg:flex justify-center  gap-14 mb-10 mt-10  pb-10">
          <div className="w-full  mb-10 lg-mb-0">
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
              <Link
                href="https://www.google.com/maps/place/Accra+Digital+Centre/@5.5661469,-0.2256028,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9a01cf93ff85:0x3b6fd9b89c7ad508!8m2!3d5.5661469!4d-0.2230279!16s%2Fg%2F11c2qnqjtf?entry=ttu"
                target="_blank"
              >
                <li className="flex hover:underline items-start space-x-3 mb-5">
                  <FaLocationDot className="text-xl text-white" />
                  <span>{footerContent.contact.address.street}</span>
                </li>
              </Link>
              <Link href="tel:+233508509911" target="_blank">
                <li className="flex hover:underline items-start space-x-3 mb-5">
                  <HiPhone className="text-xl text-white" />
                  <span>{footerContent.contact.address.phone}</span>
                </li>
              </Link>

              <li className="flex hover:underline items-start space-x-3 mb-5">
                <HiMiniGlobeAmericas className="text-xl text-white" />
                <span>{footerContent.contact.address.website}</span>
              </li>
              <Link href="mailto:NGO@africahealthpromotion.org" target="_blank">
                <li className="flex hover:underline items-start space-x-3 mb-5">
                  <HiOutlineMail className="text-xl text-white" />
                  <span>NGO@africahealthpromotion.org</span>
                </li>
              </Link>
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
