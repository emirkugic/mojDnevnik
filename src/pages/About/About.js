import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	FaRocket,
	FaLightbulb,
	FaUsers,
	FaChalkboardTeacher,
	FaChartLine,
	FaClock,
	FaFileAlt,
	FaLaptopCode,
	FaMobileAlt,
	FaLock,
	FaBalanceScale,
	FaRegLightbulb,
	FaChevronRight,
} from "react-icons/fa";
import "./About.css";

const About = () => {
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

	// InView hooks for animations
	const [visionRef, visionInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [challengesRef, challengesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [solutionRef, solutionInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [principlesRef, principlesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [founderRef, founderInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [futureRef, futureInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Challenges faced by schools
	const challenges = [
		{
			icon: <FaClock />,
			title: "Administracija koja oduzima vrijeme",
			description:
				"Nastavnici provode nebrojene sate na papirologiji umjesto da se fokusiraju na obrazovanje",
		},
		{
			icon: <FaFileAlt />,
			title: "Fragmentirani sistemi",
			description:
				"Višestruki odvojeni alati za prisustvo, ocjenjivanje i komunikaciju stvaraju haos",
		},
		{
			icon: <FaLaptopCode />,
			title: "Zastarjela tehnologija",
			description:
				"Naslijeđeni sistemi koji se teško koriste i rijetko ažuriraju",
		},
		{
			icon: <FaUsers />,
			title: "Loša komunikacija",
			description:
				"Ograničena uključenost roditelja i nastavnika zbog neefikasnih komunikacijskih kanala",
		},
	];

	// Core solution features
	const solutions = [
		{
			icon: <FaChalkboardTeacher />,
			title: "Sve na jednom mjestu",
			description:
				"Kompletno upravljanje školom na jednom intuitivnom interfejsu",
		},
		{
			icon: <FaMobileAlt />,
			title: "Moderno korisničko iskustvo",
			description: "Čist, responzivan dizajn koji radi na svakom uređaju",
		},
		{
			icon: <FaChartLine />,
			title: "Uvidi bazirani na podacima",
			description: "Analitika koja pomaže poboljšanju obrazovnih ishoda",
		},
		{
			icon: <FaLock />,
			title: "Sigurno i pouzdano",
			description: "Izgrađeno prema najvišim standardima zaštite podataka",
		},
	];

	// Core principles
	const principles = [
		{
			icon: <FaLightbulb />,
			title: "Inovacija",
			description:
				"Nikad ne prestajemo poboljšavati našu platformu na osnovu povratnih informacija korisnika i novih tehnologija",
		},
		{
			icon: <FaBalanceScale />,
			title: "Jednostavnost",
			description:
				"Moćno ne znači komplicirano - fokusiramo se na jednostavnost upotrebe za sve korisnike",
		},
		{
			icon: <FaRegLightbulb />,
			title: "Obrazovni uticaj",
			description:
				"Svaka funkcija koju gradimo ima za cilj poboljšanje obrazovnog iskustva",
		},
	];

	// Future roadmap items
	const roadmap = [
		"Napredna AI analiza procjena",
		"Alati za razvoj prilagođenih nastavnih planova",
		"Poboljšana analitika učenja",
		"Prostori za saradnju roditelja i nastavnika",
		"Predviđanje učeničkih performansi",
		"Personalizirane putanje učenja",
	];

	return (
		<div className="md-about">
			{/* Hero Section */}
			<section className="md-about__hero">
				<div className="md-about__hero-shapes">
					<div className="md-about__hero-shape md-about__hero-shape--1"></div>
					<div className="md-about__hero-shape md-about__hero-shape--2"></div>
					<div className="md-about__hero-shape md-about__hero-shape--3"></div>
				</div>
				<div className="md-container">
					<motion.div
						className="md-about__hero-content"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1>
							Novi pogled na{" "}
							<span className="md-gradient-text">upravljanje školom</span>
						</h1>
						<p>
							Naše putovanje u stvaranju modernog rješenja za današnje obrazovne
							izazove
						</p>
					</motion.div>
				</div>
			</section>

			{/* Our Vision Section */}
			<section className="md-section md-about__vision" ref={visionRef}>
				<div className="md-container">
					<motion.div
						className="md-about__vision-grid"
						initial="hidden"
						animate={visionInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<div className="md-about__vision-content">
							<div className="md-about__badge">Naša priča</div>
							<h2>Od frustracije do inovacije</h2>
							<p>
								mojDnevnik je nastao iz jednostavnog zapažanja: škole koriste
								zastarjele, neefikasne sisteme koji oduzimaju dragocjeno vrijeme
								nastavnicima i administratorima.
							</p>
							<p>
								Kao edukatori, i sami smo iskusili ograničenja naslijeđenog
								softvera za upravljanje školama - nespretni interfejsi,
								nepovezani sistemi i sati izgubljeni na administrativne zadatke
								koji bi se mogli automatizovati.
							</p>
							<p>
								Zamislili smo nešto bolje: jedinstvenu, intuitivnu platformu
								izgrađenu sa modernom tehnologijom koja stavlja fokus nazad na
								obrazovanje umjesto na administraciju.
							</p>
						</div>
						<div className="md-about__vision-image">
							<div className="md-about__image-wrapper">
								<img
									src="/image2.png"
									alt="Moderna vizija upravljanja školom"
								/>
								<div className="md-about__image-overlay"></div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* The Challenges Section */}
			<section className="md-section md-about__challenges" ref={challengesRef}>
				<div className="md-container">
					<div className="md-section-header">
						<h2>
							<span className="md-gradient-text">Izazovi</span>
						</h2>
						<p>Zašto postojeći sistemi za upravljanje školama ne funkcionišu</p>
					</div>

					<motion.div
						className="md-about__challenges-grid"
						initial="hidden"
						animate={challengesInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{challenges.map((item, index) => (
							<motion.div
								key={index}
								className="md-about__challenge-card"
								variants={fadeInUp}
							>
								<div className="md-about__challenge-icon">{item.icon}</div>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Our Solution Section */}
			<section className="md-section md-about__solution" ref={solutionRef}>
				<div className="md-container">
					<div className="md-section-header">
						<h2>
							Naše <span className="md-gradient-text">rješenje</span>
						</h2>
						<p>Kako mojDnevnik odgovara na ove izazove</p>
					</div>

					<div className="md-about__solution-content">
						<motion.div
							className="md-about__solution-image"
							initial={{ opacity: 0, x: -50 }}
							animate={
								solutionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
							}
							transition={{ duration: 0.8 }}
						>
							<img src="/image4.png" alt="mojDnevnik platforma" />
							<img src="/image2.png" alt="mojDnevnik platforma" />
						</motion.div>

						<motion.div
							className="md-about__solution-grid"
							initial="hidden"
							animate={solutionInView ? "visible" : "hidden"}
							variants={staggerContainer}
						>
							{solutions.map((item, index) => (
								<motion.div
									key={index}
									className="md-about__solution-card"
									variants={fadeInUp}
								>
									<div className="md-about__solution-icon">{item.icon}</div>
									<div className="md-about__solution-text">
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Principles Section */}
			<section className="md-section md-about__principles" ref={principlesRef}>
				<div className="md-container">
					<div className="md-section-header">
						<h2>
							Naši <span className="md-gradient-text">principi</span>
						</h2>
						<p>Vrijednosti koje vode naš razvoj</p>
					</div>

					<motion.div
						className="md-about__principles-grid"
						initial="hidden"
						animate={principlesInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						{principles.map((principle, index) => (
							<motion.div
								key={index}
								className="md-about__principle-card"
								variants={fadeInUp}
							>
								<div className="md-about__principle-icon">{principle.icon}</div>
								<h3>{principle.title}</h3>
								<p>{principle.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Founder Section */}
			<section className="md-section md-about__founder" ref={founderRef}>
				<div className="md-container">
					<motion.div
						className="md-about__founder-content"
						initial="hidden"
						animate={founderInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<div className="md-about__founder-image">
							<img src="/pfp.jpg" alt="Osnivač" />
							<div className="md-about__founder-quote">
								<p>
									"Vjerujem da tehnologija treba osnažiti nastavnike, a ne
									opteretiti ih s više posla."
								</p>
							</div>
						</div>
						<div className="md-about__founder-text">
							<div className="md-about__badge">Upoznajte osnivača</div>
							<h2>Od učionice do koda</h2>
							<p>
								Kao bivši edukator, nije mi bilo potrebno mnogo vremena da
								primijetim kako rad sa zastarjelim sistemima za upravljanje
								škola zapravo ugrožava efikasnost i kvalitet obrazovanja.
							</p>
							<p>
								Nakon jednog posebno frustrirajućeg dana provedenog boreći se s
								tri različita sistema samo da bih završio osnovne
								administrativne zadatke, odlučio sam da mora postojati bolji
								način.
							</p>
							<p>
								Okupio sam mali tim edukatora i programera koji su dijelili moju
								viziju, i počeli smo graditi mojDnevnik - sveobuhvatni,
								jednostavni sistem za upravljanje školom o kojem smo uvijek
								maštali tokom naših nastavničkih karijera.
							</p>
							<p>
								Danas je naša misija da edukatorima vratimo vrijeme koje
								zaslužuju da se fokusiraju na ono što je zaista važno:
								podučavanje i inspirisanje nove generacije.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Future Vision Section */}
			<section className="md-section md-about__future" ref={futureRef}>
				<div className="md-container">
					<div className="md-section-header md-about__future-header">
						<h2>
							<span className="md-gradient-text">Put naprijed</span>
						</h2>
						<p>Naša vizija za budućnost mojDnevnika</p>
					</div>

					<motion.div
						className="md-about__future-content"
						initial="hidden"
						animate={futureInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<div className="md-about__future-text">
							<p>
								Tek smo na početku našeg putovanja za transformaciju upravljanja
								obrazovanjem. Kako rastemo, fokusirani smo na kontinuirano
								poboljšanje mojDnevnika s novim funkcijama i mogućnostima koje
								dalje osnažuju škole.
							</p>
							<h3>Na našem planu razvoja:</h3>
							<ul className="md-about__roadmap-list">
								{roadmap.map((item, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -20 }}
										animate={
											futureInView
												? { opacity: 1, x: 0 }
												: { opacity: 0, x: -20 }
										}
										transition={{ delay: 0.3 + index * 0.1 }}
									>
										<FaChevronRight /> {item}
									</motion.li>
								))}
							</ul>
						</div>
						<div className="md-about__future-image">
							<img src="/image3.png" alt="Vizija budućnosti" />
						</div>
					</motion.div>
				</div>
			</section>

			{/* Join Us CTA */}
			<section className="md-section md-about__cta">
				<div className="md-container">
					<div className="md-about__cta-card">
						<h2>Pridružite nam se u našoj misiji</h2>
						<p>Budite dio revolucije u tehnologiji upravljanja školama</p>
						<div className="md-about__cta-buttons">
							<a href="/contact" className="md-btn md-btn-primary">
								Zatražite demo
							</a>
							<a href="/contact" className="md-btn md-btn-secondary">
								Kontaktirajte nas
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
