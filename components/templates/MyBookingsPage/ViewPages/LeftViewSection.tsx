import React, { useCallback, useState } from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  MapPin,
  Users,
  Bed,
  Clock,
  Tag,
  Download,
  Map,
} from "lucide-react";
import { useCancelledBookedResortMutation } from "@/redux/services/resortApi";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

interface PageProps {
  id: string;
  type: string;
  token: string;
  status: string;
}

function LeftViewSection({ id, token, status, type }: PageProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [showConfirmCancel, setShowConfirmCancel] = useState<boolean>(false);
  const router = useRouter();
  const subscription = useAppSelector((state) => state.user.role);
  const [cancelledBookedResort] = useCancelledBookedResortMutation();

  const handleCancel = useCallback(async () => {
    setIsClicked(true);
    const toastId = toast.loading("Cancelling booking...");

    try {
      const response = await cancelledBookedResort({ bookingId: id, token });

      if (response?.data) {
        toast.success("Booking is cancelled.", { id: toastId });
        router.push("/my_bookings");
      } else {
        throw new Error("Unable to cancel booking");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to cancel the booking", { id: toastId });
    } finally {
      setIsClicked(false);
      setShowConfirmCancel(false);
    }
  }, [cancelledBookedResort, id, router, token]);

  return (
    <motion.div
      className="w-[30%] bg-white rounded-2xl shadow-sm border border-gray-200 sticky top-14 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with gradient background */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 p-5">
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 bg-blue-400 rounded-full opacity-20"
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

        <div className="flex items-center gap-3 relative z-10">
          <motion.button
            onClick={() => router.back()}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="size-5" />
          </motion.button>

          <h3 className="font-medium text-xl text-white">Resort Summary</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Booking Details */}
        <div className="space-y-4">
          {/* Subscription & Adults */}
          <motion.div
            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="p-2 bg-blue-100 rounded-full">
              <Users className="size-5 text-blue-600" />
            </div>
            <p className="text-gray-700 capitalize">
              <span className="font-medium">{subscription}</span> |
              <span className="text-blue-600 font-medium"> 2 </span>
              Adults
            </p>
          </motion.div>

          {/* Studio */}
          <motion.div
            className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg border border-indigo-100"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-2 bg-indigo-100 rounded-full">
              <Bed className="size-5 text-indigo-600" />
            </div>
            <p className="text-gray-700">
              <span className="text-indigo-600 font-medium">1</span> Studio
            </p>
          </motion.div>

          {/* Booking ID */}
          <motion.div
            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-2 bg-purple-100 rounded-full">
              <Tag className="size-5 text-purple-600" />
            </div>
            <p className="text-gray-700 font-medium">#8711719</p>

            <motion.button
              className="ml-auto p-2 bg-purple-100 rounded-full text-purple-600 hover:bg-purple-200 transition-colors"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Download className="size-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {status !== "CANCELLED" ? (
            <div className="flex gap-3">
              <motion.button
                onClick={() => setShowConfirmCancel(true)}
                className="flex-1 py-2.5 px-4 bg-white border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isClicked}
              >
                Cancel Booking
              </motion.button>

              {type === "view" ? (
                <motion.button
                  onClick={() => router.push(`/my_bookings/${id}?type=modify`)}
                  disabled={isClicked}
                  className="flex-1 py-2.5 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Modify Booking
                </motion.button>
              ) : (
                type === "modify" && (
                  <motion.button
                    onClick={() => router.push(`/my_bookings/${id}?type=view`)}
                    className="flex-1 py-2.5 px-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Confirm Booking
                  </motion.button>
                )
              )}
            </div>
          ) : (
            <motion.div
              className="py-3 px-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center gap-2 text-red-700"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Clock className="size-5" />
              <span className="font-medium">Booking Cancelled</span>
            </motion.div>
          )}
        </motion.div>

        {/* Resort Location */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="flex items-center gap-2 py-3 font-medium text-xl text-gray-800 border-b border-gray-200">
            <MapPin className="size-5 text-blue-600" />
            Resort Location
          </h3>

          <div className="mt-4 relative rounded-xl overflow-hidden">
            <BlurImage
              src="https://charm.vn/wp-content/uploads/2022/12/vi-tri-Charm-Resort-Ho-Tram-1.jpg"
              alt="map"
              width={400}
              height={300}
              className="w-full h-[180px] object-cover shadow-sm"
            />

            <motion.button
              className="absolute top-3 right-3 py-2 px-4 rounded-lg text-sm font-medium text-white bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700/90 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Map className="size-4" />
              View Map
            </motion.button>
          </div>
        </motion.div>

        {/* Packing Essentials */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="flex items-center gap-2 py-3 font-medium text-xl text-gray-800 border-b border-gray-200">
            <Calendar className="size-5 text-blue-600" />
            Packing Essentials
          </h3>

          <div className="mt-4 space-y-4">
            <ListPara
              title="Comfortable Flip-Flops"
              para="Perfect for the beach, showers, and strolling around the resort."
            />
            <ListPara
              title="Capture the Moments"
              para="Don't forget your camera – there will be plenty of amazing photo opportunities during your stay."
            />
            <ListPara
              title="Stay Warm"
              para="Pack woolens, scarves, mufflers, caps, jackets, and other essentials to keep cozy."
            />
          </div>
        </motion.div>
      </div>

      {/* Cancellation Confirmation Modal */}
      <AnimatePresence>
        {showConfirmCancel && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowConfirmCancel(false)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Confirm Cancellation
              </h3>
              <p className="text-gray-600 mb-5">
                Are you sure you want to cancel this booking? This action cannot
                be undone.
              </p>
              <div className="flex gap-3 justify-end">
                <motion.button
                  onClick={() => setShowConfirmCancel(false)}
                  className="py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isClicked}
                >
                  No, Keep It
                </motion.button>
                <motion.button
                  onClick={handleCancel}
                  className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isClicked}
                >
                  {isClicked ? "Cancelling..." : "Yes, Cancel"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default LeftViewSection;

interface ListParaProps {
  title: string;
  para: string;
}

function ListPara({ para, title }: ListParaProps) {
  return (
    <motion.div
      className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-50 transition-colors"
      whileHover={{ x: 5 }}
    >
      <div className="p-1 bg-green-100 rounded-full mt-0.5">
        <CheckCircle className="size-5 text-green-600" />
      </div>

      <p className="text-gray-700">
        <span className="text-blue-600 font-medium">{title}: </span>
        <span className="text-gray-600">{para}</span>
      </p>
    </motion.div>
  );
}
