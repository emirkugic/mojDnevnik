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
			question: "Do you offer a free trial?",
			answer:
				"Yes! We offer a 30-day free trial with full access to all features so you can experience how mojDnevnik can transform your school management processes. No credit card required to start your trial.",
		},
		{
			question: "How long does implementation take?",
			answer:
				"The typical implementation process takes 5-10 days, depending on your school's size and specific needs. Our dedicated support team will guide you through every step, from initial setup to data migration and staff training.",
		},
		{
			question: "Is mojDnevnik compliant with data protection regulations?",
			answer:
				"Absolutely. mojDnevnik is fully compliant with GDPR and other relevant data protection regulations. We implement industry-leading security measures to ensure your school's data remains protected at all times.",
		},
		{
			question: "What kind of support do you offer?",
			answer:
				"We provide comprehensive support including a dedicated implementation specialist, regular check-ins, technical support via email and phone, and a knowledge base with tutorials and guides. Our support team is available Monday through Friday from 8am to 6pm.",
		},
	];

	// Support options data
	const supportOptions = [
		{
			icon: <FaHeadset />,
			title: "Customer Support",
			description: "Get help with any questions or issues",
			cta: "Email support@mojdnevnik.com",
		},
		{
			icon: <FaSchool />,
			title: "School Onboarding",
			description: "Request assistance with implementation",
			cta: "Schedule a call",
		},
		{
			icon: <FaUsers />,
			title: "Partnerships",
			description: "Explore partnership opportunities",
			cta: "Partner with us",
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
							Get in <span className="md-gradient-text">Touch</span>
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							We'd love to hear from you. Reach out for a demo, questions, or
							support.
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
								<div className="md-contact__badge">How can we help?</div>
								<h2>Send us a message</h2>
								<p>
									Fill out the form below and our team will get back to you
									within 24 hours.
								</p>

								{submitted ? (
									<div className="md-contact__success">
										<div className="md-contact__success-icon">✓</div>
										<h3>Thank you!</h3>
										<p>
											Your message has been sent successfully. We'll be in touch
											shortly.
										</p>
									</div>
								) : (
									<form className="md-contact__form" onSubmit={handleSubmit}>
										<div className="md-contact__form-group">
											<label htmlFor="name">Your Name</label>
											<input
												type="text"
												id="name"
												value={name}
												onChange={(e) => setName(e.target.value)}
												required
											/>
										</div>
										<div className="md-contact__form-group">
											<label htmlFor="email">Email Address</label>
											<input
												type="email"
												id="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</div>
										<div className="md-contact__form-group">
											<label htmlFor="school">School Name</label>
											<input
												type="text"
												id="school"
												value={school}
												onChange={(e) => setSchool(e.target.value)}
											/>
										</div>
										<div className="md-contact__form-group">
											<label htmlFor="message">Your Message</label>
											<textarea
												id="message"
												rows="5"
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												required
											></textarea>
										</div>
										<button type="submit" className="md-btn md-btn-primary">
											Send Message{" "}
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
								<h2>Contact Information</h2>
								<ul className="md-contact__info-list">
									<li>
										<div className="md-contact__info-icon">
											<FaEnvelope />
										</div>
										<div className="md-contact__info-content">
											<h3>Email Us</h3>
											<p>info@mojdnevnik.ba</p>
										</div>
									</li>
									<li>
										<div className="md-contact__info-icon">
											<FaPhone />
										</div>
										<div className="md-contact__info-content">
											<h3>Call Us</h3>
											<p>+387 62 909 200</p>
										</div>
									</li>
									{/* <li>
										<div className="md-contact__info-icon">
											<FaMapMarkerAlt />
										</div>
										<div className="md-contact__info-content">
											<h3>Visit Us</h3>
											<p>
												Innovation Center
												<br />
												Tech Park Street 123
												<br />
												71000 Sarajevo, Bosnia
											</p>
										</div>
									</li> */}
									<li>
										<div className="md-contact__info-icon">
											<FaClock />
										</div>
										<div className="md-contact__info-content">
											<h3>Business Hours</h3>
											<p>
												Monday - Friday: 9:00 AM - 5:00 PM
												<br />
												Saturday & Sunday: Closed
											</p>
										</div>
									</li>
								</ul>

								<div className="md-contact__social">
									<h3>Connect With Us</h3>
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
								<img src="/image2.png" alt="Office Location Map" />
								<div className="md-contact__map-badge">
									<FaMapMarkerAlt /> Our Office
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
							How Can We <span className="md-gradient-text">Help?</span>
						</h2>
						<p>Choose the support option that works best for you</p>
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
							Frequently Asked{" "}
							<span className="md-gradient-text">Questions</span>
						</h2>
						<p>Find quick answers to common questions</p>
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
						<h2>Ready to transform your school management?</h2>
						<p>Try mojDnevnik free for 30 days. No credit card required.</p>
						<div className="md-contact__cta-buttons">
							{/* <a href="#" className="md-btn md-btn-primary">
								Start Free Trial
							</a> */}
							<a href="#" className="md-btn md-btn-secondary">
								Request Demo
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
