import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TypeWriterText from "./Home/TypeWriterText";
import ProjectGrid from "./Home/ProjectGrid";
import PFButton from "./common/PFButton";
import Skills from "./Skills";
import Contact from "./common/Contact ";
import Footer from "./common/Footer";

const Home = () => {
	return (
		<div className=" flex flex-col gap-8 mt-20 mx-auto md:items-start items-center">
			<div className=" w-full text-5xl font-medium text-richblack-5 flex flex-col gap-2 md:items-start items-center">
				<p className="">Hey, I'm Aman</p>
				<TypeWriterText />
			</div>

			<div className="text-lg text-richblack-5 md:max-w-[545px] max-w-[360px] cursor-default">
				<p>
					My name is Aman Kumar, a Final year undergrad student of CSE Dual
					from the{"  "}
					<div className=" text-blue-200 inline-block cursor-text">
						National Institute of Technology Hamirpur,
					</div>
					{" "}I love exploring new technologies and making solutions for real-world
					problems. Mathematics fascinates me the most.
				</p>
			</div>
			{/* 
      <div>
        <PFButton />
      </div> */}

			<div className="flex flex-col gap-4 md:items-start ">
				<ProjectGrid />
			</div>

			<div>
				<PFButton />
			</div>

			<div className="flex flex-col gap-6 md:items-start items-center">
				<div className="flex flex-col gap-2 sm:items-center lg:items-start">
					<h1 className="text-2xl font-semibold text-richblack-5">Skills</h1>
					<p className=" text-base text-richblack-50 lg:max-w-[80%] w-full">
						I'm skilled in many programming languages and familiar with various
						web technologies.
					</p>
				</div>
				<Skills />
			</div>

			<div className="flex flex-col gap-4 max-w-full min-w-[300px]">
				<h1 className="text-2xl font-semibold text-richblack-5">
					Let's Connect
				</h1>
				<Contact />
			</div>
		</div>
	);
};

export default Home;
