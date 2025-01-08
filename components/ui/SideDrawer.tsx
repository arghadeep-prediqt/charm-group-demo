import { XCircle } from "lucide-react";
import React from "react";

interface SideDrawerProps {
  isOpen: boolean;
  title: string;
  paraBody: React.ReactNode;
  onClose: () => void;
}

function SideDrawer({ isOpen, title, paraBody, onClose }: SideDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`relative w-5/12 bg-white/80 backdrop-blur-xl h-full shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ml-auto`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <XCircle />
          </button>
        </div>
        <div className="py-4 px-6 h-screen overflow-auto scrollbarY">
          {paraBody}
        </div>
      </div>
    </div>
  );
}

export default SideDrawer;
