import React from "react";
import dynamic from "next/dynamic";
import { BlurImage } from "@/components/ui/BluerImage";
import { CalendarDays, ChevronRightCircle } from "lucide-react";
import { useRouter } from "next/router";
import { resortImage } from "@/components/lib/rawData";

const Container = dynamic(() => import("@/components/shared/Container"));

function Resorts() {
  const router = useRouter();

  return (
    <Container className="mt-[5%] mb-[2%] py-2">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-10/12">
          <h1 className="text-[40px] leading-relaxed">Resorts for you</h1>
          <p className="text-[18px] text-gray-700">
            Explore our premium properties located at some of the most
            picturesque locations across the world
          </p>
        </div>
        <div className="w-2/12 flex justify-end items-center">
          <button
            onClick={() => router.push("/resort_collection")}
            className="text-sky-700 text-[18px] font-semibold capitalize hover:underline hover:underline-offset-2"
          >
            view all
          </button>
        </div>
      </div>

      <div className="mt-[3%] pb-1.5 flex justify-between items-center gap-x-[2%] overflow-auto scrollbarX">
        {resortImage?.map(
          (item, id) =>
            id < 4 && (
              <div
                key={id}
                className="relative flex-shrink-0 w-[305px] animate-none hover:animate-pulse"
              >
                <BlurImage
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={900}
                  className="w-full aspect-square object-cover -z-10 rounded-2xl"
                />
                <div className="py-6 pe-6 ps-5 bg-gradient-to-b from-black/20 to-black/65 absolute top-0 left-0 w-full h-full z-10 flex  justify-between items-end rounded-2xl">
                  <h3 className="text-white capitalize font-medium text-start">
                    {item.name}
                  </h3>

                  <button
                    onClick={() =>
                      router.push(
                        `/resort_collection?section=${item.name
                          .split(" ")
                          .join("%20")
                          .toLocaleLowerCase()}`
                      )
                    }
                    className="bg-yellow-300 text-p1-m capitalize rounded-full"
                  >
                    <ChevronRightCircle className="size-8" />
                  </button>
                </div>
              </div>
            )
        )}
      </div>

      {/* Footer */}
      <div className="mt-[2%] flex justify-center items-center">
        <button
          onClick={() => router.push("/session_chart")}
          className="flex items-center gap-x-2 border-shy-400 text-sky-600 text-p1-m py-2 px-4 border border-sky-400 rounded-lg shadow-sm"
        >
          <CalendarDays className="size-5" />
          View Season Chart to Plan your holidays
        </button>
      </div>
    </Container>
  );
}

export default Resorts;
