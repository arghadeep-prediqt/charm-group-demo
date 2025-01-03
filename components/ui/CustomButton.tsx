import React from "react";

interface ButtonProps {
  icon: React.ReactNode;
  name?: string;
  type?: "button" | "submit" | "reset";
  isBorder?: boolean;
  isAutoWidth?: boolean;
  changeFn?: () => void;
}

function CustomButton({
  icon,
  isAutoWidth,
  isBorder,
  name,
  type = "button",
  changeFn,
}: ButtonProps) {
  return (
    <div
      className={` 
      ${isBorder ? "border" : "border-none"} 
      ${isAutoWidth ? "w-full" : "w-fit"} 
      border-[#2F80ED] p-3 flex items-center gap-x-2 bg-transparent rounded-lg`}
    >
      {icon}
      <button
        type={type}
        onClick={changeFn}
        className={`${
          isAutoWidth ? "w-full" : "2xl:w-[250px] xl:w-[180px] lg:w-[140px]"
        } bg-transparent text-start border-none focus:outline-none text-gray-800 text-p1-r placeholder:text-[#4F4F4F] placeholder:text-p1-r`}
      >
        {name}
      </button>
    </div>
  );
}

export default CustomButton;
