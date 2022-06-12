import React from "react";
import TodoAction from "./todo/todoAction";
import TodoInfo from "./todo/todoInfo";

const HeroSection = ({ showAdd, onAddTask }) => {
	return (
		<section id="hero">
			<div class="container flex flex-col-reverse mx-auto px-6 mt-10 space-y-0 md:space-y-0 md:flex-row">
				<TodoInfo />
				<TodoAction showAdd={showAdd} onAddTask={onAddTask} />
			</div>
		</section>
	);
};

export default HeroSection;
