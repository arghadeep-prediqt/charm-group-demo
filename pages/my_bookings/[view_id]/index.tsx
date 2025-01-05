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

function ViewHolidaysPage() {
  const router = useRouter();
  const param = router.query; //type, view_id

  return (
    <NavContainer>
      <Container className="py-8 flex justify-start items-start gap-x-[3%] bg-gray-100">
        <LeftViewSection
          title={String(param?.view_id)}
          subTitle="Coorg , Karnataka"
        />
        {param?.type === "view" && (
          <RightViewSection title={String(param?.view_id)} />
        )}
        {param?.type === "modify" && <ModifyRightView />}
      </Container>
    </NavContainer>
  );
}

export default ViewHolidaysPage;
