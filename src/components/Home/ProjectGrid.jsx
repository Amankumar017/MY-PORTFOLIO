import React from "react";
import { projectList } from "../../data/ProjectList";
import GitButton from "../common/GitButton";

const ProjectGrid = () => {
	const handleClick = (url) => {
		window.open(url, "_blank");
	};

	return (
		<>
			<h1 className="text-2xl font-semibold text-richblack-5">Projects</h1>
			<div className="grid mx-auto w-[350px] md:w-fit grid-cols-1 md:grid-cols-2 mt-6 gap-12">
				{projectList.map((data) => {
					if (data.id > 4) {
						return <></>;
					}
					return (
						<div className="flex flex-col gap-2 justify-start">
							<img
								src={data.prImg}
								onClick={() => handleClick(data.hostedLink)}
								className="border border-richblack-600 object-cover rounded-md w-[359px] h-[200px] hover:cursor-pointer hover:brightness-150
              transition-all duration-200"
							/>
							<div className="flex justify-between items-center">
								<p
									className=" text-base text-richblack-5 font-semibold cursor-pointer"
									onClick={() => handleClick(data.hostedLink)}
								>
									{data.heading}
								</p>
								<div onClick={() => handleClick(data.gitLink)}>
									<GitButton url={data.hostedLink} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ProjectGrid;
