import React from "react";

const NavBar = () => {
	return (
		<nav className="relative container mx-auto p-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="max-w-md text-4xl font-bold text-brightRed">
						To<span className="text-brightRedLight">-</span>Do
					</h1>
				</div>
				<a
					href="login"
					className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
				>
					Login
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
