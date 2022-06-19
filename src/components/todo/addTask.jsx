import React, { useState } from "react";
import Switch from "react-switch";
import Popup from "reactjs-popup";
import FacebookLogin from "react-facebook-login";
import facebookLogin from "../../axios/facebookLogin";
import { useLocation } from "react-router-dom";
import { usePopperTooltip } from "react-popper-tooltip";
import "reactjs-popup/dist/index.css";
import "react-popper-tooltip/dist/styles.css";

const AddTask = ({ onPost, onFetchCompleteTasks, onFetchAllTasks }) => {
	const [content, setContent] = useState("");
	const [created_at, setCreatedAt] = useState("");
	const [reminder, setReminder] = useState(false);
	const [checked, setChecked] = useState(false);
	const [showAddTask, setShowAddTask] = useState(false);

	const authToken = localStorage.getItem("access_token");

	const {
		getArrowProps,
		getTooltipProps,
		setTooltipRef,
		setTriggerRef,
		visible,
	} = usePopperTooltip({
		placement: "top",
	});

	const onAddTask = () => {
		setShowAddTask(!showAddTask);
	};

	const getAddButtonClasses = () => {
		let classes =
			"self-end p-2 px-6 pt-2 mb-3 text-white baseline rounded-full hover:bg-brightRedLight ";
		classes += showAddTask
			? "bg-rose-600 hover:bg-rose-400"
			: "bg-brightRed hover:bg-brightRedLight";

		return classes;
	};

	const getAddButtonNoAuthClasses = () => {
		let classes =
			"p-2 px-6 pt-2 mb-3 text-white baseline rounded-full hover:bg-brightRedLight ";
		classes += showAddTask
			? "bg-rose-600 hover:bg-rose-400"
			: "bg-brightRed hover:bg-brightRedLight";

		return classes;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (content.trim() === "") {
			alert("Task name cannot be empty");
			return;
		}
		if (created_at.trim() === "") {
			alert("Date and time cannot be empty");
			return;
		}

		onPost({ content, created_at, reminder });

		setContent("");
		setCreatedAt("");
		setReminder(false);
	};

	const handleToggleComplete = (check) => {
		setChecked(check);

		if (!check) {
			onFetchAllTasks();
		} else {
			onFetchCompleteTasks();
		}
	};

	const location = useLocation();
	const responseFacebook = (response) => {
		facebookLogin(response.accessToken);
		setTimeout(() => {
			window.location = location ? location.pathname : "/";
		}, 3000);
	};

	return (
		<>
			<div className="flex justify-between">
				{authToken ? (
					<>
						<button type="button" ref={setTriggerRef}>
							<Switch
								checked={checked}
								onChange={handleToggleComplete}
								onColor="#f25f3a"
								onHandleColor="#f25f3a"
								handleDiameter={30}
								uncheckedIcon={false}
								checkedIcon={false}
								boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
								activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
								height={20}
								width={48}
								className="cursor-pointer mb-2 mt-2"
								id="material-switch"
							/>
						</button>

						{visible && (
							<div
								ref={setTooltipRef}
								{...getTooltipProps({
									className: "tooltip-container",
								})}
							>
								<div
									{...getArrowProps({
										className: "tooltip-arrow",
									})}
								/>
								task completed
							</div>
						)}
						<button
							href="login"
							className={getAddButtonClasses()}
							onClick={onAddTask}
						>
							{showAddTask ? (
								<span>&#10007; Close</span>
							) : (
								<span>&#10003; Add</span>
							)}
						</button>
					</>
				) : (
					<>
						<div></div>
						<button
							href="login"
							className={getAddButtonNoAuthClasses()}
							onClick={onAddTask}
						>
							{showAddTask ? (
								<span>&#10007; Close</span>
							) : (
								<span>&#10003; Add</span>
							)}
						</button>
					</>
				)}
			</div>
			{showAddTask && (
				<form
					className="flex flex-col px-5 mb-3 space-y-6 my-2 md:w-full"
					onSubmit={handleSubmit}
				>
					<div className="form-control">
						<label className="block">
							<span className="block text-xl font-medium text-slate-700 mb-1">
								Task
							</span>
							<input
								className="border rounded-md p-2 w-full
                                        border-slate-300 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
								placeholder="Task name"
								type="text"
								value={content}
								onChange={(e) => setContent(e.target.value)}
							/>
						</label>
					</div>
					<div className="form-control">
						<label className="block">
							<span className="block text-xl font-medium text-slate-700 mb-1">
								Day & Time
							</span>
							<input
								className="border rounded-md p-2 w-full
                                        border-slate-300 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
								placeholder="Add date and time"
								type="datetime-local"
								value={created_at}
								onChange={(e) => setCreatedAt(e.target.value)}
							/>
						</label>
					</div>
					<div className="form-control">
						<label className="flex justify-between">
							<div className="text-xl font-medium text-slate-700 mb-1">
								Set Reminder
							</div>
							<input
								className="border rounded-md p-2
								text-brightRed 
								focus:ring-red-200"
								placeholder="Task name"
								type="checkbox"
								checked={reminder}
								value={reminder}
								onChange={(e) => setReminder(e.target.checked)}
							/>
						</label>
					</div>
					{authToken ? (
						<input
							type="submit"
							value="Save Task"
							className="p-3 px-6 pt-2 cursor-pointer text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight md:block"
						/>
					) : (
						<Popup
							trigger={
								<button className="p-3 px-6 pt-2 cursor-pointer text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight md:block">
									Login to continue
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
					)}
				</form>
			)}
		</>
	);
};

export default AddTask;
