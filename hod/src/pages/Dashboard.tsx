export default function Dashboard() {
    return (
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">HOD Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Department Overview</h3>
            <p className="text-gray-600">Monitor department performance and activities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Teacher Management</h3>
            <p className="text-gray-600">Assign tasks and review teacher performance.</p>
          </div>
        </div>
      </div>
    )
  }
  