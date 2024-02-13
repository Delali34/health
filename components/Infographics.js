"use client";
import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const InfoGraphicChart = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });

  // Assuming these two categories represent the total information distribution
  const healthScreenings = 39000;
  const livesImpacted = 169000;

  // Calculate total for 100% information, assuming these two figures are part of it
  const totalImpact = healthScreenings + livesImpacted; // This calculation may need adjustment based on what '100% information' entails

  const data = [
    ["Category", "Value"],
    ["Health Screenings Done", healthScreenings],
    ["Lives Impacted Worldwide", livesImpacted],
    // Optionally, include an 'Other' category if there are additional components to the 100% information
    // ['Other', totalImpact - (healthScreenings + livesImpacted)], // Adjust or remove based on actual distribution
  ];

  const options = {
    title: "100% Information Distribution",
    titleTextStyle: { color: "white", fontSize: 16 },
    is3D: true,
    pieHole: 0.4, // Adjust for donut chart appearance, remove this line for a full pie chart
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
    colors: ["#3366cc", "#109618", "#ff9900"], // Customize color scheme
    backgroundColor: "transparent",
    legend: { textStyle: { color: "white", fontSize: 11 } },
  };

  return (
    <div>
      <div className="relative  ">
        <Image
          src="/land.jpg"
          className=" w-full h-[50vh] "
          width={1000}
          height={1000}
          alt=""
        />
        <div className="bg-black/50 inset-0 top-0 right-0 left-0  h-[50vh] bottom-0 absolute"></div>

        <div
          className="max-w-[1320px] absolute top-0 bottom-0 left-0 right-0 mx-auto font-mont pt-5"
          data-aos="fade-up"
        >
          {" "}
          <Chart
            chartType="PieChart"
            width="100%"
            height="500px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoGraphicChart;
