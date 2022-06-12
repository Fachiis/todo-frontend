import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);

	return (
		<React.Fragment>
			<NavBar />
			<HeroSection
				showAdd={showAddTask}
				onAddTask={() => setShowAddTask(!showAddTask)}
			/>
			<Footer />
		</React.Fragment>
	);
}

export default App;
