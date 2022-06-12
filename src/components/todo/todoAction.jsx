import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

const TodoAction = ({ showAdd, onAddTask }) => {
	const [tooltip, setTooltip] = useState(true);

	const getAddButtonClasses = () => {
		let classes =
			"self-end p-3 px-6 pt-2 text-white baseline rounded-full hover:bg-brightRedLight ";
		classes += showAdd
			? "bg-rose-600 hover:bg-rose-400"
			: "bg-brightRed hover:bg-brightRedLight";
		return classes;
	};

	return (
		<>
			<div class="md:w-1/2 flex flex-col pb-10 md:pb-20">
				<button
					href="login"
					className={getAddButtonClasses()}
					onClick={onAddTask}
				>
					{showAdd ? <span>&#10006; Close</span> : <span>&#10010; Add</span>}
				</button>
				{showAdd && (
					<form class="flex flex-col px-5 space-y-6 my-2 md:w-full">
						<div className="form-control">
							<label class="block">
								<span class="block text-xl font-medium text-slate-700 mb-1">
									Task
								</span>
								<input
									class="border rounded-md p-2 w-full
                                        border-slate-300 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
									placeholder="Task name"
									type="text"
								/>
							</label>
						</div>
						<div className="form-control">
							<label class="block">
								<span class="block text-xl font-medium text-slate-700 mb-1">
									Day & Time
								</span>
								<input
									class="border rounded-md p-2 w-full
                                        border-slate-300 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
									placeholder="Add date and time"
									type="text"
								/>
							</label>
						</div>
						<div className="form-control">
							<label class="flex justify-between">
								<div class="text-xl font-medium text-slate-700 mb-1">
									Set Reminder
								</div>
								<input
									class="border rounded-md p-2
                                        border-slate-300 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
									placeholder="Task name"
									type="checkbox"
									checked=""
									value=""
								/>
							</label>
						</div>

						<input
							type="submit"
							value="Save Task"
							className="p-3 px-6 pt-2 cursor-pointer text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight md:block"
						/>
					</form>
				)}

				<div className="flex flex-col my-2">
					<div className="px-5 my-3">
						<div className="flex items-center justify-between">
							<h1>Doctor's appointment</h1>
							<input
								className="checked:text-green-500 border-0 rounded-full focus:ring-0"
								type="checkbox"
								checked=""
								value=""
								data-tip="mark completed"
								onMouseEnter={() => {
									setTooltip(true);
								}}
								onMouseLeave={() => {
									setTooltip(false);
									setTimeout(() => {
										setTooltip(true);
									}, 50);
								}}
								//   onChange={(e) => setReminder(e.currentTarget.checked)}
							/>
						</div>
						<p className="text-slate-600">Feb 5th, 3:15pm</p>
					</div>
					<div className="px-5 my-3">
						<div className="flex items-center justify-between">
							<h1>Interview meeting</h1>
							<input
								className="checked:bg-green-500 border-0 rounded-full focus:ring-0"
								type="checkbox"
								checked=""
								value=""
								data-tip="mark completed"
								onMouseEnter={() => {
									setTooltip(true);
								}}
								onMouseLeave={() => {
									setTooltip(false);
									setTimeout(() => {
										setTooltip(true);
									}, 50);
								}}
								//   onChange={(e) => setReminder(e.currentTarget.checked)}
							/>
						</div>
						<p className="text-slate-600">July 6th, 11:00am</p>
					</div>
				</div>
			</div>
			{tooltip && <ReactTooltip type="info" effect="float" />}
		</>
	);
};

export default TodoAction;
