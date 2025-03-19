import React, { memo, useEffect, useState } from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";

import ListDropDown from "@/components/ui/ListDropDown";
import {
  itineraryMenuItems,
  ourResortMenuItems,
  privilegesMenuItems,
} from "@/components/lib/rawData";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
const Container = dynamic(() => import("../Container"));
const CustomNavBtn = dynamic(
  () => import("@/components/layouts/NavigationBar/CustomNavBtn")
);
const ProfileBtn = dynamic(
  () => import("@/components/layouts/NavigationBar/ProfileBtn")
);

function NavigationBar() {
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.user.is_auth);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Only add scroll listener on home route
    if (router.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Reset scrolled state when not on home page
      setScrolled(false);
    }
  }, [scrolled, router.pathname]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        router.pathname === "/"
          ? scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : ""
          : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <Container className="flex justify-between items-center py-3">
        {/* Logo Section */}
        <Link
          href={"/"}
          className="flex items-center gap-x-2 cursor-pointer group"
        >
          <BlurImage
            src={"/images/charm.png"}
            alt="logo"
            width={100}
            height={100}
            className="size-8 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h3 className="text-black font-medium tracking-wide">CHARM</h3>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center justify-end gap-x-8">
          {/* Menu Items */}
          <div className="flex items-center gap-x-6">
            <ListDropDown
              logo="https://img.icons8.com/ios-filled/100/2089ff/sun-lounger.png"
              title="Our Resorts"
              menuItems={ourResortMenuItems}
            />
            <ListDropDown
              logo="https://img.icons8.com/ios-filled/100/2089ff/crown.png"
              title="Exclusive Privileges"
              menuItems={privilegesMenuItems}
            />
            <ListDropDown
              logo="https://img.icons8.com/ios-filled/100/2089ff/path.png"
              title="My Itinerary"
              menuItems={itineraryMenuItems}
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-x-4">
            <CustomNavBtn
              logo="https://img.icons8.com/ios-filled/100/2089ff/ask-question--v1.png"
              title="need assistance?"
              link="/faqs"
            />

            {/* Auth Button */}
            {isAuth ? (
              <ProfileBtn />
            ) : (
              <button
                onClick={() => router.push("/auth")}
                className="px-5 py-2 text-p1-m text-white bg-gradient-to-r from-[#0B1121] to-[#2089ff] rounded-full
                         transition-all duration-300 hover:opacity-90 
                         hover:scale-105 active:scale-95"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default memo(NavigationBar);
