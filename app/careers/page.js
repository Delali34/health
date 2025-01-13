"use client";
import { useState, useEffect } from "react";
import JobList from "@/components/JobList";
import ApplicationForm from "@/components/ApplicationForm";

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplication, setShowApplication] = useState(false);

  const handleBack = () => {
    if (showApplication) {
      setShowApplication(false);
    } else {
      setSelectedJob(null);
    }
  };

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const JobDetails = ({ job }) => {
    return (
      <div className="animate-[fadeIn_0.3s_ease-in-out]">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Positions
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm mt-4">
              <div className="flex items-center">
                <span>{job.department}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Description
                  </h2>
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {job.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Requirements
                  </h2>
                  <ul className="space-y-3 text-gray-700">
                    {job.requirements.map((requirement, index) => (
                      <p key={index} className="ml-4">
                        {requirement}
                      </p>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="md:col-span-1">
                <div className="sticky top-6 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Ready to Apply?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Take the next step in your career journey. Submit your
                    application today.
                  </p>
                  <button
                    onClick={() => setShowApplication(true)}
                    className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center py-16">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-extrabold">
          Apply for a job
        </h1>
        <p className="md:text-lg text-sm mt-4">
          Explore opportunities and make a difference with us.
        </p>
      </header>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedJob ? (
          <div>
            <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-6">
              Available Positions
            </h2>
            <p className="text-gray-600 mb-8">We are recruiting</p>
            <JobList
              jobs={jobs}
              onSelect={(job) => {
                setSelectedJob(job);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        ) : showApplication ? (
          <ApplicationForm job={selectedJob} onBack={handleBack} />
        ) : (
          <JobDetails job={selectedJob} />
        )}
      </div>
    </div>
  );
}
