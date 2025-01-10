import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const CompassTopNav = dynamic(
  () => import("@/components/templates/SearchPage/CompassTopNav")
);
function MagicCompassPage() {
  const router = useRouter();
  return (
    <NavContainer>
      <section className="h-[93vh] w-screen relative">
        <BlurImage
          src={
            "https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="background"
          width={1500}
          height={900}
          className="h-full w-full object-cover"
        />

        <div className="absolute py-[3%] top-0 left-[50%] -translate-x-[50%] w-full h-full flex flex-col justify-end items-center bg-black/40">
          <div className="flex flex-col justify-start items-center gap-6 w-full mb-5">
            <div className="w-full ps-52 pb-10 flex justify-center items-center">
              <BlurImage
                src={"/icons/feather.svg"}
                alt="feather"
                width={200}
                height={200}
                className="w-[350px] object-contain"
              />
            </div>

            <h1 className="text-center w-9/12 text-white">
              Unlock the Journey to Paradise
            </h1>

            <CompassTopNav />

            <button
              type="submit"
              onClick={() =>
                router.push("/our_resorts/club%20mahindra%20mussoorie%20resort")
              }
              className="bg-yellow-50 capitalize border-2 border-yellow-300 text-amber-600 text-[20px] font-medium py-2.5 px-8 rounded-full"
            >
              let the feather guide you
            </button>
          </div>
        </div>
      </section>
    </NavContainer>
  );
}

export default MagicCompassPage;
