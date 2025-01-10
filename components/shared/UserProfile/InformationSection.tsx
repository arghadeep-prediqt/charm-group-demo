import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { BlurImage } from "@/components/ui/BluerImage";
import { PencilLine } from "lucide-react";

function InformationSection() {
  return (
    <section
      id="info"
      className="mt-5 p-8 bg-gray-50 shadow-sm border border-gray-200 rounded-xl"
    >
      <h3 className="font-medium text-gray-800">Basic Infromation</h3>

      <div className="p-3">
        <AvatarSection />
        <FullName />
        <InputSection
          label="address"
          defaultValue="Rm. 1505, Fortuna Tower, 6B Lang Ha"
          placeholder="Your present address"
        />
        <InputSection
          label="contact number*"
          placeholder="Your Phone No. included country code"
          defaultValue="+84 09034867656"
        />
        <InputSection
          label="country"
          placeholder="Your Country Name"
          defaultValue="Vietnam"
        />
        <InputSection
          label="Language"
          placeholder="Your prefered languange"
          defaultValue="Vietnamese"
        />
        <InputSection
          label="time zone"
          placeholder="Your time zone"
          defaultValue="Hanoi (GMT+7)"
        />
        <InputSection
          label="currency*"
          placeholder="Your currency"
          defaultValue="Vietnam đồng (₫)"
        />
        <CommunicationSec />
        <AlertSection />

        <hr className="bg-gray-200 my-10" />

        <div className="pt-2 flex justify-end items-center gap-x-5">
          <button className="px-4 py-2 text-[14px] text-amber-600 font-semibold bg-amber-50 rounded-lg border border-amber-300 shadow-sm active:opacity-70">
            Discard
          </button>

          <button className="px-4 py-2 text-[14px] text-gray-700 font-semibold bg-yellow-300 border border-yellow-400 shadow-sm rounded-lg active:opacity-70">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;

function AvatarSection() {
  return (
    <div className="py-5 flex flex-col justify-center items-center gap-x-2">
      <div className="relative">
        <BlurImage
          src={"/images/profile.jpg"}
          alt="profile"
          width={200}
          height={200}
          className="size-28 p-1 bg-amber-200 shadow-sm rounded-full"
        />

        <PencilLine className="size-7 absolute p-1.5 top-1 right-1 z-20 text-gray-600 bg-amber-50 border border-yellow-400 shadow-sm  rounded-full" />
      </div>

      <div className="mt-4">
        <p className="text-[20px] leading-relaxed text-center font-medium text-gray-800">
          Hồng Oanh
        </p>
        <p className="text-[16px] leading-relaxed text-center text-gray-600 font-semibold">
          Hồng_Oanh@charm.vn
        </p>
        <p className="text-[16px] mt-2 leading-relaxed text-center text-gray-600 font-medium">
          Membership ID - <span className="font-semibold">0255514</span>
        </p>
        <p className="text-[16px] leading-relaxed text-center text-gray-600 font-medium">
          Membership Plan - <span className="font-semibold">Navigator</span>
        </p>
        <p className="text-[16px] leading-relaxed text-center text-gray-600 font-medium">
          Autopay on <span className="font-semibold">Dec 09, 2025</span>
        </p>
      </div>
    </div>
  );
}

function FullName() {
  return (
    <div className="mt-6 flex justify-start items-center gap-x-2">
      <p className="w-2/12 text-[16px] text-gray-800 font-medium">Full Name*</p>

      <div className="pe-5 w-10/12 flex justify-start items-center gap-x-6">
        <input
          type="text"
          placeholder="First Name"
          defaultValue={"Hồng"}
          className="w-6/12 ring-[2px] ring-gray-300 text-p1-m py-2 px-4 rounded-xl shadow-sm focus:outline-none focus:ring-blue-400 placeholder:text-gray-600 text-gray-700"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={"Oanh"}
          className="w-6/12 ring-[2px] ring-gray-300 text-p1-m py-2 px-4 rounded-xl shadow-sm focus:outline-none focus:ring-blue-400 placeholder:text-gray-600 text-gray-700"
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
      <p className="w-2/12 text-[16px] text-gray-800 font-medium capitalize">
        {label}
      </p>

      <div className="pe-5 w-10/12">
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="w-full ring-[2px] ring-gray-300 text-p1-m py-2 px-4 rounded-xl shadow-sm focus:outline-none focus:ring-amber-400 placeholder:text-gray-600 text-gray-700"
          required
        />
      </div>
    </div>
  );
}

function CommunicationSec() {
  return (
    <div className="mt-6 flex justify-start items-center gap-x-2">
      <p className="w-2/12 text-[16px] text-gray-800 font-medium capitalize">
        Communication
      </p>

      <div className="pe-5 w-10/12 flex justify-start items-center gap-x-3">
        <div className="flex justify-start items-center gap-x-2">
          <input id="email" type="checkbox" className="size-5" required />
          <label htmlFor="email" className="text-p1-m text-gray-700">
            Email
          </label>
        </div>

        <div className="flex justify-start items-center gap-x-2">
          <input
            id="email"
            type="checkbox"
            defaultChecked={true}
            className="size-5 accent-amber-300"
            required
          />
          <label htmlFor="email" className="text-p1-m text-gray-700">
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
      <p className="w-2/12 text-[16px] text-gray-800 font-medium capitalize">
        Offer Alerts
      </p>

      <div className="pe-5 w-10/12">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-amber-400"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>
      </div>
    </div>
  );
}
