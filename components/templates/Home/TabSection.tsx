import React, { useCallback, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const Tab1 = dynamic(() => import("@/components/layouts/Home/Tab1"));
const Tab2 = dynamic(() => import("@/components/layouts/Home/Tab2"));
const Tab3 = dynamic(() => import("@/components/layouts/Home/Tab3"));

function TabSection() {
  const [current, setCurrent] = useState<number>(0);
  const [, setIndicatorWidth] = useState<number>(0);
  const [, setIndicatorLeft] = useState<number>(0);

  const tabCategories = [
    { name: "Featured Escapes", component: <Tab1 />, icon: "✈️" },
    { name: "Planned Getaways", component: <Tab2 />, icon: "🗓️" },
    { name: "Manage Payments", component: <Tab3 />, icon: "💳" },
  ];

  const updateIndicator = useCallback(
    (index: number) => {
      const tabWidth = 100 / tabCategories.length;
      setIndicatorWidth(tabWidth);
      setIndicatorLeft(index * tabWidth);
    },
    [tabCategories.length]
  );

  useEffect(() => {
    updateIndicator(current);
  }, [current, updateIndicator]);

  const handleTabChange = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="w-full py-10">
      {/* Tab Navigation - Modern Design */}
      <div className="relative mb-12 w-full ">
        <div className="flex flex-wrap md:flex-nowrap gap-3 relative z-10 justify-center">
          {tabCategories.map((tab, index) => (
            <motion.button
              key={index}
              className={`group relative z-20 px-6 py-4 rounded-2xl transition-all duration-300 ${
                current === index
                  ? "bg-white shadow-lg shadow-blue-100/50"
                  : "bg-transparent hover:bg-white/50"
              }`}
              onClick={() => handleTabChange(index)}
              whileHover={{ y: -4 }}
              whileTap={{ y: 0 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <span
                  className={`text-2xl ${
                    current === index ? "scale-110" : ""
                  } transition-transform duration-300`}
                >
                  {tab.icon}
                </span>
                <span
                  className={`font-medium transition-colors duration-300 ${
                    current === index
                      ? "text-blue-600 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {tab.name}
                </span>
                {current === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto w-2/3"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content with Enhanced Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Content with border */}
          <div className="relative z-10 p-6 bg-white/80 backdrop-blur-sm rounded-2xl  shadow-xl shadow-blue-100/20">
            {tabCategories[current]?.component}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TabSection;
