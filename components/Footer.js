"use client";
import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const footerContent = {
  heading: {
    title: "Connect With Us",
    subheading: "Join us in making a difference in communities across Africa",
  },
  sections: [
    {
      title: "Organization",
      links: [
        { href: "/", label: "Home" },
        { href: "/AboutUs", label: "About" },
        { href: "/form", label: "Volunteer" },
        { href: "/Partner", label: "Partner Us" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/experience", label: "Our Experience" },
        { href: "/blog", label: "Our Blog" },
        { href: "/report", label: "Lodge Complain" },
        { href: "/Donate", label: "Donate" },
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    details: [
      {
        icon: <FaLocationDot />,
        text: "Ring Road West, Accra Digital Center",
        href: "https://www.google.com/maps/place/Accra+Digital+Centre",
      },
      {
        icon: <HiPhone />,
        text: "+233-53 661 8187",
        href: "tel:+233508509911",
      },
      {
        icon: <HiMiniGlobeAmericas />,
        text: "africahealthpromotion.org",
        href: "https://africahealthpromotion.org",
      },
      {
        icon: <HiOutlineMail />,
        text: "NGO@africahealthpromotion.org",
        href: "mailto:NGO@africahealthpromotion.org",
      },
    ],
  },
  social: [
    { icon: <FaWhatsappSquare />, href: "https://wa.me/233541214175" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/company/africahpo",
    },
    {
      icon: <FaFacebookSquare />,
      href: "https://web.facebook.com/profile.php?id=61560485392034",
    },
    { icon: <FaSquareXTwitter />, href: "https://x.com/AfricaHPO" },
    { icon: <FaInstagramSquare />, href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative font-mont bg-[#172554] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute opacity-15 inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#172554_70%,transparent_110%)]" />

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
            {footerContent.heading.title}
          </h2>
          <p className="text-lg text-gray-300 opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]">
            {footerContent.heading.subheading}
          </p>
          <div className="h-1 w-20 bg-blue-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Navigation Sections */}
          {footerContent.sections.map((section, index) => (
            <div
              key={section.title}
              className="group p-6 rounded-xl backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-500 border border-white/10 hover:border-white/20"
            >
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.label}</span>
                      <span className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="p-6 rounded-xl backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-500 border border-white/10 hover:border-white/20">
            <h3 className="text-xl font-semibold mb-4">
              {footerContent.contact.title}
            </h3>
            <ul className="space-y-4">
              {footerContent.contact.details.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                    target="_blank"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {footerContent.social.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className="text-4xl hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform "
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400">Copyright © 2025. Africa HPO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
