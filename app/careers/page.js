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
      <div className="animate-[fadeIn_0.3s_ease-in-out] font-mont">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
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

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm mt-4">
              {/* <div className="flex items-center px-3 py-1 bg-white/10 rounded-full">
                <span>{job.department}</span>
              </div> */}
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    About the Role
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {job.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Requirements
                  </h2>
                  <ul className="space-y-4 text-gray-700">
                    {job.requirements.map((requirement, index) => (
                      <div>
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full " />
                        <span>{requirement}</span>
                      </div>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="md:col-span-1">
                <div className="sticky top-6 bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <button
                    onClick={() => {
                      setShowApplication(true);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:opacity-90 transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
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
    <div className="min-h-screen bg-gray-50 font-mont">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Apply for a Job
          </h1>

          {/* Warning Alert */}
          <div className="mt-8 max-w-2xl mx-auto bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.485 2.495c.873-1.512 3.157-1.512 4.03 0l6.28 10.875c.873 1.512-.218 3.397-2.015 3.397H4.22c-1.797 0-2.888-1.885-2.015-3.397l6.28-10.875zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-yellow-800 font-medium">Important Notice:</p>
                <p className="mt-1 text-yellow-700">
                  Applications to Africa Health Promotion Organization is FREE
                  of charge. Report anyone who makes demands including financial
                  payment from you through the email provided.
                  (NGO@africahealthpromotion.org)
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!selectedJob ? (
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Available Positions
            </h2>

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
