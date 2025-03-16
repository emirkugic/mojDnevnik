import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronRight } from "react-icons/fa";
import "./CtaSection.css";

const CtaSection = () => {
	const [ctaRef, ctaInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section id="contact" className="md-cta-section" ref={ctaRef}>
			<div className="md-cta-section__bg-pattern"></div>
			<motion.div
				className="md-container"
				initial="hidden"
				animate={ctaInView ? "visible" : "hidden"}
				variants={fadeInUp}
			>
				<div className="md-cta-section__content">
					<h2>
						Ready to transform your{" "}
						<span className="md-gradient-text-white">school management</span>?
					</h2>
					<p>
						Get in touch for a personalized demo and see how mojDnevnik can work
						for your institution.
					</p>
					<form className="md-cta-section__form">
						<div className="md-cta-section__form-row">
							<div className="md-cta-section__form-group">
								<label>School Name</label>
								<input type="text" placeholder="Enter school name" required />
							</div>
							<div className="md-cta-section__form-group">
								<label>Email Address</label>
								<input
									type="email"
									placeholder="Enter email address"
									required
								/>
							</div>
						</div>
						<div className="md-cta-section__form-row">
							<div className="md-cta-section__form-group">
								<label>Contact Person</label>
								<input type="text" placeholder="Enter contact name" required />
							</div>
							<div className="md-cta-section__form-group">
								<label>Phone Number</label>
								<input type="tel" placeholder="Enter phone number" />
							</div>
						</div>
						<button type="submit" className="md-btn md-btn-primary">
							Request Demo{" "}
							<span className="md-btn-icon">
								<FaChevronRight />
							</span>
						</button>
					</form>
				</div>
			</motion.div>
		</section>
	);
};

export default CtaSection;
