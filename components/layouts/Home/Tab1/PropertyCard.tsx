import { BlurImage } from "@/components/ui/BluerImage";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface PageProps {
  title: string;
  photo: string;
  link: string;
}

function PropertyCard({ link, photo, title }: PageProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-[220px] h-[280px] relative flex-1 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Background */}
      <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
        <BlurImage
          src={photo}
          alt={title}
          width={600}
          height={900}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-10">
        {/* Title */}
        <h3 className="text-white font-medium text-lg mb-3 tracking-wide capitalize">
          {title}
        </h3>

        {/* Button */}
        <motion.button
          onClick={() => router.push(link)}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white py-2 px-4 rounded-full border border-white/30 transition-all duration-300"
          whileHover={{ gap: 4 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          <span className="text-sm font-medium">Explore</span>
          <ArrowUpRight className="size-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default PropertyCard;
