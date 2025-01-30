"use client";
import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import emailjs from "@emailjs/browser";

function Page() {
  const [donationAmount, setDonationAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState([]);
  const [customSkill, setCustomSkill] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [interests, setInterests] = useState([]);
  const [customInterest, setCustomInterest] = useState("");
  const [daysAvailable, setDaysAvailable] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDonationClick = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setCustomSkill("");
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleInterestClick = (interest) => {
    if (!interests.includes(interest)) {
      setInterests([...interests, interest]);
    }
    setCustomInterest("");
  };

  const handleRemoveInterest = (index) => {
    const updatedInterests = [...interests];
    updatedInterests.splice(index, 1);
    setInterests(updatedInterests);
  };

  const handleDayClick = (day) => {
    setDaysAvailable([...daysAvailable, day]);
  };

  const handleRemoveDay = (day) => {
    const updatedDays = daysAvailable.filter((d) => d !== day);
    setDaysAvailable(updatedDays);
  };

  const handleSubmit = async () => {
    if (!firstName || !email || !phone) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          email,
          phone,
          skills,
          interests,
          daysAvailable,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage(
          "Thank you for volunteering! We'll contact you soon 😍"
        );
        setShowSuccessMessage(true);

        // Reset form
        setFirstName("");
        setEmail("");
        setPhone("");
        setSkills([]);
        setCustomSkill("");
        setInterests([]);
        setCustomInterest("");
        setDaysAvailable([]);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
          setSuccessMessage("");
        }, 5000);
      } else {
        throw new Error(data.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg5">
      <section className="flex flex-col gap-10 justify-between items-center px-5 font-mont container mx-auto lg:px-10 py-5">
        <div className="lg:w-[80%]">
          <h1 className="text-white text-center text-3xl lg:text-5xl font-bold font-mont mt-5 text-shadow-black">
            Join us and other volunteers to impact society.
          </h1>
          <p className="text-white text-center lg:text-2xl lg:mb-10 mb-5 text-[16px] font-mont mt-10">
            Your time and skills are needed wherever you are.
          </p>
        </div>
        <div className="bg2 lg:w-[80%]">
          <div className="bg-blue-950 text-white py-8">
            <div className="container mx-auto text-center">
              <div className="mt-4 m-10">
                <input
                  type="text"
                  required
                  name="firstname"
                  id="firstname"
                  className="w-full bg-white text-primary border-2 border-gold rounded-lg p-3 lg:text-xl text-[12px] focus:outline-none focus:border-opacity-50"
                  placeholder="Full Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <span className="text-lg text-red-600">
                  {firstName ? null : "* Required"}
                </span>
              </div>
              <div className="mt-4 m-10">
                <input
                  type="tel"
                  required
                  id="phone"
                  name="phone"
                  className="w-full bg-white text-primary border-2 border-gold rounded-lg p-3 lg:text-xl text-[12px] focus:outline-none focus:border-opacity-50"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="text-lg text-red-600">
                  {phone ? null : "* Required"}
                </span>
              </div>
              <div className="mt-4 m-10">
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  className="w-full bg-white text-black border-2 border-gold rounded-lg p-3 lg:text-xl text-[12px] focus:outline-none focus:border-opacity-50"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <h3 className="md:text-2xl text-[16px] font-bold mb-4">
                  Select reason for volunteering
                </h3>
                <div className="flex p-4 flex-wrap justify-center gap-4">
                  <button
                    onClick={() =>
                      handleDonationClick("Offer professional skills")
                    }
                    className="bg-white  hover:bg-opacity-50 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Offer professional skills
                  </button>
                  <button
                    onClick={() => handleDonationClick("Internship")}
                    className="bg-white  hover:bg-opacity-50 py-3 px-6 rounded-lg text-md lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Internship
                  </button>
                  <button
                    onClick={() => handleDonationClick("Give back to society")}
                    className="bg-white  hover:bg-opacity-50 py-3 px-6 rounded-lg text-md lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Give back to society
                  </button>
                  <button
                    onClick={() => handleDonationClick("Capacity Building")}
                    className="bg-white  hover:bg-opacity-50 py-3 px-6 rounded-lg text-md lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Capacity building
                  </button>
                </div>
              </div>
              <div>
                <h3 className="lg:text-2xl text-[16px] font-bold mb-1">
                  Selected reason
                </h3>
                <div className="flex p-4 flex-wrap justify-center gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className=" text-red-600 font-semibold bg-white p-2  rounded-lg flex items-center"
                    >
                      {skill}
                      <button
                        className="ml-2 text-black"
                        onClick={() => handleRemoveSkill(index)}
                      >
                        <IoIosRemoveCircle className="text-[27px]" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block mb-5 font-semibold"
                >
                  Other reason for volunteering
                </label>
                <input
                  type="text"
                  id="custom-amount"
                  name="reason"
                  className="w-full bg-white  text-black border-2 border-gold rounded-lg p-3 lg:text-xl text-[12px] focus:outline-none focus:border-opacity-50"
                  placeholder="Enter reason"
                  value={customSkill}
                  onChange={(e) => setCustomSkill(e.target.value)}
                />
                <div className="flex justify-center">
                  <div className="bg-white text-black w-[130px] mt-2 lg:text-[16px] text-[12px] font-semibold rounded-xl hover:bg-black cursor-pointer hover:text-white p-3">
                    <button onClick={() => handleDonationClick(customSkill)}>
                      Add reason
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="lg:text-2xl text-[16px] font-bold mb-4 px-2">
                  When do you want to volunteer?
                </h3>
                <div className="flex p-4 flex-wrap justify-center gap-4">
                  <button
                    onClick={() => handleInterestClick("Available now")}
                    className="bg-white  hover:bg-opacity-50 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Available now
                  </button>
                  <button
                    onClick={() => handleInterestClick("Depends on schedule")}
                    className="bg-white  hover:bg-opacity-50 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Depends on schedule
                  </button>
                </div>
              </div>
              <div>
                <h3 className="lg:text-2xl text-[16px] font-bold mb-1">
                  Selected time
                </h3>
                <div className="flex p-4 flex-wrap justify-center gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className=" text-red-600 font-semibold bg-white p-2 lg:text-xl text-[12px]  rounded-lg flex items-center"
                    >
                      {interest}
                      <button
                        className="ml-2 text-black"
                        onClick={() => handleRemoveInterest(index)}
                      >
                        <IoIosRemoveCircle className="text-[27px]" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block mb-5 font-semibold"
                >
                  Other (specify)
                </label>
                <input
                  type="text"
                  id="custom-amount"
                  name="time"
                  className="w-full bg-white  text-black border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
                  placeholder="Enter preffered time"
                  value={customInterest}
                  onChange={(e) => setCustomInterest(e.target.value)}
                />
                <div className="flex justify-center">
                  <div className="bg-white text-black w-[130px] mt-2 font-semibold rounded-xl lg:text-[16px] text-[12px] hover:bg-black cursor-pointer hover:text-white p-3">
                    <button onClick={() => handleInterestClick(customInterest)}>
                      Add time
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-white text-black w-[130px] lg:text-xl text-[12px] font-semibold mt-5 rounded-xl hover:bg-black cursor-pointer hover:text-white p-3">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showSuccessMessage && (
        <div className="fixed bottom-0 right-0 m-4 bg-green-500 text-white py-2 px-4 rounded-xl">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default Page;
