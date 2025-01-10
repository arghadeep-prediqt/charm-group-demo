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
      <section className="relative h-[93vh] w-screen">
        <BlurImage
          src={
            "https://images.unsplash.com/photo-1489674267075-cee793167910?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="background"
          width={1500}
          height={900}
          className="h-full w-full object-cover object-top"
        />

        <div className="absolute py-[3%] top-0 left-0 w-full h-full bg-black/65 flex flex-col justify-between items-center">
          <div className="h-[70vh] flex flex-col justify-center items-center">
            <h1 className="text-center text-[50px] leading-tight text-white font-medium">
              Resorts Across Horizons
            </h1>
            <h2 className="mt-4 text-white font-medium w-8/12 text-center">
              Experience the diverse charm of Vietnam’s regions and indulge in
              our exclusive international{" "}
              <Link href="/our_resorts" className="text-amber-400">
                destinations
              </Link>
            </h2>
          </div>
          <SearchTopTab />
        </div>
      </section>
    </NavContainer>
  );
}

export default SearchPage;
