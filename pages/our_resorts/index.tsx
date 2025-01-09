import { allResortsData } from "@/components/lib/rawData";
import SingleResortCard from "@/components/shared/OurResortsPage/SingleResortCard";
import SideDrawer from "@/components/ui/SideDrawer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearResort } from "@/redux/slice/resortSlice";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const ResortAccordian = dynamic(
  () => import("@/components/templates/OurResortsPage/ResortAccordian")
);
const FilterRow = dynamic(
  () => import("@/components/templates/OurResortsPage/FilterRow")
);
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const Container = dynamic(() => import("@/components/shared/Container"));

function OurResortsPage() {
  const dispatch = useAppDispatch();
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const resortName = useAppSelector((state) => state.resort.name);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
    dispatch(clearResort());
  };

  return (
    <NavContainer>
      <TopBanner
        photo="https://images.unsplash.com/photo-1521019795854-14e15f600980?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Resorts Across Horizons"
        subTitle="Experience the diverse charm of Vietnam’s regions and indulge in our exclusive international destinations."
      />
      <Container className="py-2">
        <FilterRow />
      </Container>

      <div className="py-4">
        {allResortsData?.map((item, id) => (
          <ResortAccordian key={id} setDrawerOpen={setDrawerOpen} {...item} />
        ))}
      </div>

      <SideDrawer
        isOpen={isDrawerOpen}
        title={`Resort ${resortName}`}
        onClose={toggleDrawer}
        paraBody={<SingleResortCard />}
      />
    </NavContainer>
  );
}

export default OurResortsPage;
