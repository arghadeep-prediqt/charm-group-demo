import React, { useState } from "react";

interface InputLabelProps {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  color?: string;
  placeholder?: string;
}

function InputLabel({
  label,
  type = "text",
  name = "",
  placeholder = "",
}: InputLabelProps) {
  const [value, setValue] = useState<string | number>("");

  return (
    <div>
      <p className="text-p2-m uppercase mb-1 text-gray-500">{label}</p>
      <input
        type={type}
        inputMode="numeric"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-[150px] text-p2-r text-gray-800 border-b border-b-gray-500 focus:outline-none placeholder:text-gray-700`}
        required
      />
    </div>
  );
}

export default InputLabel;
