// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { MdOutlineLocalHospital } from "react-icons/md";
// import { FaSyringe } from "react-icons/fa";
// import { GiFruitBowl } from "react-icons/gi";
// import { FaBaby } from "react-icons/fa";
// import { IoMdHappy } from "react-icons/io";
// import { AiFillTool } from "react-icons/ai";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const serviceContent = {
//   heading: {
//     headingSubTitle: "Our Awesome Services",
//     headingTitle: "Projects",
//     description: " ",
//   },
//   items: [
//     {
//       icon: "/prevent.jpg",
//       title: "Community Nutrition Project",
//       description:
//         "Our food and nutrition projects were community based. We taught parents how to cook nutritious foods. We also learnt what “food” means to different cultures.",
//     },
//     {
//       icon: "/vaccine.jpg",
//       title: "Disease Outbreak Response",
//       description:
//         "We played frontline roles in the fight against COVID-19, meningitis, rabbies and other diesease outbreaks.We conducted risk communication and community engagement, dissemenated livesaving infomation and facilitated case referrals to health facilities. We partnered with donors to strengthen health systems and community stuctures among other things. This was one of our groundbreaking experiences. We thought we did little but beneficiaries were overwhelmed… We worked with our communities, shared accurate information with them and they took the necessary precautions to protect themselves.",
//     },
//     {
//       icon: "/education.jpg",
//       title: "Star Readers Initiative",
//       description:
//         " We developed one of the most exciting reading programmes for basic school children in 5 regions of Ghana. Our young stars are now doing well in digesting complex sentences, making coherent arguments and developing their own storyline. Some of our beneficiaries are have won national essay writing competitions.",
//     },
//     {
//       icon: "/maternal.jpg",
//       title: "Livelihood Capacity Building",
//       description:
//         " Small scale business enterprises are at our heart. This project focused on building capacity of traders, livestock and crop farmers on increasing yield and financial literacy. We expect to expand this project as a nationawide intervention.",
//     },
//     {
//       icon: "/mental.jpg",
//       title: "Family Planning Intervention",
//       description:
//         "We helped families to determine when to have their children with the most convenient intervals. Our family planning interventions targeted the youth and new couples. Through this project, family planning accepter rate has increased mainly due to how we addressed the myths in various communities. Our beneficiaries gave heartwarming testimonies.",
//     },
//     {
//       icon: "/develop.jpg",
//       title: "Water is Life Project",
//       description:
//         " Our water and sanitation projects targeted communities which practiced open defecation and competed for drinking water with animals from shallow open sources. In all, we provided 49 mechanized boreholes and 88 improved tiolet facilities in Upper East, Oti, Volta and Bono regions. This helped reduce water-borne diseases and other communicable diseases.",
//     },
//   ],
// };
// const paragraphStyle = {
//   WebkitLineClamp: 2,
//   WebkitBoxOrient: "vertical",
//   overflow: "hidden",
//   display: "-webkit-box",
// };

// const Services = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       easing: "slide",
//       once: true,
//     });
//   });
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <section className="py-20 bg2 font-mont">
//       <div className="container px-4 mx-auto">
//         <h1 className="text-3xl text-[#092862] text-center font-bold">
//           {serviceContent.heading.headingTitle}
//         </h1>
//         <div className=" max-w-[450px] mx-auto pt-2">
//           <p className=" text-[13px]">{serviceContent.heading.description}</p>
//         </div>

//         <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {serviceContent.items.map((items, index) => {
//             index *= 100;
//             return (
//               <div
//                 className="bg-light mt-10 p-5 flex flex-col justify-center items-center  shadow-lg"
//                 data-aos="fade-up"
//                 data-aos-delay={index}
//               >
//                 <div>
//                   <Image src={items.icon} width={500} height={500} alt="" />
//                 </div>
//                 <div className="pt-3">
//                   <h1 className="text-xl text-[#092862] text-center font-medium">
//                     {items.title}
//                   </h1>
//                   <p
//                     style={isOpen ? null : paragraphStyle}
//                     className="text-sm text-[#092862] pt-2 text-left"
//                   >
//                     {items.description}
//                   </p>
//                   <p
//                     className="text-blue-400 underline cursor-pointer"
//                     onClick={() => setIsOpen(!isOpen)}
//                   >
//                     {isOpen ? "read less" : "read more"}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceContent = {
  heading: {
    headingSubTitle: "Our Awesome Services",
    headingTitle: "Projects",
    description: " ",
  },
  items: [
    {
      icon: "/prevent.jpg",
      title: "Community Nutrition Project",
      description:
        "Our food and nutrition projects were community based. We taught parents how to cook nutritious foods. We also learnt what “food” means to different cultures.",
    },
    {
      icon: "/vaccine.jpg",
      title: "Disease Outbreak Response",
      description:
        "We played frontline roles in the fight against COVID-19, meningitis, rabbies and other diesease outbreaks.We conducted risk communication and community engagement, dissemenated livesaving infomation and facilitated case referrals to health facilities. We partnered with donors to strengthen health systems and community stuctures among other things. This was one of our groundbreaking experiences. We thought we did little but beneficiaries were overwhelmed… We worked with our communities, shared accurate information with them and they took the necessary precautions to protect themselves.",
    },
    {
      icon: "/education.jpg",
      title: "Star Readers Initiative",
      description:
        " We developed one of the most exciting reading programmes for basic school children in 5 regions of Ghana. Our young stars are now doing well in digesting complex sentences, making coherent arguments and developing their own storyline. Some of our beneficiaries are have won national essay writing competitions.",
    },
    {
      icon: "/maternal.jpg",
      title: "Livelihood Capacity Building",
      description:
        " Small scale business enterprises are at our heart. This project focused on building capacity of traders, livestock and crop farmers on increasing yield and financial literacy. We expect to expand this project as a nationawide intervention.",
    },
    {
      icon: "/mental.jpg",
      title: "Family Planning Intervention",
      description:
        "We helped families to determine when to have their children with the most convenient intervals. Our family planning interventions targeted the youth and new couples. Through this project, family planning accepter rate has increased mainly due to how we addressed the myths in various communities. Our beneficiaries gave heartwarming testimonies.",
    },
    {
      icon: "/develop.jpg",
      title: "Water is Life Project",
      description:
        " Our water and sanitation projects targeted communities which practiced open defecation and competed for drinking water with animals from shallow open sources. In all, we provided 49 mechanized boreholes and 88 improved tiolet facilities in Upper East, Oti, Volta and Bono regions. This helped reduce water-borne diseases and other communicable diseases.",
    },
  ],
};

const paragraphStyle = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });

  const [isOpen, setIsOpen] = useState(serviceContent.items.map(() => false));

  const toggleDescription = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <section className="py-20 bg2 font-mont">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl text-[#092862] text-center font-bold">
          {serviceContent.heading.headingTitle}
        </h1>
        <div className=" max-w-[450px] mx-auto pt-2">
          <p className=" text-[13px]">{serviceContent.heading.description}</p>
        </div>

        <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceContent.items.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-light mt-10 p-5 flex flex-col  items-center  shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <Image src={item.icon} width={500} height={500} alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="text-xl text-[#092862] text-center font-medium">
                    {item.title}
                  </h1>
                  <p
                    style={isOpen[index] ? null : paragraphStyle}
                    className="text-sm text-[#092862] pt-2 text-left"
                  >
                    {item.description}
                  </p>
                  <p
                    className="text-blue-400 underline cursor-pointer"
                    onClick={() => toggleDescription(index)}
                  >
                    {isOpen[index] ? "read less" : "read more"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
