import React from "react";
import dynamic from "next/dynamic";
import { BlurImage } from "@/components/ui/BluerImage";
import { experiences } from "@/components/lib/rawData";
import { motion } from "framer-motion";

const Container = dynamic(() => import("@/components/shared/Container"));

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-grid-slate-200/[0.2] bg-[length:20px_20px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[80px]"></div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Craft Your Memories
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Indulge in experiences that will last a lifetime
          </p>
        </motion.div>

        {/* Featured experiences in staggered layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 group relative overflow-hidden rounded-xl h-[320px] shadow-md hover:shadow-xl transition-all duration-300"
          >
            <BlurImage
              src={experiences[0]?.image || "/placeholder.jpg"}
              alt={experiences[0]?.title || "Featured Experience"}
              width={800}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
              <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
                FEATURED
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {experiences[0]?.title || "Featured Experience"}
              </h3>
              <p className="text-sm text-gray-200 mb-3 max-w-lg">
                {
                  "Create lasting memories with our carefully crafted activities."
                }
              </p>
              <button className="mt-2 bg-white/90 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors w-fit">
                Explore Now
              </button>
            </div>
          </motion.div>

          {/* Vertical stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-xl h-[320px] shadow-md hover:shadow-xl transition-all duration-300"
          >
            <BlurImage
              src={experiences[1]?.image || "/placeholder.jpg"}
              alt={experiences[1]?.title || "Experience"}
              width={600}
              height={800}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {experiences[1]?.title || "Experience"}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs px-3 py-1 bg-green-500/90 rounded-full text-white">
                  Explore
                </span>
              </div>
            </div>
          </motion.div>

          {/* Three column grid */}
          {experiences.slice(2, 5).map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="col-span-12 sm:col-span-6 md:col-span-4 group relative overflow-hidden rounded-xl h-[220px] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <BlurImage
                src={experience.image}
                alt={experience.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {experience.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-3 py-1 bg-blue-500/90 rounded-full text-white">
                    Explore
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Wide banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 group relative overflow-hidden rounded-xl h-[180px] shadow-md hover:shadow-xl transition-all duration-300"
          >
            <BlurImage
              src={experiences[5]?.image || "/placeholder.jpg"}
              alt={experiences[5]?.title || "Experience"}
              width={1200}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent flex flex-col justify-center p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {experiences[5]?.title || "Experience"}
              </h3>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
