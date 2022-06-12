const fakeTasks = [
	{
		id: 1,
		content: "Interview with the boss",
		created_at: "Feb 1, 4:13pm",
		reminder: true,
		completed: true,
	},
	{
		id: 2,
		content: "Doctor's appointment",
		created_at: "Feb 5th, 3:10pm",
		reminder: false,
		completed: false,
	},
	{
		id: 3,
		content: "Take a break",
		created_at: "June 5th, 10:30pm",
		reminder: true,
		completed: false,
	},
];

export const getFakeTasks = () => {
    return fakeTasks;
}
