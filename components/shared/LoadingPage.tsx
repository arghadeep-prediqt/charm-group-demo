import React from "react";
import { BlurImage } from "../ui/BluerImage";

function LoadingPage() {
  return (
    <div className="fixed w-full h-screen top-0 left-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm">
      <BlurImage
        src="https://img.icons8.com/ios/100/fcd34d/spinner-frame-4.png"
        alt="loader"
        width={200}
        height={200}
        className="size-28 object-cover animate-spin-slow"
      />
    </div>
  );
}

export default LoadingPage;
