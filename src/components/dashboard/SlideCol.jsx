import React, { useContext, useEffect, useState } from "react";
import Profile from "../common/Profile";
import Sidebar from "./Sidebar";
import { MdMenu } from "react-icons/md";
import { setSide } from "../../hook/slice";
import { useSelector, useDispatch } from "react-redux";
import { AppContext } from "../../hook/AppContext";

const SlideCol = () => {
  // let { side } = useSelector((state) => state.dashboard) || { side: true };
  const { side, setSide } = useContext(AppContext);
  // const dispatch = useDispatch();

  const handleChange = () => {
    setSide(false);
  };

  return (
    <div>
      {side ? (
        <div className="relative mt-20 z-20 md:relative bg-richblack-800 border-b-[1px] border-b-richblack-600 ">
          <div className="fixed px-10 top-0 flex gap-4 items-center w-full h-[calc(15vh -3.5rem)] py-8 justify-between bg-richblack-800">
            <Profile />
            <button
              onClick={handleChange}
              className="group p-3 bg-richblack-700 rounded-md text-richblack-200 cursor-pointer hover:brightness-95 transition-all duration-200"
            >
              <MdMenu className=" text-3xl group-hover:font-semibold group-hover:text-richblack-50 transition-all duration-200" />
            </button>
          </div>
        </div>
      ) : (
        <Sidebar />
      )}
    </div>
  );
};

export default SlideCol;
