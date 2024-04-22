"use client";

import { useState } from "react";

// Regions in Ghana
const regionsInGhana = [
  "Ashanti",
  "Brong-Ahafo",
  "Central",
  "Eastern",
  "Greater Accra",
  "Northern",
  "Upper East",
  "Upper West",
  "Volta",
  "Western",
];

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    reason: "",
    otherReason: "",
    availability: "",
    otherAvailability: "",
    region: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to submit the form data to your backend or handle it as needed
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    // Reset form data
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      reason: "",
      otherReason: "",
      availability: "",
      otherAvailability: "",
      region: "",
    });
  };

  return (
    <div
      className="bg-cover bg-center px-5 py-20"
      style={{ backgroundImage: "url('/health1.jpg')" }}
    >
      <div className="max-w-5xl mx-auto font-mont p-8 bg-primary bg-opacity-90 shadow-md rounded">
        <h1 className="text-white text-center text-3xl lg:text-5xl font-bold font-mont mt-5 text-shadow-black">
          Join us and other volunteers to impact society.
        </h1>
        <p className="text-white text-center lg:text-2xl lg:mb-10 mb-5 text-[16px] font-mont mt-10">
          Your time and skills are needed wherever you are.
        </p>
        <form action="https://getform.io/f/wbrkxrra" method="POST">
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-white text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
              required
            />
          </div>
          {/* Other form inputs go here */}
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Reason for Volunteering */}
          <div className="mb-6">
            <label
              htmlFor="reason"
              className="block text-white text-sm font-bold mb-2"
            >
              Reason for Volunteering
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a reason</option>
              <option value="Offer professional skills">
                Offer professional skills
              </option>
              <option value="Internship">Internship</option>
              <option value="Give back to society">Give back to society</option>
              <option value="Other">Other</option>
            </select>
            {formData.reason === "Other" && (
              <input
                type="text"
                placeholder="Please specify"
                name="otherReason"
                value={formData.otherReason}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            )}
          </div>

          {/* When are you available? */}
          <div className="mb-6">
            <label
              htmlFor="availability"
              className="block text-white text-sm font-bold mb-2"
            >
              When are you available?
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select availability</option>
              <option value="Available now">Available now</option>
              <option value="On weekends">Depends on schedule</option>
              <option value="Other">Other</option>
            </select>
            {formData.availability === "Other" && (
              <input
                type="text"
                placeholder="Please specify"
                name="otherAvailability"
                value={formData.otherAvailability}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            )}
          </div>

          {/* Select Region */}
          <div className="mb-6">
            <label
              htmlFor="region"
              className="block text-white text-sm font-bold mb-2"
            >
              Region
            </label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select region</option>
              {regionsInGhana.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-500 text-white text-center py-2 px-4 mt-4">
            Form submitted successfully! We will get back shortly
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerForm;
