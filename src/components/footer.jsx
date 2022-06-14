import React from "react";

const Footer = () => {
	return (
		<footer className="bg-veryDarkBlue">
			<div className="container flex flex-col justify-between px-2 py-10 mx-auto">
				<div className="flex flex-col justify-between">
					<form className="mb-5">
						<div className="flex space-x-3">
							<input
								type="text"
								className="flex-1 px-4 rounded-full focus:outline-none"
								placeholder="Updates in your inbox"
							/>
							<button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
								Go
							</button>
						</div>
					</form>
					<div className="text-white text-center md:block">
						Copyright &copy; 2022, All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
