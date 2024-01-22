import React from "react";
import Hero from "@/components/Hero2";
import Stats from "@/components/Stats2";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonial";
import RecentBlog from "@/components/RecentBlog";
import WhoWeAre from "@/components/WhoWeAre";

function page() {
  return (
    <div>
      <Hero />
      <Stats />
      <WhoWeAre />
      <Services />
      <Solutions />
      <Testimonials />
      <RecentBlog />
    </div>
  );
}

export default page;
