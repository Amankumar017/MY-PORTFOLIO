import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toast";

const Contact = () => {
	const divRef = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

	const handleMouseMove = (e) => {
		if (!divRef.current || isFocused) return;

		const div = divRef.current;
		const rect = div.getBoundingClientRect();

		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	const handleFocus = () => {
		setIsFocused(true);
		setOpacity(1);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setOpacity(0);
	};

	const handleMouseEnter = () => {
		setOpacity(1);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	const submitHandler = async (data) => {
		console.log("logged data", data);
		toast.success("message send", {
			// magic color "#00EEFF"
			backgroundColor: "#47A5C5",
			color: "#000000",
		});
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				email: "",
				userName: "",
				message: "",
			});
		}
	}, [reset, isSubmitSuccessful]);

	return (
		<div className="flex w-full mx-auto items-center ">
			<form onSubmit={handleSubmit(submitHandler)} className="w-full">
				<div className="flex flex-col gap-[32px] text-pink-200 ">
					{/* userName */}
					<input
						type="text"
						name="userName"
						id="userName"
						placeholder="Enter Your name"
						onMouseMove={handleMouseMove}
						onFocus={handleFocus}
						onBlur={handleBlur}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						className="h-12 w-full bg-richblack-800 cursor-default rounded-md border-[2px] border-richblack-700  p-3.5 text-[#00EEFF] transition-colors duration-300 placeholder:select-none  placeholder:text-neutral-500 focus:border-[#8678F9] focus:outline-none"
						// className="h-12 w-full bg-richblack-800 cursor-default rounded-md border-[2px] border-richblack-700  p-3.5 text-[#00EEFF] transition-colors duration-300 placeholder:select-none  placeholder:text-neutral-500 focus:border-[#8678F9] focus:outline-none"
						{...register("userName", { required: true })}
					/>
					<input
						ref={divRef}
						disabled
						style={{
							border: "1px solid #8678F9",
							opacity,
							WebkitMaskImage: `radial-gradient(30% 50px at ${position.x}px ${position.y}px, black 35%, transparent)`,
						}}
						aria-hidden="true"
						className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[#8678F9] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
						// className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[#8678F9] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
					/>
					{errors.userName && <span>Please enter Your name</span>}

					{/* email */}
					<div className="flex flex-col">
						<div className="relative w-full">
							<input
								onMouseMove={handleMouseMove}
								onFocus={handleFocus}
								onBlur={handleBlur}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								autoComplete="off"
								placeholder="Enter Your Email"
								type="email"
								name="email"
								className="h-12 w-full bg-richblack-800 cursor-default rounded-md border-[2px] border-richblack-700  p-3.5 text-[#00EEFF] transition-colors duration-300 placeholder:select-none  placeholder:text-neutral-500 focus:border-[#8678F9] focus:outline-none"
								{...register("email", { required: true })}
							/>
							<input
								ref={divRef}
								disabled
								style={{
									border: "1px solid #8678F9",
									opacity,
									WebkitMaskImage: `radial-gradient(30% 50px at ${position.x}px ${position.y}px, black 35%, transparent)`,
								}}
								aria-hidden="true"
								className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[#8678F9] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
							/>
						</div>

						{/* <input
              type="email"
              name="email"
              id="email"
              className="bg-richblack-800 rounded-[0.5rem]  w-full p-[12px] shadow-[0_1px_0px_0px_#525252]"
              placeholder="Enter email Address"
              {...register("email", { required: true })}text-[#00EEFF]
            /> */}
						{errors.email && <span>Please enter your email address</span>}
					</div>

					{/* message */}
					<div className="flex flex-col">
						<textarea
							onMouseMove={handleMouseMove}
							onFocus={handleFocus}
							onBlur={handleBlur}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							autoComplete="off"
							name="message"
							id="message"
							cols="30"
							className="bg-richblack-800 rounded-[0.5rem] text-[#00EEFF] w-full p-[12px] shadow-[0_1px_0px_0px_#525252]"
							rows="7"
							placeholder="Enter Your message here"
							{...register("message", { required: true })}
						/>
						{/* <input
              ref={divRef}
              disabled
              style={{
                border: "1px solid #8678F9",
                opacity,
                WebkitMaskImage: `radial-gradient(30% 50px at ${position.x}px ${position.y}px, black 35%, transparent)`,
              }}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[#8678F9] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
            /> */}
						{errors.message && <span>PLease enter your message.</span>}
					</div>

					<button
						type="submit"
						className="rounded-md bg-yellow-50 text-center p-[12px] text-[16px] font-bold text-black"
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
