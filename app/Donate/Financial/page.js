"use client";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

function Page() {
  const [donationAmount, setDonationAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSuccess = (reference) => {
    const message = `Donation successful! Thank you😍`;
    setSuccessMessage(message);
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);

    setFirstName("");
    setEmail("");
    setCountry("");
    setDonationAmount("");
  };

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: Number(donationAmount) * 100,
    publicKey: "pk_test_eee4d6a764eff8dd7ad9ab7ea1d92e02dc3dfb73",
    currency: "GHS",
    country, // Adding country of residence to Paystack configuration
  };

  const onClose = () => {
    console.log("You have canceled the transaction");
  };

  return (
    <div className="bg5">
      <section className="flex lg:flex-row flex-col gap-10 justify-between items-center px-5 font-mont container mx-auto lg:px-10 lg:py-20">
        <div className="lg:w-[50%]">
          <h1 className="text-white text-center text-[32px] lg:text-6xl font-bold font-mont lg:mt-10 mt-5 text-shadow-black">
            Support a pathway out of poverty
          </h1>
          <p className="text-white text-center lg:text-2xl lg:mb-10 text-[16px] font-mont lg:mt-10 mt-5">
            We appreciate every contribution donated towards achieving our
            goals.
          </p>
        </div>
        <div className="bg2 lg:mt-10 my-5 lg:w-[50%]">
          <div className="bg-[#172554] text-black py-8">
            <div className="container mx-auto text-center">
              <div className="mt-4 m-10">
                <h1 className=" text-2xl mb-10 text-white font-bold">
                  Financial Donation
                </h1>
                <label
                  htmlFor="firstname"
                  className="block text-md text-white font-semibold"
                >
                  Preferred Name
                </label>
                <input
                  type="text"
                  required
                  id="firstname"
                  className="w-full bg-white text-black border-2 border-gold rounded-lg p-3 lg:text-lg text-sm focus:outline-none focus:border-opacity-50"
                  placeholder="Preferred Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mt-4 m-10">
                <label
                  htmlFor="email"
                  className="block text-md text-white font-semibold"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  className="w-full bg-white text-black border-2 border-gold rounded-lg p-3 lg:text-lg text-sm focus:outline-none focus:border-opacity-50"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-4 m-10">
                <label
                  htmlFor="country"
                  className="block text-md text-white font-semibold"
                >
                  Country of Residence
                </label>
                <input
                  type="text"
                  required
                  id="country"
                  className="w-full bg-white text-black border-2 border-gold rounded-lg p-3 lg:text-lg text-sm focus:outline-none focus:border-opacity-50"
                  placeholder="Country of Residence"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <div className="lg:text-lg text-sm mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block text-md text-white font-semibold "
                >
                  Enter an amount here:
                </label>
                <input
                  type=""
                  id="custom-amount"
                  className="w-full bg-white text-black border-2 border-gold rounded-lg p-3 lg:text-lg text-sm mt-2 focus:outline-none focus:border-opacity-50"
                  placeholder="GH₵"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <div className="bg-white w-[130px] font-semibold rounded-xl hover:bg-black cursor-pointer hover:text-white p-3">
                  <PaystackButton
                    {...config}
                    text="Donate Now"
                    onSuccess={handleSuccess}
                    onClose={onClose}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showSuccessMessage && (
        <div className="slide-in-bottom-right">{successMessage}</div>
      )}
    </div>
  );
}

export default Page;
