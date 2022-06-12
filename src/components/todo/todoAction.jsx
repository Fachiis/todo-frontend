import React, { useState } from "react";
import Tasks from "./tasks";

const TodoAction = ({ showAdd, onAddTask }) => {
	const getAddButtonClasses = () => {
		let classes =
			"self-end p-3 px-6 pt-2 mb-3 text-white baseline rounded-full hover:bg-brightRedLight ";
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
					<form class="flex flex-col px-5 mb-3 space-y-6 my-2 md:w-full">
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

				<Tasks />
			</div>
		</>
	);
};

export default TodoAction;
