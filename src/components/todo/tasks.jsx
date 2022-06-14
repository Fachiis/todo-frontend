import React from "react";

import Task from "./task";

const Tasks = ({ tasks, onDelete, onToggle, onCheck }) => {

	return (
		<>
			{tasks.length > 0 ? (
				tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onDelete={onDelete}
						onToggleReminder={onToggle}
						onCheckCompleted={onCheck}
					/>
				))
			) : (
				<span className="text-xl text-center">No tasks available</span>
			)}
		</>
	);
};

export default Tasks;
