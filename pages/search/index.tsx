import React from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

const SearchTopTab = dynamic(
  () => import("@/components/templates/SearchPage/SearchTopTab")
);

function SearchPage() {
  return (
    <NavContainer>
      <section className="relative h-[87vh] w-screen">
        <BlurImage
          src={
            "https://common-booking-engine.gumlet.io/images/searchPageBanner.jpg?q=70&w=1920"
          }
          alt="background"
          width={1500}
          height={900}
          className="h-full w-full object-cover"
        />

        <div className="absolute py-[3%] top-0 left-0 w-full h-full bg-black/65 flex flex-col justify-between items-center">
          <h2 className="text-white font-medium text-center">
            Not sure where you want to holiday? Check out our{" "}
            <Link href="/our_resorts" className="text-sky-400">
              recommendations
            </Link>
          </h2>
          <h1 className="text-center text-[50px] leading-tight text-white font-medium">
            Plan your dream family holiday <br />
            with us
          </h1>
          <SearchTopTab />
        </div>
      </section>
    </NavContainer>
  );
}

export default SearchPage;
