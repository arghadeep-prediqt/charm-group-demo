import React, { useState } from "react";

interface BiDirectionalRangeSliderProps {
  min: number;
  max: number;
  step: number;
  initialStart: number;
  initialEnd: number;
  labels: string[];
}

const RangeSlider: React.FC<BiDirectionalRangeSliderProps> = ({
  min,
  max,
  step,
  initialStart,
  initialEnd,
  labels,
}) => {
  const [startValue, setStartValue] = useState(initialStart);
  const [endValue, setEndValue] = useState(initialEnd);

  const calculatePercentage = (value: number) =>
    ((value - min) / (max - min)) * 100;

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue <= endValue) {
      setStartValue(newValue);
    }
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= startValue) {
      setEndValue(newValue);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Slider Track */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        {/* Highlighted Range (between start and end) */}
        <div
          className="absolute h-full bg-sky-400 rounded-full"
          style={{
            left: `${calculatePercentage(startValue)}%`,
            width: `${
              calculatePercentage(endValue) - calculatePercentage(startValue)
            }%`,
          }}
        ></div>

        {/* Start Draggable Dot */}
        <div
          className="absolute w-4 h-4 bg-white border border-sky-400 rounded-full -top-1"
          style={{
            left: `calc(${calculatePercentage(startValue)}% - 8px)`,
          }}
        ></div>

        {/* End Draggable Dot */}
        <div
          className="absolute w-4 h-4 bg-white border border-sky-400 rounded-full -top-1"
          style={{
            left: `calc(${calculatePercentage(endValue)}% - 8px)`,
          }}
        ></div>

        {/* Invisible Range Inputs */}
        {/* Start Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={startValue}
          onChange={handleStartChange}
          className="absolute w-full h-2 opacity-0 cursor-pointer"
          style={{ zIndex: 2 }}
        />

        {/* End Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={endValue}
          onChange={handleEndChange}
          className="absolute w-full h-2 opacity-0 cursor-pointer"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between w-full text-sm mt-2 text-gray-500">
        {labels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
    </div>
  );
};

export default RangeSlider;
