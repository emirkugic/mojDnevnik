import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Homepage, About, Contact, Pricing, Gallery } from "./pages";
import "./styles/global.css";

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/gallery" element={<Gallery />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
