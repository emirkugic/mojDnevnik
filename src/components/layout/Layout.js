import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
	return (
		<div className="md-layout">
			<Navbar />
			<main className="md-main">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
