// DonationCards.js

import React from "react";

const DonationCards = () => {
  return (
    <div className="bg-cover bg-center bg-gray-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Financial Donations Card */}
          <div className="bg-white overflow-hidden shadow-xl rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Financial Donations
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Your cheerful donation means a lot to someone in need. We will
              connect with you on the impact of your gift
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Other Donations Card */}
          <div className="bg-white overflow-hidden shadow-xl rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Other Donations
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Accept donations in kind such as clothes, food, or other
              essentials.
            </p>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCards;
