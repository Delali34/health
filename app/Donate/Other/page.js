"use client";
import { useState } from "react";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    donationType: "",
    description: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false); // Reset submitted state after 5 seconds
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          donationType: "",
          description: "",
          comments: "",
        }); // Reset form fields
      }, 3000);
    }, 2000);
  };

  return (
    <div
      className="bg-cover bg-center py-10 font-mont px-5"
      style={{ backgroundImage: "url('/health4.jpg')" }}
    >
      <div className="max-w-5xl bg-[#172554] mx-auto lg:p-10 p-5 rounded-lg">
        <h2 className="text-2xl sm:text-3xl text-white font-bold mb-6">
          Other Donations
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-white font-bold mb-2"
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
              placeholder="Your Full Name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phoneNumber"
              className="block text-white font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Phone Number"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="donationType"
              className="block text-white font-bold mb-2"
            >
              Donation Type
            </label>
            <select
              id="donationType"
              name="donationType"
              value={formData.donationType}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select donation type</option>
              <option value="Clothes">Clothes</option>
              <option value="Food">Food</option>
              <option value="Water">Water</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.donationType === "Other" && (
            <div className="mb-6">
              <label
                htmlFor="otherDonationType"
                className="block text-white font-bold mb-2"
              >
                Other Donation Type
              </label>
              <input
                type="text"
                id="otherDonationType"
                name="otherDonationType"
                value={formData.otherDonationType}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Specify Other Donation Type"
                required
              />
            </div>
          )}

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-white font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Description of donated items"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              htmlFor="comments"
              className="block text-white font-bold mb-2"
            >
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Any additional comments or instructions"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Donation"}
            </button>
          </div>
        </form>

        {/* Submission Success Message */}
        {submitted && (
          <div
            className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Thank you for your donation!</strong>
            <span className="block sm:inline">
              {" "}
              We will get back to you shortly.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationForm;
