import React, { useState, useEffect } from "react";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";
import http from "../src/services/httpService";
import config from "../src/constants/config.json";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasks = await fetchTasks();
			setTasks(tasks);
		};

		getTasks();
	}, []);

	const fetchTasks = async () => {
		const { data: tasks } = await http.get(config.apiEndpoint);
		return tasks;
	};

	const fetchCompletedTasks = async () => {
		const completedTasks = tasks.filter((task) => task.completed);
		setTasks(completedTasks);
	};

	const fetchTask = async (id) => {
		const { data: task } = await http.get(`${config.apiEndpoint}${id}`);
		return task;
	};

	const handleAdd = async (task) => {
		const prevState = tasks;
		const { status } = await http.post(config.apiEndpoint, task);

		if (status !== 201) {
			setTasks(prevState);
			return;
		}

		setTasks([...tasks, task]);
	};

	const handleDelete = async (id) => {
		const prevState = tasks;
		const { status } = await http.delete(`${config.apiEndpoint}${id}`);

		if (status !== 204) {
			setTasks(prevState);
			return;
		}

		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	const handleToggleReminder = async (id) => {
		const prevState = tasks;
		const task = await fetchTask(id);
		const updatedTask = { ...task, reminder: !task.reminder };

		const { status } = await http.put(
			`${config.apiEndpoint}${id}/`,
			updatedTask
		);

		if (status !== 200) {
			setTasks(prevState);
			return;
		}

		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.reminder = !task.reminder;
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	const handleCheckCompleted = async (id) => {
		const prevState = tasks;
		const task = await fetchTask(id);
		const updatedTask = { ...task, completed: !task.completed };

		const { status } = await http.put(
			`${config.apiEndpoint}${id}/`,
			updatedTask
		);

		if (status !== 200) {
			setTasks(prevState);
			return;
		}

		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.completed = !task.completed;
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	return (
		<React.Fragment>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<HeroSection
							tasks={tasks}
							onDelete={handleDelete}
							onToggle={handleToggleReminder}
							onCheck={handleCheckCompleted}
							onPost={handleAdd}
							showAdd={showAddTask}
							onFetchCompleteTasks={fetchCompletedTasks}
							onAddTask={() => setShowAddTask(!showAddTask)}
						/>
					}
				/>
			</Routes>
			<Footer />
			<ToastContainer />
		</React.Fragment>
	);
}

export default App;
