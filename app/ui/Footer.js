import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart } from "react-icons/hi2";

const footerContent = {
  about: {
    logo: "/ahpo-Logo-768x183.png",
    description:
      "Africa Health Promotion Organization is an NGO dedicated to promoting public health using research-driven and evidence-based approaches.promoting public health.",
    cta: {
      href: "#",
      label: "Learn more",
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
          label: "Support",
        },
        {
          href: "/experience",
          label: "Our Experience",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    description:
      "Please feel free to reach out to us with any inquiries, questions, or assistance you may need.",
    address: {
      street: "92 Dr. Hutton Mills Street, Accra Ghana",
      phone: "+233-50 850 9911",
      website: "https://africahealthpromotion.org",
    },
  },
  copyright: {
    labelOne: "Copyright &copy 2024. Africa HPO",
  },
};

const Footer = () => {
  return (
    <footer role="contentinfo" className="py-20 bg-white font-mont">
      <div className="container px-4 mx-auto ">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full mb-10 lg:mb-0 lg:w-4/12">
            <Link href={""} className="mb-4 inline-block">
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
                className="flex space-x-2 outline-none items-center font-semibold text-primary group"
              >
                <span>{footerContent.about.cta.label}</span>
                <span className="w-6 h-6 rounded-full bg-primary group-hover:bg-secondary duration-300 transition-all ease-in-out text-white inline-flex items-center justify-center">
                  <BiChevronRight className="text-lg " />
                </span>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg-mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-heading mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, index) => (
                      <li className="mb-3" key={link.label}>
                        <Link
                          href={link.href}
                          className="group flex items-center duration-300 transition-all ease-in-out hover:text-primary "
                        >
                          <span>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3 ">
                            <BiChevronRight className="text-xl" />
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
            <h3 className="font-semibold text-heading mb-5">
              {footerContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-7">
              {footerContent.contact.description}
            </p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <FaLocationDot className="text-xl text-primary" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiPhone className="text-xl text-primary" />
                <span>{footerContent.contact.address.phone}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiMiniGlobeAmericas className="text-xl text-primary" />
                <span>{footerContent.contact.address.website}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200">
          <p>{footerContent.copyright.labelOne}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
