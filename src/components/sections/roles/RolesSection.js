import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronRight } from "react-icons/fa";
import "./RolesSection.css";

const RolesSection = ({ roles }) => {
	const [rolesRef, rolesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

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

	return (
		<section id="roles" className="md-roles-section" ref={rolesRef}>
			<div className="md-roles-section__bg-pattern"></div>
			<div className="md-container">
				<motion.div
					className="md-section-header"
					initial="hidden"
					animate={rolesInView ? "visible" : "hidden"}
					variants={fadeInUp}
				>
					<h2 className="md-section-header__title">
						Prilagođeno za <span className="md-gradient-text">svakoga</span>
					</h2>
					<p className="md-section-header__subtitle">
						Specifične funkcije dizajnirane za svaku ulogu u vašoj školi
					</p>
				</motion.div>

				<motion.div
					className="md-roles-section__container"
					initial="hidden"
					animate={rolesInView ? "visible" : "hidden"}
					variants={staggerContainer}
				>
					{roles.map((role, index) => (
						<motion.div
							key={index}
							className="md-roles-section__card"
							variants={fadeInUp}
							style={{ borderTopColor: role.color }}
						>
							<div
								className="md-roles-section__icon"
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
	);
};

export default RolesSection;
