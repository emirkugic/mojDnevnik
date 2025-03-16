import React from "react";
import {
	HeroSection,
	StatsSection,
	FeaturesSection,
	RolesSection,
	GallerySection,
	BenefitsSection,
	IntegrationsSection,
	TestimonialsSection,
	CtaSection,
} from "../../components/sections";
import "./Homepage.css";

// Import icons for data objects
import {
	FaUserGraduate,
	FaUserTie,
	FaBook,
	FaCheckSquare,
	FaChartBar,
	FaMobileAlt,
	FaShieldAlt,
	FaMedal,
	FaClock,
	FaComments,
	FaGraduationCap,
	FaChartLine,
	FaLaptopCode,
} from "react-icons/fa";

const Homepage = () => {
	// User roles data
	const roles = [
		{
			title: "Teachers",
			icon: <FaUserGraduate />,
			color: "#4361EE",
			features: [
				"Record lessons",
				"Track attendance",
				"Create assessments",
				"Grade students",
			],
		},
		{
			title: "Class Teachers",
			icon: <FaUserTie />,
			color: "#3A0CA3",
			features: [
				"All teacher features",
				"Class overview",
				"Generate reports",
				"Parent communication",
			],
		},
		{
			title: "Parents",
			icon: <FaComments />,
			color: "#4CC9F0",
			features: [
				"View child's progress",
				"Check attendance",
				"See assessments",
				"Download reports",
			],
		},
		{
			title: "Students",
			icon: <FaGraduationCap />,
			color: "#F72585",
			features: [
				"Access grades",
				"View schedule",
				"See attendance",
				"Track progress",
			],
		},
		{
			title: "Administrators",
			icon: <FaShieldAlt />,
			color: "#7209B7",
			features: [
				"Manage all users",
				"System configuration",
				"School-wide reports",
				"Complete control",
			],
		},
		{
			title: "IT Support",
			icon: <FaLaptopCode />,
			color: "#22577A",
			features: [
				"User management",
				"Technical support",
				"System updates",
				"Data backup",
			],
		},
	];

	// Benefits data
	const benefits = [
		{
			icon: <FaClock />,
			title: "Save Time",
			desc: "Automate routine tasks and reduce paperwork by up to 70%",
		},
		{
			icon: <FaMedal />,
			title: "Improve Quality",
			desc: "Enhance educational standards with data-driven insights and analytics",
		},
		{
			icon: <FaChartLine />,
			title: "Track Progress",
			desc: "Monitor student development with comprehensive metrics and visual reports",
		},
	];

	// Gallery items for the screenshot showcase
	const galleryItems = [
		{
			image: "/image1.png",
			title: "Dashboard Interface",
			desc: "User-friendly dashboard with key information at a glance",
		},
		{
			image: "/image2.png",
			title: "Grade Management",
			desc: "Easy-to-use grading system with detailed analytics",
		},
		{
			image: "/image3.png",
			title: "Mobile Experience",
			desc: "Access the full system from any mobile device",
		},
		{
			image: "/image4.png",
			title: "Parent Portal",
			desc: "Keep parents informed with our dedicated portal",
		},
	];

	// Testimonials data
	const testimonials = [
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

	return (
		<div className="md-homepage">
			{/* Hero Section */}
			<HeroSection />

			{/* Stats Section */}
			<StatsSection />

			{/* Features Section */}
			<FeaturesSection />

			{/* Roles Section */}
			<RolesSection roles={roles} />

			{/* Gallery Section */}
			<GallerySection items={galleryItems} />

			{/* Benefits Section */}
			<BenefitsSection benefits={benefits} />

			{/* Integrations Section */}
			<IntegrationsSection />

			{/* Testimonials Section */}
			<TestimonialsSection testimonials={testimonials} />

			{/* CTA Section */}
			<CtaSection />
		</div>
	);
};

export default Homepage;
