import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Fix icons import by using direct imports instead
import {
	FaUserGraduate,
	FaUserTie,
	FaBook,
	FaCheckSquare,
	FaChartBar,
	FaMobileAlt,
	FaShieldAlt,
	FaMedal,
	FaClock,
	FaComments,
	FaBars,
	FaTimes,
	FaChevronRight,
	FaGraduationCap,
	FaChartLine,
	FaUsers,
	FaClipboardCheck,
	FaCalendarAlt,
	FaUserCog,
	FaFileAlt,
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
	FaEnvelope,
	FaLaptopCode,
	FaBell,
	FaBullhorn,
	FaHandshake,
	FaHeadset,
} from "react-icons/fa";

import "./Homepage.css";

const Homepage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeTestimonial, setActiveTestimonial] = useState(0);
	const [isScrolled, setIsScrolled] = useState(false);
	const [hoveredFeature, setHoveredFeature] = useState(null);

	// Scroll effect for navbar
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const counterAnimation = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				delay: 0.3,
			},
		},
	};

	// InView hooks for animations
	const [heroRef, heroInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [statsRef, statsInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [featuresRef, featuresInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [rolesRef, rolesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [benefitsRef, benefitsInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [testimonialsRef, testimonialsInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [galleryRef, galleryInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

	// Testimonials data (placeholders)
	const testimonials = [
		{
			quote:
				"mojDnevnik transformed how we manage our school. Everything from attendance to grades is now streamlined in one place, saving us countless hours every week.",
			name: "Ana Petrović",
			role: "School Principal",
			image: "/image3.png",
		},
		{
			quote:
				"As a parent, I love being able to check my children's progress directly from my phone. The interface is intuitive and keeps me informed about their academic journey.",
			name: "Marko Novak",
			role: "Parent",
			image: "/image4.png",
		},
		{
			quote:
				"The reporting features save me hours each week. I can focus more on teaching and less on paperwork. It's become indispensable to our school's operations.",
			name: "Ivana Kovač",
			role: "Class Teacher",
			image: "/image5.png",
		},
	];

	// Features data
	const features = [
		{
			icon: <FaBook />,
			title: "Lesson Management",
			desc: "Log and organize lessons efficiently with integrated curriculum tracking",
		},
		{
			icon: <FaCheckSquare />,
			title: "Attendance Tracking",
			desc: "Mark and monitor student attendance with real-time analytics",
		},
		{
			icon: <FaChartBar />,
			title: "Assessments & Grading",
			desc: "Create assessments and grade students with customizable criteria",
		},
		{
			icon: <FaUsers />,
			title: "Class Overview",
			desc: "Comprehensive class performance insights with detailed analytics",
		},
		{
			icon: <FaMobileAlt />,
			title: "Mobile Responsive",
			desc: "Access from any device, anywhere with our responsive design",
		},
		{
			icon: <FaShieldAlt />,
			title: "Secure Access",
			desc: "Role-based permissions system ensuring data security",
		},
	];

	// User roles data - made it 6 for symmetry
	const roles = [
		{
			title: "Teachers",
			icon: <FaUserGraduate />,
			color: "#4361EE",
			features: [
				"Record lessons",
				"Track attendance",
				"Create assessments",
				"Grade students",
			],
		},
		{
			title: "Class Teachers",
			icon: <FaUserTie />,
			color: "#3A0CA3",
			features: [
				"All teacher features",
				"Class overview",
				"Generate reports",
				"Parent communication",
			],
		},
		{
			title: "Parents",
			icon: <FaComments />,
			color: "#4CC9F0",
			features: [
				"View child's progress",
				"Check attendance",
				"See assessments",
				"Download reports",
			],
		},
		{
			title: "Students",
			icon: <FaGraduationCap />,
			color: "#F72585",
			features: [
				"Access grades",
				"View schedule",
				"See attendance",
				"Track progress",
			],
		},
		{
			title: "Administrators",
			icon: <FaShieldAlt />,
			color: "#7209B7",
			features: [
				"Manage all users",
				"System configuration",
				"School-wide reports",
				"Complete control",
			],
		},
		{
			title: "IT Support",
			icon: <FaLaptopCode />,
			color: "#22577A",
			features: [
				"User management",
				"Technical support",
				"System updates",
				"Data backup",
			],
		},
	];

	// Benefits data
	const benefits = [
		{
			icon: <FaClock />,
			title: "Save Time",
			desc: "Automate routine tasks and reduce paperwork by up to 70%",
		},
		{
			icon: <FaMedal />,
			title: "Improve Quality",
			desc: "Enhance educational standards with data-driven insights and analytics",
		},
		{
			icon: <FaChartLine />,
			title: "Track Progress",
			desc: "Monitor student development with comprehensive metrics and visual reports",
		},
	];

	// Stats data
	const stats = [
		{ value: "85%", label: "Time Saved on Administrative Tasks" },
		{ value: "92%", label: "Satisfaction Rate among Users" },
		{ value: "10k+", label: "Active Users" },
		{ value: "50+", label: "Schools Using mojDnevnik" },
	];

	// Gallery items for the screenshot showcase
	const galleryItems = [
		{
			image: "/image1.png",
			title: "Dashboard Interface",
			desc: "User-friendly dashboard with key information at a glance",
		},
		{
			image: "/image2.png",
			title: "Grade Management",
			desc: "Easy-to-use grading system with detailed analytics",
		},
		{
			image: "/image3.png",
			title: "Mobile Experience",
			desc: "Access the full system from any mobile device",
		},
		{
			image: "/image4.png",
			title: "Parent Portal",
			desc: "Keep parents informed with our dedicated portal",
		},
	];

	return (
		<div className="homepage">
			{/* Navigation */}
			<header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
				<div className="container navbar-container">
					<div className="logo">
						<h1>
							moj<span>Dnevnik</span>
						</h1>
					</div>
					<nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
						<ul>
							<li>
								<a href="#features" onClick={() => setIsMenuOpen(false)}>
									Features
								</a>
							</li>
							<li>
								<a href="#roles" onClick={() => setIsMenuOpen(false)}>
									For Schools
								</a>
							</li>
							<li>
								<a href="#gallery" onClick={() => setIsMenuOpen(false)}>
									Gallery
								</a>
							</li>
							<li>
								<a href="#about" onClick={() => setIsMenuOpen(false)}>
									About Us
								</a>
							</li>
							<li>
								<a href="#pricing" onClick={() => setIsMenuOpen(false)}>
									Pricing
								</a>
							</li>
							<li>
								<a href="#blog" onClick={() => setIsMenuOpen(false)}>
									Blog
								</a>
							</li>
							<li>
								<a href="#contact" onClick={() => setIsMenuOpen(false)}>
									Contact
								</a>
							</li>
							<li className="cta-link">
								<a href="#contact" onClick={() => setIsMenuOpen(false)}>
									Request Demo
								</a>
							</li>
						</ul>
					</nav>
					<div
						className="mobile-menu-btn"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <FaTimes /> : <FaBars />}
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="hero-section" ref={heroRef}>
				<div className="hero-bg-shapes">
					<div className="shape shape-1"></div>
					<div className="shape shape-2"></div>
					<div className="shape shape-3"></div>
					<div className="shape shape-4"></div>
					<div className="shape shape-5"></div>
				</div>
				<div className="container hero-container">
					<motion.div
						className="hero-content"
						initial="hidden"
						animate={heroInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<div className="hero-badge">School Management System</div>
						<h1>
							Simplify School <span className="gradient-text">Management</span>
						</h1>
						<h2>One platform for teachers, students, and parents</h2>
						<p>
							mojDnevnik is a comprehensive school management system that
							streamlines attendance, grading, assessments, and communication -
							all in one place, accessible anywhere.
						</p>
						<div className="hero-buttons">
							<a href="#contact" className="btn btn-primary">
								Get Started{" "}
								<span className="btn-icon">
									<FaChevronRight />
								</span>
							</a>
							<a href="#features" className="btn btn-secondary">
								Learn More
							</a>
						</div>
					</motion.div>
					<motion.div
						className="hero-image"
						initial={{ opacity: 0, x: 50 }}
						animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="image-wrapper">
							<img src="/image1.png" alt="mojDnevnik Dashboard Preview" />
							<div className="floating-card card-1">
								<FaCheckSquare />
								<span>Attendance Tracked</span>
							</div>
							<div className="floating-card card-2">
								<FaChartBar />
								<span>Grades Updated</span>
							</div>
							<div className="floating-card card-3">
								<FaCalendarAlt />
								<span>Schedule Created</span>
							</div>
							<div className="floating-card card-4">
								<FaBell />
								<span>Notifications Sent</span>
							</div>
							<div className="floating-card card-5">
								<FaFileAlt />
								<span>Reports Generated</span>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="stats-section" ref={statsRef}>
				<div className="container">
					<motion.div
						className="stats-grid"
						initial="hidden"
						animate={statsInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								className="stat-card"
								variants={counterAnimation}
							>
								<h3>{stat.value}</h3>
								<p>{stat.label}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="features-section" ref={featuresRef}>
				<div className="container">
					<motion.div
						className="section-header"
						initial="hidden"
						animate={featuresInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<h2>
							Powerful <span className="gradient-text">Features</span>
						</h2>
						<p>Everything you need to run your school efficiently</p>
					</motion.div>

					<motion.div
						className="features-grid"
						initial="hidden"
						animate={featuresInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								className="feature-card"
								variants={fadeInUp}
								onMouseEnter={() => setHoveredFeature(index)}
								onMouseLeave={() => setHoveredFeature(null)}
							>
								<div
									className={`feature-icon ${
										hoveredFeature === index ? "hovered" : ""
									}`}
								>
									{feature.icon}
								</div>
								<h3>{feature.title}</h3>
								<p>{feature.desc}</p>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						className="features-showcase"
						initial={{ opacity: 0, y: 30 }}
						animate={
							featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<div className="showcase-wrapper">
							<img
								src="/image2.png"
								alt="mojDnevnik Features Showcase"
								className="showcase-image"
							/>
							<div className="showcase-overlay">
								<div className="overlay-content">
									<h3>Intuitive Interface</h3>
									<p>Designed for ease of use across all devices</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* User Roles Section */}
			<section id="roles" className="roles-section" ref={rolesRef}>
				<div className="roles-bg-pattern"></div>
				<div className="container">
					<motion.div
						className="section-header"
						initial="hidden"
						animate={rolesInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<h2>
							Tailored for <span className="gradient-text">Everyone</span>
						</h2>
						<p>Specific features designed for each role in your school</p>
					</motion.div>

					<motion.div
						className="roles-container"
						initial="hidden"
						animate={rolesInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{roles.map((role, index) => (
							<motion.div
								key={index}
								className="role-card"
								variants={fadeInUp}
								style={{ borderTopColor: role.color }}
							>
								<div
									className="role-icon"
									style={{ backgroundColor: role.color }}
								>
									{role.icon}
								</div>
								<h3>{role.title}</h3>
								<ul>
									{role.features.map((feature, idx) => (
										<li key={idx}>
											<FaChevronRight /> {feature}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Gallery Section */}
			<section id="gallery" className="gallery-section" ref={galleryRef}>
				<div className="container">
					<motion.div
						className="section-header"
						initial="hidden"
						animate={galleryInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<h2>
							See it in <span className="gradient-text">Action</span>
						</h2>
						<p>Explore screenshots of mojDnevnik in use</p>
					</motion.div>

					<motion.div
						className="gallery-grid"
						initial="hidden"
						animate={galleryInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{galleryItems.map((item, index) => (
							<motion.div
								key={index}
								className="gallery-item"
								variants={fadeInUp}
							>
								<div className="gallery-image">
									<img src={item.image} alt={item.title} />
									<div className="gallery-overlay">
										<div className="gallery-content">
											<h3>{item.title}</h3>
											<p>{item.desc}</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Benefits Section */}
			<section id="benefits" className="benefits-section" ref={benefitsRef}>
				<div className="container">
					<div className="benefits-content">
						<motion.div
							className="section-header"
							initial="hidden"
							animate={benefitsInView ? "visible" : "hidden"}
							variants={fadeInUp}
						>
							<h2>
								Why Choose <span className="gradient-text">mojDnevnik</span>?
							</h2>
							<p>
								Transform how your school operates with our comprehensive
								solution
							</p>
						</motion.div>

						<motion.div
							className="benefits-list"
							initial="hidden"
							animate={benefitsInView ? "visible" : "hidden"}
							variants={staggerContainer}
						>
							{benefits.map((benefit, index) => (
								<motion.div
									key={index}
									className="benefit-item"
									variants={fadeInUp}
								>
									<div className="benefit-icon">{benefit.icon}</div>
									<div className="benefit-text">
										<h3>{benefit.title}</h3>
										<p>{benefit.desc}</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>

					<motion.div
						className="benefits-image"
						initial={{ opacity: 0, x: -50 }}
						animate={
							benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
						}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<div className="image-card">
							<img src="/image3.png" alt="Teacher using mojDnevnik" />
							<div className="image-card-overlay"></div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Integration Section with Images */}
			<section id="integrations" className="integrations-section">
				<div className="container">
					<div className="section-header">
						<h2>
							Seamless <span className="gradient-text">Integrations</span>
						</h2>
						<p>Connect with the tools your school already uses</p>
					</div>

					<div className="integration-showcase">
						<div className="integration-text">
							<h3>Everything in One Place</h3>
							<p>
								mojDnevnik connects with your existing school systems for
								seamless data flow between platforms.
							</p>
							<ul className="integration-features">
								<li>
									<FaCheckSquare /> Calendar synchronization
								</li>
								<li>
									<FaCheckSquare /> Email integration
								</li>
								<li>
									<FaCheckSquare /> Document management
								</li>
								<li>
									<FaCheckSquare /> Learning management systems
								</li>
								<li>
									<FaCheckSquare /> Student information systems
								</li>
							</ul>
							<a href="#contact" className="btn btn-secondary">
								Learn About Integrations
							</a>
						</div>
						<div className="integration-images">
							<div className="image-stack">
								<div className="stack-image image-1">
									<img src="/image4.png" alt="Calendar Integration" />
								</div>
								<div className="stack-image image-2">
									<img src="/image5.png" alt="Email Integration" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section
				id="testimonials"
				className="testimonials-section"
				ref={testimonialsRef}
			>
				<div className="testimonials-bg-pattern"></div>
				<div className="container">
					<motion.div
						className="section-header"
						initial="hidden"
						animate={testimonialsInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<h2>
							What Our <span className="gradient-text">Users Say</span>
						</h2>
						<p>Trusted by schools across the country</p>
					</motion.div>

					<motion.div
						className="testimonials-carousel"
						initial={{ opacity: 0 }}
						animate={testimonialsInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.6 }}
					>
						<AnimatePresence mode="wait">
							<motion.div
								key={activeTestimonial}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5 }}
								className="testimonial"
							>
								<div className="testimonial-content">
									<div className="quote">"</div>
									<p>{testimonials[activeTestimonial].quote}</p>
									<div className="testimonial-author">
										<div className="author-image">
											<img
												src={testimonials[activeTestimonial].image}
												alt={testimonials[activeTestimonial].name}
											/>
										</div>
										<div className="author-info">
											<h4>{testimonials[activeTestimonial].name}</h4>
											<p>{testimonials[activeTestimonial].role}</p>
										</div>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>

						<div className="testimonial-dots">
							{testimonials.map((_, index) => (
								<button
									key={index}
									className={`dot ${
										index === activeTestimonial ? "active" : ""
									}`}
									onClick={() => setActiveTestimonial(index)}
									aria-label={`Testimonial ${index + 1}`}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section id="contact" className="cta-section" ref={ctaRef}>
				<div className="cta-bg-pattern"></div>
				<motion.div
					className="container"
					initial="hidden"
					animate={ctaInView ? "visible" : "hidden"}
					variants={fadeInUp}
				>
					<div className="cta-content">
						<h2>
							Ready to transform your{" "}
							<span className="gradient-text-white">school management</span>?
						</h2>
						<p>
							Get in touch for a personalized demo and see how mojDnevnik can
							work for your institution.
						</p>
						<form className="cta-form">
							<div className="form-row">
								<div className="form-group">
									<label>School Name</label>
									<input type="text" placeholder="Enter school name" required />
								</div>
								<div className="form-group">
									<label>Email Address</label>
									<input
										type="email"
										placeholder="Enter email address"
										required
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group">
									<label>Contact Person</label>
									<input
										type="text"
										placeholder="Enter contact name"
										required
									/>
								</div>
								<div className="form-group">
									<label>Phone Number</label>
									<input type="tel" placeholder="Enter phone number" />
								</div>
							</div>
							<button type="submit" className="btn btn-primary">
								Request Demo{" "}
								<span className="btn-icon">
									<FaChevronRight />
								</span>
							</button>
						</form>
					</div>
				</motion.div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<div className="footer-wave">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
				<div className="container">
					<div className="footer-content">
						<div className="footer-logo">
							<h2>
								moj<span>Dnevnik</span>
							</h2>
							<p>The complete school management solution</p>
							<div className="social-links">
								<a href="#" aria-label="Facebook">
									<FaFacebookF />
								</a>
								<a href="#" aria-label="Twitter">
									<FaTwitter />
								</a>
								<a href="#" aria-label="LinkedIn">
									<FaLinkedinIn />
								</a>
								<a href="#" aria-label="Instagram">
									<FaInstagram />
								</a>
							</div>
						</div>
						<div className="footer-links">
							<div className="link-group">
								<h4>Product</h4>
								<ul>
									<li>
										<a href="#features">Features</a>
									</li>
									<li>
										<a href="#roles">User Roles</a>
									</li>
									<li>
										<a href="#benefits">Benefits</a>
									</li>
									<li>
										<a href="#pricing">Pricing</a>
									</li>
								</ul>
							</div>
							<div className="link-group">
								<h4>Resources</h4>
								<ul>
									<li>
										<a href="#faq">FAQ</a>
									</li>
									<li>
										<a href="#blog">Blog</a>
									</li>
									<li>
										<a href="#support">Support</a>
									</li>
									<li>
										<a href="#documentation">Documentation</a>
									</li>
								</ul>
							</div>
							<div className="link-group">
								<h4>Company</h4>
								<ul>
									<li>
										<a href="#about">About Us</a>
									</li>
									<li>
										<a href="#contact">Contact</a>
									</li>
									<li>
										<a href="#careers">Careers</a>
									</li>
									<li>
										<a href="#legal">Legal</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer-contact">
							<h4>Contact Us</h4>
							<p>info@mojdnevnik.com</p>
							<p>+123 456 7890</p>
							<div className="newsletter">
								<h4>Stay Updated</h4>
								<div className="newsletter-form">
									<input type="email" placeholder="Enter your email" />
									<button type="submit">
										<FaChevronRight />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<p>
							&copy; {new Date().getFullYear()} mojDnevnik. All rights reserved.
						</p>
						<div className="legal-links">
							<a href="#privacy">Privacy Policy</a>
							<a href="#terms">Terms of Service</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
