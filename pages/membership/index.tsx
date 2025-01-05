import { SelectedProps } from "@/components/@types/pages";
import { BlurImage } from "@/components/ui/BluerImage";
import SelectListBoxHigh from "@/components/ui/SelectListBoxHigh";
import {
  Calendar,
  ChevronLeft,
  Home,
  MinusCircle,
  PlusCircle,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Container = dynamic(() => import("@/components/shared/Container"));
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

const optionDate = [
  { id: 0, name: "2 Nights" },
  { id: 1, name: "3 Nights" },
  { id: 2, name: "4 Nights" },
  { id: 3, name: "5 Nights" },
  { id: 4, name: "6 Nights" },
  { id: 5, name: "7 Nights" },
];

function MembershipPage() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectedProps>(optionDate[0]);

  return (
    <NavContainer>
      <Container className="pt-10 h-full flex justify-between items-start gap-x-[5%] bg-gray-100">
        <div className="w-[30%] h-full flex flex-col justify-between items-start">
          <h3 className="mb-10">Membership</h3>
          <p className="text-p1-m text-gray-600">
            A Club mahindra membership is your ticket to many years of
            fun-filled family vacations.
          </p>

          <div
            className={`${
              isEdit ? "bg-transparent" : "bg-white"
            } py-4 px-5 mt-10 flex justify-between items-center gap-x-2 rounded-2xl`}
          >
            {(!isEdit && (
              <>
                <p className="w-8/12 text-p2-r">
                  {"Let's us help you with better Recommendations plans"}
                </p>
                <div className="w-4/12 flex justify-end">
                  <button
                    onClick={() => setIsEdit(!isEdit)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-white text-p3-b active:opacity-65"
                  >
                    Get Started
                  </button>
                </div>
              </>
            )) || <div>&nbsp;</div>}
          </div>

          <BlurImage
            src={"/images/membership0.png"}
            alt="membership0"
            width={400}
            height={400}
            className="my-10 w-full h-full object-contain"
          />
        </div>

        <div className="w-[65%]">
          {(!isEdit && (
            <BlurImage
              src={"/images/membership2.png"}
              alt="membership2"
              width={400}
              height={400}
              className="h-full object-contain rounded-xl"
            />
          )) || <MembershipForm setIsEdit={setIsEdit} />}
        </div>
      </Container>

      <Container className="pt-16 pb-10 h-full flex justify-between items-start gap-x-[5%] bg-gray-100">
        <div className="w-7/12">
          <div className="flex justify-between items-end">
            <div className="capitalize">
              <h3>Holiday Calculator</h3>
              <p className="text-p2-r">Choose your holiday duration</p>
            </div>

            <div className="w-fit">
              <SelectListBoxHigh
                selectedData={optionDate}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </div>

          <BlurImage
            src={`/member/fig${selected?.id + 1}.png`}
            alt={`fig ${selected.id}`}
            width={1200}
            height={600}
            className="mt-12 w-full h-full object-contain"
          />
        </div>
        <div className="w-5/12 bg-white p-10 rounded-2xl">
          <div className="py-4 px-4 border border-gray-200 flex justify-between items-center rounded-xl">
            <div className="flex justify-start items-center gap-x-3">
              <Home className="size-5 text-yellow-500" />
              <p className="text-p2-m">Session Chart</p>
            </div>
            <button
              onClick={() => router.push("/session_chart")}
              className="text-p3-b text-sky-500 px-6 py-1.5 border border-sky-500 rounded-full"
            >
              View
            </button>
          </div>

          <div className="my-5 py-4 px-4 border border-gray-200 flex justify-between items-center rounded-xl">
            <div className="flex justify-start items-center gap-x-3">
              <Calendar className="size-5 text-yellow-500" />
              <div className="capitalize">
                <p className="text-p2-m">Room types</p>
                <p className="text-p3-r text-gray-700">
                  View all rooms with just a few clicks
                </p>
              </div>
            </div>
            <button className="text-p3-b text-sky-500 px-6 py-1.5 border border-sky-500 rounded-full">
              View
            </button>
          </div>

          <p className="my-5 text-p1-b text-gray-700">
            How to get access to higher seasons?
          </p>

          <p className="mb-5 text-p2-r text-gray-700">
            Upgrade your membership to travel in pick season with all your loved
            ones.Check out the recommended upgrade plans and enjoy the benefits.
          </p>

          <p className="my-5 text-p1-b text-gray-700">How Does it work?</p>

          <p className="mb-5 text-p2-r text-gray-700">
            The Holiday Calculator shows the number of nights that will be
            debited from your inventory balance if you were to travel in a
            different season and apartment type. For example - If the user wants
            to avail as 2-night holiday as a Blue Studio member, 2 nights will
            be debited if {"they're"} travelling in Blue Season and avail a
            Studio Room. However, if the decide to travel in a different season
            & apartment type, their inventory debit may vary.
          </p>
        </div>
      </Container>
    </NavContainer>
  );
}

export default MembershipPage;

interface MembershipFromProps {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

function MembershipForm({ setIsEdit }: MembershipFromProps) {
  const [adult, setAdult] = useState<number>(2);
  const [children, setChildren] = useState<number>(1);

  return (
    <div className="w-full flex bg-white border border-gray-300 rounded-2xl">
      <div className="w-[50%] h-full p-5">
        <div className="pb-9 w-full flex justify-start items-start gap-x-2">
          <button
            onClick={() => setIsEdit(false)}
            className="active:opacity-65"
          >
            <ChevronLeft className="text-gray-700" />
          </button>
          <h4 className="text-gray-700">
            Help us with these details so we can offer you the best upgrades.
          </h4>
        </div>

        <div className="px-4">
          <p className="mt-3 text-p2-b">
            1. How many people do you usually travel with?
          </p>

          <div className="p-3 flex justify-start items-center gap-x-2">
            <div className="w-4/12">
              <p className="text-p2-r">No of Adults</p>
            </div>
            <div className="w-3/12 flex justify-between items-center gap-x-2">
              <button
                className="active:opacity-65"
                onClick={() => adult > 1 && setAdult(adult - 1)}
              >
                <MinusCircle className="size-6 text-sky-400" />
              </button>
              <p className="text-p1-m text-sky-400">{adult}</p>
              <button
                className="active:opacity-65"
                onClick={() => setAdult(adult + 1)}
              >
                <PlusCircle className="size-6 text-sky-400" />
              </button>
            </div>
          </div>

          <div className="p-3 flex justify-start items-center gap-x-2">
            <div className="w-4/12">
              <p className="text-p2-r">No of Kids</p>
            </div>
            <div className="w-3/12 flex justify-between items-center gap-x-2">
              <button
                className="active:opacity-65"
                onClick={() => children > 1 && setChildren(children - 1)}
              >
                <MinusCircle className="size-6 text-sky-400" />
              </button>
              <p className="text-p1-m text-sky-400">{children}</p>
              <button
                className="active:opacity-65"
                onClick={() => setChildren(children + 1)}
              >
                <PlusCircle className="size-6 text-sky-400" />
              </button>
            </div>
          </div>

          <p className="mt-6 text-p2-b">
            2.Do you like to travel with your friends/relatives?
          </p>

          <div className="ps-4 mt-3 flex justify-start items-start gap-x-3">
            <div className="capitalize">
              <input type="radio" id="yes" name="travel" defaultValue="yes" />
              <label htmlFor="yes" className="ps-2  text-p2-m">
                yes
              </label>
            </div>
            <div className="capitalize">
              <input type="radio" id="no" name="travel" defaultValue="no" />
              <label htmlFor="no" className="ps-2 text-p2-m">
                no
              </label>
            </div>
          </div>

          <p className="mt-6 text-p2-b">
            3. When do you prefer to holiday in a year?
          </p>

          <div className="ps-4 mt-3 w-10/12 flex flex-wrap justify-between items-start gap-3">
            <div className="capitalize">
              <input
                type="radio"
                name="festivals"
                id="festivals"
                defaultValue="festivals"
              />
              <label htmlFor="festivals" className="ps-2 text-p2-m">
                festivals
              </label>
            </div>
            <div className="capitalize">
              <input
                type="radio"
                name="vacation"
                id="vacation"
                defaultValue="vacation"
              />
              <label htmlFor="vacation" className="ps-2 text-p2-m">
                school vacation
              </label>
            </div>
            <div className="capitalize">
              <input type="radio" name="off" id="off" defaultValue="off" />
              <label htmlFor="off" className="ps-2 text-p2-m">
                off-season
              </label>
            </div>
          </div>

          <button
            className="mt-10 px-10 py-2 bg-gradient-to-r from-sky-400 to-blue-400 text-p1-b text-white rounded-full disabled:opacity-65"
            disabled
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-[50%]">
        <BlurImage
          src={"/images/membership1.png"}
          alt="membership1"
          width={400}
          height={400}
          className="w-full h-full object-contain rounded-tr-2xl rounded-br-2xl bg-[#f1f2f6]"
        />
      </div>
    </div>
  );
}
