import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Scroll effect for navbar
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`md-navbar ${isScrolled ? "md-navbar--scrolled" : ""}`}>
			<div className="md-container md-navbar__container">
				<div className="md-navbar__logo">
					<Link to="/">
						<h1>
							moj<span>Dnevnik</span>
						</h1>
					</Link>
				</div>
				<nav
					className={`md-navbar__links ${
						isMenuOpen ? "md-navbar__links--open" : ""
					}`}
				>
					<ul>
						<li>
							<Link to="/features" onClick={() => setIsMenuOpen(false)}>
								Features
							</Link>
						</li>
						<li>
							<Link to="/for-schools" onClick={() => setIsMenuOpen(false)}>
								For Schools
							</Link>
						</li>
						<li>
							<Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
								Gallery
							</Link>
						</li>
						<li>
							<Link to="/about" onClick={() => setIsMenuOpen(false)}>
								About Us
							</Link>
						</li>
						<li>
							<Link to="/pricing" onClick={() => setIsMenuOpen(false)}>
								Pricing
							</Link>
						</li>
						<li>
							<Link to="/blog" onClick={() => setIsMenuOpen(false)}>
								Blog
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={() => setIsMenuOpen(false)}>
								Contact
							</Link>
						</li>
						<li className="md-navbar__cta">
							<Link to="/contact" onClick={() => setIsMenuOpen(false)}>
								Request Demo
							</Link>
						</li>
					</ul>
				</nav>
				<div
					className="md-navbar__mobile-menu"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
