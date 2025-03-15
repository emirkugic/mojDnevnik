import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
	const [activeTab, setActiveTab] = useState("teachers");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<div className="homepage">
			{/* Navigation */}
			<nav className="navbar">
				<div className="container">
					<div className="navbar-brand">
						<h1>e-Dnevnik</h1>
					</div>
					<div className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
						<ul>
							<li>
								<a href="#features">Features</a>
							</li>
							<li>
								<a href="#roles">For Users</a>
							</li>
							<li>
								<a href="#pricing">Pricing</a>
							</li>
							<li>
								<a href="#faq">FAQ</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
					<div className="navbar-cta">
						<a href="e-dnevnik.alamelschools.ba" className="btn-secondary">
							Try Demo
						</a>
					</div>
					<div className="mobile-toggle" onClick={toggleMobileMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="hero">
				<div className="container">
					<div className="hero-content">
						<h1>Modernize Your School Management</h1>
						<p>
							A complete digital solution to streamline attendance tracking,
							grade management, and parent-teacher communication for
							forward-thinking schools.
						</p>
						<div className="hero-buttons">
							<a href="e-dnevnik.alamelschools.ba" className="btn-primary">
								Start Free Trial
							</a>
							<a href="#demo" className="btn-video">
								<span className="play-icon">▶</span>
								Watch Demo
							</a>
						</div>
					</div>
					<div className="hero-image">
						<img
							src="/image1.png"
							alt="e-Dnevnik Dashboard"
							className="main-screenshot"
						/>
						<div className="floating-element fe-1"></div>
						<div className="floating-element fe-2"></div>
						<div className="floating-element fe-3"></div>
					</div>
				</div>
			</section>

			{/* Main Features Section */}
			<section id="features" className="features">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">CORE FEATURES</span>
						<h2>Everything you need to run your school efficiently</h2>
						<p>
							Our platform combines all essential tools in one intuitive
							interface
						</p>
					</div>

					<div className="feature-cards">
						<div className="feature-card">
							<div className="feature-icon attendance-icon"></div>
							<h3>Attendance Tracking</h3>
							<p>
								Track and report student attendance with one click. Generate
								insightful reports and identify patterns.
							</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon grade-icon"></div>
							<h3>Grade Management</h3>
							<p>
								Create custom grading criteria and seamlessly manage student
								assessments across all subjects.
							</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon parent-icon"></div>
							<h3>Parent Communication</h3>
							<p>
								Keep parents informed and engaged with real-time updates on
								grades, attendance, and behavior.
							</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon schedule-icon"></div>
							<h3>Class Scheduling</h3>
							<p>
								Easily create and manage class schedules, avoiding conflicts and
								optimizing resource allocation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Screenshot Showcase Section */}
			<section className="showcase">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">THE INTERFACE</span>
						<h2>Beautiful, intuitive, and easy to use</h2>
						<p>Designed with teachers and administrators in mind</p>
					</div>

					<div className="showcase-grid">
						<div className="showcase-item main">
							<img src="/image2.png" alt="Dashboard Overview" />
							<div className="showcase-caption">
								<h3>Comprehensive Dashboard</h3>
								<p>Get a quick overview of everything important in one place</p>
							</div>
						</div>
						<div className="showcase-item">
							<img src="/image3.png" alt="Attendance Module" />
							<div className="showcase-caption">
								<p>Attendance Module</p>
							</div>
						</div>
						<div className="showcase-item">
							<img src="/image4.png" alt="Grade Entry Screen" />
							<div className="showcase-caption">
								<p>Grade Entry Interface</p>
							</div>
						</div>
						<div className="showcase-item">
							<img src="/image5.png" alt="Parent Portal" />
							<div className="showcase-caption">
								<p>Parent Communication Portal</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* User Roles Section */}
			<section id="roles" className="roles">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">FOR EVERYONE</span>
						<h2>Tailored for all school stakeholders</h2>
						<p>Different views and permissions for each user role</p>
					</div>

					<div className="tabs-container">
						<div className="tabs-header">
							<button
								className={`tab-button ${
									activeTab === "teachers" ? "active" : ""
								}`}
								onClick={() => setActiveTab("teachers")}
							>
								For Teachers
							</button>
							<button
								className={`tab-button ${
									activeTab === "admin" ? "active" : ""
								}`}
								onClick={() => setActiveTab("admin")}
							>
								For Administrators
							</button>
							<button
								className={`tab-button ${
									activeTab === "classTeacher" ? "active" : ""
								}`}
								onClick={() => setActiveTab("classTeacher")}
							>
								For Class Teachers
							</button>
							<button
								className={`tab-button ${
									activeTab === "parents" ? "active" : ""
								}`}
								onClick={() => setActiveTab("parents")}
							>
								For Parents
							</button>
							<button
								className={`tab-button ${
									activeTab === "students" ? "active" : ""
								}`}
								onClick={() => setActiveTab("students")}
							>
								For Students
							</button>
						</div>

						<div className="tabs-content">
							{activeTab === "teachers" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Empower Your Teaching</h3>
										<ul>
											<li>Take attendance in seconds</li>
											<li>Enter and manage grades efficiently</li>
											<li>Communicate directly with parents</li>
											<li>Create and share learning materials</li>
											<li>Track student progress over time</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											See Teacher Demo
										</a>
									</div>
									<div className="tab-image">
										<img src="/image3.png" alt="Teacher Interface" />
									</div>
								</div>
							)}

							{activeTab === "admin" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Streamline Administration</h3>
										<ul>
											<li>Manage all users and assign roles</li>
											<li>Track school-wide metrics in real-time</li>
											<li>Generate comprehensive reports</li>
											<li>Customize system to your school's needs</li>
											<li>Monitor teacher and student performance</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											See Admin Demo
										</a>
									</div>
									<div className="tab-image">
										<img src="/image2.png" alt="Administrator Interface" />
									</div>
								</div>
							)}

							{activeTab === "classTeacher" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Manage Your Class Efficiently</h3>
										<ul>
											<li>Get comprehensive view of your class</li>
											<li>Track attendance and performance patterns</li>
											<li>Communicate with parents effortlessly</li>
											<li>Create and share class announcements</li>
											<li>Manage class events and activities</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											See Class Teacher Demo
										</a>
									</div>
									<div className="tab-image">
										<img src="/image4.png" alt="Class Teacher Interface" />
									</div>
								</div>
							)}

							{activeTab === "parents" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Stay Connected to Your Child's Education</h3>
										<ul>
											<li>View real-time grades and attendance</li>
											<li>Communicate directly with teachers</li>
											<li>Receive important notifications</li>
											<li>Track homework and assignments</li>
											<li>Monitor overall academic progress</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											See Parent Demo
										</a>
									</div>
									<div className="tab-image">
										<img src="/image5.png" alt="Parent Interface" />
									</div>
								</div>
							)}

							{activeTab === "students" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Take Control of Your Learning</h3>
										<ul>
											<li>Check grades and attendance</li>
											<li>Access homework and assignments</li>
											<li>View teacher feedback</li>
											<li>Track your academic progress</li>
											<li>Stay updated on school events</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											See Student Demo
										</a>
									</div>
									<div className="tab-image">
										<img src="/image1.png" alt="Student Interface" />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Early Adopter / Pricing Section */}
			<section id="pricing" className="pricing">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">LAUNCH OFFER</span>
						<h2>Early adopter benefits</h2>
						<p>Be among the first to revolutionize your school management</p>
					</div>

					<div className="pricing-plans">
						<div className="pricing-plan starter">
							<div className="plan-badge">Most Popular</div>
							<h3>Starter</h3>
							<div className="plan-price">
								<span className="currency">$</span>
								<span className="amount">149</span>
								<span className="period">/month</span>
							</div>
							<p className="plan-description">
								Perfect for small schools up to 200 students
							</p>
							<ul className="plan-features">
								<li>Up to 200 student accounts</li>
								<li>Up to 30 teacher accounts</li>
								<li>Basic reporting</li>
								<li>Email support</li>
								<li>Regular updates</li>
							</ul>
							<a
								href="e-dnevnik.alamelschools.ba"
								className="btn-primary full-width"
							>
								Start Free Trial
							</a>
							<p className="plan-note">
								14-day free trial, no credit card required
							</p>
						</div>

						<div className="pricing-plan professional">
							<h3>Professional</h3>
							<div className="plan-price">
								<span className="currency">$</span>
								<span className="amount">299</span>
								<span className="period">/month</span>
							</div>
							<p className="plan-description">
								Ideal for medium-sized schools up to 500 students
							</p>
							<ul className="plan-features">
								<li>Up to 500 student accounts</li>
								<li>Unlimited teacher accounts</li>
								<li>Advanced reporting & analytics</li>
								<li>Priority email support</li>
								<li>API access</li>
								<li>Custom branding</li>
							</ul>
							<a
								href="e-dnevnik.alamelschools.ba"
								className="btn-primary full-width"
							>
								Start Free Trial
							</a>
							<p className="plan-note">
								14-day free trial, no credit card required
							</p>
						</div>

						<div className="pricing-plan enterprise">
							<h3>Enterprise</h3>
							<div className="plan-price">
								<span className="text">Custom Pricing</span>
							</div>
							<p className="plan-description">
								For large educational institutions with specific needs
							</p>
							<ul className="plan-features">
								<li>Unlimited accounts</li>
								<li>Custom integrations</li>
								<li>Dedicated account manager</li>
								<li>24/7 priority support</li>
								<li>On-premise deployment option</li>
								<li>Custom feature development</li>
							</ul>
							<a href="#contact" className="btn-outline full-width">
								Contact Us
							</a>
							<p className="plan-note">
								Let's discuss your specific requirements
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section id="faq" className="faq">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">QUESTIONS</span>
						<h2>Frequently Asked Questions</h2>
						<p>Everything you need to know about our platform</p>
					</div>

					<div className="faq-grid">
						<div className="faq-item">
							<h3>How long does it take to set up?</h3>
							<p>
								Most schools are up and running within 1-2 days. Our onboarding
								team will help you import your existing data and provide initial
								training for your staff.
							</p>
						</div>
						<div className="faq-item">
							<h3>Is my data secure?</h3>
							<p>
								Absolutely. We use industry-standard encryption and security
								practices. All data is backed up daily, and we comply with
								relevant educational data privacy regulations.
							</p>
						</div>
						<div className="faq-item">
							<h3>Can I import existing data?</h3>
							<p>
								Yes, we provide tools to import student records, teacher
								information, and historical data from Excel, CSV files, or
								directly from other popular school management systems.
							</p>
						</div>
						<div className="faq-item">
							<h3>Do you offer training?</h3>
							<p>
								Yes, all plans include initial training sessions for
								administrators and teachers. We also provide comprehensive
								documentation and video tutorials.
							</p>
						</div>
						<div className="faq-item">
							<h3>Can I customize features for my school?</h3>
							<p>
								The Professional plan includes some customization options, while
								the Enterprise plan offers full customization including feature
								development tailored to your needs.
							</p>
						</div>
						<div className="faq-item">
							<h3>Is there a mobile app?</h3>
							<p>
								Yes, we offer mobile apps for iOS and Android that allow
								teachers, parents, and students to access the platform on the
								go.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="cta">
				<div className="container">
					<h2>Ready to transform your school management?</h2>
					<p>Join the digital education revolution today</p>
					<div className="cta-buttons">
						<a href="e-dnevnik.alamelschools.ba" className="btn-primary">
							Start Free Trial
						</a>
						<a href="#contact" className="btn-secondary">
							Schedule Demo
						</a>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="contact">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">GET IN TOUCH</span>
						<h2>We'd love to hear from you</h2>
						<p>Questions, comments, or ready to get started?</p>
					</div>

					<div className="contact-container">
						<div className="contact-info">
							<div className="info-item">
								<div className="info-icon email-icon"></div>
								<h3>Email Us</h3>
								<p>info@alamelschools.ba</p>
							</div>
							<div className="info-item">
								<div className="info-icon phone-icon"></div>
								<h3>Call Us</h3>
								<p>+387 33 123 456</p>
							</div>
							<div className="info-item">
								<div className="info-icon location-icon"></div>
								<h3>Visit Us</h3>
								<p>Sarajevo, Bosnia and Herzegovina</p>
							</div>
							<div className="social-links">
								<a href="#" className="social-link facebook"></a>
								<a href="#" className="social-link twitter"></a>
								<a href="#" className="social-link linkedin"></a>
								<a href="#" className="social-link instagram"></a>
							</div>
						</div>
						<div className="contact-form">
							<form>
								<div className="form-group">
									<label htmlFor="name">Name</label>
									<input type="text" id="name" placeholder="Your name" />
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										placeholder="Your email address"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="school">School Name</label>
									<input
										type="text"
										id="school"
										placeholder="Your school name"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="message">Message</label>
									<textarea
										id="message"
										placeholder="How can we help you?"
									></textarea>
								</div>
								<button type="submit" className="btn-primary full-width">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<div className="container">
					<div className="footer-top">
						<div className="footer-brand">
							<h2>e-Dnevnik</h2>
							<p>The complete school management solution</p>
						</div>
						<div className="footer-links">
							<div className="link-group">
								<h3>Product</h3>
								<ul>
									<li>
										<a href="#features">Features</a>
									</li>
									<li>
										<a href="#roles">For Users</a>
									</li>
									<li>
										<a href="#pricing">Pricing</a>
									</li>
									<li>
										<a href="#faq">FAQ</a>
									</li>
								</ul>
							</div>
							<div className="link-group">
								<h3>Resources</h3>
								<ul>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<a href="#">Documentation</a>
									</li>
									<li>
										<a href="#">Support</a>
									</li>
								</ul>
							</div>
							<div className="link-group">
								<h3>Company</h3>
								<ul>
									<li>
										<a href="#">About Us</a>
									</li>
									<li>
										<a href="#contact">Contact</a>
									</li>
									<li>
										<a href="#">Careers</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<p>&copy; 2025 Alamel Schools. All rights reserved.</p>
						<div className="footer-legal">
							<a href="#">Privacy Policy</a>
							<a href="#">Terms of Service</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
