import { AllResortDataProps, DistrictResorts } from "@/components/@types/pages";
import ProfileContext from "@/contextAPI/ProfileContext";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetAllResortsQuery } from "@/redux/services/resortApi";
import { clearResort } from "@/redux/slice/resortSlice";
import dynamic from "next/dynamic";
import React, { useContext, useMemo, useState } from "react";
import { motion } from "framer-motion";

const SingleResortCard = dynamic(
  () => import("@/components/shared/OurResortsPage/SingleResortCard")
);
const SideDrawer = dynamic(() => import("@/components/ui/SideDrawer"));
const ResortAccordion = dynamic(
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
        photo="https://images.unsplash.com/photo-1521019795854-14e15f600980?q=80&w=1932&auto=format&fit=crop"
        title="Discover Our Luxury Resorts"
        subTitle="Immerse yourself in extraordinary experiences across Vietnam and beyond"
      />

      <Container className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FilterRow />
        </motion.div>
      </Container>

      <motion.div
        className="py-8 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {isSuccess &&
          allResortsData?.map((item, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.1 }}
            >
              <ResortAccordion setDrawerOpen={setDrawerOpen} {...item} />
            </motion.div>
          ))}
      </motion.div>

      <SideDrawer
        isOpen={isDrawerOpen}
        title={`Discover ${resortName}`}
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
            region_local: resort.region_local,
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
      local: districts[0]?.region_local || "",
      data: districts,
    }));
  }, [isSuccess, resorts]);
};
