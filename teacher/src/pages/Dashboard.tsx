export default function Dashboard() {
    return (
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Teacher Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Manage Classes</h3>
            <p className="text-gray-600">Schedule and manage your classes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Assignments</h3>
            <p className="text-gray-600">Create and grade assignments.</p>
          </div>
        </div>
      </div>
    )
  }