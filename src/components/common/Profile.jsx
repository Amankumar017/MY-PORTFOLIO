import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { matchPath } from "react-router-dom";
// import { profileImg } from "./public/assert/profileImg.png";

const Profile = () => {
  const location = useLocation();

  const matchRoute = () => {
    return matchPath({ path: "" }, location.pathname);
  };

  return (
    <NavLink
      to={`/`}
      className={`px-2 ${
        matchRoute() ? " cursor-default " : " cursor-pointer"
      } `}
    >
      <div className="flex flex-row gap-3 px-3 items-center">
        <img
          className="aspect-square w-[44px] rounded-full object-cover"
          // src={profileImg}
          src="./assert/abd.jpg"
        />
        <div className="flex flex-col items-start gap-0">
          <p className=" font-semibold text-sm text-richblack-5">Aman Kumar</p>
          <p className=" text-sm text-richblack-500"> MERN Developer</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Profile;
