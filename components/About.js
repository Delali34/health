import React from "react";
import Image from "next/image";
import Solutions2 from "./Solutions2";

const AboutUs = {
  heading: {
    image: "/image1.jpg",
    description: `Africa Health Promotion Organization is an NGO dedicated to promoting public health using research-driven and evidence-based approaches. We are a centre of excellence for capacity building, community engagement and advocacy within the One Health concept…

    We are strategically positioned within Africa’s most pressing priorities in the areas of public health and health promotion. Our operations are driven by scientific research and evidence…`,
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
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-blue-500 font-bold text-4xl">Who We Are</h1>
        <div>
          <section className="flex flex-col lg:flex-row items-center w-full gap-10 justify-between">
            <div className="flex-1">
              <p className="md:text-[20px] text-[14px] pt-4">
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
      <div className="bg-gray-200">
        <section className="flex container px-4 mx-auto flex-col py-20 lg:flex-row items-center w-full gap-10 justify-between">
          <div className="flex-1 w-full">
            <Image
              className="object-cover w-full md:h-[400px] h-[300px] rounded-3xl"
              src={AboutUs.heading2.image}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="flex-1">
            <p className="md:text-[20px] text-[14px] pt-4">
              {AboutUs.heading2.description}
            </p>
          </div>
        </section>
      </div>
      <Solutions2 />
    </div>
  );
};

export default About;
