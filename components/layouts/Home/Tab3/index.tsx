import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const Container = dynamic(() => import("@/components/shared/Container"));

function Tab3() {
  const router = useRouter();

  return (
    <Container className="mt-[3%]">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 p-6">
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

            <motion.h2
              className="relative z-10 text-2xl font-medium text-white"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Payment Status
            </motion.h2>

            <motion.p
              className="relative z-10 mt-1 text-blue-100 text-sm"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Track and manage your upcoming payments
            </motion.p>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image Section */}
              <motion.div
                className="w-full md:w-5/12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-lg opacity-70"></div>
                  <div className="relative bg-white p-4 rounded-2xl">
                    <BlurImage
                      src={"/images/Payment.svg"}
                      alt="payments"
                      width={400}
                      height={400}
                      className="w-full h-auto object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text Section */}
              <motion.div
                className="w-full md:w-7/12 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {/* Status Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 py-1.5 px-3 bg-green-50 text-green-700 rounded-full mb-4"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.6,
                  }}
                >
                  <CheckCircle className="size-4" />
                  <span className="text-sm font-medium">
                    All Payments Up to Date
                  </span>
                </motion.div>

                <h3 className="text-2xl font-medium text-gray-800 mb-3">
                  Great News! You have no pending payments
                </h3>

                <p className="text-gray-600 mb-6">
                  Your account is in good standing with no outstanding payments.
                  Plan ahead by checking your upcoming payments and stay on top
                  of your vacation finances.
                </p>

                {/* Action Button */}
                <motion.button
                  onClick={() => router.push("/profile/payment")}
                  className="inline-flex items-center gap-2 py-2.5 px-6 bg-white text-blue-600 border border-blue-200 rounded-full shadow-sm hover:bg-blue-50 transition-colors"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <span>Check Upcoming Payments</span>
                  <ArrowRight className="size-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}

export default Tab3;
