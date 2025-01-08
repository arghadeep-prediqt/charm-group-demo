import React from "react";
import dynamic from "next/dynamic";
import { ResortsData } from "@/components/@types/pages";

const Container = dynamic(() => import("@/components/shared/Container"));
const SingleResortCol = dynamic(
  () => import("@/components/shared/OurResortsPage/SingleResortCol")
);
interface PageProps extends ResortsData {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ResortAccordian({ data, title, setDrawerOpen }: PageProps) {
  return (
    <Container className="mt-4">
      <div className="py-3 w-full border-b border-[#3a6ea5]">
        <p className="text-[18px] font-medium text-[#004e98] capitalize leading-relaxed">
          resorts in {title}
        </p>
      </div>

      <div className="mt-2 py-4 w-full flex justify-start items-start flex-wrap">
        {data?.map((item, id) => (
          <SingleResortCol key={id} {...item} setDrawerOpen={setDrawerOpen} />
        ))}
      </div>
    </Container>
  );
}

export default ResortAccordian;
