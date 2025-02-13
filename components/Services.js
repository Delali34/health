import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const serviceContent = {
  heading: {
    headingTitle: "Projects",
  },
  items: [
    {
      icon: "/nutrition.jpg",
      title: "Community Nutrition Project",
      description:
        "Our food and nutrition projects were community based. We taught parents how to cook nutritious foods. We also learnt what food means to different cultures.",
    },
    {
      icon: "/vaccine.jpg",
      title: "Disease Outbreak Response",
      description:
        "We played frontline roles in the fight against COVID-19, meningitis, rabbies and other diesease outbreaks. We conducted risk communication and community engagement, dissemenated livesaving infomation and facilitated case referrals to health facilities.",
    },
    {
      icon: "/education.jpg",
      title: "Star Readers Initiative",
      description:
        "We developed one of the most exciting reading programmes for basic school children in 5 regions of Ghana. Our young stars are now doing well in digesting complex sentences, making coherent arguments and developing their own storylines.",
    },
    {
      icon: "/selling.jpg",
      title: "Livelihood Capacity Building",
      description:
        "Small scale business enterprises are at the core of our mandate. This project focused on building capacity of traders, livestock and crop farmers on financial literacy and how to increase yield.",
    },
    {
      icon: "/plan.jpg",
      title: "Family Planning Intervention",
      description:
        "We helped families to determine when to have their children with the most convenient intervals. Our family planning interventions targeted the youth and new couples. Through this project, family planning acceptor rate has increased.",
    },
    {
      icon: "/water.jpg",
      title: "Water is Life Project",
      description:
        "Our water and sanitation projects targeted communities which practiced open defecation and competed for drinking water with animals from shallow open sources. In all, we provided 49 mechanized boreholes and 88 improved facilities.",
    },
  ],
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
      },
    },
  };

  // Create dot pattern component
  const DotPattern = ({ className }) => (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="opacity-20"
      >
        <circle cx="50" cy="50" r="2" className="fill-indigo-500" />
        <circle cx="65" cy="50" r="2" className="fill-indigo-500" />
        <circle cx="80" cy="50" r="2" className="fill-indigo-500" />
        <circle cx="95" cy="50" r="2" className="fill-indigo-500" />
      </svg>
    </div>
  );

  return (
    <section className="relative font-mont bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Connecting dot patterns */}
      <div className="hidden lg:block">
        <DotPattern className="top-1/4 left-10" />
        <DotPattern className="top-1/3 right-10" />
        <DotPattern className="bottom-1/4 left-1/4" />
        <DotPattern className="bottom-1/3 right-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {serviceContent.heading.headingTitle}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceContent.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 blur transform scale-105 transition-all duration-300" />
              <div className="relative h-full bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-indigo-100 dark:border-indigo-900 transition-all duration-300 group-hover:translate-y-[-5px]">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <motion.button
                    className="group inline-flex items-center gap-2 text-indigo-600 hover:text-purple-600 text-sm md:text-base font-medium transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
