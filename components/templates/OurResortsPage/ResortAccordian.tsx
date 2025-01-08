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
    <div className="mt-4">
      <Container className="py-5 w-full bg-amber-200">
        <p className="text-[18px] font-medium capitalize leading-relaxed">
          resorts in {title}
        </p>
      </Container>

      <Container className="mt-2 pt-2 w-full flex justify-start items-start flex-wrap">
        {data?.map((item, id) => (
          <SingleResortCol key={id} {...item} setDrawerOpen={setDrawerOpen} />
        ))}
      </Container>
    </div>
  );
}

export default ResortAccordian;
