import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { BlurImage } from "@/components/ui/BluerImage";

function ConnectedAppSection() {
  return (
    <section
      id="connected"
      className="mt-5 p-8 bg-gray-50 shadow-sm border border-gray-200 rounded-xl"
    >
      <h3 className="font-medium text-gray-800">Connected Accounts</h3>

      <div className="mt-12 px-6 divide-y divide-gray-300">
        <SocialRow
          name="goole"
          logo={"/icons/google.svg"}
          subTitle="Sync Your Travel Itinerary"
          isChecked={true}
        />
        <SocialRow
          name="facebook"
          logo={"/icons/facebook.svg"}
          subTitle="Share Travel Stories and Experiences"
          isChecked={true}
        />
        <SocialRow
          name="instagram"
          logo={"/icons/instagram.svg"}
          subTitle="Showcase Your Travel Moments"
          isChecked={false}
        />
        <SocialRow
          name="twitter"
          logo={"/icons/twitter.svg"}
          subTitle="Stay Updated with Travel News"
          isChecked={false}
        />
      </div>

      <hr className="bg-gray-200 my-10" />

      <div className="pt-2 flex justify-end items-center gap-x-5">
        <button className="px-4 py-2 text-[14px] text-blue-600 font-semibold bg-blue-50 rounded-lg border border-blue-300 shadow-sm active:opacity-70">
          Discard
        </button>

        <button className="px-4 py-2 text-[14px] text-gray-700 font-semibold bg-blue-300 border border-blue-400 shadow-sm rounded-lg active:opacity-70">
          Save Changes
        </button>
      </div>
    </section>
  );
}

export default ConnectedAppSection;

interface SocialRowProps {
  logo: string;
  name: string;
  subTitle: string;
  isChecked: boolean;
}

function SocialRow({ name, subTitle, logo, isChecked }: SocialRowProps) {
  const [enabled, setEnabled] = useState<boolean>(isChecked);

  return (
    <div className="py-4 flex justify-between items-center">
      <div className="w-6/12">
        <div className="flex justify-start items-center gap-x-4">
          <BlurImage
            src={logo}
            alt={name}
            width={200}
            height={200}
            className="size-10"
          />
          <div className="text-start">
            <p className="text-[16px] font-semibold text-gray-800 capitalize">
              {name}
            </p>
            <p className="text-[14px] text-gray-600 capitalize">{subTitle}</p>
          </div>
        </div>
      </div>
      <div className="w-6/12">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-400"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>
      </div>
    </div>
  );
}
