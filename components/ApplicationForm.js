import { useState, useCallback } from "react";

export default function ApplicationForm({ job, onBack }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [cvError, setCvError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    region: "",
    district: "",
    email: "",
    telephone: "",
  });

  const ghanaRegions = [
    "Ahafo",
    "Ashanti",
    "Bono",
    "Bono East",
    "Central",
    "Eastern",
    "Greater Accra",
    "North East",
    "Northern",
    "Oti",
    "Savannah",
    "Upper East",
    "Upper West",
    "Volta",
    "Western",
    "Western North",
  ];

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
    setHasUnsavedChanges(true);
  };

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    setCvError("");

    if (!file) return;

    // Check file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      setCvError("Please upload a PDF or Word document");
      return;
    }

    // Check file size (3MB = 3 * 1024 * 1024 bytes)
    if (file.size > 3 * 1024 * 1024) {
      setCvError("File size must be less than 3MB");
      return;
    }

    setCvFile(file);
    setHasUnsavedChanges(true);
  };

  // Handle back navigation
  const handleBack = useCallback(() => {
    try {
      if (hasUnsavedChanges) {
        setShowConfirmDialog(true);
      } else {
        onBack();
      }
    } catch (error) {
      console.error("Navigation error:", error);
      window.history.back();
    }
  }, [hasUnsavedChanges, onBack]);

  // Confirmation dialog component
  const ConfirmationDialog = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
        <h3 className="text-lg font-semibold mb-4">Unsaved Changes</h3>
        <p className="mb-6">
          You have unsaved changes. Are you sure you want to leave?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setShowConfirmDialog(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowConfirmDialog(false);
              onBack();
            }}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Leave
          </button>
        </div>
      </div>
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      // Create FormData for multipart/form-data submission
      const formDataToSubmit = new FormData();

      // Append CV file if exists
      if (cvFile) {
        formDataToSubmit.append("cvFile", cvFile);
      }

      // Append other data as JSON
      formDataToSubmit.append(
        "data",
        JSON.stringify({
          ...formData,
          jobPostingId: job.id,
        })
      );

      const response = await fetch("/api/applications", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setHasUnsavedChanges(false);
      alert("Application submitted successfully!");
      onBack();
    } catch (error) {
      console.error("Submission error:", error);
      alert(error.message || "Error submitting application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {showConfirmDialog && <ConfirmationDialog />}

      <button
        type="button"
        onClick={handleBack}
        className="mb-4 text-blue-600 hover:text-blue-800"
      >
        ← Back to Jobs
      </button>

      {/* Personal Details Section */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Michael"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.firstName}
              onChange={(e) =>
                handleFormChange({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              placeholder="e.g., Selassie (Optional)"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.middleName}
              onChange={(e) =>
                handleFormChange({ ...formData, middleName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Surname <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Mensah"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.surname}
              onChange={(e) =>
                handleFormChange({ ...formData, surname: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Region <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.region}
              onChange={(e) =>
                handleFormChange({ ...formData, region: e.target.value })
              }
            >
              <option value="">Select a region</option>
              {ghanaRegions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              District <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Ga North, Tantra Hills"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.district}
              onChange={(e) =>
                handleFormChange({ ...formData, district: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="e.g., michael@email.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                handleFormChange({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telephone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="e.g., 0244123456"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.telephone}
              onChange={(e) =>
                handleFormChange({ ...formData, telephone: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* CV Upload Section */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">CV Upload</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload your CV (PDF or Word, max 3MB)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleCVUpload}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                cursor-pointer"
            />
            {cvError && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <span className="mr-1">⚠️</span> {cvError}
              </p>
            )}
            {cvFile && !cvError && (
              <p className="mt-2 text-sm text-green-600 flex items-center">
                <span className="mr-1">✓</span> Selected file: {cvFile.name}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-600 text-white px-6 py-3 rounded-md font-medium ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
