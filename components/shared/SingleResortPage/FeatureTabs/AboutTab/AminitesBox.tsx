import { BlurImage } from "@/components/ui/BluerImage";
import { motion } from "framer-motion";
import React from "react";

interface PageProps {
  photo: string;
  name: string;
}

function AminitesBox({ name, photo }: PageProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group overflow-hidden rounded-xl"
    >
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border border-blue-100 flex flex-col items-center gap-4 transition-all duration-300">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-200/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-300" />
          <div className="relative bg-white p-4 rounded-xl shadow-sm">
            <BlurImage
              src={photo}
              alt={name}
              width={50}
              height={50}
              className="size-12 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <p className="text-center font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </p>
      </div>
    </motion.div>
  );
}

export default AminitesBox;
