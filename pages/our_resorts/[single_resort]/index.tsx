import ProfileContext from "@/contextAPI/ProfileContext";
import { useGetSingleResortQuery } from "@/redux/services/resortApi";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const SectionTab = dynamic(
  () => import("@/components/templates/SingleResortPage/SectionTab")
);
const Container = dynamic(() => import("@/components/shared/Container"));
const TopCarousel = dynamic(
  () => import("@/components/templates/SingleResortPage/TopCarousel")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function SingleResortPage() {
  const router = useRouter();
  const resort_id = router?.query?.single_resort || null;
  const { cookieToken } = useContext(ProfileContext);
  const { data, isSuccess } = useGetSingleResortQuery({
    id: String(resort_id),
    token: cookieToken,
  });

  return (
    <NavContainer>
      <Container className="py-2">
        <TopCarousel />
      </Container>

      {isSuccess && (
        <SectionTab
          name={data?.name || ""}
          resortId={String(resort_id)}
          location={`${data?.location}, Vietnam`}
        />
      )}
    </NavContainer>
  );
}

export default SingleResortPage;
