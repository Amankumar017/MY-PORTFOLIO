import React from "react";
import * as Icons from "react-icons/vsc";

const SidebarPath = ({ link, iconName }) => {
  const Icon = Icons[iconName];

  const handleClick = () => {
    window.open(link.url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className={`relative px-3 mx-5 text-sm font-medium text-richblack-300 cursor-pointer
       hover:text-richblack-5 transition-all duration-200`}
    >
      <div className="flex flex-row items-center gap-x-2 ">
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </div>
    </div>
  );
};

export default SidebarPath;
