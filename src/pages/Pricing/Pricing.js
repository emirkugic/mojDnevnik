import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	FaCheckCircle,
	FaTimesCircle,
	FaChevronRight,
	FaSchool,
	FaUserGraduate,
	FaHeadset,
	FaCreditCard,
	FaRocket,
	FaShieldAlt,
	FaQuestionCircle,
	FaArrowRight,
	FaGraduationCap,
	FaRegBuilding,
} from "react-icons/fa";
import "./Pricing.css";

const Pricing = () => {
	// State for billing period toggle
	const [isAnnual, setIsAnnual] = useState(true);
	const [activeFaq, setActiveFaq] = useState(null);

	// Intersection observer hooks for animations
	const [heroRef, heroInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [plansRef, plansInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [featuresRef, featuresInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [faqRef, faqInView] = useInView({
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

	// Pricing plans data
	const plans = [
		{
			name: "Starter",
			icon: <FaGraduationCap />,
			iconColor: "#4CC9F0",
			description: "Perfect for small schools just getting started",
			price: isAnnual ? 3.99 : 4.99,
			period: isAnnual ? "/student/month, billed annually" : "/student/month",
			savings: isAnnual ? "Save 20% with annual billing" : null,
			minStudents: "25 student minimum",
			features: [
				"Up to 250 students",
				"Basic attendance tracking",
				"Essential grade management",
				"Parent communication portal",
				"Email support",
				"Basic reporting",
			],
			mostPopular: false,
			cta: "Start Free Trial",
			ctaSecondary: "Learn More",
		},
		{
			name: "Professional",
			icon: <FaSchool />,
			iconColor: "#4361EE",
			description: "Most popular choice for medium-sized schools",
			price: isAnnual ? 2.99 : 3.99,
			period: isAnnual ? "/student/month, billed annually" : "/student/month",
			savings: isAnnual ? "Save 25% with annual billing" : null,
			minStudents: "100 student minimum",
			features: [
				"Up to 750 students",
				"Advanced attendance system",
				"Comprehensive grade management",
				"Parent & student portals",
				"Priority email support",
				"Advanced analytics & reporting",
				"File storage (20GB)",
				"API access",
			],
			mostPopular: true,
			cta: "Start Free Trial",
			ctaSecondary: "Learn More",
		},
		{
			name: "Enterprise",
			icon: <FaRegBuilding />,
			iconColor: "#7209B7",
			description: "For large educational institutions with complex needs",
			price: isAnnual ? 1.99 : 2.49,
			period: isAnnual ? "/student/month, billed annually" : "/student/month",
			savings: isAnnual ? "Volume discounts available" : null,
			minStudents: "500 student minimum",
			features: [
				"Unlimited students",
				"All Professional features",
				"Custom integrations",
				"White-labeling options",
				"24/7 priority support",
				"Dedicated account manager",
				"File storage (100GB)",
				"Advanced security features",
				"On-site training",
			],
			mostPopular: false,
			cta: "Contact Sales",
			ctaSecondary: "Learn More",
		},
	];

	// Feature comparison data
	const featureComparison = [
		{
			category: "Core Features",
			features: [
				{
					name: "Students Limit",
					starter: "Up to 250",
					professional: "Up to 750",
					enterprise: "Unlimited",
				},
				{
					name: "Staff Accounts",
					starter: "Up to 25",
					professional: "Up to 75",
					enterprise: "Unlimited",
				},
				{
					name: "Parent Portal",
					starter: true,
					professional: true,
					enterprise: true,
				},
				{
					name: "Student Portal",
					starter: false,
					professional: true,
					enterprise: true,
				},
			],
		},
		{
			category: "Management Features",
			features: [
				{
					name: "Attendance Management",
					starter: "Basic",
					professional: "Advanced",
					enterprise: "Advanced",
				},
				{
					name: "Grade Management",
					starter: "Basic",
					professional: "Advanced",
					enterprise: "Advanced",
				},
				{
					name: "Reporting & Analytics",
					starter: "Basic",
					professional: "Advanced",
					enterprise: "Custom",
				},
				{
					name: "File Storage",
					starter: "5GB",
					professional: "20GB",
					enterprise: "100GB",
				},
			],
		},
		{
			category: "Support & Services",
			features: [
				{
					name: "Customer Support",
					starter: "Email",
					professional: "Priority Email",
					enterprise: "24/7 Priority",
				},
				{
					name: "Dedicated Account Manager",
					starter: false,
					professional: false,
					enterprise: true,
				},
				{
					name: "Training Sessions",
					starter: "Self-service",
					professional: "2 Sessions",
					enterprise: "Custom Package",
				},
				{
					name: "Implementation Support",
					starter: false,
					professional: true,
					enterprise: true,
				},
				{
					name: "Data Migration",
					starter: false,
					professional: "Basic",
					enterprise: "Advanced",
				},
			],
		},
		{
			category: "Advanced Features",
			features: [
				{
					name: "API Access",
					starter: false,
					professional: true,
					enterprise: true,
				},
				{
					name: "Custom Integration",
					starter: false,
					professional: false,
					enterprise: true,
				},
				{
					name: "White Labeling",
					starter: false,
					professional: false,
					enterprise: true,
				},
				{
					name: "Advanced Security",
					starter: "Standard",
					professional: "Enhanced",
					enterprise: "Enterprise-grade",
				},
			],
		},
	];

	// FAQ data for pricing
	const faqs = [
		{
			question: "Can I switch between plans later?",
			answer:
				"Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available, and we'll prorate your billing. When downgrading, the changes will take effect at the start of your next billing cycle.",
		},
		{
			question: "Do you offer discounts for educational institutions?",
			answer:
				"Yes, we offer special discounts for public schools, non-profit educational organizations, and institutions in developing countries. Please contact our sales team to learn more about our educational discounts program.",
		},
		{
			question: "What happens after my free trial ends?",
			answer:
				"At the end of your 30-day free trial, you'll need to select a plan to continue using mojDnevnik. We'll send you reminders before your trial ends, and you can choose your preferred plan at any time. Don't worry, all your data will be preserved when you transition to a paid plan.",
		},
		{
			question: "How does the student limit work?",
			answer:
				"The student limit refers to the number of active student profiles you can have in your system at one time. If you need to temporarily exceed this limit during transition periods (like at the beginning of a school year), please contact us for flexible arrangements.",
		},
		{
			question: "Is there a contract or can I cancel anytime?",
			answer:
				"There are no long-term contracts required. Monthly plans can be canceled at any time, effective at the end of the current billing period. Annual plans can also be canceled, but refunds are only issued according to our refund policy outlined in the terms of service.",
		},
		{
			question: "Is my data secure and backed up?",
			answer:
				"Absolutely. We take data security very seriously. All your data is encrypted both in transit and at rest. We perform automatic backups daily, and our systems are hosted in secure, compliant data centers. Enterprise plans include additional security features and custom backup options.",
		},
	];

	return (
		<div className="md-pricing">
			{/* Hero Section */}
			<section className="md-pricing__hero" ref={heroRef}>
				<div className="md-pricing__hero-shapes">
					<div className="md-pricing__hero-shape md-pricing__hero-shape--1"></div>
					<div className="md-pricing__hero-shape md-pricing__hero-shape--2"></div>
					<div className="md-pricing__hero-shape md-pricing__hero-shape--3"></div>
				</div>
				<div className="md-container">
					<motion.div
						className="md-pricing__hero-content"
						initial={{ opacity: 0, y: 20 }}
						animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}
					>
						<div className="md-pricing__badge">Flexible Plans</div>
						<h1>
							Simple, Transparent{" "}
							<span className="md-gradient-text">Pricing</span>
						</h1>
						<p>Choose the perfect plan for your school's needs and budget</p>
					</motion.div>
				</div>
			</section>

			{/* Pricing Toggle */}
			<section className="md-pricing__toggle-section">
				<div className="md-container">
					<motion.div
						className="md-pricing__toggle-container"
						initial={{ opacity: 0, y: 20 }}
						animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<span className={!isAnnual ? "md-pricing__toggle-active" : ""}>
							Monthly
						</span>
						<div
							className={`md-pricing__toggle ${
								isAnnual ? "md-pricing__toggle--annual" : ""
							}`}
							onClick={() => setIsAnnual(!isAnnual)}
						>
							<div className="md-pricing__toggle-slider"></div>
						</div>
						<span className={isAnnual ? "md-pricing__toggle-active" : ""}>
							Annual
						</span>
						<div className="md-pricing__toggle-discount">Save 20%</div>
					</motion.div>
				</div>
			</section>

			{/* Pricing Plans */}
			<section className="md-pricing__plans" ref={plansRef}>
				<div className="md-container">
					<motion.div
						className="md-pricing__plans-grid"
						initial="hidden"
						animate={plansInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{plans.map((plan, index) => (
							<motion.div
								key={index}
								className={`md-pricing__plan ${
									plan.mostPopular ? "md-pricing__plan--popular" : ""
								}`}
								variants={fadeInUp}
							>
								{plan.mostPopular && (
									<div className="md-pricing__popular-tag">Most Popular</div>
								)}
								<div className="md-pricing__plan-header">
									<div
										className="md-pricing__plan-icon"
										style={{ backgroundColor: plan.iconColor }}
									>
										{plan.icon}
									</div>
									<h3>{plan.name}</h3>
									<p>{plan.description}</p>
								</div>
								<div className="md-pricing__plan-price">
									<span className="md-pricing__currency">$</span>
									<span className="md-pricing__amount">{plan.price}</span>
									<span className="md-pricing__period">{plan.period}</span>
								</div>
								<div className="md-pricing__min-students">
									{plan.minStudents}
								</div>
								{plan.savings && (
									<div className="md-pricing__savings">{plan.savings}</div>
								)}
								<ul className="md-pricing__features">
									{plan.features.map((feature, idx) => (
										<li key={idx}>
											<FaCheckCircle /> {feature}
										</li>
									))}
								</ul>
								<div className="md-pricing__plan-actions">
									<a href="#contact" className="md-btn md-btn-primary">
										{plan.cta} <FaChevronRight />
									</a>
									<a href="#features" className="md-pricing__secondary-link">
										{plan.ctaSecondary}
									</a>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Features Comparison */}
			<section className="md-pricing__comparison" ref={featuresRef}>
				<div className="md-container">
					<motion.div
						className="md-section-header"
						initial="hidden"
						animate={featuresInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<h2 className="md-section-header__title">
							Feature <span className="md-gradient-text">Comparison</span>
						</h2>
						<p className="md-section-header__subtitle">
							Compare plans to find the perfect fit for your school
						</p>
					</motion.div>

					{featureComparison.map((category, catIndex) => (
						<motion.div
							key={catIndex}
							className="md-pricing__feature-category"
							initial={{ opacity: 0, y: 20 }}
							animate={
								featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.1 }}
						>
							<div className="md-pricing__feature-category-header">
								<h3>{category.category}</h3>
							</div>

							<div className="md-pricing__feature-grid">
								{category.features.map((feature, featureIndex) => (
									<div key={featureIndex} className="md-pricing__feature-row">
										<div className="md-pricing__feature-name">
											{feature.name}
										</div>
										<div className="md-pricing__plan-features">
											<div className="md-pricing__plan-feature">
												{typeof feature.starter === "boolean" ? (
													feature.starter ? (
														<div className="md-pricing__feature-check">
															<FaCheckCircle className="md-pricing__feature-included" />
														</div>
													) : (
														<div className="md-pricing__feature-cross">
															<FaTimesCircle className="md-pricing__feature-excluded" />
														</div>
													)
												) : (
													<div className="md-pricing__feature-text">
														{feature.starter}
													</div>
												)}
											</div>

											<div className="md-pricing__plan-feature md-pricing__plan-feature--popular">
												{typeof feature.professional === "boolean" ? (
													feature.professional ? (
														<div className="md-pricing__feature-check">
															<FaCheckCircle className="md-pricing__feature-included" />
														</div>
													) : (
														<div className="md-pricing__feature-cross">
															<FaTimesCircle className="md-pricing__feature-excluded" />
														</div>
													)
												) : (
													<div className="md-pricing__feature-text">
														{feature.professional}
													</div>
												)}
											</div>

											<div className="md-pricing__plan-feature">
												{typeof feature.enterprise === "boolean" ? (
													feature.enterprise ? (
														<div className="md-pricing__feature-check">
															<FaCheckCircle className="md-pricing__feature-included" />
														</div>
													) : (
														<div className="md-pricing__feature-cross">
															<FaTimesCircle className="md-pricing__feature-excluded" />
														</div>
													)
												) : (
													<div className="md-pricing__feature-text">
														{feature.enterprise}
													</div>
												)}
											</div>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					))}

					<div className="md-pricing__plan-labels">
						<div className="md-pricing__plan-label">Starter</div>
						<div className="md-pricing__plan-label md-pricing__plan-label--popular">
							Professional
						</div>
						<div className="md-pricing__plan-label">Enterprise</div>
					</div>
				</div>
			</section>

			{/* Custom Plan */}
			<section className="md-pricing__custom">
				<div className="md-container">
					<div className="md-pricing__custom-card">
						<div className="md-pricing__custom-content">
							<div className="md-pricing__custom-icon">
								<FaHeadset />
							</div>
							<h2>Need a custom solution?</h2>
							<p>
								Contact our sales team for a plan tailored to your specific
								needs and requirements
							</p>
							<div className="md-pricing__custom-actions">
								<a
									href="#contact"
									className="md-btn md-btn-primary md-btn-white"
								>
									Contact Sales <FaArrowRight />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="md-pricing__faq" ref={faqRef}>
				<div className="md-container">
					<motion.div
						className="md-section-header"
						initial="hidden"
						animate={faqInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<h2 className="md-section-header__title">
							Frequently Asked{" "}
							<span className="md-gradient-text">Questions</span>
						</h2>
						<p className="md-section-header__subtitle">
							Find answers to common questions about our pricing and plans
						</p>
					</motion.div>

					<motion.div
						className="md-pricing__faq-grid"
						initial="hidden"
						animate={faqInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								className={`md-pricing__faq-item ${
									activeFaq === index ? "md-pricing__faq-item--active" : ""
								}`}
								variants={fadeInUp}
							>
								<div
									className="md-pricing__faq-question"
									onClick={() =>
										setActiveFaq(activeFaq === index ? null : index)
									}
								>
									<div className="md-pricing__faq-question-icon">
										<FaQuestionCircle />
									</div>
									<h3>{faq.question}</h3>
									<div className="md-pricing__faq-toggle">
										{activeFaq === index ? "-" : "+"}
									</div>
								</div>
								<div
									className={`md-pricing__faq-answer ${
										activeFaq === index ? "active" : ""
									}`}
								>
									<p>{faq.answer}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Money-back Guarantee */}
			<section className="md-pricing__guarantee">
				<div className="md-container">
					<div className="md-pricing__guarantee-content">
						<div className="md-pricing__guarantee-icon">
							<FaShieldAlt />
						</div>
						<h3>30-Day Money-Back Guarantee</h3>
						<p>
							Try mojDnevnik risk-free. If you're not completely satisfied
							within the first 30 days, we'll refund your payment in full. No
							questions asked.
						</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="md-pricing__cta">
				<div className="md-container">
					<div className="md-pricing__cta-card">
						<h2>Ready to transform your school management?</h2>
						<p>Start your 30-day free trial today. No credit card required.</p>
						<div className="md-pricing__cta-buttons">
							<a href="#contact" className="md-btn md-btn-primary md-btn-light">
								Start Free Trial
							</a>
							<a
								href="#contact"
								className="md-btn md-btn-secondary md-btn-outline"
							>
								Request Demo
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Pricing;
