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
						Spremni za transformaciju{" "}
						<span className="md-gradient-text-white">upravljanja školom</span>?
					</h2>
					<p>
						Kontaktirajte nas za personalizovani demo i saznajte kako mojDnevnik
						može raditi za vašu instituciju.
					</p>
					<form className="md-cta-section__form">
						<div className="md-cta-section__form-row">
							<div className="md-cta-section__form-group">
								<label>Naziv škole</label>
								<input type="text" placeholder="Unesite naziv škole" required />
							</div>
							<div className="md-cta-section__form-group">
								<label>Email adresa</label>
								<input
									type="email"
									placeholder="Unesite email adresu"
									required
								/>
							</div>
						</div>
						<div className="md-cta-section__form-row">
							<div className="md-cta-section__form-group">
								<label>Kontakt osoba</label>
								<input
									type="text"
									placeholder="Unesite ime kontakt osobe"
									required
								/>
							</div>
							<div className="md-cta-section__form-group">
								<label>Broj telefona</label>
								<input type="tel" placeholder="Unesite broj telefona" />
							</div>
						</div>
						<button type="submit" className="md-btn md-btn-primary">
							Zatražite demo{" "}
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
