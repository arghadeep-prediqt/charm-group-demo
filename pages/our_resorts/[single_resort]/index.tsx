import ProfileContext from "@/contextAPI/ProfileContext";
import { useLazyGetSingleResortQuery } from "@/redux/services/resortApi";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingPage = dynamic(() => import("@/components/shared/LoadingPage"));
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
  const [getSingleResort, { data, isSuccess }] = useLazyGetSingleResortQuery();

  useEffect(() => {
    if (cookieToken) {
      getSingleResort({
        id: String(resort_id),
        token: cookieToken,
      });
    }
  }, [cookieToken, getSingleResort, resort_id]);

  return (
    <NavContainer>
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Container className="py-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TopCarousel thirdPhoto={data?.photo} />
            </motion.div>
          </Container>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <SectionTab
              name={data?.name || ""}
              resortId={String(resort_id)}
              isRci={data?.region === "International"}
              location={`${data?.location}, Vietnam`}
            />
          </motion.div>
        </motion.div>
      ) : (
        <div className="min-h-screen">
          <LoadingPage />
        </div>
      )}
    </NavContainer>
  );
}

export default SingleResortPage;
