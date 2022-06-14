import React from "react";
import TodoAction from "./todo/todoAction";
import TodoInfo from "./todo/todoInfo";

const HeroSection = ({
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
		<section id="hero">
			<div className="container flex flex-col-reverse mx-auto px-6 mt-10 space-y-0 md:space-y-0 md:flex-row">
				<TodoInfo />
				<TodoAction
					tasks={tasks}
					showAdd={showAdd}
					onAddTask={onAddTask}
					onDelete={onDelete}
					onToggle={onToggle}
					onCheck={onCheck}
					onPost={onPost}
					onFetchCompleteTasks={onFetchCompleteTasks}
				/>
			</div>
		</section>
	);
};

export default HeroSection;
