import React from "react";
import { Link } from "react-router-dom";
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
	FaChevronRight,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="md-footer">
			<div className="md-footer__wave">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="md-footer__wave-fill"
					></path>
				</svg>
			</div>
			<div className="md-container">
				<div className="md-footer__content">
					<div className="md-footer__logo">
						<h2>
							moj<span>Dnevnik</span>
						</h2>
						<p>The complete school management solution</p>
						<div className="md-footer__social">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
							>
								<FaFacebookF />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<FaTwitter />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<FaLinkedinIn />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<FaInstagram />
							</a>
						</div>
					</div>
					<div className="md-footer__links">
						<div className="md-footer__group">
							<h4>Product</h4>
							<ul>
								<li>
									<Link to="/features">Features</Link>
								</li>
								<li>
									<Link to="/for-schools">User Roles</Link>
								</li>
								<li>
									<Link to="/benefits">Benefits</Link>
								</li>
								<li>
									<Link to="/pricing">Pricing</Link>
								</li>
							</ul>
						</div>
						<div className="md-footer__group">
							<h4>Resources</h4>
							<ul>
								<li>
									<Link to="/faq">FAQ</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
								<li>
									<Link to="/support">Support</Link>
								</li>
								<li>
									<Link to="/documentation">Documentation</Link>
								</li>
							</ul>
						</div>
						<div className="md-footer__group">
							<h4>Company</h4>
							<ul>
								<li>
									<Link to="/about">About Us</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
								<li>
									<Link to="/careers">Careers</Link>
								</li>
								<li>
									<Link to="/legal">Legal</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="md-footer__contact">
						<h4>Contact Us</h4>
						<p>info@mojdnevnik.com</p>
						<p>+123 456 7890</p>
						<div className="md-footer__newsletter">
							<h4>Stay Updated</h4>
							<div className="md-footer__form">
								<input type="email" placeholder="Enter your email" />
								<button type="submit">
									<FaChevronRight />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="md-footer__bottom">
					<p>
						&copy; {new Date().getFullYear()} mojDnevnik. All rights reserved.
					</p>
					<div className="md-footer__legal">
						<Link to="/privacy">Privacy Policy</Link>
						<Link to="/terms">Terms of Service</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
