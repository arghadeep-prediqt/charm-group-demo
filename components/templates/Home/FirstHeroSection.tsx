import React, { useMemo } from "react";
import Container from "@/components/shared/Container";
import { BlurImage } from "@/components/ui/BluerImage";
import Link from "next/link";
import { motion } from "framer-motion";

const banner = [
  "/images/offer1.jpg",
  "/images/offer2.jpg",
  "/images/social.jpg",
  "/images/banner1.jpg",
];

function FirstHeroSection() {
  const randomIdGen = useMemo((): number => {
    return Math.floor(Math.random() * banner.length);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <BlurImage
          src={banner[randomIdGen]}
          alt="background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95" />
      </motion.div>

      {/* Content */}
      <Container className="relative h-full pt-24 pb-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-[#1E3A70] via-[#2089ff] to-[#40A2FF] bg-clip-text text-transparent"
            >
              Embark on Your
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                Extraordinary Journey Today.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg bg-gradient-to-r from-[#1E293B] to-[#40A2FF] bg-clip-text text-transparent leading-relaxed max-w-xl"
            >
              Discover breathtaking destinations, enjoy exclusive member
              benefits, and turn your vacation dreams into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <Link
                href="/explore_membership"
                className="group inline-flex items-center gap-2 text-lg font-medium bg-gradient-to-r from-[#2089ff] to-[#40A2FF] bg-clip-text text-transparent hover:from-[#1E3A70] hover:to-[#2089ff] transition-all"
              >
                Explore Our Journey
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-6 h-6 text-[#40A2FF] group-hover:text-[#2089ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative h-[300px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(64,162,255,0.15)]"
          >
            <BlurImage
              src={banner[randomIdGen]}
              alt="hero_banner"
              width={1400}
              height={1200}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default FirstHeroSection;
