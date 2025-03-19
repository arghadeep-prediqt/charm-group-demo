import React from "react";
import AminitesBox from "./AminitesBox";
import { aminitiesData } from "@/components/lib/rawData";
import dynamic from "next/dynamic";
import { BlurImage } from "@/components/ui/BluerImage";

const TopHeading = dynamic(
  () => import("@/components/templates/SingleResortPage/TopHeading")
);
const MemberReview = dynamic(() => import("./MemberReview"));
const RightBookSection = dynamic(() => import("./RightBookSection"));
const ThingsToDoSection = dynamic(() => import("./ThingsToDo"));

interface PageProps {
  name: string;
  location: string;
  isRci: boolean;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

function AboutTab({ name, location, isRci, setActiveIndex }: PageProps) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-8">
          <TopHeading params={name} location={location} />

          {/* About Section with modern typography */}
          <div className="space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-3">
              About the Resort
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p className="leading-relaxed">
                {
                  "Charm Resort Hồ Tràm spans an impressive 40 hectares, divided into three main subdivisions with distinct scales: subdivision 1 covering 7.2 hectares, subdivision 2 extending over 18.9 hectares, and subdivision 3 occupying 14.2 hectares. In an exciting development, the resort is set to launch subdivision 1, which will feature over 1,086 beachfront apartments, including studio, 1-bedroom, 2-bedroom, and 3-bedroom options. Additionally, 90 luxurious resort villas—ranging from Garden Villas to Ocean Villas—will provide an exceptional living experience for those seeking tranquility and sophistication. This project promises to become a landmark destination, illuminating the charm of the southern city."
                }
              </p>
              <p className="leading-relaxed">
                {
                  "Charm Resort Hồ Tràm enjoys a prime location, boasting 3 kilometers of pristine coastline. The endless expanse of clear blue sea and the lush green of pine forests create an enchanting natural setting. This unique combination of coastal beauty and verdant landscapes offers a harmonious blend of relaxation and vitality for visitors seeking an idyllic retreat."
                }
              </p>
              <p className="leading-relaxed">
                {
                  "Guests can immerse themselves in the serene atmosphere of the resort, where the rhythmic rustle of leaves accompanies the soothing sound of waves crashing along the shore. Whether sitting by the beach or strolling under the canopy of trees, visitors will feel their spirits rejuvenated and their minds refreshed. This tranquil environment provides an ideal escape from the stresses of daily life, allowing one to reconnect with nature and find peace."
                }
              </p>
              <p className="leading-relaxed">
                {
                  "As a beacon of luxury and natural beauty, Charm Resort Hồ Tràm exemplifies the perfect destination for leisure, relaxation, and rejuvenation. Its thoughtful design and harmonious integration with the surrounding environment make it a true paradise for those seeking an unparalleled coastal experience. With its diverse offerings and stunning location, the resort promises to redefine the standard of modern hospitality in the region."
                }
              </p>
            </div>
          </div>
        </div>

        {/* Right Booking Section with elevated design */}
        <div className="lg:col-span-4 sticky top-4 h-fit">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <RightBookSection
              name={name}
              location={location}
              isRci={isRci}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
      </div>

      {/* Amenities Section with modern grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Resort Amenities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {aminitiesData?.map((item, id) => (
            <AminitesBox key={id} {...item} />
          ))}
        </div>
      </section>

      {/* Experiences Section with cards */}
      <section className="mb-16 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Experiences & Activities
        </h2>
        <ThingsToDoSection />
      </section>

      {/* Guest Reviews Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Guest Experiences
        </h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <MemberReview />
        </div>
      </section>

      {/* Location Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          How to Reach Us
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <BlurImage
            src="https://charm.vn/wp-content/uploads/2022/12/vi-tri-Charm-Resort-Ho-Tram-1.jpg"
            alt="Resort Location"
            width={1200}
            height={600}
            draggable={false}
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutTab;
