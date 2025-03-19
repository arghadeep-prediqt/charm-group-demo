import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Home, Tag, ExternalLink } from "lucide-react";

interface PageProps {
  _id: string;
  title: string;
  photo: string;
  startDate: string;
  totalDays: number;
  status: string;
  isRci?: boolean;
}

function SingleBookingStatusCard({
  _id,
  title,
  photo,
  startDate,
  totalDays,
  status,
  isRci = false,
}: PageProps) {
  const router = useRouter();
  const randomIdGen = useMemo((): number => {
    return Math.floor(10000 + Math.random() * 90000);
  }, []);

  // Status badge color
  const statusColor = useMemo(() => {
    switch (status) {
      case "CONFIRMED":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "CANCELLED":
        return "bg-red-100 text-red-700 border-red-200";
      case "PENDING":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-blue-100 text-blue-700 border-blue-200";
    }
  }, [status]);

  return (
    <motion.div
      className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
      whileHover={{ y: -3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex">
        {/* Left Image Section */}
        <div className="relative w-1/4 min-h-[220px]">
          <BlurImage
            src={photo}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          {/* RCI Badge */}
          {isRci && (
            <motion.div
              className="absolute top-4 left-4 px-3 py-1.5 bg-blue-500/90 backdrop-blur-sm rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs font-semibold text-white">RCI Booking</p>
            </motion.div>
          )}

          {/* Status Badge */}
          <motion.div
            className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-lg border ${statusColor} backdrop-blur-sm`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-medium">{status}</p>
          </motion.div>
        </div>

        {/* Right Content Section */}
        <div className="w-3/4 p-5 flex flex-col">
          <div className="flex justify-between items-start">
            {/* Title and Date */}
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-800 line-clamp-2 mb-1">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <Calendar className="size-4" />
                <span className="text-sm">{startDate}</span>
                <span className="text-xs px-2 py-0.5 bg-blue-50 rounded-full text-blue-600 font-medium">
                  {totalDays} {totalDays > 1 ? "days" : "day"}
                </span>
              </div>
            </div>

            {/* Booking ID */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
              <Tag className="size-3.5 text-gray-400" />
              <span className="text-xs font-medium text-gray-500">
                #{randomIdGen}
              </span>
            </div>
          </div>

          {/* Booking Details */}
          <div className="grid grid-cols-3 gap-4 my-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 rounded-md">
                <Users className="size-4 text-blue-500" />
              </div>
              <span className="text-sm text-gray-600">2 Adults</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 rounded-md">
                <Home className="size-4 text-blue-500" />
              </div>
              <span className="text-sm text-gray-600">1 Studio</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 rounded-md">
                <Clock className="size-4 text-blue-500" />
              </div>
              <span className="text-sm text-gray-600">Check-in: 2 PM</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex gap-3">
            <motion.button
              onClick={() => router.push(`/my_bookings/${_id}?type=view`)}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-200 text-sm font-medium transition-colors hover:bg-blue-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="size-4" />
              View Details
            </motion.button>

            {status !== "CANCELLED" && (
              <motion.button
                onClick={() => router.push(`/my_bookings/${_id}?type=modify`)}
                className="flex items-center gap-1.5 px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 text-sm font-medium transition-colors hover:bg-gray-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Modify Booking
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SingleBookingStatusCard;
