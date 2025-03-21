import React from "react";
import dynamic from "next/dynamic";
import { ResortsData } from "@/components/@types/pages";
import { motion } from "framer-motion";

const Container = dynamic(() => import("@/components/shared/Container"));
const SingleResortCol = dynamic(
  () => import("@/components/shared/OurResortsPage/SingleResortCol")
);
interface PageProps extends ResortsData {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ResortAccordian({ data, title, local, setDrawerOpen }: PageProps) {
  return (
    <Container className="mt-4">
      <motion.div
        className="py-5 w-full border-b border-indigo-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 rounded-t-xl"
        whileHover={{ backgroundColor: "#f0f7ff" }}
      >
        <h2 className="text-2xl font-semibold text-blue-600 capitalize flex items-center">
          <span className="mr-2"></span>
          <span>Resorts in {title}</span>
          {local !== "" && (
            <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {local}
            </span>
          )}
        </h2>
      </motion.div>

      <div className="mt-2 py-4 w-full flex justify-start items-start flex-wrap">
        {data?.map((item, id) => (
          <SingleResortCol key={id} {...item} setDrawerOpen={setDrawerOpen} />
        ))}
      </div>
    </Container>
  );
}

export default ResortAccordian;
