"use client";
import React, { useState, useEffect } from "react";

import { PaystackButton } from "react-paystack";

function Page() {
  const [donationAmount, setDonationAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSuccess = (reference) => {
    const message = `Donation succesfull! Thank you😍`;
    setSuccessMessage(message);
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);

    setFirstName("");
    setEmail("");
    setDonationAmount("");
  };

  const handleDonationClick = (amount) => {
    setDonationAmount(amount);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: Number(donationAmount) * 100,
    publicKey: "pk_test_eee4d6a764eff8dd7ad9ab7ea1d92e02dc3dfb73",
    currency: "GHS",
  };

  const onClose = () => {
    console.log("You have canceled the transaction");
  };

  return (
    <div className="bg5 ">
      <section className="flex lg:flex-row flex-col gap-10 justify-between items-center px-5 font-mont  container mx-auto lg:px-10 lg:py-20 ">
        <div className="lg:w-[50%]">
          <h1 className="text-white text-center text-[32px] lg:text-6xl font-bold font-mont lg:mt-10 mt-5 text-shadow-black">
            Support a pathway out of poverty
          </h1>
          <p className="text-white text-center lg:text-2xl lg:mb-10  text-[16px] font-mont lg:mt-10 mt-5">
            We appreciate every contribution donated towards achieving our
            goals.
          </p>
        </div>
        <div className="bg2 lg:mt-10 my-5 lg:w-[50%]">
          {/* Donation Options */}
          <div className="bg-[#172554]  text-black py-8">
            <div className="container mx-auto text-center">
              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block text-md font-semibold"
                ></label>
                <input
                  type="text"
                  required
                  id="firstname"
                  className="w-full bg-white text-black border-2 border-gold rounded-lg p-3 lg:text-lg text-sm focus:outline-none focus:border-opacity-50"
                  placeholder="Full Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block text-md font-semibold"
                ></label>
                <input
                  type="email"
                  required
                  id="email"
                  className="w-full bg-white text-black  border-2 border-gold rounded-lg p-3 lg:text-lg text-sm focus:outline-none focus:border-opacity-50"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div>
                {" "}
                <h3 className="lg:text-2xl text-lg font-bold mb-4">
                  Choose an amount to donate
                </h3>
                <div className="flex p-4 flex-wrap justify-center gap-4">
                  <button
                    onClick={() => handleDonationClick("100")}
                    className="bg-white text-black  hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-lg text-sm  font-semibold transition duration-300"
                  >
                    100
                  </button>
                  <button
                    type="submit"
                    onClick={() => handleDonationClick("500")}
                    className="bg-white text-black hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-lg text-sm  font-semibold transition duration-300"
                  >
                    500
                  </button>
                  <button
                    onClick={() => handleDonationClick("1000")}
                    className="bg-white text-black  hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-lg text-sm  font-semibold transition duration-300"
                  >
                    1000
                  </button>
                  <button
                    onClick={() => handleDonationClick("2000")}
                    className="bg-white text-black hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-lg text-sm  font-semibold transition duration-300"
                  >
                    2000
                  </button>
                </div>
              </div> */}

              {/* Custom Donation Amount */}
              <div className="lg:text-lg text-sm mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block text-md font-semibold text-white"
                >
                  Enter an amount here:
                </label>
                <input
                  type="number"
                  id="custom-amount"
                  className="w-full bg-white text-black border-2 border-gold rounded-lg p-3 lg:text-lg text-sm mt-2 focus:outline-none focus:border-opacity-50"
                  placeholder="Enter custom amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                {" "}
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
