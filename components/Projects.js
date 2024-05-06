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
        "We developed one of the most exciting reading programmes for basic school children in 5 regions of Ghana. Our young stars are now doing well in digesting complex sentences, making coherent arguments and developing their own storyline. Some of our beneficiaries are have won national essay writing competitions.",
      testimony:
        "At first, reading was my biggest problem in school. My friends used to mock at me and I felt like dropping out. So when I heard that we are going to have a reading programme, I was the first person to show up. Now I can read like any other student… Thanks to the people who brought this programme to our school.",
      imageUrl: "/education.jpg", // Example image path
    },
    {
      title: "Disease Outbreak Response",
      description:
        "We played frontline roles in the fight against COVID-19, meningitis, rabbies and other diesease outbreaks.We conducted risk communication and community engagement, dissemenated livesaving infomation and facilitated case referrals to health facilities. We partnered with donors to strengthen health systems and community stuctures among other things. This was one of our groundbreaking experiences. We thought we did little but beneficiaries were overwhelmed… We worked with our communities, shared accurate information with them and they took the necessary precautions to protect themselves.",
      testimony:
        "We thought we did little but beneficiaries were overwhelmed… We worked with our communities, shared accurate information with them and they took the necessary precautions to protect themselves.",
      imageUrl: "/health3.png", // Example image path
    },
    {
      title: "Community Nutrition Project",
      description:
        "Our food and nutrition projects were community based. We taught parents how to cook nutritious foods. We also learnt what “food” means to different cultures.",
      testimony:
        "This nutrition programme taught me a life lesson. I thought I needed lots of money to prepare good food for my family. This programme taught me how to combine our local foods to make my children grow healthy and strong.",
      imageUrl: "/nutrition.jpg", // Example image path
    },
    {
      title: "Livelihood Capacity Building",
      description:
        "Small scale business enterprises are at our heart. This project focused on building capacity of traders, livestock and crop farmers on increasing yield and financial literacy. We expect to expand this project as a nationawide intervention.",
      testimony:
        "How I wish this training programme came earlier to our community. Those times we used to get a lot of money from our businesses but we didn’t manage it well. But with this knowledge I am sure I can save some money and expand my business.",
      imageUrl: "/selling.jpg", // Example image path
    },
    {
      title: "Family Planning Intervention",
      description:
        "We helped families to determine when to have their children with the most convenient intervals. Our family planning interventions targeted the youth and new couples. Through this project, family planning accepter rate has increased mainly due to how we addressed the myths in various communities. Our beneficiaries gave heartwarming testimonies.",
      testimony:
        "I never did family planning because the way people talk about family planning was frightening. I now understand that family planning is not only by injection. I didn’t know you have to make your own choice. Now I can have my next child when I am ready.",
      imageUrl: "/plan.jpg", // Example image path
    },
    {
      title: "Water is Life Project",
      description:
        "Our water and sanitation projects targeted communities which practiced open defecation and competed for drinking water with animals from shallow open sources. In all, we provided 49 mechanized boreholes and 88 improved tiolet facilities in Upper East, Oti, Volta and Bono regions. This helped reduce water-borne diseases and other communicable diseases.",
      testimony:
        "The “Water is Life” project was a lifesaving intervention that cannot be forgotten in our records.",
      imageUrl: "/water.jpg", // Example image path
    },
    {
      title: "Health Insurance Enrollment",
      description:
        "We led a nationwide free registration of children in basic schools and underprivileged communities onto the National Health Insurance Scheme (NHIS). We are grateful to GIZ and our partners for funding this activity that reached over 470,000 beneficiaries.",
      testimony:
        "I was not going to the hospital because my insurance was dead some long time ago. But after the NGO came and renewed it, I started visiting the hospital. That was when I realized I had a serious health problem but thank God I have been treated.",
      imageUrl: "/nh.jpg", // Example image path
    },
    {
      title: "Mass Health Screening",
      description:
        "We are experts in Health screening for early detection and treatment of diseases. Our latest health screening was in partnership with GIZ where we reached over 1.6 million persons living in Ghana in 2023. We also provided free health screening to those affected by the Akosombo Dam spillage disaster in Ghana.",
      testimony:
        "Through this project, we provided free health screening to over 1.6 million Ghanaians. We did not leave out those affected by the Akosombo Dam spillage disaster in the Volta region.",
      imageUrl: "/image5.jpg", // Example image path
    },
    {
      title: "Inform for Health (i-4-H) Project",
      description:
        "Africa Health Promotion Organization rolled out the inform for health (i-4-H) project. We conducted interactive radio and TV programs featuring experienced public health professionals and physicians with phone-in sessions. We addressed long standing myths and reached out to 10million Ghanaians through theses media platforms",
      testimony:
        "The feedback on the importance of this radio-driven health education programme was unimaginably heartwarming.",
      imageUrl: "/radio.jpeg", // Example image path
    },
    {
      title: "Non-Communicable Diseases Awareness",
      description:
        "Non-communicable diseases are cutting short the lives of our adult population. This is not just an issue in Ghana but a global public health menace. Our effort in raising public awareness about NCDs prevention was as vigorous as the effort needed for treatment. We engaged our communities with priority to those aged 40 years and above.",
      testimony:
        "I looked very healthy so I never thought I could be having NCD. When the NGO came here and encouraged us to go for regular checkup, I was reluctant but my wife insisted. After the checkup, they said my blood pressure was above normal. I thank God, they showed me what to do to remain healthy.",
      imageUrl: "/non-communicable.jpeg", // Example image path
    },
    {
      title: "Climate Change Initiative",
      description:
        "Africa HPO is committed to promoting the Paris agreement on climate change. Our engagement with communities focusses on responsible farming practices, preservation of water bodies and investment in greening. As of November 2023, our initiative led to the growing of 1,502 trees. Our target is to grow 5,000 trees by the end of 2024.",
      testimony: "",
      imageUrl: "/climate.jpg", // Example image path
    },
    {
      title: "Urban Health Promotion Campaign",
      description:
        "The urban health initiatives focus on air pollution in cities. Our campaign targeted areas with activities that result in the emission of indoor and outdoor pollutants. We are working to mitigate the preventable deaths of 8.3 million people annually from air pollution.",
      testimony: "",
      imageUrl: "/traffic.jpg", // Example image path
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
          src="/group.jpeg"
          className=" w-full h-[50vh] object-cover"
          width={2000}
          height={2000}
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
                    Success Stories
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
