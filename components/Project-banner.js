import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProjectBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 text-white mb-12 rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner Content */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image Section */}
          <div className="relative h-64 md:h-full min-h-[250px] rounded-lg overflow-hidden">
            <img
              src="/school.jpg"
              alt="Mental Health Education Programme"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4">
            <h4 className="inline-flex items-center text-xs space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2 transition-colors duration-200 w-fit">
              New project launched
            </h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Learning by doing: A peer-led mental health education programme in
              Ghanaian senior high schools
            </h2>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors duration-200 w-fit"
            >
              <span>Find out more</span>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Description */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="md:text-lg text-sm leading-relaxed">
                    Learning by Doing is a peer-led program that promotes
                    antibullying education and mental health awareness in 12
                    senior high schools across six regions of Ghana: Northern,
                    Bono East, Ashanti, Accra, Volta, and Oti. Targeting
                    students aged 13–21, the program trains students as peer
                    advocates and educators for bullying prevention and mental
                    health promotion in extracurricular activities such as drama
                    and debate clubs, sports, music, and religious groups,
                    ensuring widespread engagement. The program also supports
                    developing and adopting school-specific policies on bullying
                    prevention and mental health promotion in collaboration with
                    school authorities. It also aims to establish leadership and
                    membership roles in the formal school system for future
                    student cohorts and staff to sustain the initiative. The
                    Learning by Doing program's goal is to reinforce the right
                    of every Ghanaian student to learn in a safe, supportive,
                    and bullying-free environment.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectBanner;
