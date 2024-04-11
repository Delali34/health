import React from "react";
import Link from "next/link";

const PartnerWithUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Do you want a social issue addressed? Be anonymous.
        </h2>
        <p className="lg:text-lg text-sm text-gray-700 mb-8">
          Report Fraud, Social Vices, Abuse, Misconduct or anything of
          importance to society.
        </p>
        <Link href="/contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Complain here...
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PartnerWithUs;
