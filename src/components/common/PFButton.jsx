import React from "react";
import { useNavigate } from "react-router-dom";

const PFButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/work");
      }}
      className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-richblack-600 bg-[conic-gradient(from_165deg_at_50%,#424854_0%,#0A5A72_50%,#0F7A9D_100%)] transition-all duration-200" />
      <span className="inline-flex h-full w-full animate-background-shine cursor-pointer items-center justify-center rounded-full bg-richblack-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Explore more my Works
      </span>
    </button>
  );
};

export default PFButton;
