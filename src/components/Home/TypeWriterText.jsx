import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  return (
    <div className=" text-richblue-200 opacity-90">
      <Typewriter
        options={{
          strings: [" Programmer", " Web Developer"],
          autoStart: true,
          loop: true,
          pauseFor: 2500,
          cursor: "|",
        }}
      />
    </div>
  );
};

export default TypeWriterText;
