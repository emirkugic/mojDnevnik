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
			title: "Nastavnici",
			icon: <FaUserGraduate />,
			color: "#4361EE",
			features: [
				"Evidentirajte lekcije",
				"Pratite prisustvo",
				"Kreirajte procjene",
				"Ocjenjujte učenike",
			],
		},
		{
			title: "Razrednici",
			icon: <FaUserTie />,
			color: "#3A0CA3",
			features: [
				"Sve funkcije nastavnika",
				"Pregled razreda",
				"Generisanje izvještaja",
				"Komunikacija s roditeljima",
			],
		},
		{
			title: "Roditelji",
			icon: <FaComments />,
			color: "#4CC9F0",
			features: [
				"Pregled napretka djeteta",
				"Provjera prisustva",
				"Uvid u procjene",
				"Preuzimanje izvještaja",
			],
		},
		{
			title: "Učenici",
			icon: <FaGraduationCap />,
			color: "#F72585",
			features: [
				"Pristup ocjenama",
				"Pregled rasporeda",
				"Uvid u prisustvo",
				"Praćenje napretka",
			],
		},
		{
			title: "Administratori",
			icon: <FaShieldAlt />,
			color: "#7209B7",
			features: [
				"Upravljanje korisnicima",
				"Konfiguracija sistema",
				"Izvještaji na nivou škole",
				"Potpuna kontrola",
			],
		},
		{
			title: "IT podrška",
			icon: <FaLaptopCode />,
			color: "#22577A",
			features: [
				"Upravljanje korisnicima",
				"Tehnička podrška",
				"Ažuriranja sistema",
				"Backup podataka",
			],
		},
	];

	// Benefits data
	const benefits = [
		{
			icon: <FaClock />,
			title: "Uštedite vrijeme",
			desc: "Automatizujte rutinske zadatke i smanjite papirologiju do 70%",
		},
		{
			icon: <FaMedal />,
			title: "Poboljšajte kvalitet",
			desc: "Unaprijedite obrazovne standarde pomoću uvida i analitike zasnovanih na podacima",
		},
		{
			icon: <FaChartLine />,
			title: "Pratite napredak",
			desc: "Pratite razvoj učenika pomoću sveobuhvatnih metrika i vizualnih izvještaja",
		},
	];

	// Gallery items for the screenshot showcase
	const galleryItems = [
		{
			image: "/image1.png",
			title: "Dashboard interfejs",
			desc: "Jednostavan za korištenje dashboard s ključnim informacijama na prvi pogled",
		},
		{
			image: "/image2.png",
			title: "Upravljanje ocjenama",
			desc: "Jednostavan sistem ocjenjivanja s detaljnom analitikom",
		},
		{
			image: "/image3.png",
			title: "Mobilno iskustvo",
			desc: "Pristupite cijelom sistemu s bilo kojeg mobilnog uređaja",
		},
		{
			image: "/image4.png",
			title: "Portal za roditelje",
			desc: "Držite roditelje informisanim putem našeg portala",
		},
	];

	// Testimonials data
	const testimonials = [
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

	return (
		<div className="md-homepage">
			{/* Hero Section */}
			<HeroSection />

			{/* Stats Section */}
			{/* <StatsSection /> */}

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
