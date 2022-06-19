import React from "react";
import AddTask from "./addTask";
import Tasks from "./tasks";

const TodoAction = ({
	tasks,
	onDelete,
	onToggle,
	onPost,
	onCheck,
	onFetchCompleteTasks,
	onFetchAllTasks,
}) => {
	return (
		<>
			<div className="md:w-1/2 flex flex-col pb-10 md:pb-20">
				<AddTask
					onPost={onPost}
					onFetchCompleteTasks={onFetchCompleteTasks}
					onFetchAllTasks={onFetchAllTasks}
				/>
				<Tasks
					tasks={tasks}
					onDelete={onDelete}
					onToggle={onToggle}
					onCheck={onCheck}
				/>
			</div>
		</>
	);
};

export default TodoAction;
