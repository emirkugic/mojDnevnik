import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	FaRocket,
	FaLightbulb,
	FaUsers,
	FaChalkboardTeacher,
	FaChartLine,
	FaClock,
	FaFileAlt,
	FaLaptopCode,
	FaMobileAlt,
	FaLock,
	FaBalanceScale,
	FaRegLightbulb,
	FaChevronRight,
} from "react-icons/fa";
import "./About.css";

const About = () => {
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

	// InView hooks for animations
	const [visionRef, visionInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [challengesRef, challengesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [solutionRef, solutionInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [principlesRef, principlesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [founderRef, founderInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [futureRef, futureInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Challenges faced by schools
	const challenges = [
		{
			icon: <FaClock />,
			title: "Time-Consuming Administration",
			description:
				"Teachers spend countless hours on paperwork instead of focusing on education",
		},
		{
			icon: <FaFileAlt />,
			title: "Fragmented Systems",
			description:
				"Multiple separate tools for attendance, grading, and communication create chaos",
		},
		{
			icon: <FaLaptopCode />,
			title: "Outdated Technology",
			description:
				"Legacy systems that are difficult to use and rarely updated",
		},
		{
			icon: <FaUsers />,
			title: "Poor Communication",
			description:
				"Limited parent-teacher engagement due to inefficient communication channels",
		},
	];

	// Core solution features
	const solutions = [
		{
			icon: <FaChalkboardTeacher />,
			title: "All-in-One Platform",
			description:
				"Complete school management in a single, intuitive interface",
		},
		{
			icon: <FaMobileAlt />,
			title: "Modern User Experience",
			description: "Clean, responsive design that works on any device",
		},
		{
			icon: <FaChartLine />,
			title: "Data-Driven Insights",
			description: "Analytics that help improve educational outcomes",
		},
		{
			icon: <FaLock />,
			title: "Secure & Reliable",
			description: "Built with the highest standards of data protection",
		},
	];

	// Core principles
	const principles = [
		{
			icon: <FaLightbulb />,
			title: "Innovation",
			description:
				"We never stop improving our platform based on user feedback and emerging technologies",
		},
		{
			icon: <FaBalanceScale />,
			title: "Simplicity",
			description:
				"Powerful doesn't mean complicated - we focus on ease of use for all users",
		},
		{
			icon: <FaRegLightbulb />,
			title: "Educational Impact",
			description:
				"Every feature we build aims to improve the educational experience",
		},
	];

	// Future roadmap items
	const roadmap = [
		"Advanced AI assessment analysis",
		"Custom curriculum development tools",
		"Enhanced learning analytics",
		"Parent-teacher collaboration spaces",
		"Student performance prediction",
		"Personalized learning paths",
	];

	return (
		<div className="md-about">
			{/* Hero Section */}
			<section className="md-about__hero">
				<div className="md-about__hero-shapes">
					<div className="md-about__hero-shape md-about__hero-shape--1"></div>
					<div className="md-about__hero-shape md-about__hero-shape--2"></div>
					<div className="md-about__hero-shape md-about__hero-shape--3"></div>
				</div>
				<div className="md-container">
					<motion.div
						className="md-about__hero-content"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1>
							Reimagining{" "}
							<span className="md-gradient-text">School Management</span>
						</h1>
						<p>
							Our journey to create a modern solution for today's educational
							challenges
						</p>
					</motion.div>
				</div>
			</section>

			{/* Our Vision Section */}
			<section className="md-section md-about__vision" ref={visionRef}>
				<div className="md-container">
					<motion.div
						className="md-about__vision-grid"
						initial="hidden"
						animate={visionInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<div className="md-about__vision-content">
							<div className="md-about__badge">Our Story</div>
							<h2>From Frustration to Innovation</h2>
							<p>
								mojDnevnik was born from a simple observation: schools are using
								outdated, inefficient systems that steal valuable time from
								teachers and administrators.
							</p>
							<p>
								As educators ourselves, we experienced firsthand the limitations
								of legacy school management software - clunky interfaces,
								disconnected systems, and hours lost to administrative tasks
								that could be automated.
							</p>
							<p>
								We envisioned something better: a unified, intuitive platform
								built with modern technology that puts the focus back on
								education instead of administration.
							</p>
						</div>
						<div className="md-about__vision-image">
							<div className="md-about__image-wrapper">
								<img src="/image2.png" alt="Modern school management vision" />
								<div className="md-about__image-overlay"></div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* The Challenges Section */}
			<section className="md-section md-about__challenges" ref={challengesRef}>
				<div className="md-container">
					<div className="md-section-header">
						<h2>
							The <span className="md-gradient-text">Challenges</span>
						</h2>
						<p>Why existing school management systems aren't working</p>
					</div>

					<motion.div
						className="md-about__challenges-grid"
						initial="hidden"
						animate={challengesInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{challenges.map((item, index) => (
							<motion.div
								key={index}
								className="md-about__challenge-card"
								variants={fadeInUp}
							>
								<div className="md-about__challenge-icon">{item.icon}</div>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Our Solution Section */}
			<section className="md-section md-about__solution" ref={solutionRef}>
				<div className="md-container">
					<div className="md-section-header">
						<h2>
							Our <span className="md-gradient-text">Solution</span>
						</h2>
						<p>How mojDnevnik addresses these challenges</p>
					</div>

					<div className="md-about__solution-content">
						<motion.div
							className="md-about__solution-image"
							initial={{ opacity: 0, x: -50 }}
							animate={
								solutionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
							}
							transition={{ duration: 0.8 }}
						>
							<img src="/image4.png" alt="mojDnevnik platform" />
							<img src="/image2.png" alt="mojDnevnik platform" />
						</motion.div>

						<motion.div
							className="md-about__solution-grid"
							initial="hidden"
							animate={solutionInView ? "visible" : "hidden"}
							variants={staggerContainer}
						>
							{solutions.map((item, index) => (
								<motion.div
									key={index}
									className="md-about__solution-card"
									variants={fadeInUp}
								>
									<div className="md-about__solution-icon">{item.icon}</div>
									<div className="md-about__solution-text">
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Principles Section */}
			<section className="md-section md-about__principles" ref={principlesRef}>
				<div className="md-container">
					<div className="md-section-header">
						<h2>
							Our <span className="md-gradient-text">Principles</span>
						</h2>
						<p>The values that guide our development</p>
					</div>

					<motion.div
						className="md-about__principles-grid"
						initial="hidden"
						animate={principlesInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{principles.map((principle, index) => (
							<motion.div
								key={index}
								className="md-about__principle-card"
								variants={fadeInUp}
							>
								<div className="md-about__principle-icon">{principle.icon}</div>
								<h3>{principle.title}</h3>
								<p>{principle.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Founder Section */}
			<section className="md-section md-about__founder" ref={founderRef}>
				<div className="md-container">
					<motion.div
						className="md-about__founder-content"
						initial="hidden"
						animate={founderInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<div className="md-about__founder-image">
							<img src="/image3.png" alt="Founder" />
							<div className="md-about__founder-quote">
								<p>
									"I believe technology should empower teachers, not burden them
									with more work."
								</p>
							</div>
						</div>
						<div className="md-about__founder-text">
							<div className="md-about__badge">Meet the Founder</div>
							<h2>From Classroom to Code</h2>
							<p>
								As a former educator who spent years battling with outdated
								school management systems, I experienced firsthand how
								technology that was meant to help was actually getting in the
								way.
							</p>
							<p>
								After one particularly frustrating day spent wrestling with
								three different systems just to complete basic administrative
								tasks, I decided there had to be a better way.
							</p>
							<p>
								I assembled a small team of educators and developers who shared
								my vision, and we began building mojDnevnik - the comprehensive,
								user-friendly school management system we had always wished for
								during our teaching careers.
							</p>
							<p>
								Today, our mission is to give educators back the time they
								deserve to focus on what truly matters: teaching and inspiring
								the next generation.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Future Vision Section */}
			<section className="md-section md-about__future" ref={futureRef}>
				<div className="md-container">
					<div className="md-section-header md-about__future-header">
						<h2>
							The <span className="md-gradient-text">Road Ahead</span>
						</h2>
						<p>Our vision for the future of mojDnevnik</p>
					</div>

					<motion.div
						className="md-about__future-content"
						initial="hidden"
						animate={futureInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<div className="md-about__future-text">
							<p>
								We're just getting started on our journey to transform
								educational management. As we grow, we're focused on
								continuously improving mojDnevnik with new features and
								capabilities that further empower schools.
							</p>
							<h3>On Our Roadmap:</h3>
							<ul className="md-about__roadmap-list">
								{roadmap.map((item, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -20 }}
										animate={
											futureInView
												? { opacity: 1, x: 0 }
												: { opacity: 0, x: -20 }
										}
										transition={{ delay: 0.3 + index * 0.1 }}
									>
										<FaChevronRight /> {item}
									</motion.li>
								))}
							</ul>
						</div>
						<div className="md-about__future-image">
							<img src="/image3.png" alt="Future vision" />
						</div>
					</motion.div>
				</div>
			</section>

			{/* Join Us CTA */}
			<section className="md-section md-about__cta">
				<div className="md-container">
					<div className="md-about__cta-card">
						<h2>Join us on our mission</h2>
						<p>Be part of the revolution in school management technology</p>
						<div className="md-about__cta-buttons">
							<a href="/contact" className="md-btn md-btn-primary">
								Request a Demo
							</a>
							<a href="/contact" className="md-btn md-btn-secondary">
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
