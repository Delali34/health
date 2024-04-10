import React from "react";
import Link from "next/link";
const ReportAbuse = () => {
  return (
    <div className="bg-gray-100 font-mont  py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="/bars.jpg"
            alt="Report Abuse"
            className="w-full h-auto md:h-full md:max-h-full object-cover"
          />
        </div>
        {/* Content */}
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-4 text-center lg:text-left">
            Do you want a social issue addressed? Be anonymous.
          </h2>
          <p className="mb-4 text-sm lg:text-left text-center">
            Report Fraud, Social Vices, Abuse, Misconduct or anything of
            importance to society.
          </p>
          <Link href="/contact" className="flex lg:flex-col justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-4 rounded self-center md:self-start">
              Report Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReportAbuse;
