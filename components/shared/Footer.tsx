import React from "react";
import { BlurImage } from "../ui/BluerImage";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#473bba] via-[#2a1f8f] to-[#463ab4] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Logo and Mission */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <BlurImage
                src={"/images/charm.png"}
                width={48}
                height={48}
                alt="charm"
                className="size-12 aspect-square"
              />
              <h1 className="text-2xl font-semibold text-white">CHARM</h1>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8">
              Connect and Share with the One You Care About
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: "/icons/facebook-light.svg", alt: "Facebook" },
                { icon: "/icons/pinterest-light.svg", alt: "Pinterest" },
                { icon: "/icons/instagram-light.svg", alt: "Instagram" },
              ].map((social) => (
                <a
                  key={social.alt}
                  href="#"
                  className="hover:opacity-75 transition-opacity"
                >
                  <BlurImage
                    src={social.icon}
                    alt={social.alt}
                    width={24}
                    height={24}
                    className="size-6 aspect-square"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Menu</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://charm.vn/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Business Partner Login
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>

            {/* Information Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Information
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Business Opportunity
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Investor Relations
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gourmet Getaways
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Resorts
                </a>
              </div>
            </div>

            {/* Contact Info Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Contact Info
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:info@charm.vn"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@charm.vn
                </a>
                <a
                  href="tel:092 1900000"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  092 1900000
                </a>
                <p className="text-gray-300">Dự án căn hộ mới</p>
                <p className="text-white">TPHCM Eaton Park Gamuda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Copyright © CHARM 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
