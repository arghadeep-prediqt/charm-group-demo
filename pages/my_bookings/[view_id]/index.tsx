import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

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
  const param = router.query; //type, view_id

  return (
    <NavContainer>
      <TopBanner
        title={String(param?.view_id)}
        photo="https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-1.jpg"
        subTitle="Vung Tau province, Vietnam"
      />

      <Container className="pb-8 pt-4 relative flex justify-start items-start gap-x-[2%]">
        <LeftViewSection title={String(param?.view_id || "")} />
        {param?.type === "view" && <RightViewSection />}
        {param?.type === "modify" && <ModifyRightView />}
      </Container>
    </NavContainer>
  );
}

export default ViewHolidaysPage;
