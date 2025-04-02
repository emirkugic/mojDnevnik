import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	FaBook,
	FaCheckSquare,
	FaChartBar,
	FaUsers,
	FaMobileAlt,
	FaShieldAlt,
} from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = ({ features }) => {
	const [featuresRef, featuresInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [hoveredFeature, setHoveredFeature] = useState(null);

	// Default features if none provided
	const defaultFeatures = [
		{
			icon: <FaBook />,
			title: "Upravljanje lekcijama",
			desc: "Efikasno evidentirajte i organizujte lekcije s integrisanim praćenjem nastavnog plana",
		},
		{
			icon: <FaCheckSquare />,
			title: "Praćenje prisustva",
			desc: "Označite i pratite prisustvo učenika sa analitikom u realnom vremenu",
		},
		{
			icon: <FaChartBar />,
			title: "Procjene i ocjenjivanje",
			desc: "Kreirajte procjene i ocjenjujte učenike s prilagodljivim kriterijima",
		},
		{
			icon: <FaUsers />,
			title: "Pregled razreda",
			desc: "Sveobuhvatni uvidi u performanse razreda s detaljnom analitikom",
		},
		{
			icon: <FaMobileAlt />,
			title: "Prilagođeno mobilnim uređajima",
			desc: "Pristupite s bilo kojeg uređaja, bilo gdje s našim responzivnim dizajnom",
		},
		{
			icon: <FaShieldAlt />,
			title: "Siguran pristup",
			desc: "Sistem dozvola zasnovan na ulogama koji osigurava sigurnost podataka",
		},
	];

	const featuresData = features || defaultFeatures;

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
		<section id="features" className="md-features-section" ref={featuresRef}>
			<div className="md-container">
				<motion.div
					className="md-section-header"
					initial="hidden"
					animate={featuresInView ? "visible" : "hidden"}
					variants={fadeInUp}
				>
					<h2 className="md-section-header__title">
						Moćne <span className="md-gradient-text">funkcije</span>
					</h2>
					<p className="md-section-header__subtitle">
						Sve što vam je potrebno za efikasno vođenje škole
					</p>
				</motion.div>

				<motion.div
					className="md-features-section__grid"
					initial="hidden"
					animate={featuresInView ? "visible" : "hidden"}
					variants={staggerContainer}
				>
					{featuresData.map((feature, index) => (
						<motion.div
							key={index}
							className="md-features-section__card"
							variants={fadeInUp}
							onMouseEnter={() => setHoveredFeature(index)}
							onMouseLeave={() => setHoveredFeature(null)}
						>
							<div
								className={`md-features-section__icon ${
									hoveredFeature === index
										? "md-features-section__icon--hovered"
										: ""
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
					className="md-features-section__showcase"
					initial={{ opacity: 0, y: 30 }}
					animate={
						featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
					}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<div className="md-features-section__showcase-wrapper">
						<img
							src="/image2.png"
							alt="mojDnevnik Features Showcase"
							className="md-features-section__showcase-image"
						/>
						<div className="md-features-section__showcase-overlay">
							<div className="md-features-section__overlay-content">
								<h3>Intuitivni interfejs</h3>
								<p>Dizajniran za jednostavnu upotrebu na svim uređajima</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default FeaturesSection;
