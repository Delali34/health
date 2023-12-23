"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonialContent = {
  heading: {
    headingSubTitle: "Customers Says...",
    headingTitle: "Hear What Our Customers Say",
    description:
      "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
    cta: {
      cta_href: "#",
      cta_label: "Get in touch",
    },
  },
  testimonials: [
    {
      img: "/image1.jpg",
      name: "Mr. Kisses",
      titleRole: "Customer - Cairo, UN",
      testimony:
        "Installing Family Home Security was the best decision we made for our family's safety. Their quick response during emergencies gave us peace of mind.",
    },
    {
      img: "/image2.jpg",
      name: "Mr. Jeffery",
      titleRole: "Customer - Nairobi, UN",
      testimony:
        "With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic",
    },
    {
      img: "/image1.jpg",
      name: "Mr. Kwame",
      titleRole: "Customer - Paris, UN",
      testimony:
        "After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.",
    },
  ],
};

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center ">
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            <span
              className="inline-block z-50 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10 "
              data-aos="fade-up"
            >
              {testimonialContent.heading.headingSubTitle}
            </span>
            <h2
              className="text-heading text-2xl lg:text-4xl font-bold mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {testimonialContent.heading.headingTitle}
            </h2>
            <p
              className="text-body leading-relaxed mb-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {testimonialContent.heading.description}
            </p>
            <p>
              {" "}
              <Link
                href={testimonialContent.heading.cta.cta_href}
                className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block hover:-top-1 relative top-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {testimonialContent.heading.cta.cta_label}
              </Link>
            </p>
          </div>
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 mb-6 md:mb-0">
                {testimonialContent.testimonials.map((testimonial, index) => {
                  if (index == 2) return null;
                  index *= 100;
                  return (
                    <div
                      className={`bg-white p-7 rounded-lg w-full ${
                        index == 1 ? "" : "mb-6"
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={index}
                    >
                      <div className="flex space-x-5 items-center mb-4">
                        <div className="relative">
                          <Image
                            src={testimonial.img}
                            width={579}
                            height={720}
                            className="h-14 w-14 rounded-full"
                            alt="africahealthpromotion"
                          />
                          <span className="absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Image src="/quote.svg" width={14} height={9} />
                          </span>
                        </div>
                        <div className="leading-3">
                          {testimonial.name && (
                            <strong className="block text-heading text-lg">
                              {testimonial.name}
                            </strong>
                          )}
                          {testimonial.titleRole && (
                            <span className="text-sm">
                              {testimonial.titleRole}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <blockquote>"{testimonial.testimony}"</blockquote>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className="md:w-6/12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <div className="w-16 h-16 hidden md:block bg-greenLight rounded-full mb-6"></div>
                  <div className="bg-white p-7 rounded-lg w-full mb-6">
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image
                          src={testimonialContent.testimonials[2].img}
                          width={579}
                          height={720}
                          className="object-cover h-14 w-14 rounded-full"
                          alt="africahealthpromotion"
                        />
                        <span className="absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Image src="/quote.svg" width={14} height={9} />
                        </span>
                      </div>
                      <div className="leading-3">
                        {testimonialContent.testimonials[2].name && (
                          <strong className="block text-heading text-lg">
                            {testimonialContent.testimonials[2].name}
                          </strong>
                        )}
                        {testimonialContent.testimonials[2].titleRole && (
                          <span className="text-sm">
                            {testimonialContent.testimonials[2].titleRole}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <blockquote>
                        "{testimonialContent.testimonials[2].testimony}"
                      </blockquote>
                    </div>
                  </div>
                  <div className="bg-[#F27763] hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
