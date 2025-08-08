import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="block py-2 px-4 hover:bg-blue-700 rounded">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}