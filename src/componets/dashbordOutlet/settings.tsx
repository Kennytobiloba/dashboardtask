import { FiMail, FiEdit2, FiTrash2, FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Settings = () => {
  return (
    <div className="w-full max-w-5xl px-4">
      {/* Tabs */}
      <div className="flex flex-wrap border-b border-gray-300 mb-4">
        <button className="px-4 py-2 text-gray-600 hover:text-black">Profile</button>
        <button className="px-4 py-2 text-black font-semibold relative">
          Teams
          <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#7F55B1] rounded-t"></span>
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-black">Settings</button>
      </div>

      {/* Team Members Content */}
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-medium text-black">Team Members</h2>
        <p className="text-gray-600 mt-2">
          Manage your team members and their account permissions here.
        </p>
      </motion.div>

      {/* Invite Section */}
      <motion.div
        className="mb-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-medium text-black">Invite people to your team</h2>
        <p className="text-gray-600 mt-2">
          We'll email them instructions and a link to create an account.
        </p>

        {/* Invite Input */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative w-full max-w-md">
            <label className="block text-sm text-gray-700 mb-1">Invite Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <FiMail />
              </span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F55B1]"
              />
            </div>
          </div>

          <button className="sm:mt-6 bg-[#7F55B1] text-white px-6 py-2 rounded-full hover:bg-purple-700 transition w-full sm:w-auto">
            Send Invite
          </button>
        </div>
      </motion.div>

      {/* Member List Table */}
      <div className="space-y-6">
        {/* Table Header */}
        <div className="hidden sm:flex justify-between text-gray-600 font-medium pb-2 border-b border-gray-300">
          <span className="w-1/3">Name</span>
          <span className="w-1/3">Date Added</span>
          <span className="w-1/3">Last Edited</span>
        </div>

        {/* Member Rows */}
        {[...Array(5)].map((_, index) => (
          <motion.div 
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-4"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            {/* Name */}
            <div className="w-full sm:w-1/3 flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <FiUser size={20} />
              </div>
              <div>
                <p className="font-semibold text-black">Julieth Daniels</p>
                <p className="text-gray-500 text-sm">julieth@example.com</p>
              </div>
            </div>

            {/* Date Added */}
            <div className="w-full sm:w-1/3 text-gray-700">
              <p>2025-06-05</p>
            </div>

            {/* Last Edited and Actions */}
            <div className="w-full sm:w-1/3 flex justify-between items-center">
              <p className="text-gray-700">2025-06-07</p>
              <div className="flex gap-4">
                <button className="text-red-500 hover:text-red-600">
                  <FiTrash2 />
                </button>
                <button className="text-gray-500 hover:text-blue-600">
                  <FiEdit2 />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Settings;
