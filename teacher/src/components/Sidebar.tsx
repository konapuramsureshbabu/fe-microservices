import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-purple-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Teacher Panel</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="block py-2 px-4 hover:bg-purple-700 rounded">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}