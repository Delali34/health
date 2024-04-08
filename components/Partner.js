import React from "react";
import Link from "next/link";

const PartnerWithUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We Help You Achieve Your Project Objectives
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          In a cost-effective way. We deploy the best of our professionals,
          systems, and tools to execute tasks. We make your work easier,
          stress-free and in line with your organizational policies. Every
          encounter with us is meant to leave you with lovely memories…
        </p>
        <Link href="/contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PartnerWithUs;
