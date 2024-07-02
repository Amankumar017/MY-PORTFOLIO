import React from "react";
import { LuExternalLink } from "react-icons/lu";

const GitButton = ({ url }) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex items-center gap-2">
      <LuExternalLink
        onClick={() => handleClick(url)}
        className="text-white hover:text-blue-300 hover:scale-95 cursor-pointer transition-all duration-200"
      />
      <div
        className="px-2 cursor-pointer py-1 text-richblack-300 border b-[1px] border-richblack-700 bg-richblack-800 opacity-65 rounded-md
        hover:text-blue-300 hover:bg-black hover:border-blue-600 hover:scale-95 transition-all duration-300"
      >
        Source Code
      </div>
    </div>
  );
};

export default GitButton;
