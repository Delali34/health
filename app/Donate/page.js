// DonationCards.js

import React from "react";
import Link from "next/link";

const DonationCards = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/health4.jpg')` }}
    >
      <div className="bg-black bg-opacity-30 font-mont py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Financial Donations Card */}
            <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg overflow-hidden shadow-xl rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Financial Donations
                </h2>
              </div>

              <p className="text-gray-700 mb-4">
                Your cheerful donation means a lot to someone in need. We will
                connect with you on the impact of your gift
              </p>
              <Link href="/Donate/Financial">
                <h1 className="bg-blue-500 p-2 rounded-xl hover:bg-blue-800 duration-100 text-white text-center w-[100px]">
                  Click here
                </h1>
              </Link>
            </div>

            {/* Other Donations Card */}
            <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg overflow-hidden shadow-xl rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Other Donations
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                We receive and distribute clothes, food, and other valuables to
                those who need them the most
              </p>
              <Link href="/Donate/Other">
                <h1 className="bg-blue-500 p-2 rounded-xl hover:bg-blue-800 duration-100 text-white text-center w-[100px]">
                  Click here
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCards;
