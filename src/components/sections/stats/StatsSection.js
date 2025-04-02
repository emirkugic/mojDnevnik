import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./StatsSection.css";

const StatsSection = ({ stats }) => {
	const [statsRef, statsInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Default stats if none provided
	const defaultStats = [
		{ value: "85%", label: "Ušteđenog vremena na administrativnim zadacima" },
		{ value: "100%", label: "Stopa zadovoljstva korisnika" },
		{ value: "10k+", label: "Aktivnih korisnika" },
		{ value: "50+", label: "Škola koje koriste mojDnevnik" },
	];

	const statsData = stats || defaultStats;

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

	return (
		<section className="md-stats-section" ref={statsRef}>
			<div className="md-container">
				<motion.div
					className="md-stats-section__grid"
					initial="hidden"
					animate={statsInView ? "visible" : "hidden"}
					variants={staggerContainer}
				>
					{statsData.map((stat, index) => (
						<motion.div
							key={index}
							className="md-stats-section__card"
							variants={counterAnimation}
						>
							<h3>{stat.value}</h3>
							<p>{stat.label}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default StatsSection;
