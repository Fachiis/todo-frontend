import React from "react";
import { FaTimes } from "react-icons/fa";
import dateFormat from "dateformat";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

const Task = ({ task, onDelete, onToggleReminder, onCheckCompleted }) => {
	const {
		getArrowProps,
		getTooltipProps,
		setTooltipRef,
		setTriggerRef,
		visible,
	} = usePopperTooltip({
		placement: "left",
	});

	const getReminderClasses = () => {
		let classes = "";
		classes += task.reminder ? "border-l-2 px-2 border-brightRed" : "";
		return classes;
	};

	const getTime = (obj) => {
		return dateFormat(obj, "mmmm dS, h:MM TT");
	};

	return (
		<div className="px-5 my-3 cursor-pointer">
			<div
				className={getReminderClasses()}
				onDoubleClick={() => onToggleReminder(task.id)}
			>
				<div className="flex items-center justify-between">
					<h1>{task.content}</h1>
					<div className="flex items-center space-x-3">
						<button type="button" ref={setTriggerRef}>
							<input
								type="checkbox"
								checked={task.completed}
								onChange={() => onCheckCompleted(task.id)}
								className="text-brightRed 
								focus:ring-red-200 border-2 rounded-xl checked:bg-brightRed"
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
								mark completed
							</div>
						)}
						<FaTimes
							className="text-rose-600 cursor-pointer"
							onClick={() => onDelete(task.id)}
						/>
					</div>
				</div>
				<p className="text-slate-600">{getTime(task.created_at)}</p>
			</div>
		</div>
	);
};

export default Task;
