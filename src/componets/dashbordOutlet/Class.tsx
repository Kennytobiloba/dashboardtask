'use client';
import { MdOutlineAccessTime } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { TbDeviceIpadQuestion } from "react-icons/tb";
import { motion } from "framer-motion";

const Class = () => {
  return (
   <>
    <div className="p-4 bg-gray-100 space-y-6">
      {/* Top Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-lg rounded-lg px-4 py-4 flex items-center justify-between gap-3"
        >
          <PiChalkboardTeacherFill className="text-purple-600 text-2xl" />
          <p className="text-purple-600 font-medium">Teacha Class 1</p>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg px-4 py-4 flex items-center justify-between gap-3"
        >
          <TbDeviceIpadQuestion className="text-purple-600 text-2xl" />
          <p className="text-purple-600 font-medium">01/10 Questions</p>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-lg px-4 py-4 flex justify-between items-center gap-3"
        >
          <MdOutlineAccessTime className="text-purple-600 text-2xl" />
          <p className="text-purple-600 font-medium">01:10 seconds</p>
        </motion.div>
      </div>
      </div>

      <div>
        {/* Gray Box Below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gray-200 rounded-lg p-4 space-y-4 mt-20"
      >
        {/* Question Header */}
        <div className="flex items-center gap-3">
          <TbDeviceIpadQuestion className="text-purple-600 text-xl" />
          <h2 className="text-purple-600 font-semibold text-lg">Question 1</h2>
        </div>

        {/* Info Text */}
        <p className="text-gray-700 font-medium">
          How many days do Teacha provide for students?
        </p>

        {/* Instructions */}
        <div>
          <h3 className="font-semibold text-gray-800">Instructions:</h3>
          <p className="text-sm text-gray-700">
            Make sure to submit before the timer elapses to avoid missing marks.
          </p>
        </div>

        {/* Select Option Grid */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Select Option:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Reusable Option Box */}
            {["A", "B", "C", "D"].map((label, i) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03, backgroundColor: "#f3e8ff" }}
                className="bg-white rounded-lg shadow p-4 relative text-gray-600 font-bold h-20"
              >
                <span className="absolute top-2 left-2 text-sm">{label}.</span>
                <div className="flex justify-center items-center h-full">
                  Option {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      </div>
      </>
    
  );
};

export default Class;
