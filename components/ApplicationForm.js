import { useState } from "react";

export default function ApplicationForm({ job, onBack }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasNoWorkHistory, setHasNoWorkHistory] = useState(false);
  const [hasNoVolunteerHistory, setHasNoVolunteerHistory] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    address: "",
    region: "",
    district: "",
    email: "",
    telephone: "",
    certificate: "",
    yearCompleted: "",
    institution: "",
    classGraduated: "",
    workHistory: [
      { position: "", yearStarted: "", yearEnded: "", achievements: "" },
    ],
    volunteerHistory: [
      { position: "", yearStarted: "", yearEnded: "", achievement: "" },
    ],
    competencies: {
      microsoftExcel: 0,
      microsoftWord: 0,
      microsoftPowerPoint: 0,
      research: 0,
      communication: 0,
      typingSpeed: 0,
      reportWriting: 0,
      proposalWriting: 0,
      monitoring: 0,
      leadership: 0,
      teamPlaying: 0,
      timeManagement: 0,
      initiativeTaking: 0,
      budgeting: 0,
      socialization: 0,
      networking: 0,
    },
    selectedRoles: [],
    education: "bachelor",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Show loading state
      setIsSubmitting(true);

      // Validate the year is a number
      const yearCompletedNumber = parseInt(formData.yearCompleted);
      if (isNaN(yearCompletedNumber)) {
        throw new Error("Year completed must be a valid number");
      }

      // Validate required arrays are not empty
      if (formData.selectedRoles.length === 0) {
        throw new Error("Please select at least one role");
      }
      // Prepare work and volunteer history based on checkbox states
      const finalWorkHistory = hasNoWorkHistory ? [] : formData.workHistory;
      const finalVolunteerHistory = hasNoVolunteerHistory
        ? []
        : formData.volunteerHistory;

      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          jobPostingId: job.id,
          yearCompleted: yearCompletedNumber, // Send as number
          workHistory: formData.workHistory || [], // Ensure it's an array
          volunteerHistory: formData.volunteerHistory || [], // Ensure it's an array
          competencies: formData.competencies || {}, // Ensure it's an object
          selectedRoles: formData.selectedRoles || [], // Ensure it's an array
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      // Show success message
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
      <button
        type="button"
        onClick={onBack}
        className="mb-4 text-blue-600 hover:text-blue-800"
      >
        ← Back to Jobs
      </button>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.middleName}
              onChange={(e) =>
                setFormData({ ...formData, middleName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Surname
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.surname}
              onChange={(e) =>
                setFormData({ ...formData, surname: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Region
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.region}
              onChange={(e) =>
                setFormData({ ...formData, region: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              District
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.district}
              onChange={(e) =>
                setFormData({ ...formData, district: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telephone
            </label>
            <input
              type="tel"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.telephone}
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Certificate
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.certificate}
              onChange={(e) =>
                setFormData({ ...formData, certificate: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Year Completed
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.yearCompleted}
              onChange={(e) =>
                setFormData({ ...formData, yearCompleted: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Institution
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.institution}
              onChange={(e) =>
                setFormData({ ...formData, institution: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Class Graduated
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.classGraduated}
              onChange={(e) =>
                setFormData({ ...formData, classGraduated: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Education Level
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.education}
              onChange={(e) =>
                setFormData({ ...formData, education: e.target.value })
              }
            >
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD</option>
              <option value="diploma">Diploma</option>
              <option value="certificate">Certificate</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Work History</h2>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              checked={hasNoWorkHistory}
              onChange={(e) => setHasNoWorkHistory(e.target.checked)}
            />
            <span className="ml-2">I have no work history</span>
          </label>
        </div>
        {!hasNoWorkHistory && (
          <>
            {formData.workHistory.map((work, index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Position
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={work.position}
                      onChange={(e) => {
                        const newWorkHistory = [...formData.workHistory];
                        newWorkHistory[index].position = e.target.value;
                        setFormData({
                          ...formData,
                          workHistory: newWorkHistory,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Year Started
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={work.yearStarted}
                      onChange={(e) => {
                        const newWorkHistory = [...formData.workHistory];
                        newWorkHistory[index].yearStarted = e.target.value;
                        setFormData({
                          ...formData,
                          workHistory: newWorkHistory,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Year Ended
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={work.yearEnded}
                      onChange={(e) => {
                        const newWorkHistory = [...formData.workHistory];
                        newWorkHistory[index].yearEnded = e.target.value;
                        setFormData({
                          ...formData,
                          workHistory: newWorkHistory,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Achievements
                    </label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={work.achievements}
                      onChange={(e) => {
                        const newWorkHistory = [...formData.workHistory];
                        newWorkHistory[index].achievements = e.target.value;
                        setFormData({
                          ...formData,
                          workHistory: newWorkHistory,
                        });
                      }}
                    />
                  </div>
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      const newWorkHistory = formData.workHistory.filter(
                        (_, i) => i !== index
                      );
                      setFormData({ ...formData, workHistory: newWorkHistory });
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove Entry
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  workHistory: [
                    ...formData.workHistory,
                    {
                      position: "",
                      yearStarted: "",
                      yearEnded: "",
                      achievements: "",
                    },
                  ],
                })
              }
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              + Add Work History
            </button>
          </>
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Volunteer History</h2>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              checked={hasNoVolunteerHistory}
              onChange={(e) => setHasNoVolunteerHistory(e.target.checked)}
            />
            <span className="ml-2">I have no volunteer history</span>
          </label>
        </div>
        {!hasNoVolunteerHistory && (
          <>
            {formData.volunteerHistory.map((volunteer, index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Position
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={volunteer.position}
                      onChange={(e) => {
                        const newVolunteerHistory = [
                          ...formData.volunteerHistory,
                        ];
                        newVolunteerHistory[index].position = e.target.value;
                        setFormData({
                          ...formData,
                          volunteerHistory: newVolunteerHistory,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Year Started
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={volunteer.yearStarted}
                      onChange={(e) => {
                        const newVolunteerHistory = [
                          ...formData.volunteerHistory,
                        ];
                        newVolunteerHistory[index].yearStarted = e.target.value;
                        setFormData({
                          ...formData,
                          volunteerHistory: newVolunteerHistory,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Year Ended
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={volunteer.yearEnded}
                      onChange={(e) => {
                        const newVolunteerHistory = [
                          ...formData.volunteerHistory,
                        ];
                        newVolunteerHistory[index].yearEnded = e.target.value;
                        setFormData({
                          ...formData,
                          volunteerHistory: newVolunteerHistory,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Achievement
                    </label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={volunteer.achievement}
                      onChange={(e) => {
                        const newVolunteerHistory = [
                          ...formData.volunteerHistory,
                        ];
                        newVolunteerHistory[index].achievement = e.target.value;
                        setFormData({
                          ...formData,
                          volunteerHistory: newVolunteerHistory,
                        });
                      }}
                    />
                  </div>
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      const newVolunteerHistory =
                        formData.volunteerHistory.filter((_, i) => i !== index);
                      setFormData({
                        ...formData,
                        volunteerHistory: newVolunteerHistory,
                      });
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove Entry
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  volunteerHistory: [
                    ...formData.volunteerHistory,
                    {
                      position: "",
                      yearStarted: "",
                      yearEnded: "",
                      achievement: "",
                    },
                  ],
                })
              }
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              + Add Volunteer History
            </button>
          </>
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(formData.competencies).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="10"
                  className="mt-1 block w-full"
                  value={value}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      competencies: {
                        ...formData.competencies,
                        [key]: parseInt(e.target.value),
                      },
                    })
                  }
                />
                <span className="text-sm text-gray-500 w-12">{value}/10</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Role Selection</h2>
        <div className="space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                checked={formData.selectedRoles.includes("M&E")}
                onChange={(e) => {
                  const newRoles = e.target.checked
                    ? [...formData.selectedRoles, "M&E"]
                    : formData.selectedRoles.filter((role) => role !== "M&E");
                  setFormData({ ...formData, selectedRoles: newRoles });
                }}
              />
              <span className="ml-2">M&E</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                checked={formData.selectedRoles.includes("Project Manager")}
                onChange={(e) => {
                  const newRoles = e.target.checked
                    ? [...formData.selectedRoles, "Project Manager"]
                    : formData.selectedRoles.filter(
                        (role) => role !== "Project Manager"
                      );
                  setFormData({ ...formData, selectedRoles: newRoles });
                }}
              />
              <span className="ml-2">Project Manager</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                checked={formData.selectedRoles.includes("Program Officer")}
                onChange={(e) => {
                  const newRoles = e.target.checked
                    ? [...formData.selectedRoles, "Program Officer"]
                    : formData.selectedRoles.filter(
                        (role) => role !== "Program Officer"
                      );
                  setFormData({ ...formData, selectedRoles: newRoles });
                }}
              />
              <span className="ml-2">Program Officer</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-600 text-white px-6 py-3 rounded-md ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
