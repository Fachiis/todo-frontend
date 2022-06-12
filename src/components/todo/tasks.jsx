import React, { useEffect, useState } from "react";

import Task from "./task";
import { getFakeTasks } from "../../services/fakeTasks";

const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasks = await getFakeTasks();
			setTasks(tasks);
		};

		getTasks();
	}, []);

	const handleDelete = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	const handleToggleReminder = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.reminder = !task.reminder;
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	return (
		<>
			{tasks.length > 0 ? (
				tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onDelete={handleDelete}
						onToggleReminder={handleToggleReminder}
					/>
				))
			) : (
				<span className="text-xl text-center">No tasks available</span>
			)}
		</>
	);
};

export default Tasks;
