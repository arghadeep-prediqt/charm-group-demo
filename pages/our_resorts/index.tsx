import { AllResortDataProps, DistrictResorts } from "@/components/@types/pages";
import ProfileContext from "@/contextAPI/ProfileContext";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetAllResortsQuery } from "@/redux/services/resortApi";
import { clearResort } from "@/redux/slice/resortSlice";
import dynamic from "next/dynamic";
import React, { useContext, useMemo, useState } from "react";

const SingleResortCard = dynamic(
  () => import("@/components/shared/OurResortsPage/SingleResortCard")
);
const SideDrawer = dynamic(() => import("@/components/ui/SideDrawer"));
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
  const { cookieToken } = useContext(ProfileContext);
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const resortName = useAppSelector((state) => state.resort.name);
  const { data: allResorts, isSuccess } = useGetAllResortsQuery({
    token: cookieToken,
  });
  const allResortsData = useResortsData(allResorts, isSuccess);

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
        {isSuccess &&
          allResortsData?.map((item, id) => (
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

const useResortsData = (resorts: AllResortDataProps[], isSuccess: boolean) => {
  return useMemo(() => {
    const groupedByRegion =
      isSuccess &&
      resorts?.reduce<Record<string, DistrictResorts[]>>((acc, resort) => {
        if (!acc[resort.region]) {
          acc[resort.region] = [];
        }

        let districtData = acc[resort.region].find(
          (d) => d.district === resort.district
        );

        if (!districtData) {
          districtData = {
            district: resort.district,
            photo: resort.photo,
            resorts: [],
          };
          acc[resort.region].push(districtData);
        }

        districtData.resorts.push({
          _id: resort._id,
          name: resort.name,
          location: resort.location,
        });

        return acc;
      }, {});

    return Object.entries(groupedByRegion).map(([region, districts]) => ({
      title: region,
      local: districts[0]?.district || "",
      data: districts,
    }));
  }, [isSuccess, resorts]);
};
