import React from "react";

const TodoInfo = () => {
	return (
		<div className="flex flex-col mb-32 space-y-12 md:w-1/2">
			<h1 className="max-w-md text-3xl font-bold text-center md:text-4xl md:text-left">
				Track your tasks and get reminders when they are due.
			</h1>
			<p className="max-w-sm mx-auto text-center text-darkGrayishBlue md:text-left md:mx-0">
				Let us help you keep track of your tasks and get reminders when they are
				due. We will help you to set up a reminder for your tasks and we will
				also help you to get reminders when they are due.
			</p>
			<div className="flex justify-center md:justify-start">
				<button className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-md baseline cursor-none hover:bg-brightRedLight md:block">
					It's free
				</button>
			</div>
		</div>
	);
};

export default TodoInfo;
