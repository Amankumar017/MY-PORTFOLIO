import React, { useContext } from "react";
import Sidebar from "./dashboard/Sidebar";
import SlideCol from "./dashboard/SlideCol";
import { Outlet } from "react-router-dom";
import { AppContext } from "../hook/AppContext";

const Dashboard = () => {
	const { side, setSide } = useContext(AppContext);

	return (
		<div className="relative w-full flex flex-col lg:flex-row min-h-[calc(100vh -3.5rem)] overflow-hidden">
			{/* <div className={`block lg:hidden z-20`}>
        {side ? <SlideCol /> : <Sidebar />}
      </div> */}
			<div className="sticky top-0 z-50 lg:block hidden h-[100vh]">
				{/* Render Sidebar for large screens */}
				<Sidebar />
			</div>

			<div className="max-w-maxContent mx-auto mt-8 mb-60 px-4 lg:pl-[280px]">
				<Outlet />
			</div>
			{/* <div className="relative h-[calc(100vh -3.5rem)] flex-1">
				<div
					className={`flex mx-auto justify-center items-center lg:ml-[240px] w-11/12 max-w-[1000px] py-10`}
				>
					<div
						className={`fixed inset-0 z-[1000] ml-[240px] grid overflow-auto bg-white bg-opacity-10 backdrop-blur-sm ${
							side ? " hidden " : "block"
						}`}
					></div>
					<Outlet />
				</div>
			</div> */}
		</div>
	);
};

export default Dashboard;
