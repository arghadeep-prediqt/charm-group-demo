import React from "react";

interface InputCustomProps {
  icon?: React.ReactNode;
  label: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  isRequired?: boolean;
  preValue?: string | number;
  isBorder?: boolean;
  isAutoWidth?: boolean;
}

function InputCustom({
  name = "",
  icon,
  label,
  type = "text",
  preValue = "",
  isRequired = false,
  isBorder = false,
  isAutoWidth = false,
}: InputCustomProps) {
  const [value, setValue] = React.useState<string | number>(preValue);

  return (
    <div
      className={` 
      ${isBorder ? "border" : "border-none"} 
      ${isAutoWidth ? "w-full" : "w-fit"} 
      border-[#ffd500] p-3 flex items-center gap-x-2 bg-gray-100 rounded-lg`}
    >
      {icon}
      <input
        name={name}
        type={type}
        inputMode="numeric"
        placeholder={label}
        value={value}
        required={isRequired}
        onChange={(e) => setValue(e.target.value)}
        className={`${
          isAutoWidth ? "w-full" : "2xl:w-[250px] xl:w-[180px] lg:w-[140px]"
        } bg-transparent text-start border-none focus:outline-none text-gray-800 text-p1-r placeholder:text-[#4F4F4F] placeholder:text-p1-r`}
      />
    </div>
  );
}

export default InputCustom;
