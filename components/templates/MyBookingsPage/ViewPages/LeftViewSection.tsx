import React, { useCallback, useState } from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks";
import { ChevronLeft } from "lucide-react";
import { useCancelledBookedResortMutation } from "@/redux/services/resortApi";
import toast from "react-hot-toast";

interface PageProps {
  id: string;
  type: string;
  token: string;
  status: string;
}

function LeftViewSection({ id, token, status, type }: PageProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();
  const subscription = useAppSelector((state) => state.user.role);
  const [cancelledBookedResort] = useCancelledBookedResortMutation();

  const handleCancel = useCallback(async () => {
    setIsClicked(true);
    const toastId = toast.loading("Cancelling booking...");

    try {
      const response = await cancelledBookedResort({ bookingId: id, token });

      if (response?.data) {
        toast.success("Booking is cancelled.", { id: toastId });
        router.push("/my_bookings");
      } else {
        throw new Error("Unable to cancel booking");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to cancel the booking", { id: toastId });
    } finally {
      setIsClicked(false);
    }
  }, [cancelledBookedResort, id, router, token]);

  return (
    <div className="w-[30%] border border-gray-200 shadow-sm rounded-2xl sticky top-14">
      {/* Bottom Section */}
      <div className="mt-3 py-4 px-6">
        <div className="pb-3 border-b border-gray-400 flex justify-start items-center gap-x-2">
          <button
            onClick={() => router.back()}
            className="bg-gray-100 p-0.5 rounded-md border border-gray-200 active:opacity-70"
          >
            <ChevronLeft />
          </button>

          <h3 className="font-medium text-[22px] leading-tight capitalize">
            Resort Summary
          </h3>
        </div>

        <div className="mt-5 flex justify-start items-center gap-x-4">
          <BlurImage
            src="https://img.icons8.com/material-rounded/100/00509d/user.png"
            alt="user"
            width={100}
            height={100}
            className="size-5 object-contain"
          />
          <p className="text-p1-m text-gray-700 capitalize">
            {subscription} | <span className="text-amber-500">{" 2 "}</span>
            Adults
          </p>
        </div>

        <div className="mt-5 flex justify-start items-center gap-x-4">
          <BlurImage
            src="https://img.icons8.com/ios-filled/100/00509d/bed.png"
            alt="studio"
            width={100}
            height={100}
            className="size-5 object-contain"
          />
          <p className="text-p1-m text-gray-700">
            {" "}
            <span className="text-amber-500">1</span> Studio
          </p>
        </div>

        <div className="mt-5 flex justify-start items-center gap-x-4">
          <BlurImage
            src="https://img.icons8.com/ios-filled/100/00509d/activity-history.png"
            alt="cv"
            width={100}
            height={100}
            className="size-5 object-contain"
          />
          <p className="text-p1-m text-gray-700">#8711719</p>

          <BlurImage
            src="https://img.icons8.com/glyph-neue/100/04385E/download--v1.png"
            alt="cv"
            width={100}
            height={100}
            className="size-4 object-contain"
          />
        </div>

        {(status !== "CANCELLED" && (
          <div className="pt-8 flex justify-between items-center">
            <button
              onClick={handleCancel}
              className="px-4 py-1.5 rounded-lg text-white text-p2-m bg-red-500 active:opacity-65"
              disabled={isClicked}
            >
              Cancel Booking
            </button>
            {type === "view" ? (
              <button
                onClick={() => router.push(`/my_bookings/${id}?type=modify`)}
                disabled={isClicked}
                className="px-4 py-1.5 rounded-lg text-white text-p2-m bg-orange-500 active:opacity-65"
              >
                Modify Booking
              </button>
            ) : (
              type === "modify" && (
                <button
                  onClick={() => router.push(`/my_bookings/${id}?type=view`)}
                  className="px-4 py-1.5 rounded-lg text-white text-p2-m bg-indigo-500 active:opacity-65"
                >
                  Confirm Booking
                </button>
              )
            )}
          </div>
        )) || (
          <button
            className="mt-8 px-4 py-1.5 rounded-lg text-red-700 text-p2-m bg-red-50 border border-red-200"
            disabled={isClicked}
          >
            Booking Cancelled
          </button>
        )}

        <h3 className="py-3 mt-5 font-medium text-[22px] leading-tight capitalize border-b border-gray-400">
          Resort Location
        </h3>

        <div className="relative">
          <BlurImage
            src={
              "https://charm.vn/wp-content/uploads/2022/12/vi-tri-Charm-Resort-Ho-Tram-1.jpg"
            }
            alt="map"
            width={400}
            height={300}
            className="mt-3 w-full h-full rounded-xl object-cover shadow-sm"
          />

          <button className="absolute top-2 right-2 py-1.5 px-3 rounded-lg text-p3-m text-white bg-[#00509df9]">
            View Map
          </button>
        </div>

        <h3 className="py-3 mt-6 font-medium text-[22px] leading-tight capitalize border-b border-gray-400">
          Packing Essentials
        </h3>
        <div className="my-5">
          <ListPara
            title="Comfortable Flip-Flops"
            para="Perfect for the beach, showers, and strolling around the resort."
          />
          <ListPara
            title="Capture the Moments"
            para="Don't forget your camera – there will be plenty of amazing photo opportunities during your stay."
          />
          <ListPara
            title="Stay Warm"
            para="Pack woolens, scarves, mufflers, caps, jackets, and other essentials to keep cozy."
          />
        </div>
      </div>
    </div>
  );
}

export default LeftViewSection;

interface ListParaProps {
  title: string;
  para: string;
}

function ListPara({ para, title }: ListParaProps) {
  return (
    <div className="mt-3 flex justify-start items-center gap-x-2">
      <BlurImage
        src="https://img.icons8.com/fluency/100/verified-account--v1.png"
        alt="check"
        width={100}
        height={100}
        className="size-7 object-contain"
      />

      <p className="w-10/12 capitalize text-p3-m">
        <span className="text-amber-500">{title}: </span>
        <span className="text-p3-r">{para}</span>
      </p>
    </div>
  );
}
