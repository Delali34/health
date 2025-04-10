import React from "react";

const ApplicationDetailsModal = ({
  application,
  isOpen,
  onClose,
  onUpdateStatus,
}) => {
  if (!application) return null;

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    accepted: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  const handleStatusUpdate = async (newStatus) => {
    await onUpdateStatus(application.id, newStatus);
  };

  // Replace the view CV function with a download function
  // Update the handleDownloadCV function in your ApplicationDetailsModal component
  const handleDownloadCV = () => {
    if (application.id && application.cvFile) {
      // Use our proxy API to handle the download
      window.open(`/api/downloads/${application.id}`, "_blank");
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">Application Details</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                &times;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Personal Information
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Name:</span>{" "}
                      {application.firstName} {application.middleName}{" "}
                      {application.surname}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      {application.email}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      {application.telephone}
                    </p>
                    <p>
                      <span className="font-medium">Location:</span>{" "}
                      {application.district}, {application.region}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Education History
                  </h3>
                  <div className="space-y-4">
                    {application.educationHistory.map((edu, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-gray-200 pl-4"
                      >
                        <p className="font-medium">{edu.program}</p>
                        <p className="text-sm text-gray-600">
                          {edu.level} - {edu.institution}
                        </p>
                        <p className="text-sm">
                          Completed: {edu.yearCompleted}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Work History</h3>
                  <div className="space-y-4">
                    {application.workHistory.length > 0 ? (
                      application.workHistory.map((work, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-gray-200 pl-4"
                        >
                          <p className="font-medium">{work.position}</p>
                          <p className="text-sm text-gray-600">
                            {work.yearStarted} - {work.yearEnded}
                          </p>
                          <p className="text-sm">{work.achievements}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 italic">No work history</p>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Volunteer History
                  </h3>
                  <div className="space-y-4">
                    {application.volunteerHistory.length > 0 ? (
                      application.volunteerHistory.map((volunteer, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-gray-200 pl-4"
                        >
                          <p className="font-medium">{volunteer.position}</p>
                          <p className="text-sm text-gray-600">
                            {volunteer.yearStarted} - {volunteer.yearEnded}
                          </p>
                          <p className="text-sm">{volunteer.achievement}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 italic">
                        No volunteer history
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Competencies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(application.competencies).map(
                  ([key, value]) => (
                    <div key={key} className="bg-gray-50 p-2 rounded">
                      <p className="text-sm font-medium">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </p>
                      <p className="text-lg">{value}/10</p>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Selected Role</h3>
              <p className="text-lg">
                {application.jobPosting?.title ||
                  "Role information unavailable"}
              </p>
            </div>
            {/* Add CV section */}
            {application.cvFile && (
              <div>
                <h3 className="text-lg font-semibold mb-2">CV Document</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {application.cvFileName || "CV Document"}
                  </span>
                  <button
                    onClick={handleDownloadCV}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            )}

            <div className="border-t pt-4 mt-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium mr-2">Current Status:</span>
                  <span
                    className={`px-2 py-1 rounded ${
                      statusColors[application.status]
                    }`}
                  >
                    {application.status}
                  </span>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleStatusUpdate("accepted")}
                    disabled={application.status === "accepted"}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-green-400"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleStatusUpdate("rejected")}
                    disabled={application.status === "rejected"}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-red-400"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ApplicationDetailsModal;
