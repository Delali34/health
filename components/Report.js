"use client";
import React, { useState } from "react";
import Link from "next/link";

const PartnerWithUs = () => {
  const [selectedVice, setSelectedVice] = useState("");
  const [complaint, setComplaint] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleViceChange = (e) => {
    setSelectedVice(e.target.value);
  };

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const form = e.target;
    const formData = new FormData(form);

    // Handle form submission using Getform
    try {
      await fetch("https://getform.io/f/lajkqqrb", {
        method: "POST",
        body: formData,
      });
      // Set submitted state to true and reset form after successful submission
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        form.reset(); // Reset the form after submission
        setSelectedVice("");
        setComplaint("");
        setLoading(false); // Set loading state back to false
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error here
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <section className="bg-gray-100 py-8 px-4 md:py-12 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl text-left font-bold mb-6">
          Do you want a social issue addressed? We will not show your identity.
        </h2>
        <p className="lg:text-lg text-left text-sm text-gray-700 mb-8">
          Report fraud, social vices, abuse, misconduct, or anything of
          importance to society.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <select
              className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedVice}
              onChange={handleViceChange}
              required
              name="Social vice"
            >
              <option value="">Select Social Vice</option>
              <option value="Fraud">Fraud</option>
              <option value="Abuse">Abuse</option>
              <option value="Misconduct">Misconduct</option>
              {/* Add more options as needed */}
            </select>
            {selectedVice && (
              <textarea
                rows="5"
                className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-96"
                placeholder="Write your complaint..."
                value={complaint}
                onChange={handleComplaintChange}
                required
                name="complaint"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Submitting..." : "Submit Complaint"}
          </button>
        </form>
        {submitted && (
          <div className="text-green-600 text-sm mt-4">
            Complaint submitted successfully! We will address it soon.
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnerWithUs;
