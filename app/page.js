"use client";
import React from "react";
import Herosection from "@/components/Herosection";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import RecentBlog from "@/components/RecentBlog";
import WhoWeAre from "@/components/WhoWeAre";

function page() {
  return (
    <div>
      <Herosection />
      <Statistics />
      <WhoWeAre />
      <Services />
      <Testimonials />
      <RecentBlog />
    </div>
  );
}

export default page;
