import React, { useState } from "react";
import Switch from "react-switch";
import { useLocation } from "react-router-dom";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

const AddTask = ({ showAdd, onAddTask, onPost, onFetchCompleteTasks }) => {
	const [content, setContent] = useState("");
	const [created_at, setCreatedAt] = useState("");
	const [reminder, setReminder] = useState(false);
	const [checked, setChecked] = useState(false);

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

	const getAddButtonClasses = () => {
		let classes =
			"self-end p-2 px-6 pt-2 mb-3 text-white baseline rounded-full hover:bg-brightRedLight ";
		classes += showAdd
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

	const location = useLocation();
	const handleToggleComplete = (check) => {
		setChecked(check);

		if (!check) {
			window.location = location ? location.pathname : "/";
		} else {
			onFetchCompleteTasks();
		}
	};

	return (
		<>
			<div className="flex justify-between">
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
						className="cursor-pointer mb-3 mt-2"
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
					{showAdd ? <span>&#10007; Close</span> : <span>&#10003; Add</span>}
				</button>
			</div>
			{showAdd && (
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
                                        border-slate-300 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
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
						<input
							type="submit"
							disabled={true}
							value="Login in to continue"
							className="p-3 px-6 pt-2 cursor-pointer text-white bg-brightRedLight rounded-md baseline md:block"
						/>
					)}
				</form>
			)}
		</>
	);
};

export default AddTask;
