import React from "react";
import { projectList } from "../data/ProjectList";
import GitButton from "./common/GitButton";
import { Link } from "react-router-dom";

const Projects = () => {
	const handleClick = (url) => {
		window.open(url, "_blank");
	};

	return (
		<div className=" flex flex-col gap-8 mt-20 mx-auto md:items-start items-center ">
			<div className=" w-full text-5xl font-medium text-richblack-5 flex flex-col gap-2">
				<p className="">Best Work</p>
			</div>

			<div className="text-lg text-richblack-5 md:max-w-[600px] w-full cursor-default ">
				Partnered with inspiring collaborators, innovators & clubs ✨
			</div>

			<div className="text-base text-richblack-300 max-w-[600px] cursor-default">
				<p className=" font-interM lending-[1.5em] font-medium text-[14px]">
					Ps: I have developed a strong foundation in various programming
					languages, including JavaScript (ES6), TypeScript, Python, HTML, CSS,
					and Node.Js, I am thrilled to present some of the works that showcase
					my skills and expertise.
				</p>
			</div>

			<div className="flex flex-col max-w-[650px] gap-[52px]">
				{projectList.map((data) => {
					return (
						<Link
							to={`/Work/${data.heading.split(" ").join("-")}`}
							className="flex px-4 py-4 gap-6 justify-start rounded-md hover:bg-richblue-900 hover:brightness-110  transition-all duration-200"
						>
							<div className=" ss:max-w-maxContentTab w-[280px] h-[210px]">
								<img
									src={data.prImg}
									onClick={() => handleClick(data.hostedLink)}
									className="object-cover rounded-md w-[280px] h-[210px] hover:cursor-pointer
                transition-all duration-200"
								/>
							</div>
							<div className=" h-[210px] justify-between items-start ss:block hidden">
								<div className="flex flex-col gap-2 flex-wrap">
									<p className=" text-xl text-richblack-5 font-semibold cursor-default">
										{data.heading}
									</p>
									<p className=" text-base font-medium text-richblack-400">
										{data.title}
									</p>
									<p className=" text-lg font-medium lg:max-w-[350px] md:max-w-[450px] text-richblack-100 md:block hidden ">
										{data.about.length > 100 && (
											<div>{data.about.substring(0, 98) + "..."}</div>
										)}
										{data.about.length < 101 && data.about}
									</p>
								</div>
								<div
									className="flex items-end"
									onClick={() => handleClick(data.gitLink)}
								>
									<GitButton url={data.hostedLink} />
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
