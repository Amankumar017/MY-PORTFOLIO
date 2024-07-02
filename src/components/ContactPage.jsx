import React from "react";
import Contact from "./common/Contact ";

const ContactPage = () => {
	const handleClick = (url) => {
		window.open(url, "_blank");
	};

	return (
		<div className=" flex flex-col gap-8 mt-20 mx-auto md:items-start items-center">
			<div className=" w-full text-5xl font-medium text-richblack-5 flex flex-col gap-2">
				<p className="">Get In Touch</p>
			</div>

			<div className="text-lg text-richblack-200 max-w-[400px] cursor-default">
				<p>
					My inbox is always open. Whether you have a question or just want to
					say hi, I’ll try my best to get back to you!
				</p>
			</div>

			<div className="w-full">
				<Contact />
			</div>
		</div>
	);
};

export default ContactPage;
