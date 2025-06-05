import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import Sidebar from './componets/Sidebar'

import Settings from './componets/dashbordOutlet/settings'
import Class from './componets/dashbordOutlet/class'

const routeTitles: Record<string, string> = {
  '/': 'Settings',
  '/dashboard/settings': 'AI Tools',
  '/class': 'Assingnment',
  '/dashboard/launch': 'Settings',
  '/dashboard/chat': 'AI Chat',
  '/dashboard/assignment': 'Assignment',
}

function DashboardLayout() {
  const location = useLocation()
  const title = routeTitles[location.pathname] || 'Dashboard'

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {/* Fixed header */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-300 px-5 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-center font-semibold text-lg">{title}</h1>
            <div className="flex-1 flex justify-end">
              <FaRegUserCircle size={28} className="text-gray-600" />
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="flex-1 overflow-auto p-5">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Settings />} />
         <Route path='/class'  element={<Class />} />
      
      </Route>
    </Routes>
  )
}
