import React from "react";

const Footer = () => {
	return (
		<footer class="bg-veryDarkBlue">
			<div class="container flex flex-col justify-between px-2 py-10 mx-auto">
				<div class="flex flex-col justify-between">
					<form className="mb-5">
						<div class="flex space-x-3">
							<input
								type="text"
								class="flex-1 px-4 rounded-full focus:outline-none"
								placeholder="Updates in your inbox"
							/>
							<button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
								Go
							</button>
						</div>
					</form>
					<div class="text-white text-center md:block">
						Copyright &copy; 2022, All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
