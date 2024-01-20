import React from "react";
import Hero from "@/components/Hero2";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonial";
import RecentBlog from "@/components/RecentBlog";

function page() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <Solutions />
      <Testimonials />
      <RecentBlog />
    </div>
  );
}

export default page;
