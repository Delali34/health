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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>

        {!selectedJob ? (
          <JobList jobs={jobs} onSelect={setSelectedJob} />
        ) : (
          <ApplicationForm
            job={selectedJob}
            onBack={() => setSelectedJob(null)}
          />
        )}
      </div>
    </div>
  );
}
