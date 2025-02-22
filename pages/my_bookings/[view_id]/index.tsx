import ProfileContext from "@/contextAPI/ProfileContext";
import { useGetSingleBookingByIdQuery } from "@/redux/services/resortApi";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const ModifyRightView = dynamic(
  () =>
    import("@/components/templates/MyBookingsPage/ViewPages/ModifyRightView")
);
const RightViewSection = dynamic(
  () =>
    import("@/components/templates/MyBookingsPage/ViewPages/RightViewSection")
);
const LeftViewSection = dynamic(
  () =>
    import("@/components/templates/MyBookingsPage/ViewPages/LeftViewSection")
);
const Container = dynamic(() => import("@/components/shared/Container"));
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);

function ViewHolidaysPage() {
  const router = useRouter();
  const { cookieToken } = useContext(ProfileContext);
  const param = router.query; //type, view_id
  const { data, isSuccess } = useGetSingleBookingByIdQuery({
    id: String(param?.view_id),
    token: cookieToken,
  });

  // console.log(data?.[0]);

  return (
    <NavContainer>
      <TopBanner
        title={data?.[0]?.resortId?.name}
        photo="https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-1.jpg"
        subTitle={`${data?.[0]?.resortId?.location}, ${data?.[0]?.resortId?.region}`}
      />

      <Container className="pb-8 pt-4 relative flex justify-start items-start gap-x-[2%]">
        <LeftViewSection
          id={String(param?.view_id || "")}
          token={cookieToken}
          status={data?.[0]?.status || ""}
        />

        {isSuccess && param?.type === "view" && (
          <RightViewSection
            startDate={data?.[0]?.bookings?.[0]?.date}
            endDate={
              data?.[0]?.bookings?.[data?.[0]?.bookings?.length - 1]?.date
            }
            totalDay={data?.[0]?.bookings?.length}
          />
        )}
        {isSuccess && param?.type === "modify" && (
          <ModifyRightView
            id={String(data?.[0]?.resortId?._id)}
            token={cookieToken}
          />
        )}
      </Container>
    </NavContainer>
  );
}

export default ViewHolidaysPage;
