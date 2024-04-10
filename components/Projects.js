"use client";
import React, { useState } from "react";
import Image from "next/image";

const NGOProjects = () => {
  const [expandedProjects, setExpandedProjects] = useState([]);

  // Project data
  const projects = [
    {
      title: "Star Readers Initiative",
      description:
        "We developed an exciting reading programme for basic school children in 5 regions of Ghana.",
      testimony:
        "At first, reading was my biggest problem in school. My friends used to mock at me and I felt like dropping out. So when I heard that we are going to have a reading programme, I was the first person to show up. Now I can read like any other student… Thanks to the people who brought this programme to our school.",
      imageUrl: "/education.jpg", // Example image path
    },
    {
      title: "COVID-19 Frontline Support",
      description:
        "We played frontline roles in the fight against the COVID-19 outbreak.",
      testimony:
        "We thought we did little but beneficiaries were overwhelmed… We worked with our communities, shared accurate information with them and they took the necessary precautions to protect themselves.",
      imageUrl: "/health3.png", // Example image path
    },
    {
      title: "Healthy Eating Project",
      description:
        "Our food and nutrition projects taught mothers how to cook nutritious foods.",
      testimony:
        "This nutrition programme taught me a life lesson. I thought I needed lots of money to prepare good food for my family. This programme taught me how to combine our local foods to make my children grow healthy and strong.",
      imageUrl: "/small.jpg", // Example image path
    },
    {
      title: "Business Capacity Building",
      description:
        "We helped business owners to learn new ways of managing their finances.",
      testimony:
        "How I wish this training programme came earlier to our community. Those times we used to get a lot of money from our businesses but we didn’t manage it well. But with this knowledge I am sure I can save some money and expand my business.",
      imageUrl: "/health3.png", // Example image path
    },
    {
      title: "Family Planning Education",
      description:
        "We helped families to determine when to have their children with the most convenient intervals.",
      testimony:
        "I never did family planning because the way people talk about family planning was frightening. I now understand that family planning is not only by injection. I didn’t know you have to make your own choice. Now I can have my next child when I am ready.",
      imageUrl: "/health1.jpg", // Example image path
    },
    {
      title: "Water is Life Project",
      description:
        "Our water and sanitation projects targeted the rural areas in Upper East, Oti, Volta and Bono regions.",
      testimony:
        "The “Water is Life” project was a lifesaving intervention that cannot be forgotten in our records.",
      imageUrl: "/city.jpg", // Example image path
    },
    {
      title: "Health Insurance Registration",
      description:
        "We led a nationwide free registration of children in basic schools and underprivileged communities onto the National Health Insurance Scheme (NHIS).",
      testimony:
        "I was not going to the hospital because my insurance was dead some long time ago. But after the NGO came and renewed it, I started visiting the hospital. That was when I realized I had a serious health problem but thank God I have been treated.",
      imageUrl: "/image5.jpg", // Example image path
    },
    {
      title: "Universal Health Coverage",
      description:
        "This initiative is a projection of the Universal Health Coverage Agenda. Bringing healthcare to the doorstep of communities.",
      testimony:
        "Through this project, we provided free health screening to over 1.6 million Ghanaians. We did not leave out those affected by the Akosombo Dam spillage disaster in the Volta region.",
      imageUrl: "/image2.jpg", // Example image path
    },
    {
      title: "Inform for Health (i-4-H) Project",
      description:
        "Africa Health Promotion Organization rolled out the inform for health (i-4-H) project. We conducted interactive radio programmes featuring experienced public health professionals and general physicians with phone-in sessions.",
      testimony:
        "The feedback on the importance of this radio-driven health education programme was unimaginably heartwarming.",
      imageUrl: "/image4.jpg", // Example image path
    },
    {
      title: "Non-Communicable Diseases Awareness",
      description:
        "Raising awareness about the increasing rate of NCDs in Ghana is as important as building hospitals for treatment. We engaged our communities with priority to those aged 40 years and above.",
      testimony:
        "I looked very healthy so I never thought I could be having NCD. When the NGO came here and encouraged us to go for regular checkup, I was reluctant but my wife insisted. After the checkup, they said my blood pressure was above normal. I thank God, they showed me what to do to remain healthy.",
      imageUrl: "/vaccine.jpg", // Example image path
    },
    {
      title: "Climate Change Initiative",
      description:
        "The Africa HPO is committed to promoting the Paris agreement on climate change. Our engagement with communities focuses on responsible farming practices and preservation of water bodies.",
      testimony:
        "As of November 2023, our initiative led to the growing of 1,502 trees. Our target is to grow 5,000 trees by the end of 2024.",
      imageUrl: "/image1.jpg", // Example image path
    },
    {
      title: "Urban Health Campaign",
      description:
        "Our urban health initiatives focus on air pollution in cities. Our campaign targeted areas with activities that lead to the emission of environmental pollutants.",
      testimony:
        "We are working to mitigate the preventable deaths of 8.3 million people annually from air pollution.",
      imageUrl: "/image5.jpg", // Example image path
    },
  ];

  const handleToggleProject = (index) => {
    if (expandedProjects.includes(index)) {
      setExpandedProjects(expandedProjects.filter((item) => item !== index));
    } else {
      setExpandedProjects([...expandedProjects, index]);
    }
  };

  return (
    <div className="bg-gray-100 font-mont min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative  mb-10">
        <Image
          src="/solution.jpg"
          className=" w-full h-[50vh] object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <div className="bg-black/60 inset-0 top-0 right-0 left-0  h-[50vh] bottom-0 absolute"></div>

        <div className="absolute top-[50%] right-0 left-0 bottom-0 flex justify-center">
          <h1 className="text-white md:text-7xl text-4xl font-bold">
            Our Experience
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Project Frames */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-blue-200  p-6">
              <div className="mb-4">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p
                className={
                  expandedProjects.includes(index)
                    ? "block mb-4"
                    : "hidden mb-4"
                }
              >
                {project.description}
              </p>
              {expandedProjects.includes(index) ? (
                <div>
                  <h1 className="font-semibold underline text-lg mb-1">
                    Testimony
                  </h1>
                  <p className="mb-4">{project.testimony}</p>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => handleToggleProject(index)}
                  >
                    Read Less
                  </button>
                </div>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => handleToggleProject(index)}
                >
                  Read More
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NGOProjects;