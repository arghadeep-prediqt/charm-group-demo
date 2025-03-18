import { aminitiesData, experiences } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const SideDrawer = dynamic(() => import("@/components/ui/SideDrawer"));

interface PageProps {
  startDate: string;
  endDate: string;
  totalDay: number;
}

function RightViewSection({ endDate, startDate, totalDay }: PageProps) {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("all");

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <motion.div
      className="w-[70%] bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="relative p-6 bg-gradient-to-r from-indigo-600 to-blue-500">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20"
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
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your Stay Overview
        </motion.h3>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Stay Timeline */}
        <Heading end={endDate} start={startDate} total={totalDay} />

        {/* Tabs Navigation */}
        <motion.div
          className="mt-10 mb-6 border-b border-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex space-x-6">
            <TabButton
              active={activeSection === "all"}
              onClick={() => setActiveSection("all")}
              label="All"
            />
            <TabButton
              active={activeSection === "itinerary"}
              onClick={() => setActiveSection("itinerary")}
              label="Your Itinerary"
            />
            <TabButton
              active={activeSection === "experiences"}
              onClick={() => setActiveSection("experiences")}
              label="Experiences"
            />
            <TabButton
              active={activeSection === "amenities"}
              onClick={() => setActiveSection("amenities")}
              label="Resort Facilities"
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {(activeSection === "all" || activeSection === "itinerary") && (
            <motion.div
              key="itinerary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={activeSection !== "all" ? "mb-10" : ""}
            >
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xl font-medium text-gray-800 flex items-center gap-2">
                  <Calendar className="size-5 text-indigo-600" />
                  Explore Your Itinerary
                </h3>

                <motion.button
                  onClick={() => setDrawerOpen(true)}
                  className="flex items-center gap-2 py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="size-4" />
                  Add Activity
                </motion.button>
              </div>
              <AdditionalServices />
            </motion.div>
          )}

          {(activeSection === "all" || activeSection === "experiences") && (
            <motion.div
              key="experiences"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                delay: activeSection === "all" ? 0.1 : 0,
              }}
              className={activeSection !== "all" ? "mb-10" : "mt-10"}
            >
              <h3 className="mb-4 text-xl font-medium text-gray-800 flex items-center gap-2">
                <Sparkles className="size-5 text-indigo-600" />
                Enhance Your Experience
              </h3>

              <div className="w-full px-4 py-6 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                {experienceService?.map((photo, id) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: id * 0.1 + 0.2 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <BlurImage
                      src={photo}
                      alt={`Experience ${id}`}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-contain drop-shadow-md"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {(activeSection === "all" || activeSection === "amenities") && (
            <motion.div
              key="amenities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                delay: activeSection === "all" ? 0.2 : 0,
              }}
              className={activeSection !== "all" ? "" : "mt-10"}
            >
              <h3 className="mb-4 text-xl font-medium text-gray-800 flex items-center gap-2">
                <CheckCircle className="size-5 text-indigo-600" />
                Included Resort Facilities
              </h3>

              <AminitiesServices />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SideDrawer
        isOpen={isDrawerOpen}
        title="Explore Our Itinerary"
        onClose={toggleDrawer}
        paraBody={<SingleItineraryCard setOpen={setDrawerOpen} />}
      />
    </motion.div>
  );
}

export default RightViewSection;

// Tab Button Component
function TabButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative pb-3 text-base font-medium transition-colors ${
        active ? "text-indigo-600" : "text-gray-500 hover:text-gray-800"
      }`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {label}
      {active && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
          layoutId="activeTab"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

interface HeadingProps {
  start: string;
  end: string;
  total: number;
}

function Heading({ end, start, total }: HeadingProps) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  return (
    <motion.div
      className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-indigo-100 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute top-4 left-4 size-20 bg-blue-200 rounded-full opacity-20" />
        <div className="absolute bottom-4 right-4 size-16 bg-indigo-200 rounded-full opacity-20" />
      </motion.div>

      <div className="relative z-10 flex justify-between items-start">
        {/* Check-in */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <BlurImage
              src="https://img.icons8.com/ios-filled/100/00509d/hotel-check-in.png"
              alt="checkin"
              width={50}
              height={50}
              className="size-12"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium text-indigo-600">
              CHECK-IN
            </span>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-gray-800">
                {startDate?.toLocaleDateString("en-IN", { day: "2-digit" })}
              </span>
              <div className="mb-1">
                <p className="text-base font-medium text-gray-700">
                  {startDate?.toLocaleDateString("en-IN", { month: "long" })}
                </p>
                <p className="text-sm text-gray-500">
                  {startDate?.toLocaleDateString("en-IN", { weekday: "long" })}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stay Details */}
        <motion.div
          className="flex flex-col items-center justify-center px-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="py-2 px-4 bg-white rounded-full shadow-sm flex items-center gap-2 mb-2">
            <Clock className="size-4 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">
              {total} Days
            </span>
          </div>
          <div className="py-2 px-4 bg-white rounded-full shadow-sm flex items-center gap-2">
            <Users className="size-4 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">2 Adults</span>
          </div>
        </motion.div>

        {/* Check-out */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium text-indigo-600">
              CHECK-OUT
            </span>
            <div className="flex items-end gap-2">
              <div className="mb-1">
                <p className="text-base font-medium text-gray-700 text-right">
                  {endDate?.toLocaleDateString("en-IN", { month: "long" })}
                </p>
                <p className="text-sm text-gray-500 text-right">
                  {endDate?.toLocaleDateString("en-IN", { weekday: "long" })}
                </p>
              </div>
              <span className="text-4xl font-bold text-gray-800">
                {endDate?.toLocaleDateString("en-IN", { day: "2-digit" })}
              </span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl shadow-sm">
            <BlurImage
              src="https://img.icons8.com/ios-filled/100/00509d/hotel-chekc-out.png"
              alt="checkout"
              width={50}
              height={50}
              className="size-12"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const experienceService = [
  "/icons/food.svg",
  "/icons/cook.svg",
  "/icons/wheel_chair.svg",
  "/icons/bed_plus.svg",
];

let itineraryIds = [0, 1];

function AdditionalServices() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {itineraryIds?.map((item, id) => (
        <motion.div
          key={id}
          className="relative rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
          whileHover={{ y: -5, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: id * 0.1 + 0.2 }}
        >
          <BlurImage
            src={experiences?.[item].image}
            alt={experiences?.[item].title}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="p-1 bg-white/20 backdrop-blur-sm rounded-md">
                <MapPin className="size-4 text-white" />
              </div>
              <span className="text-xs font-medium text-white/80">
                Resort Activity
              </span>
            </div>
            <h3 className="text-xl font-medium text-white mb-1">
              {experiences?.[item].title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SingleItineraryCard({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleAddActivity = (id: number) => {
    if (itineraryIds.includes(id)) return toast.error("Already added");

    itineraryIds = [...itineraryIds, id];
    setOpen(false);
    toast.success("Activity added to your itinerary");
  };

  return (
    <div className="grid grid-cols-2 gap-4 pb-16">
      {experiences?.map(
        (item, id) =>
          !itineraryIds.includes(id) && (
            <motion.div
              key={id}
              className="relative rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.1 }}
            >
              <BlurImage
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-between p-4">
                <motion.button
                  onClick={() => handleAddActivity(item.id)}
                  className="self-start py-1.5 px-4 bg-white text-blue-600 rounded-lg text-sm font-medium shadow-md flex items-center gap-1.5 border border-blue-300 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f0f7ff",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <Plus className="size-3.5" />
                  Add Activity
                </motion.button>

                <div>
                  <h3 className="text-xl font-medium text-white mb-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )
      )}
    </div>
  );
}

function AminitiesServices() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {aminitiesData?.map((item, id) => (
        <motion.div
          key={id}
          className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-indigo-100 flex flex-col items-center"
          whileHover={{ y: -5, scale: 1.03 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: id * 0.05 + 0.2 }}
        >
          <div className="p-3 bg-white rounded-full shadow-sm mb-3">
            <BlurImage
              src={item.photo}
              alt={item.name}
              width={100}
              height={100}
              className="size-10"
            />
          </div>
          <p className="text-center text-sm font-medium text-indigo-700">
            {item.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
