import React from "react";
import { skillList } from "../data/skillList";
import SkillBullet from "./Home/SkillBullet";

const Skills = () => {
  return (
    <div className="grid mx-auto w-[300px] md:w-fit grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-5">
      {skillList.map((data) => (
        <div
        // className={`transition-all duration-200 ${
        //   data.id % 2 !== 0
        //     ? "hover:col-span-2"
        //     : `hover:col-start-1 hover:col-end-3 hover:col-span-2`
        // } `}
        >
          <SkillBullet key={data.id} data={data} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
