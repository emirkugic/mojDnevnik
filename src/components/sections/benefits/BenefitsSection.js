import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./BenefitsSection.css";

const BenefitsSection = ({ benefits }) => {
	const [benefitsRef, benefitsInView] = useInView({
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
		<section id="benefits" className="md-benefits-section" ref={benefitsRef}>
			<div className="md-container">
				<div className="md-benefits-section__content">
					<motion.div
						className="md-section-header"
						initial="hidden"
						animate={benefitsInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<h2 className="md-section-header__title">
							Zašto odabrati{" "}
							<span className="md-gradient-text">mojDnevnik</span>?
						</h2>
						<p className="md-section-header__subtitle">
							Transformišite način rada vaše škole s našim sveobuhvatnim
							rješenjem
						</p>
					</motion.div>

					<motion.div
						className="md-benefits-section__list"
						initial="hidden"
						animate={benefitsInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								className="md-benefits-section__item"
								variants={fadeInUp}
							>
								<div className="md-benefits-section__icon">{benefit.icon}</div>
								<div className="md-benefits-section__text">
									<h3>{benefit.title}</h3>
									<p>{benefit.desc}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				<motion.div
					className="md-benefits-section__image"
					initial={{ opacity: 0, x: -50 }}
					animate={
						benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
					}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<div className="md-benefits-section__image-card">
						<img src="/image3.png" alt="Nastavnik koristi mojDnevnik" />
						<div className="md-benefits-section__image-overlay"></div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default BenefitsSection;
