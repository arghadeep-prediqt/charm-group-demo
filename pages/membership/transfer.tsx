import dynamic from "next/dynamic";
import React from "react";

const ChatBot = dynamic(() => import("@/components/shared/ChatBot"));
const InputCustom = dynamic(() => import("@/components/ui/InputCustom"));
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const LeftSideNav = dynamic(
  () => import("@/components/shared/ProfilePage/LeftSideNav")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function MembershipTransferPage() {
  return (
    <NavContainer>
      <TopBanner
        photo="https://images.unsplash.com/photo-1693745199505-72a44e1dbccc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Ownership Transfer"
        subTitle="We're excited to help you transition your ownership with ease. Let’s get started."
      />

      <div className="px-4 flex justify-start items-start overflow-auto scrollbarY">
        <div className="w-[20vw] p-4 sticky top-0">
          <LeftSideNav />
        </div>

        <div className="ps-12 w-[80vw] relative">
          <h1 className="py-2 ps-1 mt-5 border-b border-gray-500">
            What’s Happening?
          </h1>
          <p className="text-p1-r py-2 w-10/12 text-justify leading-relaxed">
            You’re transferring your exclusive membership benefits to a new
            member. This process ensures that all privileges are seamlessly
            handed over.
          </p>

          <h1 className="py-2 ps-1 mt-5 border-b border-gray-500">
            How to Get Started
          </h1>

          <ul className="ps-4 mt-2 list-disc">
            <li className="text-p1-r py-2 w-10/12 text-justify leading-relaxed">
              <p className="text-p1-b">Verify Yourself</p>
              <p className="text-p1-r text-gray-700">
                Confirm your membership details to proceed.
              </p>
            </li>
            <li className="text-p1-r py-2 w-10/12 text-justify leading-relaxed">
              <p className="text-p1-b">Introduce the New Member</p>
              <p className="text-p1-r text-gray-700">
                Confirm your membership details to proceed.
              </p>
            </li>
            <li className="text-p1-r py-2 w-10/12 text-justify leading-relaxed">
              <p className="text-p1-b">Finalize the Transfer</p>
              <p className="text-p1-r text-gray-700">
                Confirm your membership details to proceed.
              </p>
            </li>
          </ul>

          <h1 className="py-2 ps-1 mt-5 border-b border-gray-500">
            Things to Remember
          </h1>

          <ul className="ps-4 mt-2 list-disc">
            <li className="text-p1-r py-2 w-10/12 text-justify leading-relaxed">
              <span className="text-p1-b">It’s Quick: </span>
              <span className="text-p1-r text-gray-700">
                Our process is designed to be seamless and user-friendly.
              </span>
            </li>
            <li className="text-p1-r py-2 w-10/12 text-justify leading-relaxed">
              <span className="text-p1-b">Consent Required: </span>
              <span className="text-p1-r text-gray-700">
                Both the current and new members must approve the transfer.
              </span>
            </li>
            <li className="text-p1-r py-2 w-10/12 text-justify leading-relaxed">
              <span className="text-p1-b">Accuracy is Key: </span>
              <span className="text-p1-r text-gray-700">
                Ensure all details are up-to-date in your profile for a smooth
                experience.
              </span>
            </li>
            <li className="text-p1-r py-2 w-10/12 text-justify leading-relaxed">
              <span className="text-p1-b">External Transfers: </span>
              <span className="text-p1-r text-gray-700">
                For transfers outside the membership network, additional steps
                may apply.
              </span>
            </li>
          </ul>

          <h1 className="py-2 ps-1 mt-5 border-b border-gray-500">
            {"Let’s Get Started"}
          </h1>

          <p className="text-p1-r py-2 w-10/12 text-justify leading-relaxed">
            Fill out the form below to complete your membership transfer and
            pass on the privileges seamlessly.
          </p>

          <h3 className="py-2 ps-1 mt-5 text-gray-600">
            Current Member Information
          </h3>

          <div className="mb-4 w-10/12 flex justify-start items-end gap-x-4">
            <div className="w-6/12">
              <InputCustom label="Full Name" isBorder isAutoWidth />
            </div>
            <div className="w-6/12">
              <InputCustom label="Membership ID" isBorder isAutoWidth />
            </div>
          </div>

          <div className="mb-4 w-10/12 flex justify-start items-end gap-x-4 gap-y-2">
            <div className="w-6/12">
              <InputCustom label="Email Address" isBorder isAutoWidth />
            </div>
            <div className="w-6/12">
              <InputCustom
                label="Registered Mobile Number"
                isBorder
                isAutoWidth
              />
            </div>
          </div>

          <h3 className="py-2 ps-1 mt-5 text-gray-600">
            New Member Information
          </h3>

          <div className="mb-4 w-10/12 flex justify-start items-end gap-x-4 gap-y-2">
            <div className="w-6/12">
              <InputCustom label="Full Name" isBorder isAutoWidth />
            </div>
            <div className="w-6/12">
              <InputCustom label="Email Address" isBorder isAutoWidth />
            </div>
          </div>

          <div className="mb-4 w-10/12 flex justify-start items-end gap-x-4 gap-y-2">
            <div className="w-6/12">
              <InputCustom label="Mobile Number" isBorder isAutoWidth />
            </div>
            <div className="w-6/12">
              <InputCustom label="Address" isBorder isAutoWidth />
            </div>
          </div>

          <h3 className="py-2 ps-1 mt-5 text-gray-600">
            New Member Information
          </h3>

          <div className="mb-4 w-10/12 flex justify-start items-end gap-x-4 gap-y-2">
            <div className="w-6/12">
              <InputCustom label="Reason for Transfer" isBorder isAutoWidth />
            </div>
            <div className="w-6/12">
              <InputCustom
                label="Additional Notes (Optional)"
                isBorder
                isAutoWidth
              />
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center gap-x-2">
            <input type="checkbox" className="size-4" />
            <p className="text-p2-m text-gray-700">
              I confirm that all information provided above is accurate.
            </p>
          </div>

          <div className="mb-3 flex justify-start items-center gap-x-2">
            <input type="checkbox" className="size-4" />
            <p className="text-p2-m text-gray-700">
              I consent to the terms and conditions of the membership transfer
              process.
            </p>
          </div>

          <button className="mb-10 mt-3 bg-amber-50 border border-amber-300 text-amber-600 text-p1-m py-2 px-4 rounded-lg shadow-sm">
            Submit
          </button>
          <ChatBot />
        </div>
      </div>
    </NavContainer>
  );
}

export default MembershipTransferPage;
