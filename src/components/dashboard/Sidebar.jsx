import React, { useContext, useEffect, useRef, useState } from "react";
import { sidebarLinks } from "../../data/dashboard-links";
import { resourceLinks } from "../../data/resources-links";
import { socialLinks } from "../../data/social-links";
import SidebarLink from "./SidebarLink";
import SidebarPath from "./SidebarPath";
import Profile from "../common/Profile";
import { setSide } from "../../hook/slice";
import { useSelector, useDispatch } from "react-redux";
import { AppContext } from "../../hook/AppContext";

const Sidebar = () => {
  const ref = useRef(null);
  // const { side } = useSelector((state) => state.dashboard) || { side: true };
  // const dispatch = useDispatch();
  const { side, setSide } = useContext(AppContext);

  useEffect(() => {
    if (side) return;

    const handleClickOutside = (event) => {
      if (ref.current.contains(event.target)) {
        console.log("clicked inside");
        setSide(false);
        return;
      } else {
        console.log("clicked outside");
        setSide(true);
      }
    };

    // Attach the event listener only when side is true
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts or when side changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [side]);

  return (
    <div className="fixed z-20 bg-richblack-800 border-r-[1px] border-r-richblack-600 ">
      <div
        ref={ref}
        className="absolute top-0 left-0 flex min-w-[240px] flex-col h-[100vh] py-8 gap-8 bg-richblack-800 border-r-[1px] border-r-richblack-600"
      >
        {/* profile Showcase */}
        <Profile />

        <div className="flex flex-col gap-0">
          <SidebarLink
            link={{ name: "Explore", path: "/" }}
            iconName="VscSettingsGear"
          />

          {sidebarLinks.map((data) => {
            return (
              <SidebarLink key={data.id} link={data} iconName={data.icon} />
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <div className="mx-auto w-10/12 mb-1 px-3 text-richblack-500 text-base font-mono">
            Resources
          </div>
          {resourceLinks.map((data) => {
            return (
              <SidebarPath key={data.id} link={data} iconName={data.icon} />
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <div className="mx-auto w-10/12 mb-1 px-3 text-richblack-500 text-base font-mono">
            Socials
          </div>
          {socialLinks.map((data) => {
            return (
              <SidebarPath key={data.id} link={data} iconName={data.icon} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
