/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaClock,
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
	FaChevronRight,
	FaChevronDown,
	FaHeadset,
	FaSchool,
	FaUsers,
	FaQuestion,
	FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
	// State for form fields
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [school, setSchool] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	// State for FAQ accordions
	const [activeAccordion, setActiveAccordion] = useState(null);

	// InView hooks for animations
	const [formRef, formInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [infoRef, infoInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const fadeInLeft = {
		hidden: { opacity: 0, x: -30 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
	};

	const fadeInRight = {
		hidden: { opacity: 0, x: 30 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// In a real application, you would handle form submission here
		// For now, we'll just simulate success
		setSubmitted(true);

		// Reset form after submission
		setTimeout(() => {
			setName("");
			setEmail("");
			setSchool("");
			setMessage("");
			setSubmitted(false);
		}, 5000);
	};

	// FAQs data
	const faqs = [
		// {
		// 	question: "How much does mojDnevnik cost?",
		// 	answer:
		// 		"We offer flexible pricing plans based on the size of your school and the features you need. Our basic plan starts at $99/month for small schools, with discounts available for annual subscriptions. Contact us for a customized quote tailored to your specific requirements.",
		// },
		{
			question: "Da li nudite besplatnu probnu verziju?",
			answer:
				"Da! Nudimo 30-dnevnu besplatnu probnu verziju s punim pristupom svim funkcijama kako biste iskusili kako mojDnevnik može transformisati vaše procese upravljanja školom. Nije potrebna kreditna kartica za početak probnog perioda.",
		},
		{
			question: "Koliko traje implementacija?",
			answer:
				"Tipični proces implementacije traje 5-10 dana, ovisno o veličini vaše škole i specifičnim potrebama. Naš tim za podršku će vas voditi kroz svaki korak, od početnog podešavanja do migracije podataka i obuke osoblja.",
		},
		{
			question: "Da li je mojDnevnik usklađen s propisima o zaštiti podataka?",
			answer:
				"Apsolutno. mojDnevnik je potpuno usklađen s GDPR-om i drugim relevantnim propisima o zaštiti podataka. Implementiramo sigurnosne mjere na nivou industrije kako bismo osigurali da podaci vaše škole ostanu zaštićeni u svakom trenutku.",
		},
		{
			question: "Kakvu podršku nudite?",
			answer:
				"Pružamo sveobuhvatnu podršku uključujući posvećenog specijalista za implementaciju, redovne provjere, tehničku podršku putem e-maila i telefona, te bazu znanja s tutorijалima i vodičima. Naš tim za podršku je dostupan od ponedjeljka do petka od 8 do 18 sati.",
		},
	];

	// Support options data
	const supportOptions = [
		{
			icon: <FaHeadset />,
			title: "Korisnička podrška",
			description: "Dobijte pomoć za sva pitanja ili probleme",
			cta: "Pošaljite email na support@mojdnevnik.com",
		},
		{
			icon: <FaSchool />,
			title: "Implementacija u školi",
			description: "Zatražite pomoć pri implementaciji",
			cta: "Zakažite poziv",
		},
		{
			icon: <FaUsers />,
			title: "Partnerstva",
			description: "Istražite mogućnosti partnerstva",
			cta: "Postanite partner",
		},
	];

	// Toggle FAQ accordion
	const toggleAccordion = (index) => {
		setActiveAccordion(activeAccordion === index ? null : index);
	};

	return (
		<div className="md-contact">
			{/* Hero Section */}
			<section className="md-contact__hero">
				<div className="md-container">
					<div className="md-contact__hero-content">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Stupite u <span className="md-gradient-text">kontakt</span>
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Rado ćemo vas čuti. Javite se za demo, pitanja ili podršku.
						</motion.p>
					</div>
				</div>
			</section>

			{/* Main Contact Section */}
			<section className="md-section md-contact__main">
				<div className="md-container">
					<div className="md-contact__grid">
						{/* Contact Form */}
						<motion.div
							className="md-contact__form-wrapper"
							ref={formRef}
							initial="hidden"
							animate={formInView ? "visible" : "hidden"}
							variants={fadeInLeft}
						>
							<div className="md-contact__form-container">
								<div className="md-contact__badge">Kako vam možemo pomoći?</div>
								<h2>Pošaljite nam poruku</h2>
								<p>
									Ispunite obrazac ispod i naš tim će vam odgovoriti u roku od
									24 sata.
								</p>

								{submitted ? (
									<div className="md-contact__success">
										<div className="md-contact__success-icon">✓</div>
										<h3>Hvala vam!</h3>
										<p>
											Vaša poruka je uspješno poslana. Uskoro ćemo vas
											kontaktirati.
										</p>
									</div>
								) : (
									<form className="md-contact__form" onSubmit={handleSubmit}>
										<div className="md-contact__form-group">
											<label htmlFor="name">Vaše ime</label>
											<input
												type="text"
												id="name"
												value={name}
												onChange={(e) => setName(e.target.value)}
												required
											/>
										</div>
										<div className="md-contact__form-group">
											<label htmlFor="email">Email adresa</label>
											<input
												type="email"
												id="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</div>
										<div className="md-contact__form-group">
											<label htmlFor="school">Naziv škole</label>
											<input
												type="text"
												id="school"
												value={school}
												onChange={(e) => setSchool(e.target.value)}
											/>
										</div>
										<div className="md-contact__form-group">
											<label htmlFor="message">Vaša poruka</label>
											<textarea
												id="message"
												rows="5"
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												required
											></textarea>
										</div>
										<button type="submit" className="md-btn md-btn-primary">
											Pošalji poruku{" "}
											<span className="md-btn-icon">
												<FaPaperPlane />
											</span>
										</button>
									</form>
								)}
							</div>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							className="md-contact__info"
							ref={infoRef}
							initial="hidden"
							animate={infoInView ? "visible" : "hidden"}
							variants={fadeInRight}
						>
							<div className="md-contact__info-card">
								<h2>Kontakt informacije</h2>
								<ul className="md-contact__info-list">
									<li>
										<div className="md-contact__info-icon">
											<FaEnvelope />
										</div>
										<div className="md-contact__info-content">
											<h3>Email</h3>
											<p>info@mojdnevnik.ba</p>
										</div>
									</li>
									<li>
										<div className="md-contact__info-icon">
											<FaPhone />
										</div>
										<div className="md-contact__info-content">
											<h3>Telefon</h3>
											<p>+387 62 909 200</p>
										</div>
									</li>
									{/* <li>
										<div className="md-contact__info-icon">
											<FaMapMarkerAlt />
										</div>
										<div className="md-contact__info-content">
											<h3>Posjetite nas</h3>
											<p>
												Inovacijski centar
												<br />
												Ulica Tehnološkog parka 123
												<br />
												71000 Sarajevo, Bosna
											</p>
										</div>
									</li> */}
									<li>
										<div className="md-contact__info-icon">
											<FaClock />
										</div>
										<div className="md-contact__info-content">
											<h3>Radno vrijeme</h3>
											<p>
												Ponedjeljak - Petak: 9:00 - 17:00
												<br />
												Subota i Nedjelja: Zatvoreno
											</p>
										</div>
									</li>
								</ul>

								<div className="md-contact__social">
									<h3>Povežite se s nama</h3>
									<div className="md-contact__social-links">
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Facebook"
										>
											<FaFacebookF />
										</a>
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Twitter"
										>
											<FaTwitter />
										</a>
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="LinkedIn"
										>
											<FaLinkedinIn />
										</a>
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Instagram"
										>
											<FaInstagram />
										</a>
									</div>
								</div>
							</div>

							{/* <div className="md-contact__map">
								<img src="/image2.png" alt="Mapa lokacije ureda" />
								<div className="md-contact__map-badge">
									<FaMapMarkerAlt /> Naš ured
								</div>
							</div> */}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Support Options */}
			<section className="md-section md-contact__support">
				<div className="md-container">
					<div className="md-section-header">
						<h2>
							Kako vam možemo <span className="md-gradient-text">pomoći?</span>
						</h2>
						<p>Odaberite opciju podrške koja vam najviše odgovara</p>
					</div>

					<div className="md-contact__support-grid">
						{supportOptions.map((option, index) => (
							<div key={index} className="md-contact__support-card">
								<div className="md-contact__support-icon">{option.icon}</div>
								<h3>{option.title}</h3>
								<p>{option.description}</p>
								<a href="#" className="md-contact__support-link">
									{option.cta} <FaChevronRight />
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="md-section md-contact__faq" ref={faqRef}>
				<div className="md-container">
					<motion.div
						className="md-section-header"
						initial="hidden"
						animate={faqInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<h2>
							Često postavljana{" "}
							<span className="md-gradient-text">pitanja</span>
						</h2>
						<p>Pronađite brze odgovore na česta pitanja</p>
					</motion.div>

					<motion.div
						className="md-contact__faq-container"
						initial="hidden"
						animate={faqInView ? "visible" : "hidden"}
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { staggerChildren: 0.2, delayChildren: 0.3 },
							},
						}}
					>
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								className="md-contact__faq-item"
								variants={fadeInUp}
							>
								<div
									className={`md-contact__faq-question ${
										activeAccordion === index ? "active" : ""
									}`}
									onClick={() => toggleAccordion(index)}
								>
									<div className="md-contact__faq-question-icon">
										<FaQuestion />
									</div>
									<h3>{faq.question}</h3>
									<div className="md-contact__faq-toggle">
										<FaChevronDown />
									</div>
								</div>
								<div
									className={`md-contact__faq-answer ${
										activeAccordion === index ? "active" : ""
									}`}
								>
									<p>{faq.answer}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="md-section md-contact__cta">
				<div className="md-container">
					<div className="md-contact__cta-card">
						<h2>Spremni za transformaciju upravljanja školom?</h2>
						<p>
							Isprobajte mojDnevnik besplatno 30 dana. Nije potrebna kreditna
							kartica.
						</p>
						<div className="md-contact__cta-buttons">
							{/* <a href="#" className="md-btn md-btn-primary">
								Započnite besplatnu probu
							</a> */}
							<a href="#" className="md-btn md-btn-secondary">
								Zatražite demo
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
