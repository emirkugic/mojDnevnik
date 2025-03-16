import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Homepage, About } from "./pages";
import "./styles/global.css";

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
