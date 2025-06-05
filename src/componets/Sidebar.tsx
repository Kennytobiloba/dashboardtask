import { NavLink } from 'react-router-dom';
import {
  MdOutlineAssignment,
  MdOutlineMarkUnreadChatAlt,
  MdDownload,
  MdSettings,
} from 'react-icons/md';
import { FaGraduationCap, FaHistory, FaTools, FaLifeRing } from 'react-icons/fa';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const iconSize = 24;

const Sidebar = () => {
  const linkClasses = ({ isActive }: any) =>
    `no-underline px-3 py-2 rounded-md transition-colors flex items-center gap-3 ${
      isActive
        ? 'bg-[#7F55B1] text-white font-semibold'
        : 'text-gray-700 hover:bg-[#7F55B1] hover:text-white'
    }`;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-52 h-screen bg-white shadow-md py-5 px-3">
        <div className="flex items-center gap-3 mb-6 px-3">
          <FaGraduationCap size={36} className="text-[#7F55B1]" />
        </div>

        <nav className="flex flex-col gap-3 flex-grow">
          <NavLink to="/" className={linkClasses}>
            <FaTools size={iconSize} />
            AI Tools
          </NavLink>
          <NavLink to="/class" className={linkClasses}>
            <HiOutlineRocketLaunch size={iconSize} />
            Launch a class
          </NavLink>
          <NavLink to="/dashboard/profile" className={linkClasses}>
            <FaHistory size={iconSize} />
            Work History
          </NavLink>
          <NavLink to="/dashboard/chat" className={linkClasses}>
            <MdOutlineMarkUnreadChatAlt size={iconSize} />
            AI Chat
          </NavLink>
          <NavLink to="/dashboard/assignment" className={linkClasses}>
            <MdOutlineAssignment size={iconSize} />
            Assignment
          </NavLink>
        </nav>

        <div className="mt-auto py-4 border-t border-gray-300">
          <div className="bg-[#7F55B1] rounded-md py-4 px-2 flex flex-col items-start gap-4 text-white w-full">
            <div className="font-semibold text-start">
              Current Plan: <span className="font-normal">Free</span>
            </div>
            <h5 className="text-[12px]">Upgrade for more features and experience on</h5>
            <button className="bg-white flex items-center gap-2 rounded-full text-purple-700 px-8 py-1 font-semibold text-[14px] hover:bg-gray-100 transition">
              <MdDownload size={18} /> Upgrade
            </button>
          </div>

          <div className="flex items-center justify-start gap-2 px-2 mt-3 cursor-pointer text-gray-700 hover:text-purple-700">
            <FaLifeRing size={18} />
            <span className="font-medium">Support</span>
          </div>

          <button className="w-full mt-4 flex items-center justify-start px-2 gap-2 bg-[#7F55B1] hover:bg-purple-800 transition-colors text-white rounded-md py-2 font-semibold">
            <MdSettings size={18} />
            Settings
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 z-50 left-0 right-0 flex md:hidden text-[#7F55B1] bg-white border-t border-purple-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-2 ${
              isActive ? 'bg-purple-400 font-semibold' : 'hover:bg-purple-600'
            }`
          }
        >
          <FaTools size={20} />
          <span className="text-xs mt-1">Tools</span>
        </NavLink>
        <NavLink
          to="/class"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-2 ${
              isActive ? 'bg-purple-400 font-semibold' : 'hover:bg-purple-600'
            }`
          }
        >
          <HiOutlineRocketLaunch size={20} />
          <span className="text-xs mt-1">Class</span>
        </NavLink>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-2 ${
              isActive ? 'bg-purple-400 font-semibold' : 'hover:bg-purple-600'
            }`
          }
        >
          <FaHistory size={20} />
          <span className="text-xs mt-1">History</span>
        </NavLink>
        <NavLink
          to="/dashboard/chat"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-2 ${
              isActive ? 'bg-purple-400 font-semibold' : 'hover:bg-purple-600'
            }`
          }
        >
          <MdOutlineMarkUnreadChatAlt size={20} />
          <span className="text-xs mt-1">Chat</span>
        </NavLink>
        <NavLink
          to="/dashboard/assignment"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-2 ${
              isActive ? 'bg-purple-400 font-semibold' : 'hover:bg-purple-600'
            }`
          }
        >
          <MdOutlineAssignment size={20} />
          <span className="text-xs mt-1">Task</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Sidebar;
