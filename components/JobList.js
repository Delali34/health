// components/JobList.js
export default function JobList({ jobs = [], onSelect }) {
  // Ensure jobs is an array and then filter
  const activeJobs = Array.isArray(jobs)
    ? jobs.filter((job) => job.isActive)
    : [];

  if (activeJobs.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">
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
        <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-semibold text-gray-900">{job.title}</h2>

          <div className="mt-4">
            <button
              onClick={() => onSelect(job)}
              className=" text-white px-4 py-2 rounded-md bg-gradient-to-r font-bold  from-purple-600 to-blue-500"
            >
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
