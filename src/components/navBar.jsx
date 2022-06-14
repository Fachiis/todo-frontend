import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const NavBar = () => {
	return (
		<nav className="relative container mx-auto p-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="max-w-md text-4xl font-bold text-brightRed">
						To<span className="text-brightRedLight">-</span>Do
					</h1>
				</div>

				<Popup
					trigger={
						<button className="button p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
							Login
						</button>
					}
					modal
					nested
					className="m-10"
				>
					{(close) => (
						<div className="text-lg mb-3">
							<button
								className="cursor-pointer absolute block py-2 px-5 -right-10 -top-6 text-base bg-brightRed hover:bg-brightRedLight rounded-full border"
								onClick={close}
							>
								&times;
							</button>
							<div className="flex p-5 justify-center items-center text-2xl font-bold text-brightRed">
								{" "}
								Login{" "}
							</div>
							<form>
								<div className="flex flex-col space-y-10 mx-1 mt-2 md:mx-10">
									<button className="button p-3 px-6 pt-2 text-white bg-[#4285F4] rounded-lg baseline  md:block">
										Sign in with Google
									</button>

									<button className="button p-3 px-6 pt-2 text-white bg-[#1DA1F2] rounded-lg baseline  md:block">
										Sign in with Twitter
									</button>
								</div>
							</form>
						</div>
					)}
				</Popup>
			</div>
		</nav>
	);
};

export default NavBar;
