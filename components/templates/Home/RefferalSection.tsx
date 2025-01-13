import Container from "@/components/shared/Container";
import React from "react";

const ReferralProgram = () => {
  return (
    <div
      className="my-[6%] pt-20 pb-16 font-sans flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/images/reffer_bg.svg')", // Replace with your SVG path
        backgroundSize: "con",
        backgroundPosition: "center",
      }}
    >
      <Container className="w-full">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800">
          Refer Your Friends to Charm Resorts and Earn Exclusive Vacation
          Rewards!
        </h1>
        <p className="text-gray-600 mt-4">
          Introduce your loved ones to the luxurious timeshare experiences at
          Charm Group and earn amazing rewards. Together, create unforgettable
          memories at our stunning resorts across Vietnam.
        </p>
        {/* Form Section */}
        <div className="mt-8 bg-white shadow-lg rounded-full p-4 relative flex items-center space-x-4">
          {/* Input Field 1 */}
          <input
            type="text"
            placeholder="Who Are You Referring?"
            className="flex-1 px-4 py-2 border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-500"
          />
          {/* Divider */}
          <span className="text-gray-300">|</span>
          {/* Input Field 2 */}
          <input
            type="text"
            placeholder="Where Do They Live?"
            className="flex-1 px-4 py-2 border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-500"
          />
          {/* Divider */}
          <span className="text-gray-300">|</span>
          {/* Input Field 3 */}
          <input
            type="text"
            placeholder="Their Contact Number"
            className="flex-1 px-4 py-2 border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-500"
          />
          {/* Divider */}
          <span className="text-gray-300">|</span>
          {/* Input Field 4 */}
          <input
            type="email"
            placeholder="Their Email Address"
            className="flex-1 px-4 py-2 border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-500"
          />
          {/* Refer Now Button */}
          <button className="bg-orange-500 text-white px-10 py-3 text-base rounded-full hover:bg-orange-600 transition shadow-lg ml-4 whitespace-nowrap min-w-[8rem] flex items-center justify-center">
            REFER NOW
          </button>
        </div>
        {/* Footer Section */}
        <div className="flex items-center justify-start mt-8">
          <p className="text-gray-700 text-left mr-4">
            Discover More About Charm’s Exclusive Rewards Program
          </p>
          <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition shadow-md">
            EXPLORE NOW
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ReferralProgram;
