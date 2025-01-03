import React from "react";
import { BlurImage } from "../ui/BluerImage";

function LoadingPage() {
  return (
    <div className="fixed w-full h-screen top-0 left-0 z-50 flex justify-center items-center backdrop-blur-sm">
      <BlurImage
        src="https://img.icons8.com/office/80/spinner-frame-5.png"
        alt="loader"
        width={200}
        height={200}
        className="size-20 object-cover animate-spin-slow"
      />
    </div>
  );
}

export default LoadingPage;
