import React from "react";
import * as Icons from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { matchPath } from "react-router-dom";

const SidebarLink = ({ link, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <NavLink
      to={link.path}
      className={`relative px-3 mx-5 py-2 text-sm font-medium 
      ${
        matchRoute(link.path)
          ? " text-blue-100 bg-richblack-700 border b-[1px] border-blue-500 rounded-md font-semibold"
          : "text-richblack-300 bg-opacity-0"
      } `}
    >
      <div className="flex flex-row items-center gap-x-2 hover:text-richblack-5 transition-all duration-200">
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </div>
    </NavLink>
  );
};

export default SidebarLink;
