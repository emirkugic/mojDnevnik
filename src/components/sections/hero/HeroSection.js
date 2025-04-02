import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	FaChevronRight,
	FaCheckSquare,
	FaChartBar,
	FaCalendarAlt,
	FaBell,
	FaFileAlt,
} from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
	const [heroRef, heroInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section className="md-hero-section" ref={heroRef}>
			<div className="md-hero-section__bg-shapes">
				<div className="md-hero-section__shape md-hero-section__shape--1"></div>
				<div className="md-hero-section__shape md-hero-section__shape--2"></div>
				<div className="md-hero-section__shape md-hero-section__shape--3"></div>
				<div className="md-hero-section__shape md-hero-section__shape--4"></div>
				<div className="md-hero-section__shape md-hero-section__shape--5"></div>
			</div>
			<div className="md-container md-hero-section__container">
				<motion.div
					className="md-hero-section__content"
					initial="hidden"
					animate={heroInView ? "visible" : "hidden"}
					variants={fadeInUp}
				>
					<div className="md-hero-section__badge">
						Sistem za upravljanje školom
					</div>
					<h1>
						Jednostavno upravljanje{" "}
						<span className="md-gradient-text">školom</span>
					</h1>
					<h2>Jedna platforma za nastavnike, učenike i roditelje</h2>
					<p>
						mojDnevnik je sveobuhvatan sistem za upravljanje školom koji
						pojednostavljuje praćenje prisustva, ocjenjivanje i komunikaciju.
					</p>
					<div className="md-hero-section__buttons">
						<a href="#contact" className="md-btn md-btn-primary">
							Započnite{" "}
							<span className="md-btn-icon">
								<FaChevronRight />
							</span>
						</a>
						<a href="#features" className="md-btn md-btn-secondary">
							Saznajte više
						</a>
					</div>
				</motion.div>
				<motion.div
					className="md-hero-section__image"
					initial={{ opacity: 0, x: 50 }}
					animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="md-hero-section__image-wrapper">
						<img src="/image1.png" alt="mojDnevnik Dashboard Preview" />
						<div className="md-hero-section__floating-card md-hero-section__card-1">
							<FaCheckSquare />
							<span>Praćenje prisustva</span>
						</div>
						<div className="md-hero-section__floating-card md-hero-section__card-2">
							<FaChartBar />
							<span>Ažurirane ocjene</span>
						</div>
						<div className="md-hero-section__floating-card md-hero-section__card-3">
							<FaCalendarAlt />
							<span>Kreiran raspored</span>
						</div>
						<div className="md-hero-section__floating-card md-hero-section__card-4">
							<FaBell />
							<span>Poslane obavijesti</span>
						</div>
						<div className="md-hero-section__floating-card md-hero-section__card-5">
							<FaFileAlt />
							<span>Generisani izvještaji</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
