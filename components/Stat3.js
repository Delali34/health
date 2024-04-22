"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

const StatContent = {
  stats: [
    {
      img: "/information.jpg",
      number: "100%",
      label: "Nationwide Coverage",
    },
    {
      img: "/screening.jpg",
      number: "6.9 Million",
      label: "Direct Beneficiaries",
    },
    {
      img: "/lives.jpg",
      number: "106",
      label: "Community Projects Implemented ",
    },
  ],
  getStarted: {
    heading: "Get started with Our Service",
    description:
      " An NGO dedicated to promoting public health using research-driven and evidence-based approaches promoting public health.",
    img: "/info3.svg",
    cta: {
      cta_href: "#",
      cta_label: "Learn more",
    },
  },
};

const Stats2 = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const targets = [100, 6.9, 106];
  const increments = [1, 1, 1];
  const durations = [25, 120, 40];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const intervals = [];

      targets.forEach((target, index) => {
        intervals[index] = setInterval(() => {
          setCounts((prevCounts) => {
            const newCount = Math.min(
              prevCounts[index] + increments[index],
              target
            );
            if (newCount === target) clearInterval(intervals[index]);
            return [
              ...prevCounts.slice(0, index),
              newCount,
              ...prevCounts.slice(index + 1),
            ];
          });
        }, durations[index]);
      });

      setHasAnimated(true);

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [inView]);
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section className="bg  pt-20 pb-10 font-mont">
      {/* statistic component */}
      <div className="container px-4 mx-auto">
        {/* cards */}
        <div>
          <div
            ref={ref}
            className="grid place-items-center grid-cols-1 gap-6 md:grid-cols-3"
          >
            <div data-aos="fade-down">
              <Image
                src="/information.jpg"
                width={1500}
                height={1500}
                className="lg:w-[400px] md:w-[300px] md:h-[200px] lg:h-[300px] object-cover"
                alt=""
              />
            </div>
            <h1 className="text-center text-[#092862] pt-3 lg:text-3xl text-2xl font-bold">
              {counts[0]}
              <span className="txet-3xl">%</span>
            </h1>
            <p className="text-center text-[#092862] lg:text-2xl text-xl  font-medium">
              Nationwide Coverage
            </p>
          </div>
          <div data-aos="fade-down">
            <div>
              <Image
                src="/screening.jpg"
                width={1500}
                height={1500}
                className="lg:w-[400px] md:w-[300px] md:h-[200px] lg:h-[300px] object-cover"
                alt=""
              />
            </div>
            <h1 className="text-center text-[#092862] pt-3 lg:text-3xl text-2xl font-bold">
              {counts[1]}
              <span className="txet-3xl"> Million</span>
            </h1>
            <p className="text-center text-[#092862] lg:text-2xl text-xl  font-medium">
              Direct Beneficiaries
            </p>
          </div>
          <div data-aos="fade-down">
            <div>
              <Image
                src="/lives.jpg"
                width={1500}
                height={1500}
                className="lg:w-[400px] md:w-[300px] md:h-[200px] lg:h-[300px] object-cover"
                alt=""
              />
            </div>
            <h1 className="text-center text-[#092862] pt-3 lg:text-3xl text-2xl font-bold">
              {counts[2]}
              <span className="txet-3xl"></span>
            </h1>
            <p className="text-center text-[#092862] lg:text-2xl text-xl  font-medium">
              Community Projects Implemented
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats2;
