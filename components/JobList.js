export default function JobList({ jobs = [], onSelect }) {
  // Ensure jobs is an array and then filter
  const activeJobs = Array.isArray(jobs)
    ? jobs.filter((job) => job.isActive)
    : [];

  if (activeJobs.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          No Job Openings Available
        </h2>
        <p className="mt-2 text-gray-600">
          Please check back later for new opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {activeJobs.map((job) => (
        <div
          key={job.id}
          className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {job.title}
                  </h2>
                  {job.isUrgent && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Urgent
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  {job.department && (
                    <div className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      {job.department}
                    </div>
                  )}
                  {job.location && (
                    <div className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {job.location}
                    </div>
                  )}
                  {job.type && (
                    <div className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {job.type}
                    </div>
                  )}
                </div>

                {job.shortDescription && (
                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {job.shortDescription}
                  </p>
                )}

                {job.skills && (
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                <button
                  onClick={() => onSelect(job)}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:opacity-90 transition-all duration-200 font-semibold flex items-center justify-center group-hover:shadow-lg"
                >
                  Apply Now
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
