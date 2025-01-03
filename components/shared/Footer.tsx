import React from "react";
import { BlurImage } from "../ui/BluerImage";

function Footer() {
  return (
    <footer className="relative bg-[#0F1C28] text-white py-[10vh]">
      <div className="container px-4 mx-auto flex justify-between items-start">
        {/* Logo and Copyright */}
        <div>
          <div className="flex flex-col items-start justify-start gap-2">
            <BlurImage
              src={"/images/charm.png"}
              width={100}
              height={100}
              alt="charm"
              className="size-18 aspect-square"
            />
            <h1 className="text-white">CHARM</h1>
          </div>
          <p className="mt-4">Copyright © CHARM 2024 All rights reserved</p>
        </div>

        {/* Menu */}
        <div>
          <div className="text-h4-semi-bold mb-4">Menu</div>

          <div className="flex flex-col gap-2">
            <a href="https://charm.vn/" className="text-p1-r hover:underline">
              About Us
            </a>
            <a href="#" className="text-p1-r hover:underline">
              Business Partner Login
            </a>
            <a href="#" className="text-p1-r hover:underline">
              Sitemap
            </a>
          </div>
        </div>

        {/* Information */}
        <div>
          <div className="text-h4-semi-bold mb-4">Information</div>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-p1-r hover:underline">
              Business Opportunity
            </a>
            <a href="#" className="text-p1-r hover:underline">
              Investor Relations
            </a>
            <a href="#" className="text-p1-r hover:underline">
              Gourmet Getaways
            </a>
            <a href="#" className="text-p1-r hover:underline">
              Our Resorts
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <div className="text-h4-semi-bold mb-4">Contact Info</div>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:info@charm.vn"
              className="text-p1-r hover:underline"
            >
              info@charm.vn
            </a>
            <a href="tel:092 1900000" className="text-p1-r hover:underline">
              092 1900000
            </a>
            <p className="text-p1-r">Dự án căn hộ mới</p>
            <p className="text-p1-m">TPHCM Eaton Park Gamuda</p>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="leading-relaxed text-white">{"Let's"} Get Social</h4>
          <p className="mb-4 text-p2-r text-white">
            Connect and Share with the One You Care About
          </p>
          <div className="mt-4 flex justify-start items-start space-x-4">
            <a href="#" className="hover:opacity-75">
              <BlurImage
                src={"/icons/facebook-light.svg"}
                alt="Facebook"
                width={100}
                height={100}
                className="size-8 aspect-square"
              />
            </a>
            <a href="#" className="hover:opacity-75">
              <BlurImage
                src={"/icons/pinterest-light.svg"}
                alt="Pinterest"
                width={100}
                height={100}
                className="size-10 aspect-square"
              />
            </a>
            <a href="#" className="hover:opacity-75">
              <BlurImage
                src={"/icons/instagram-light.svg"}
                alt="Instagram"
                width={100}
                height={100}
                className="size-8 aspect-square"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
