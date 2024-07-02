import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full border border-t py-8 flex justify-center gap-[32px]">
      <p className="flex text-base text-richblack-400 gap-2">
        Let's
        <Link
          to={"/contact"}
          className="underline hover:brightness-125 hover:text-richblack-300 transition-all duration-200"
        >
          Chat
        </Link>
      </p>
      <div className="h-[100px] w-[1px] text-richblack-400" />
      <p className="flex text-base text-richblack-400">Araj Portfolio</p>
    </div>
  );
};

export default Footer;
