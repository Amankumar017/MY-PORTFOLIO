import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import { FaServer } from "react-icons/fa"; // Importing a server icon

const SkillBullet = (data) => {
  const Icon =
    data.data.type === "fa"
      ? FaIcons[data.data.iconTitle]
      : data.data.type === "si"
      ? SiIcons[data.data.iconTitle]
      : TbIcons[data.data.iconTitle];

  console.log(data.data.Title);

  return (
    <div className="relative group flex gap-3 items-center justify-center px-6 py-2 max-w-maxContent border text-richblack-200  border-blue-600 rounded-md bg-richblack-700 cursor-pointer hover:border-blue-400 hover:text-richblack-5 hover:bg-richblack-800 transition-all duration-200">
      <p className="text-lg group-hover:font-semibold transition-all duration-500">
        {data.data.Title}
      </p>
      <Icon
        className={`font-bold text-xl group-hover:text-3xl transition-all duration-300
      ${
        data.data.Title === "React" &&
        " group-hover:animate-[spin_4s_linear_infinite] group-hover:text-blue-200"
      }
      ${
        data.data.Title === "JavaScript" &&
        "group-hover:text-yellow-100 group-hover:animate-bounce "
      }
      ${data.data.Title === "Nextjs" && " group-hover:animate-bounce "}
      ${
        data.data.Title === "TypeScript" &&
        "group-hover:text-blue-100 group-hover:animate-bounce"
      }
      ${data.data.Title === "Cpp" && "group-hover:text-blue-100"}
      ${
        data.data.Title === "HTML" &&
        " group-hover:text-pink-200 group-hover:animate-bounce group-hover:text-4xl"
      }
      ${
        data.data.Title === "Node.js" &&
        " group-hover:text-caribbeangreen-200 group-hover:animate-bounce group-hover:font-bold"
      }
      ${
        data.data.Title === "MongoDB" &&
        " group-hover:text-caribbeangreen-500 group-hover:animate-pulse "
      }
      ${
        data.data.Title === "CSS" &&
        " group-hover:text-blue-100 group-hover:animate-pulse group-hover:scale-125"
      }
      ${
        data.data.Title === "Express.js" &&
        " group-hover:text-gray-100 group-hover:animate-pulse group-hover:scale-110"
      }
      ${
        data.data.Title === "SQL" &&
        " group-hover:text-gray-100 group-hover:animate-pulse group-hover:scale-110"
      }
      ${
        data.data.Title === "MySQL" &&
        " group-hover:text-gray-100 group-hover:animate-pulse group-hover:scale-110"
      }`}
      />
    </div>
  );
};

export default SkillBullet;
