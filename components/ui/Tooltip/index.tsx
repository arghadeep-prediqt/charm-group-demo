import React from "react";

interface TooltipProps {
  message: string;
  children: React.ReactNode;
}

function Tooltip({ message, children }: TooltipProps) {
  return (
    <div className="group relative flex max-w-max flex-col items-center justify-center z-50">
      {children}
      <div className="absolute left-1/2 bottom-full mb-0 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
        <div className="flex max-w-md flex-col items-center">
          <div className="rounded bg-slate-700 p-2 text-center text-p3-m text-white">
            {message}
          </div>
          <div className="clip-top h-2 w-4 bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
}
export default Tooltip;
