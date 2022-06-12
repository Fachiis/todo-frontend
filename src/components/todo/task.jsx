import React from "react";
import { FaTimes } from "react-icons/fa";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

const Task = ({ task, onDelete, onToggleReminder }) => {
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

	return (
		<div className="px-5 my-3 cursor-pointer">
			<div
				className={getReminderClasses()}
				onDoubleClick={() => onToggleReminder(task.id)}
			>
				<div className="flex items-center justify-between">
					<h1>{task.content}</h1>
					<button type="button" ref={setTriggerRef}>
						<FaTimes
							className="text-rose-600 cursor-pointer"
							onClick={() => onDelete(task.id)}
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
				</div>
				<p className="text-slate-600">{task.created_at}</p>
			</div>
		</div>
	);
};

export default Task;
