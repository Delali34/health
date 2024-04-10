import React from "react";
import Hero from "@/components/Hero2";
import Stats from "@/components/Stats2";
import Services from "@/components/Services";
import Infographics from "@/components/Infographics";
import Solutions from "@/components/Solutions2";
import Testimonials from "@/components/Test";
import RecentBlog from "@/components/RecentBlog";
import WhoWeAre from "@/components/WhoWeAre";
import Stats2 from "@/components/Stat3";
import Accordion from "@/components/Accordion";
import Report from "@/components/Report";

function page() {
  return (
    <div>
      <Hero />
      <div className="hidden md:block">
        <Stats />
      </div>
      <div className="md:hidden block">
        <Stats2 />
      </div>

      {/* <Infographics /> */}
      <WhoWeAre />
      <Services />
      <Solutions />
      <Testimonials />
      <RecentBlog />
      <Report />
      <Accordion />
    </div>
  );
}

export default page;
