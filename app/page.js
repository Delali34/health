import React from "react";
import Hero from "@/components/Hero2";
import Stats from "@/components/Stats2";
import Services from "@/components/Services";
import Infographics from "@/components/Infographics";
import Solutions from "@/components/Solutions2";
import Testimonials from "@/components/Test";
import RecentBlog from "@/components/RecentBlog";
import WhoWeAre from "@/components/WhoWeAre";

function page() {
  return (
    <div>
      <Hero />
      <Stats />
      <Infographics />
      <WhoWeAre />
      <Services />
      <Solutions />
      <Testimonials />
      <RecentBlog />
    </div>
  );
}

export default page;
