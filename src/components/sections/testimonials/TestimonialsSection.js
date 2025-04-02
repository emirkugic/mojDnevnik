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
				"mojDnevnik je transformisao način na koji upravljamo našom školom. Sve od prisustva do ocjena je sada pojednostavljeno na jednom mjestu, što nam štedi bezbroj sati svake sedmice.",
			name: "Ana Petrović",
			role: "Direktor škole",
			image: "/image3.png",
		},
		{
			quote:
				"Kao roditelj, volim što mogu provjeriti napredak svoje djece direktno sa svog telefona. Interfejs je intuitivan i održava me informisanim o njihovom akademskom putovanju.",
			name: "Marko Novak",
			role: "Roditelj",
			image: "/image4.png",
		},
		{
			quote:
				"Funkcije izvještavanja mi štede sate svake sedmice. Mogu se više fokusirati na podučavanje, a manje na papirologiju. Postalo je neophodno za rad naše škole.",
			name: "Ivana Kovač",
			role: "Razrednik",
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
						Šta kažu naši <span className="md-gradient-text">korisnici</span>
					</h2>
					<p className="md-section-header__subtitle">
						Pouzdan od strane škola širom zemlje
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
