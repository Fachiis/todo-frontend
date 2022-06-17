import React from "react";
import FacebookLogin from "react-facebook-login";
import facebookLogin from "../axios/facebookLogin";
import Popup from "reactjs-popup";
import { useLocation } from "react-router-dom";
import "reactjs-popup/dist/index.css";

const NavBar = () => {
	const responseFacebook = (response) => {
		facebookLogin(response.accessToken);
		setTimeout(() => {
			window.location = location ? location.pathname : "/";
		}, 3000);
	};

	const location = useLocation();
	const logout = () => {
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		window.location = location ? location.pathname : "/";
	};

	const authToken = localStorage.getItem("access_token");

	return (
		<nav className="relative container mx-auto p-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="max-w-md text-4xl font-bold text-brightRed">
						To<span className="text-brightRedLight">-</span>Do
					</h1>
				</div>

				{!authToken ? (
					<Popup
						trigger={
							<button className="button p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
								Login
							</button>
						}
						modal
						nested
						className="m-10 md:w-1/2 md:m-2"
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
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="flex justify-center items-center mx-1 mt-2 md:mx-2">
										<FacebookLogin
											appId="1245750129567314"
											fields="name,email,picture"
											callback={responseFacebook}
											icon="fa-facebook mr-2"
											cssClass="bg-sky-600 p-4 rounded-lg"
										/>
									</div>
								</form>
							</div>
						)}
					</Popup>
				) : (
					<>
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="flex justify-center items-center mx-1 mt-2 md:mx-2">
								<button
									className="button p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
									onClick={logout}
								>
									Logout
								</button>
							</div>
						</form>
					</>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
