import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./GallerySection.css";

const GallerySection = ({ items }) => {
	const [galleryRef, galleryInView] = useInView({
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
		<section id="gallery" className="md-gallery-section" ref={galleryRef}>
			<div className="md-container">
				<motion.div
					className="md-section-header"
					initial="hidden"
					animate={galleryInView ? "visible" : "hidden"}
					variants={fadeInUp}
				>
					<h2 className="md-section-header__title">
						See it in <span className="md-gradient-text">Action</span>
					</h2>
					<p className="md-section-header__subtitle">
						Explore screenshots of mojDnevnik in use
					</p>
				</motion.div>

				<motion.div
					className="md-gallery-section__grid"
					initial="hidden"
					animate={galleryInView ? "visible" : "hidden"}
					variants={staggerContainer}
				>
					{items.map((item, index) => (
						<motion.div
							key={index}
							className="md-gallery-section__item"
							variants={fadeInUp}
						>
							<div className="md-gallery-section__image">
								<img src={item.image} alt={item.title} />
								<div className="md-gallery-section__overlay">
									<div className="md-gallery-section__content">
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
	);
};

export default GallerySection;
