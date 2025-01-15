import { useState, useCallback } from "react";

export default function ApplicationForm({ job, onBack }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [hasNoWorkHistory, setHasNoWorkHistory] = useState(false);
  const [hasNoVolunteerHistory, setHasNoVolunteerHistory] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    region: "",
    district: "",
    email: "",
    telephone: "",
    educationHistory: [
      {
        level: "",
        program: "",
        yearCompleted: "",
        institution: "",
      },
    ],
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
      typingSpeed: 0,
      reportWriting: 0,
      initiativeTaking: 0,
      communication: 0,
      networking: 0,
      research: 0,
      proposalWriting: 0,
      workingIndepently: 0,
    },
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

  const educationLevels = [
    "Certificate",
    "Diploma",
    "HND",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
  ];

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
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
      // Fallback behavior if onBack fails
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

      if (formData.educationHistory.length > 3) {
        throw new Error("Maximum of 3 education entries allowed");
      }

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
          workHistory: finalWorkHistory,
          volunteerHistory: finalVolunteerHistory,
        }),
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

      <div className="bg-white font-mont shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name (e.g., Michael)
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.firstName}
              onChange={(e) =>
                handleFormChange({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Middle Name (e.g., Selassie) - Optional
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.middleName}
              onChange={(e) =>
                handleFormChange({ ...formData, middleName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Surname (e.g., Mensah)
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.surname}
              onChange={(e) =>
                handleFormChange({ ...formData, surname: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Region
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
              District (e.g., Ga North, Tantra Hills)
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.district}
              onChange={(e) =>
                handleFormChange({ ...formData, district: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email (e.g., michael@email.com)
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                handleFormChange({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telephone (e.g., 0244123456)
            </label>
            <input
              type="tel"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.telephone}
              onChange={(e) =>
                handleFormChange({ ...formData, telephone: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Education History
          </h2>
          <p className="text-sm text-gray-500">(Maximum 3 entries)</p>
        </div>

        {formData.educationHistory.map((edu, index) => (
          <div key={index} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Education Level
                </label>
                <select
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={edu.level}
                  onChange={(e) => {
                    const newEducationHistory = [...formData.educationHistory];
                    newEducationHistory[index].level = e.target.value;
                    handleFormChange({
                      ...formData,
                      educationHistory: newEducationHistory,
                    });
                  }}
                >
                  <option value="">Select level</option>
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Program (e.g., Health promotion)
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={edu.program}
                  onChange={(e) => {
                    const newEducationHistory = [...formData.educationHistory];
                    newEducationHistory[index].program = e.target.value;
                    handleFormChange({
                      ...formData,
                      educationHistory: newEducationHistory,
                    });
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Year Completed (e.g., 2014)
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={edu.yearCompleted}
                  onChange={(e) => {
                    const newEducationHistory = [...formData.educationHistory];
                    newEducationHistory[index].yearCompleted = e.target.value;
                    handleFormChange({
                      ...formData,
                      educationHistory: newEducationHistory,
                    });
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Institution (e.g., University of Cape Coast)
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={edu.institution}
                  onChange={(e) => {
                    const newEducationHistory = [...formData.educationHistory];
                    newEducationHistory[index].institution = e.target.value;
                    handleFormChange({
                      ...formData,
                      educationHistory: newEducationHistory,
                    });
                  }}
                />
              </div>
            </div>
            {index > 0 && (
              <button
                type="button"
                onClick={() => {
                  const newEducationHistory = formData.educationHistory.filter(
                    (_, i) => i !== index
                  );
                  handleFormChange({
                    ...formData,
                    educationHistory: newEducationHistory,
                  });
                }}
                className="text-red-600 hover:text-red-800"
              >
                Remove Entry
              </button>
            )}
          </div>
        ))}
        {formData.educationHistory.length < 3 && (
          <button
            type="button"
            onClick={() =>
              handleFormChange({
                ...formData,
                educationHistory: [
                  ...formData.educationHistory,
                  {
                    level: "",
                    program: "",
                    yearCompleted: "",
                    institution: "",
                  },
                ],
              })
            }
            className="mt-2 text-blue-600 hover:text-blue-800"
          >
            + Add Education History
          </button>
        )}
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
                        handleFormChange({
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
                        handleFormChange({
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
                        handleFormChange({
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
                        handleFormChange({
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
                      handleFormChange({
                        ...formData,
                        workHistory: newWorkHistory,
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
                handleFormChange({
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
                        handleFormChange({
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
                        handleFormChange({
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
                        handleFormChange({
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
                        handleFormChange({
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
                      handleFormChange({
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
                handleFormChange({
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
        <div className="grid gap-4">
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
                    handleFormChange({
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
