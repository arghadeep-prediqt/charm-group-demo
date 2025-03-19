import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { BlurImage } from "@/components/ui/BluerImage";
import { PencilLine } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";

function InformationSection() {
  return (
    <section
      id="info"
      className="mt-5 p-8 bg-white shadow-lg border border-gray-200 rounded-2xl"
    >
      <h3 className="font-semibold text-gray-900 text-xl mb-4">
        Basic Information
      </h3>

      <div className="p-4 space-y-6">
        <AvatarSection />
        <FullName />
        <InputSection
          label="Address"
          defaultValue="Rm. 1505, Fortuna Tower, 6B Lang Ha"
          placeholder="Your present address"
        />
        <InputSection
          label="Contact Number*"
          placeholder="Your Phone No. included country code"
          defaultValue="+84 09034867656"
        />
        <InputSection
          label="Country"
          placeholder="Your Country Name"
          defaultValue="Vietnam"
        />
        <InputSection
          label="Language"
          placeholder="Your preferred language"
          defaultValue="Vietnamese"
        />
        <InputSection
          label="Time Zone"
          placeholder="Your time zone"
          defaultValue="Hanoi (GMT+7)"
        />
        <InputSection
          label="Currency*"
          placeholder="Your currency"
          defaultValue="Vietnam đồng (₫)"
        />
        <CommunicationSec />
        <AlertSection />

        <hr className="bg-gray-300 my-8" />

        <div className="pt-2 flex justify-end items-center gap-x-5">
          <button className="px-4 py-2 text-sm text-blue-700 font-semibold bg-blue-100 rounded-lg border border-blue-300 shadow-md hover:bg-blue-200 transition">
            Discard
          </button>

          <button className="px-4 py-2 text-sm text-white font-semibold bg-yellow-500 border border-yellow-600 shadow-md rounded-lg hover:bg-yellow-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;

function AvatarSection() {
  const userDetails = useAppSelector((state) => state.user);

  return (
    <div className="py-5 flex flex-col justify-center items-center gap-x-2">
      <div className="relative">
        <BlurImage
          src={userDetails?.image}
          alt={userDetails?.name}
          width={200}
          height={200}
          className="size-28 p-1 bg-blue-200 shadow-md rounded-full"
        />

        <PencilLine className="size-7 absolute p-1.5 top-1 right-1 z-20 text-gray-600 bg-blue-50 border border-yellow-400 shadow-md rounded-full hover:bg-blue-100 transition" />
      </div>

      <div className="mt-4 text-center">
        <p className="text-lg font-medium text-gray-800 capitalize">
          {userDetails?.name}
        </p>
        <p className="text-md text-gray-600 font-semibold">
          {userDetails?.email}
        </p>
        <p className="text-md mt-2 text-gray-600 font-medium">
          Membership ID - <span className="font-semibold">0255514</span>
        </p>
        <p className="text-md text-gray-600 font-medium">
          Membership Plan -{" "}
          <span className="font-semibold capitalize">{userDetails?.role}</span>
        </p>
        <p className="text-md text-gray-600 font-medium">
          Autopay on <span className="font-semibold">Dec 09, 2025</span>
        </p>
      </div>
    </div>
  );
}

function FullName() {
  const userDetails = useAppSelector((state) => state.user);

  return (
    <div className="mt-6 flex justify-start items-center gap-x-2">
      <p className="w-2/12 text-md text-gray-800 font-medium">Full Name*</p>

      <div className="pe-5 w-10/12 flex justify-start items-center gap-x-6">
        <input
          type="text"
          placeholder="First Name"
          defaultValue={userDetails?.name?.split(" ")[0]}
          className="w-6/12 ring-2 ring-gray-300 text-md py-2 px-4 rounded-xl shadow-md focus:outline-none focus:ring-blue-400 placeholder:text-gray-600 text-gray-700"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          defaultValue={userDetails?.name?.split(" ")[1]}
          className="w-6/12 ring-2 ring-gray-300 text-md py-2 px-4 rounded-xl shadow-md focus:outline-none focus:ring-blue-400 placeholder:text-gray-600 text-gray-700"
          required
        />
      </div>
    </div>
  );
}

function InputSection({
  label,
  placeholder,
  defaultValue = "",
}: {
  label: string;
  placeholder: string;
  defaultValue?: string;
}) {
  return (
    <div className="mt-6 flex justify-start items-center gap-x-2">
      <p className="w-2/12 text-md text-gray-800 font-medium capitalize">
        {label}
      </p>

      <div className="pe-5 w-10/12">
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="w-full ring-2 ring-gray-300 text-md py-2 px-4 rounded-xl shadow-md focus:outline-none focus:ring-blue-400 placeholder:text-gray-600 text-gray-700"
          required
        />
      </div>
    </div>
  );
}

function CommunicationSec() {
  return (
    <div className="mt-6 flex justify-start items-center gap-x-2">
      <p className="w-2/12 text-md text-gray-800 font-medium capitalize">
        Communication
      </p>

      <div className="pe-5 w-10/12 flex justify-start items-center gap-x-3">
        <div className="flex justify-start items-center gap-x-2">
          <input id="email" type="checkbox" className="size-5" required />
          <label htmlFor="email" className="text-md text-gray-700">
            Email
          </label>
        </div>

        <div className="flex justify-start items-center gap-x-2">
          <input
            id="phone"
            type="checkbox"
            defaultChecked={true}
            className="size-5 accent-blue-300"
            required
          />
          <label htmlFor="phone" className="text-md text-gray-700">
            Phone
          </label>
        </div>
      </div>
    </div>
  );
}

function AlertSection() {
  const [enabled, setEnabled] = useState<boolean>(true);

  return (
    <div className="mt-6 flex justify-start items-center gap-x-2">
      <p className="w-2/12 text-md text-gray-800 font-medium capitalize">
        Offer Alerts
      </p>

      <div className="pe-5 w-10/12">
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
