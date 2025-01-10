"use client";

import { useState, useEffect } from "react";
import JobList from "@/components/JobList";
import ApplicationForm from "@/components/ApplicationForm";

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center py-16">
        <h1 className="text-5xl font-extrabold">Careers at Our Company</h1>
        <p className="text-lg mt-4">
          Explore opportunities and make a difference with us.
        </p>
      </header>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedJob ? (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Open Positions
            </h2>
            <p className="text-gray-600 mb-8">
              Find the role that suits you and start your journey with us.
            </p>
            <JobList
              jobs={jobs}
              onSelect={(job) => {
                setSelectedJob(job);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        ) : (
          <ApplicationForm job={selectedJob} />
        )}
      </div>
    </div>
  );
}
