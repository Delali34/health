"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { label: "Home", link: "/" },
  {
    label: "Experience",
    link: "/experience",
    children: [
      { label: "Projects", link: "/experience" },
      { label: "Success Stories", link: "/#success" },
    ],
  },
  {
    label: "About",
    link: "/AboutUs",
    children: [
      { label: "Who We Are", link: "/AboutUs" },
      { label: "Team", link: "/AboutUs#team" },
      { label: "Contact", link: "/contact" },
    ],
  },
  { label: "Blog", link: "/blog" },
  { label: "Volunteer", link: "/form" },
  { label: "Lodge Complain", link: "/report" },
  { label: "Careers", link: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  const handleDropdownClick = (e, index) => {
    e.preventDefault(); // Prevent navigation when clicking dropdown items
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[99999] bg-[#C4DEFE] shadow-lg font-mont"
      ref={navRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/ahpo-Logo-768x183.png"
              width={157}
              height={30}
              alt="Logo"
              className="w-auto h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.children ? (
                    <Link
                      href={item.link}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-all duration-200 flex items-center space-x-1"
                      onClick={(e) => handleDropdownClick(e, index)}
                    >
                      <span className="text-[12px] font-medium">
                        {item.label}
                      </span>
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  ) : (
                    <Link
                      href={item.link}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-all duration-200 flex items-center"
                    >
                      <span className="text-[12px] font-medium">
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {/* Enhanced Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === index && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100"
                      >
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.link}
                            className="block px-4 py-2 text-[12px] text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/233246622156"
            className="hidden lg:flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full space-x-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-lg" />
            <span className="text-[12px] font-medium">Chat Us</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-blue-100 transition-colors"
          >
            {isOpen ? (
              <IoMdClose className="h-6 w-6" />
            ) : (
              <IoMenuOutline className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <Image
                  src="/ahpo-Logo-768x183.png"
                  width={120}
                  height={24}
                  alt="Logo"
                  className="w-auto h-6"
                />
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <IoMdClose className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-4"
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === index ? null : index
                            )
                          }
                          className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors"
                        >
                          <span className="text-lg">{item.label}</span>
                          <IoIosArrowDown
                            className={`transform transition-transform duration-300 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-2"
                            >
                              {item.children.map((child, childIndex) => (
                                <Link
                                  key={childIndex}
                                  href={child.link}
                                  className="block text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors"
                                  onClick={toggleMenu}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.link}
                        className="block text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="p-4 border-t">
                <Link
                  href="https://wa.me/233246622156"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md"
                  onClick={toggleMenu}
                >
                  <FaWhatsapp className="text-xl" />
                  <span className="font-medium">Chat with us on WhatsApp</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
