import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { projectList } from "../../data/ProjectList";
import { FaArrowLeft } from "react-icons/fa6";

const ProjectCard = () => {
	const location = useLocation();
	const navigate = useNavigate();

	console.log("pathname", location.pathname);

	const urlHeading = location.pathname.split("/").pop();
	console.log("urlHeading", urlHeading);
	const projectHeading = urlHeading.split("-").join(" ");
	console.log("projectHeading", projectHeading);

	return (
		<>
			<Link
				to={"/work"}
				className="text-md mb-12 flex gap-2 text-richblack-300"
			>
				{" "}
				<FaArrowLeft />
				All Projects
			</Link>
			{projectList.map((data, index) => {
				if (data.heading === projectHeading) {
					return (
						<div key={index}>
							<h1 className="text-3xl font-semibold text-richblack-5">
								{data.heading}
							</h1>
							<img
								src={data.prImg}
								onClick={() => window.open(`${data.hostedLink}`, "_blank")}
								className="object-cover rounded-md w-[280px] h-[210px] hover:cursor-pointer transition-all duration-200"
							/>
							<p>{data.about}</p>

							<div className="flex flex-row gap-2">
								<button
									onClick={() => window.open(`${data.hostedLink}`, "_blank")}
								>
									Hosted
								</button>
								<button
									onClick={() => window.open(`${data.gitLink}`, "_blank")}
								>
									Code
								</button>
							</div>
						</div>
					);
				}
			})}
		</>
	);
};

export default ProjectCard;
