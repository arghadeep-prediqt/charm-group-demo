import dynamic from "next/dynamic";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, Users, UserRound } from "lucide-react";

const MemberDropdown = dynamic(() => import("@/components/ui/MemberDropdown"));
const PeopleDropdown = dynamic(() => import("@/components/ui/PeopleDropdown"));
const TabCalendar = dynamic(
  () =>
    import(
      "@/components/shared/SingleResortPage/FeatureTabs/AvailablityTab/TabCalender"
    )
);

interface PageProps {
  id: string;
  token: string;
}

function ModifyRightView({ id, token }: PageProps) {
  // Initialize with both sections open
  const [activeSection, setActiveSection] = useState<string[]>([
    "travelers",
    "calendar",
  ]);

  const toggleSection = (section: string) => {
    if (activeSection.includes(section)) {
      setActiveSection(activeSection.filter((item) => item !== section));
    } else {
      setActiveSection([...activeSection, section]);
    }
  };

  // Check if a section is active
  const isSectionActive = (section: string) => activeSection.includes(section);

  return (
    <motion.div
      className="w-[70%] overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="relative p-6 bg-gradient-to-r from-blue-600 to-blue-500">
        <motion.div
          className="absolute top-0 right-0 w-36 h-36 bg-blue-400 rounded-full opacity-20"
          style={{ top: "-20px", right: "-20px" }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.h3
          className="relative z-10 text-2xl font-medium text-white"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Modify Your Booking
        </motion.h3>

        <motion.p
          className="relative z-10 mt-1 text-blue-100 text-sm"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Update your travel plans with ease
        </motion.p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Travelers Section */}
        <motion.div
          className="mb-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("travelers")}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="size-5 text-blue-500" />
              </div>
              <h4 className="font-medium text-gray-800">
                Travelers Information
              </h4>
            </div>
            <motion.div
              animate={{ rotate: isSectionActive("travelers") ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="size-5 text-gray-500" />
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {isSectionActive("travelers") && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mt-4 grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Who all are travelling
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Users className="size-4" />
                      </div>
                      <div className="pl-9">
                        <PeopleDropdown />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Primary Traveler
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <UserRound className="size-4" />
                      </div>
                      <div className="pl-9">
                        <MemberDropdown isDisabled={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Calendar Section */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("calendar")}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Calendar className="size-5 text-blue-500" />
              </div>
              <h4 className="font-medium text-gray-800">Booking Calendar</h4>
            </div>
            <motion.div
              animate={{ rotate: isSectionActive("calendar") ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="size-5 text-gray-500" />
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {isSectionActive("calendar") && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mt-4">
                  <TabCalendar resort_id={id} token={token} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="mt-8 flex justify-end gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </motion.button>

          <motion.button
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-sm"
            whileHover={{ scale: 1.02, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.98 }}
          >
            Save Changes
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ModifyRightView;
