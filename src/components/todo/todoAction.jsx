import React from "react";
import AddTask from "./addTask";
import Tasks from "./tasks";

const TodoAction = ({
	tasks,
	showAdd,
	onAddTask,
	onDelete,
	onToggle,
	onPost,
	onCheck,
	onFetchCompleteTasks,
}) => {
	return (
		<>
			<div className="md:w-1/2 flex flex-col pb-10 md:pb-20">
				<AddTask
					showAdd={showAdd}
					onAddTask={onAddTask}
					onPost={onPost}
					onFetchCompleteTasks={onFetchCompleteTasks}
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
