// app/admin/careers/page.js

"use client";

import { useState, useEffect } from "react";
import { prisma } from "@/lib/prisma";
import ApplicationDetailsModal from "@/components/ApplicationDetailsModal";
import AdminLogin from "@/components/AdminLogin";

export default function AdminCareersPage() {
  // All hooks must be at the top level, before any conditional logic
  const [isEditingJob, setIsEditingJob] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [isAddingJob, setIsAddingJob] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    department: "",
    requirements: [],
    isActive: true,
  });

  // Combine the authentication check and data fetching in a single useEffect
  useEffect(() => {
    // Check authentication status
    const authStatus = sessionStorage.getItem("isAdminAuthenticated");
    setIsAuthenticated(authStatus === "true");
    setIsLoading(false);

    // Only fetch data if authenticated
    if (authStatus === "true") {
      fetchJobs();
      fetchApplications();
    }
  }, []); // Empty dependency array means this runs once on mount

  const handleLogin = () => {
    setIsAuthenticated(true);
    // Fetch data after successful login
    fetchJobs();
    fetchApplications();
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs([]);
    }
  };

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/applications");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
      setApplications([]);
    }
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newJob,
          requirements: newJob.requirements.filter((req) => req.trim() !== ""), // Filter out empty requirements
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setJobs([...jobs, data]); // Update local state with the new job
      setIsAddingJob(false);
      setNewJob({
        title: "",
        description: "",
        department: "",
        requirements: [],
        isActive: true,
      });
      await fetchJobs(); // Refresh the jobs list
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Failed to add job. Please try again.");
    }
  };
  const handleEditJob = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/jobs/${editingJob.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...editingJob,
          requirements: editingJob.requirements.filter(
            (req) => req.trim() !== ""
          ),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedJob = await response.json();
      setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
      setIsEditingJob(false);
      setEditingJob(null);
      await fetchJobs(); // Refresh the jobs list
    } catch (error) {
      console.error("Error updating job:", error);
      alert("Failed to update job. Please try again.");
    }
  };

  const handleOpenEditModal = (job) => {
    setEditingJob({
      ...job,
      requirements: Array.isArray(job.requirements) ? job.requirements : [],
    });
    setIsEditingJob(true);
  };

  const toggleJobStatus = async (jobId, currentStatus) => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !currentStatus }),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      setJobs(
        jobs.map((job) =>
          job.id === jobId ? { ...job, isActive: !currentStatus } : job
        )
      );
    } catch (error) {
      console.error("Error toggling job status:", error);
    }
  };

  const handleUpdateApplicationStatus = async (applicationId, newStatus) => {
    try {
      const response = await fetch(`/api/applications/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      setApplications(
        applications.map((app) =>
          app.id === applicationId ? { ...app, status: newStatus } : app
        )
      );

      setIsDetailsModalOpen(false);
      setSelectedApplication(null);
      fetchApplications();
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  };

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    setIsDetailsModalOpen(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminAuthenticated");
    setIsAuthenticated(false);
  };

  const groupApplicationsByJob = () => {
    const grouped = {};
    applications.forEach((app) => {
      const jobId = app.jobPosting.id;
      if (!grouped[jobId]) {
        grouped[jobId] = {
          jobTitle: app.jobPosting.title,
          applications: [],
        };
      }
      grouped[jobId].applications.push(app);
    });
    return grouped;
  };
  const groupedApplications = groupApplicationsByJob();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Careers Admin</h1>
          <button
            onClick={() => setIsAddingJob(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add New Job
          </button>
        </div>

        {isAddingJob && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
              <h2 className="text-2xl font-bold mb-4">Add New Job</h2>
              <form onSubmit={handleAddJob} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={newJob.title}
                    onChange={(e) =>
                      setNewJob({ ...newJob, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={4}
                    value={newJob.description}
                    onChange={(e) =>
                      setNewJob({ ...newJob, description: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={newJob.department}
                    onChange={(e) =>
                      setNewJob({ ...newJob, department: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Requirements
                  </label>
                  <textarea
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={4}
                    value={newJob.requirements.join("\n")}
                    onChange={(e) =>
                      setNewJob({
                        ...newJob,
                        requirements: e.target.value.split("\n"),
                      })
                    }
                    placeholder="Enter each requirement on a new line"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsAddingJob(false)}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Add Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Jobs List */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.department}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleOpenEditModal(job)}
                      className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md hover:bg-yellow-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleJobStatus(job.id, job.isActive)}
                      className={`px-4 py-2 rounded-md ${
                        job.isActive
                          ? "bg-red-100 text-red-800 hover:bg-red-200"
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }`}
                    >
                      {job.isActive ? "Disable" : "Enable"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Edit Job Modal */}
        {isEditingJob && editingJob && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
              <h2 className="text-2xl font-bold mb-4">Edit Job</h2>
              <form onSubmit={handleEditJob} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={editingJob.title}
                    onChange={(e) =>
                      setEditingJob({ ...editingJob, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={4}
                    value={editingJob.description}
                    onChange={(e) =>
                      setEditingJob({
                        ...editingJob,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={editingJob.department}
                    onChange={(e) =>
                      setEditingJob({
                        ...editingJob,
                        department: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Requirements
                  </label>
                  <textarea
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={4}
                    value={editingJob.requirements.join("\n")}
                    onChange={(e) =>
                      setEditingJob({
                        ...editingJob,
                        requirements: e.target.value.split("\n"),
                      })
                    }
                    placeholder="Enter each requirement on a new line"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditingJob(false);
                      setEditingJob(null);
                    }}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* Applications List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Applications</h2>
          {Object.entries(groupedApplications).map(
            ([jobId, { jobTitle, applications }]) => (
              <div key={jobId} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {jobTitle}
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Education
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {applications.map((application) => (
                        <tr key={application.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {`${application.firstName} ${application.surname}`}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {Array.isArray(application.educationHistory) &&
                            application.educationHistory.length > 0
                              ? application.educationHistory[
                                  application.educationHistory.length - 1
                                ].level
                              : "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                application.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : application.status === "accepted"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {application.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => handleViewDetails(application)}
                              className="text-blue-600 hover:text-blue-900 mr-4"
                            >
                              View Details
                            </button>
                            <button
                              onClick={() =>
                                handleUpdateApplicationStatus(
                                  application.id,
                                  "accepted"
                                )
                              }
                              className="text-green-600 hover:text-green-900 mr-4"
                              disabled={application.status === "accepted"}
                            >
                              Accept
                            </button>
                            <button
                              onClick={() =>
                                handleUpdateApplicationStatus(
                                  application.id,
                                  "rejected"
                                )
                              }
                              className="text-red-600 hover:text-red-900"
                              disabled={application.status === "rejected"}
                            >
                              Reject
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}
        </div>

        {/* Application Details Modal */}
        <ApplicationDetailsModal
          application={selectedApplication}
          isOpen={isDetailsModalOpen}
          onClose={() => {
            setIsDetailsModalOpen(false);
            setSelectedApplication(null);
          }}
          onUpdateStatus={handleUpdateApplicationStatus}
        />
      </div>
    </div>
  );
}
