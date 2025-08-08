import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function Header() {
  const user = useSelector((state: RootState) => state.auth.user)
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Principal Dashboard</h1>
        <div className="text-gray-600">Welcome, {user?.name || 'Admin'}</div>
      </div>
    </header>
  )
}