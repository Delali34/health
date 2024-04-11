import React from "react";
import Image from "next/image";
import Solutions2 from "./Team";

const AboutUs = {
  heading: {
    image: "/image1.jpg",
    description: `Africa Health Promotion Organization is an NGO dedicated to empowering individuals and communities to improve their health. At Africa HPO, we believe everyone at all ages has the potential to achieve their life aspirations. We’re therefore poised to help address barriers that limit people in the pursuit of their life purposes. We are here to reach out to society through effective people engagement, health literacy capacity building, and community development. Every encounter with us leaves our beneficiaries with lovely memories for life.`,
  },
  heading2: {
    image: "/image4.jpg",
    description: `Africa Health Promotion Organization is an NGO dedicated to promoting public health using research-driven and evidence-based approaches. We are a centre of excellence for capacity building, community engagement and advocacy within the One Health concept…

    We are strategically positioned within Africa’s most pressing priorities in the areas of public health and health promotion. Our operations are driven by scientific research and evidence…`,
  },
};

const About = () => {
  return (
    <div className=" font-mont">
      <div className="relative  ">
        <Image
          src="/image3.jpg"
          className=" w-full h-[50vh]   object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <div className="bg-black/60 inset-0 top-0 right-0 left-0  h-[50vh] bottom-0 absolute"></div>

        <div className="absolute top-[50%] right-0 left-0 bottom-0 flex justify-center">
          <h1 className="text-white md:text-7xl text-4xl font-bold">
            About Us
          </h1>
        </div>
      </div>
      <section className="max-w-[1280px] mx-auto lg:px-10 px-5 py-10">
        <h1 className="text-blue-500 font-bold text-4xl">Who We Are</h1>
        <div>
          <section className="flex flex-col lg:flex-row items-center w-full gap-10 justify-between">
            <div className="flex-1">
              <p className="md:text-[16px] text-[14px] pt-4">
                {AboutUs.heading.description}
              </p>
            </div>
            <div className="flex-1 w-full">
              <Image
                className="object-cover w-full md:h-[400px] h-[300px] rounded-3xl"
                src={AboutUs.heading.image}
                width={500}
                height={500}
                alt=""
              />
            </div>
          </section>
        </div>
      </section>

      <Solutions2 />
    </div>
  );
};

export default About;
