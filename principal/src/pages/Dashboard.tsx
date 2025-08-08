export default function Dashboard() {
    return (
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Principal Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Manage Departments</h3>
            <p className="text-gray-600">View and edit department details.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Manage Teachers</h3>
            <p className="text-gray-600">Assign teachers to departments.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Manage Students</h3>
            <p className="text-gray-600">View student records and performance.</p>
          </div>
        </div>
      </div>
    )
  }
  