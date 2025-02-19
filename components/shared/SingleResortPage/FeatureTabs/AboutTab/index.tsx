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
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

function AboutTab({ name, setActiveIndex }: PageProps) {
  return (
    <React.Fragment>
      <div className="flex justify-start items-start">
        <div className="w-9/12 pe-12">
          <TopHeading params={name} />
          <h3 className="py-2 mt-4 text-gray-600 font-medium">About</h3>
          <p className="my-3 text-gray-600 leading-relaxed text-p1-r text-justify">
            {
              "Charm Resort Hồ Tràm spans an impressive 40 hectares, divided into three main subdivisions with distinct scales: subdivision 1 covering 7.2 hectares, subdivision 2 extending over 18.9 hectares, and subdivision 3 occupying 14.2 hectares. In an exciting development, the resort is set to launch subdivision 1, which will feature over 1,086 beachfront apartments, including studio, 1-bedroom, 2-bedroom, and 3-bedroom options. Additionally, 90 luxurious resort villas—ranging from Garden Villas to Ocean Villas—will provide an exceptional living experience for those seeking tranquility and sophistication. This project promises to become a landmark destination, illuminating the charm of the southern city."
            }
          </p>
          <p className="my-3 text-gray-600 leading-relaxed text-p1-r text-justify">
            {
              "Charm Resort Hồ Tràm enjoys a prime location, boasting 3 kilometers of pristine coastline. The endless expanse of clear blue sea and the lush green of pine forests create an enchanting natural setting. This unique combination of coastal beauty and verdant landscapes offers a harmonious blend of relaxation and vitality for visitors seeking an idyllic retreat."
            }
          </p>
          <p className="my-3 text-gray-600 leading-relaxed text-p1-r text-justify">
            {
              "Guests can immerse themselves in the serene atmosphere of the resort, where the rhythmic rustle of leaves accompanies the soothing sound of waves crashing along the shore. Whether sitting by the beach or strolling under the canopy of trees, visitors will feel their spirits rejuvenated and their minds refreshed. This tranquil environment provides an ideal escape from the stresses of daily life, allowing one to reconnect with nature and find peace."
            }
          </p>
          <p className="my-3 text-gray-600 leading-relaxed text-p1-r text-justify">
            {
              "As a beacon of luxury and natural beauty, Charm Resort Hồ Tràm exemplifies the perfect destination for leisure, relaxation, and rejuvenation. Its thoughtful design and harmonious integration with the surrounding environment make it a true paradise for those seeking an unparalleled coastal experience. With its diverse offerings and stunning location, the resort promises to redefine the standard of modern hospitality in the region."
            }
          </p>

          <h3 className="mt-8 mb-3 text-gray-600 font-medium">
            Resort Amenities
          </h3>

          <div className="w-full pb-6 pt-3 flex flex-wrap gap-4">
            {aminitiesData?.map((item, id) => (
              <AminitesBox key={id} {...item} />
            ))}
          </div>
        </div>
        <div className="w-3/12">
          <RightBookSection name={name} setActiveIndex={setActiveIndex} />
        </div>
      </div>

      <div className="w-full py-[5vh]">
        <h3 className="mb-5 text-gray-600 font-medium">
          Experiences & Activities
        </h3>
        <ThingsToDoSection />
      </div>

      <div className="w-full py-[5vh]">
        <h3 className="mb-5 text-gray-600 font-medium">Guest Experiences</h3>
        <MemberReview />
      </div>

      <div className="w-full py-[5vh]">
        <h3 className="font-medium text-gray-600">How to Reach Us</h3>
        <BlurImage
          src={
            "https://charm.vn/wp-content/uploads/2022/12/vi-tri-Charm-Resort-Ho-Tram-1.jpg"
          }
          alt="loation"
          width={1200}
          height={600}
          draggable={false}
          className="w-full h-full object-cover"
        />
      </div>
    </React.Fragment>
  );
}

export default AboutTab;
