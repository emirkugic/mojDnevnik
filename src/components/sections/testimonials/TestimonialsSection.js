import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./TestimonialsSection.css";

const TestimonialsSection = ({ testimonials }) => {
	const [activeTestimonial, setActiveTestimonial] = useState(0);
	const [testimonialsRef, testimonialsInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Default testimonials if none provided
	const defaultTestimonials = [
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

	const testimonialsData = testimonials || defaultTestimonials;

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section
			id="testimonials"
			className="md-testimonials-section"
			ref={testimonialsRef}
		>
			<div className="md-testimonials-section__bg-pattern"></div>
			<div className="md-container">
				<motion.div
					className="md-section-header"
					initial="hidden"
					animate={testimonialsInView ? "visible" : "hidden"}
					variants={fadeInUp}
				>
					<h2 className="md-section-header__title">
						What Our <span className="md-gradient-text">Users Say</span>
					</h2>
					<p className="md-section-header__subtitle">
						Trusted by schools across the country
					</p>
				</motion.div>

				<motion.div
					className="md-testimonials-section__carousel"
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
							className="md-testimonials-section__testimonial"
						>
							<div className="md-testimonials-section__content">
								<div className="md-testimonials-section__quote">"</div>
								<p>{testimonialsData[activeTestimonial].quote}</p>
								<div className="md-testimonials-section__author">
									<div className="md-testimonials-section__author-image">
										<img
											src={testimonialsData[activeTestimonial].image}
											alt={testimonialsData[activeTestimonial].name}
										/>
									</div>
									<div className="md-testimonials-section__author-info">
										<h4>{testimonialsData[activeTestimonial].name}</h4>
										<p>{testimonialsData[activeTestimonial].role}</p>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					<div className="md-testimonials-section__dots">
						{testimonialsData.map((_, index) => (
							<button
								key={index}
								className={`md-testimonials-section__dot ${
									index === activeTestimonial
										? "md-testimonials-section__dot--active"
										: ""
								}`}
								onClick={() => setActiveTestimonial(index)}
								aria-label={`Testimonial ${index + 1}`}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
