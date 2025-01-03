import React from "react";
import AminitesBox from "./AminitesBox";
import { aminitiesData } from "@/components/lib/rawData";
import dynamic from "next/dynamic";
import { BlurImage } from "@/components/ui/BluerImage";

const MemberReview = dynamic(() => import("./MemberReview"));
const RightBookSection = dynamic(() => import("./RightBookSection"));
const ThingsToDoSection = dynamic(() => import("./ThingsToDo"));

interface PageProps {
  name: string;
}

function AboutTab({ name }: PageProps) {
  return (
    <React.Fragment>
      <div className="flex justify-start items-start">
        <div className="w-9/12 pe-4">
          <div className="py-3 flex justify-start items-center gap-x-8 divide-x divide-gray-400">
            <div className="flex justify-start items-center gap-x-2">
              <h3 className="text-primary-600">6° C</h3>
              <p className="uppercase text-p2-m text-gray-500">
                overcast clouds
              </p>
            </div>

            <p className="ps-8 text-p1-r text-gray-500">
              Dehradun - 70 kms - 2 hours 30 mins
            </p>
          </div>

          <h3 className="my-3 font-medium">About</h3>
          <p className="my-3 text-p1-r">
            {
              "A Club Mahindra Managed Resort Snuggled against the rugged, snowy Himalayan mountains is your holiday haven - Club Mahindra White Meadows Resort in Manali, Himachal Pradesh. Step into our foyer and let the warmth wash over you. Here, at our Manali resort and spa, you can enjoy adventure activities like zip lining and hiking, family events like picnics and karaoke sessions, river rafting and safaris. At the end of the day, you can sit down and bond over dishes of steaming fried rice and glossy Manchurian. Manali is a gift that keeps giving. One location that generously offers you high mountains and deep valleys, rushing rivers and calm blue skies. Cupped in all this beauty is the hill station itself, with charming old temples, bustling markets, paragliding and skiing opportunities, hiking trails and Jeep safaris, museums, cafes and more. So, if you’re saving that precious time off work for a holiday, make your way to Club Mahindra’s resort in Manali."
            }
          </p>

          <h3 className="mt-8 mb-3 font-medium">Amenities</h3>

          <div className="w-full pb-6 pt-3 flex flex-wrap gap-4">
            {aminitiesData?.map((item, id) => (
              <AminitesBox key={id} {...item} />
            ))}
          </div>
        </div>
        <div className="w-3/12">
          <RightBookSection name={name} />
        </div>
      </div>

      <div className="w-full py-[5vh]">
        <h3 className="mb-5 font-medium">Things to Do</h3>
        <ThingsToDoSection />
      </div>

      <div className="w-full py-[5vh]">
        <h3 className="mb-5 font-medium">Member Reviews</h3>
        <MemberReview />
      </div>

      <div className="w-full py-[5vh]">
        <h3 className="font-medium">Location</h3>
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
