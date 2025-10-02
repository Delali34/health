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

  const handleDownloadCV = () => {
    if (application.id && application.cvFile) {
      // Use our proxy API to handle the download
      window.open(`/api/downloads/${application.id}`, "_blank");
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Application Details
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-medium text-gray-900">
                    {application.firstName}{" "}
                    {application.middleName && `${application.middleName} `}
                    {application.surname}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">
                    {application.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">
                    {application.telephone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium text-gray-900">
                    {application.district}, {application.region}
                  </p>
                </div>
              </div>
            </div>

            {/* Applied Position */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Applied Position
              </h3>
              <div>
                <p className="text-sm text-gray-600">Job Title</p>
                <p className="font-medium text-gray-900">
                  {application.jobPosting?.title ||
                    "Position information unavailable"}
                </p>
              </div>
            </div>

            {/* CV Document */}
            {application.cvFile && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  CV Document
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {application.cvFileName || "CV Document"}
                      </p>
                      <p className="text-sm text-gray-500">Click to download</p>
                    </div>
                  </div>
                  <button
                    onClick={handleDownloadCV}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
            )}

            {/* Application Metadata */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Application Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Submitted On</p>
                  <p className="font-medium text-gray-900">
                    {new Date(application.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current Status</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      statusColors[application.status]
                    }`}
                  >
                    {application.status.charAt(0).toUpperCase() +
                      application.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t pt-4 mt-6">
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => handleStatusUpdate("rejected")}
                  disabled={application.status === "rejected"}
                  className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  {application.status === "rejected" ? "Rejected" : "Reject"}
                </button>
                <button
                  onClick={() => handleStatusUpdate("accepted")}
                  disabled={application.status === "accepted"}
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  {application.status === "accepted" ? "Accepted" : "Accept"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ApplicationDetailsModal;
