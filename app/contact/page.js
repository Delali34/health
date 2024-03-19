"use client";

import Image from "next/image";
import { MdMarkEmailRead } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mo1be1b", "template_9u8lcyi", form.current, {
        publicKey: "9e-dDk8AcnnCTTCUv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Redirect to the "thank you" page
          window.location.href = "/Thank-you"; // Replace "thank-you-page.html" with the actual URL of your thank you page
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="bg-white container px-4 mx-auto p-8 py-5 font-mont rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Get in Touch
        </h2>
        <h3 className="text-2xl text-gray-700 mb-4">
          Let's Chat, Reach Out to Us
        </h3>
        <p className="text-gray-500 mb-8">
          Have questions or feedback? We're here to help. Send us a message, and
          we'll respond within 24 hours.
        </p>

        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <div className="flex gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              className="border-2 border-gray-200 rounded px-4 py-2 w-full focus:outline-none focus:border-primary-300"
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastname"
              className="border-2 border-gray-200 rounded px-4 py-2 w-full focus:outline-none focus:border-primary-300"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className="border-2 border-gray-200 rounded px-4 py-2 w-full focus:outline-none focus:border-primary"
          />
          <input
            type="tel"
            placeholder="Phone number"
            name="phone_number"
            className="border-2 border-gray-200 rounded px-4 py-2 w-full focus:outline-none focus:border-primary"
          />
          <textarea
            placeholder="Leave us a message"
            name="message"
            className="border-2 border-gray-200 rounded px-4 py-2 w-full focus:outline-none focus:border-primary"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-blue-100 rounded-full p-8 mb-8">
          <Image src="/image1.jpg" width={500} height={500} />
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow space-y-4">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 shadow mr-4">
              <MdMarkEmailRead className="text-2xl" />
            </div>
            <span className="text-gray-700">
              info@africahealthpromotion.org
            </span>
          </div>
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 shadow mr-4">
              <TbPhoneCall className="text-2xl" />
            </div>
            <span className="text-gray-700">+233-50 850 9911</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
