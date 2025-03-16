import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	FaSearch,
	FaTimes,
	FaChevronRight,
	FaChevronLeft,
	FaDesktop,
	FaMobileAlt,
	FaChalkboardTeacher,
	FaUserGraduate,
	FaUserTie,
	FaUsers,
	FaChartBar,
	FaCalendarAlt,
	FaEnvelope,
	FaExpand,
	FaCompress,
	FaDownload,
	FaStar,
} from "react-icons/fa";
import "./Gallery.css";

const Gallery = () => {
	// State for filter categories
	const [activeFilter, setActiveFilter] = useState("all");

	// State for lightbox/modal
	const [selectedImage, setSelectedImage] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	// State for search
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	// Refs for scroll animations
	const [heroRef, heroInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [galleryRef, galleryInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Gallery categories
	const categories = [
		{ id: "all", name: "All", icon: <FaDesktop /> },
		{ id: "dashboard", name: "Dashboard", icon: <FaChartBar /> },
		{ id: "teacher", name: "Teacher View", icon: <FaChalkboardTeacher /> },
		{ id: "student", name: "Student View", icon: <FaUserGraduate /> },
		{ id: "admin", name: "Admin Panel", icon: <FaUserTie /> },
		{ id: "parent", name: "Parent Portal", icon: <FaUsers /> },
		{ id: "mobile", name: "Mobile App", icon: <FaMobileAlt /> },
	];

	// Gallery items data
	const galleryItems = [
		{
			id: 1,
			title: "Main Dashboard Overview",
			description:
				"The central hub for teachers with quick access to all important information and tasks.",
			category: "dashboard",
			image: "/image1.png",
			tags: ["dashboard", "overview", "admin", "teacher"],
			featured: true,
		},
		{
			id: 2,
			title: "Student Performance Analytics",
			description:
				"Comprehensive analytics showing student progress, attendance, and grade distributions.",
			category: "dashboard",
			image: "/image2.png",
			tags: ["analytics", "performance", "grades", "statistics"],
			featured: false,
		},
		{
			id: 3,
			title: "Teacher's Grade Management",
			description:
				"Easy-to-use interface for inputting and managing student grades with automatic calculations.",
			category: "teacher",
			image: "/image3.png",
			tags: ["grades", "management", "teacher"],
			featured: true,
		},
		{
			id: 4,
			title: "Student Portal Home",
			description:
				"Student view showing upcoming assignments, recent grades, and important announcements.",
			category: "student",
			image: "/image4.png",
			tags: ["student", "portal", "dashboard"],
			featured: false,
		},
		{
			id: 5,
			title: "Parent Communication Center",
			description:
				"Portal for parents to view their children's progress and communicate with teachers.",
			category: "parent",
			image: "/image5.png",
			tags: ["parent", "communication", "messages"],
			featured: true,
		},
		{
			id: 6,
			title: "Admin User Management",
			description:
				"Administrative interface for managing user accounts, permissions, and school settings.",
			category: "admin",
			image: "/image2.png",
			tags: ["admin", "users", "management", "settings"],
			featured: false,
		},
		{
			id: 7,
			title: "Calendar & Schedule View",
			description:
				"Interactive calendar for managing and viewing classes, events, and important dates.",
			category: "dashboard",
			image: "/image3.png",
			tags: ["calendar", "schedule", "events", "planning"],
			featured: false,
		},
		{
			id: 8,
			title: "Mobile Dashboard View",
			description:
				"The responsive mobile view of the dashboard for on-the-go access.",
			category: "mobile",
			image: "/image4.png",
			tags: ["mobile", "responsive", "dashboard"],
			featured: true,
		},
		{
			id: 9,
			title: "Attendance Tracking System",
			description:
				"Comprehensive system for taking and analyzing student attendance.",
			category: "teacher",
			image: "/image5.png",
			tags: ["attendance", "tracking", "reports"],
			featured: false,
		},
		{
			id: 10,
			title: "Assignment Creation Form",
			description:
				"Interface for teachers to create and distribute assignments to students.",
			category: "teacher",
			image: "/image1.png",
			tags: ["assignments", "creation", "teacher"],
			featured: false,
		},
		{
			id: 11,
			title: "Student Progress Report",
			description:
				"Detailed report showing a student's academic performance over time.",
			category: "student",
			image: "/image2.png",
			tags: ["progress", "report", "student", "performance"],
			featured: true,
		},
		{
			id: 12,
			title: "Message Center Interface",
			description:
				"Communication platform for secure messaging between teachers, students, and parents.",
			category: "dashboard",
			image: "/image3.png",
			tags: ["messages", "communication", "inbox"],
			featured: false,
		},
	];

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
				staggerChildren: 0.1,
			},
		},
	};

	// Filter gallery items based on category and search term
	useEffect(() => {
		let filtered = galleryItems;

		// Filter by category
		if (activeFilter !== "all") {
			filtered = filtered.filter((item) => item.category === activeFilter);
		}

		// Filter by search term
		if (searchTerm) {
			const lowercasedSearch = searchTerm.toLowerCase();
			filtered = filtered.filter(
				(item) =>
					item.title.toLowerCase().includes(lowercasedSearch) ||
					item.description.toLowerCase().includes(lowercasedSearch) ||
					item.tags.some((tag) => tag.toLowerCase().includes(lowercasedSearch))
			);
		}

		setSearchResults(filtered);
	}, [activeFilter, searchTerm]);

	// Handle image preview
	const openModal = (image, index) => {
		setSelectedImage(image);
		setCurrentIndex(index);
		document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
	};

	const closeModal = () => {
		setSelectedImage(null);
		document.body.style.overflow = "unset"; // Re-enable scrolling
	};

	const navigateImage = (direction) => {
		const filteredItems = searchResults;
		let newIndex = currentIndex;

		if (direction === "next") {
			newIndex = (currentIndex + 1) % filteredItems.length;
		} else {
			newIndex =
				(currentIndex - 1 + filteredItems.length) % filteredItems.length;
		}

		setCurrentIndex(newIndex);
		setSelectedImage(filteredItems[newIndex].image);
	};

	// Handle search input
	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="md-gallery-page">
			{/* Hero Section */}
			<section className="md-gallery-page__hero" ref={heroRef}>
				<div className="md-gallery-page__hero-shapes">
					<div className="md-gallery-page__hero-shape md-gallery-page__hero-shape--1"></div>
					<div className="md-gallery-page__hero-shape md-gallery-page__hero-shape--2"></div>
					<div className="md-gallery-page__hero-shape md-gallery-page__hero-shape--3"></div>
				</div>
				<div className="md-container">
					<motion.div
						className="md-gallery-page__hero-content"
						initial={{ opacity: 0, y: 20 }}
						animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}
					>
						<div className="md-gallery-page__badge">Platform Tour</div>
						<h1>
							mojDnevnik <span className="md-gradient-text">Gallery</span>
						</h1>
						<p>
							Explore screenshots and features of our school management platform
						</p>
					</motion.div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="md-gallery-page__main" ref={galleryRef}>
				<div className="md-container">
					{/* Search and Filter Bar */}
					<div className="md-gallery-page__controls">
						<div className="md-gallery-page__search">
							<FaSearch className="md-gallery-page__search-icon" />
							<input
								type="text"
								placeholder="Search gallery..."
								value={searchTerm}
								onChange={handleSearchChange}
								className="md-gallery-page__search-input"
							/>
							{searchTerm && (
								<button
									className="md-gallery-page__search-clear"
									onClick={() => setSearchTerm("")}
								>
									<FaTimes />
								</button>
							)}
						</div>

						<motion.div
							className="md-gallery-page__categories"
							initial="hidden"
							animate={galleryInView ? "visible" : "hidden"}
							variants={staggerContainer}
						>
							{categories.map((category, index) => (
								<motion.button
									key={category.id}
									className={`md-gallery-page__category ${
										activeFilter === category.id
											? "md-gallery-page__category--active"
											: ""
									}`}
									onClick={() => setActiveFilter(category.id)}
									variants={fadeInUp}
								>
									<span className="md-gallery-page__category-icon">
										{category.icon}
									</span>
									<span className="md-gallery-page__category-name">
										{category.name}
									</span>
								</motion.button>
							))}
						</motion.div>
					</div>

					{/* Featured Items Section */}
					{activeFilter === "all" && !searchTerm && (
						<div className="md-gallery-page__featured">
							<div className="md-gallery-page__section-header">
								<h2>Featured Screenshots</h2>
								<p>Popular views of our platform</p>
							</div>

							<motion.div
								className="md-gallery-page__featured-grid"
								initial="hidden"
								animate={galleryInView ? "visible" : "hidden"}
								variants={staggerContainer}
							>
								{galleryItems
									.filter((item) => item.featured)
									.map((item, index) => (
										<motion.div
											key={item.id}
											className="md-gallery-page__featured-item"
											variants={fadeInUp}
											onClick={() =>
												openModal(
													item.image,
													galleryItems.findIndex((i) => i.id === item.id)
												)
											}
										>
											<div className="md-gallery-page__featured-image">
												<img src={item.image} alt={item.title} />
												<div className="md-gallery-page__featured-overlay">
													<span className="md-gallery-page__featured-zoom">
														<FaExpand />
													</span>
												</div>
											</div>
											<div className="md-gallery-page__featured-content">
												<h3>{item.title}</h3>
												<p>{item.description}</p>
												<div className="md-gallery-page__featured-tags">
													{item.category && (
														<span className="md-gallery-page__category-tag">
															{
																categories.find(
																	(cat) => cat.id === item.category
																)?.name
															}
														</span>
													)}
													<span className="md-gallery-page__featured-tag">
														<FaStar /> Featured
													</span>
												</div>
											</div>
										</motion.div>
									))}
							</motion.div>
						</div>
					)}

					{/* All Gallery Items */}
					<div className="md-gallery-page__all-items">
						<div className="md-gallery-page__section-header">
							<h2>
								{searchTerm
									? `Search Results: ${searchResults.length} items found`
									: activeFilter === "all"
									? "All Screenshots"
									: `${
											categories.find((cat) => cat.id === activeFilter)?.name
									  } Screenshots`}
							</h2>
							<p>
								{searchTerm
									? `Showing results for "${searchTerm}"`
									: activeFilter === "all"
									? "Browse all available screenshots"
									: `Screenshots from the ${
											categories.find((cat) => cat.id === activeFilter)?.name
									  } section`}
							</p>
						</div>

						{searchResults.length === 0 ? (
							<div className="md-gallery-page__no-results">
								<h3>No items found</h3>
								<p>
									Try adjusting your search terms or selecting a different
									category.
								</p>
								<button
									className="md-btn md-btn-secondary"
									onClick={() => {
										setSearchTerm("");
										setActiveFilter("all");
									}}
								>
									Clear Filters
								</button>
							</div>
						) : (
							<motion.div
								className="md-gallery-page__grid"
								initial="hidden"
								animate={galleryInView ? "visible" : "hidden"}
								variants={staggerContainer}
							>
								{searchResults.map((item, index) => (
									<motion.div
										key={item.id}
										className="md-gallery-page__item"
										variants={fadeInUp}
										onClick={() =>
											openModal(
												item.image,
												searchResults.findIndex((i) => i.id === item.id)
											)
										}
									>
										<div className="md-gallery-page__item-image">
											<img src={item.image} alt={item.title} />
											<div className="md-gallery-page__item-overlay">
												<span className="md-gallery-page__item-zoom">
													<FaExpand />
												</span>
											</div>
										</div>
										<div className="md-gallery-page__item-content">
											<h3>{item.title}</h3>
											<p>{item.description}</p>
											<div className="md-gallery-page__item-tags">
												{item.category && (
													<span className="md-gallery-page__category-tag">
														{
															categories.find((cat) => cat.id === item.category)
																?.name
														}
													</span>
												)}
												{item.featured && (
													<span className="md-gallery-page__featured-tag">
														<FaStar /> Featured
													</span>
												)}
											</div>
										</div>
									</motion.div>
								))}
							</motion.div>
						)}
					</div>
				</div>
			</section>

			{/* Lightbox/Modal for image preview */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className="md-gallery-page__modal"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div className="md-gallery-page__modal-content">
							<button
								className="md-gallery-page__modal-close"
								onClick={closeModal}
							>
								<FaTimes />
							</button>

							<div className="md-gallery-page__modal-image-container">
								<button
									className="md-gallery-page__modal-nav md-gallery-page__modal-prev"
									onClick={() => navigateImage("prev")}
								>
									<FaChevronLeft />
								</button>

								<div className="md-gallery-page__modal-image">
									<img src={selectedImage} alt="Preview" />
								</div>

								<button
									className="md-gallery-page__modal-nav md-gallery-page__modal-next"
									onClick={() => navigateImage("next")}
								>
									<FaChevronRight />
								</button>
							</div>

							<div className="md-gallery-page__modal-details">
								<h3>{searchResults[currentIndex]?.title}</h3>
								<p>{searchResults[currentIndex]?.description}</p>

								<div className="md-gallery-page__modal-actions">
									<button
										className="md-btn md-btn-primary md-btn-sm"
										onClick={closeModal}
									>
										<FaCompress /> Close Preview
									</button>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* CTA Section */}
			<section className="md-gallery-page__cta">
				<div className="md-container">
					<div className="md-gallery-page__cta-card">
						<h2>Ready to experience mojDnevnik?</h2>
						<p>
							Schedule a personalized demo or start your free 30-day trial today
						</p>
						<div className="md-gallery-page__cta-buttons">
							<a href="/contact" className="md-btn md-btn-primary md-btn-light">
								Start Free Trial
							</a>
							<a
								href="/contact"
								className="md-btn md-btn-secondary md-btn-outline"
							>
								Request Demo <FaChevronRight />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
