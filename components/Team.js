import React from "react";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <div
      id="team"
      className="bg-gray-100 font-mont min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Team Introduction */}
        <section className="text-center mb-12">
          <h2 id="team" className="lg:text-3xl text-2xl font-bold mb-4">
            Our Team
          </h2>
          <p className="lg:text-lg text-sm text-left mb-8">
            Meet our team of dedicated project managers, IT specialists,
            organizational system managers, volunteers, and interns. The Africa
            HPO team has a high passion for improving the lives of the less
            privileged. We are what we believe in; we are our core values.
          </p>
          <Link href="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
              Contact our team lead...
            </button>
          </Link>
        </section>

        {/* Core Values */}
        <h2
          id="team"
          className="lg:text-3xl text-center text-2xl font-bold mb-4"
        >
          Our Core Values
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <Image
                  src={value.imageUrl}
                  alt={value.title}
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl text-center font-bold mb-4">
                {value.title}
              </h3>
              <p className="text-sm text-left">{value.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

// Core Values Data
const coreValues = [
  {
    title: "Accountability",
    description:
      "We hold ourselves accountable for our actions, decisions, and their consequences. With a commitment to delivering on our promises, we ensure transparency and trustworthiness in all our endeavors",
    imageUrl: "/acc.jpg", // Example image path
  },
  {
    title: "Transparency",
    description:
      "Transparency is the cornerstone of our operations. We believe in open communication, sharing information freely, and being honest with all stakeholders. By fostering transparency, we build strong relationships and maintain integrity.",
    imageUrl: "/tran.jpg", // Example image path
  },
  {
    title: "Integrity",
    description:
      "Integrity is the foundation of our organization. We adhere to moral and ethical principles, acting with honesty and fairness in all situations. Our integrity guides us to do what is right, even when no one is watching.",
    imageUrl: "/Inter.jpg", // Example image path
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do. By setting high standards and continuously improving our processes, we aim to exceed expectations and achieve outstanding results. Our pursuit of excellence drives innovation and fosters success.",
    imageUrl: "/exe.jpg", // Example image path
  },
];

export default Team;
