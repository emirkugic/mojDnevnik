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
						<h1>eDnevnik</h1>
					</div>
					<div className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
						<ul>
							<li>
								<a href="#features">Funkcije</a>
							</li>
							<li>
								<a href="#roles">Za korisnike</a>
							</li>
							<li>
								<a href="#pricing">Cijene</a>
							</li>
							<li>
								<a href="#faq">Česta pitanja</a>
							</li>
							<li>
								<a href="#contact">Kontakt</a>
							</li>
						</ul>
					</div>
					<div className="navbar-cta">
						<a href="e-dnevnik.alamelschools.ba" className="btn-secondary">
							Isprobaj Demo
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
						<h1>Modernizirajte upravljanje vašom školom</h1>
						<p>
							Kompletno digitalno rješenje za pojednostavljenje praćenja
							prisustva, upravljanja ocjenama i komunikacije između roditelja i
							nastavnika za škole koje gledaju u budućnost.
						</p>
						<div className="hero-buttons">
							<a href="e-dnevnik.alamelschools.ba" className="btn-primary">
								Započni besplatnu probu
							</a>
							<a href="#demo" className="btn-video">
								<span className="play-icon">▶</span>
								Pogledaj Demo
							</a>
						</div>
					</div>
					<div className="hero-image">
						<img
							src="/image1.png"
							alt="e-Dnevnik Kontrolna ploča"
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
						<span className="section-tag">GLAVNE FUNKCIJE</span>
						<h2>Sve što vam je potrebno za efikasno vođenje škole</h2>
						<p>
							Naša platforma kombinuje sve osnovne alate u jednom intuitivnom
							interfejsu
						</p>
					</div>

					<div className="feature-cards">
						<div className="feature-card">
							<div className="feature-icon attendance-icon"></div>
							<h3>Praćenje prisustva</h3>
							<p>
								Pratite i izvještavajte o prisustvu učenika jednim klikom.
								Generišite korisne izvještaje i identifikujte obrasce.
							</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon grade-icon"></div>
							<h3>Upravljanje ocjenama</h3>
							<p>
								Kreirajte prilagođene kriterije ocjenjivanja i jednostavno
								upravljajte ocjenama učenika iz svih predmeta.
							</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon parent-icon"></div>
							<h3>Komunikacija s roditeljima</h3>
							<p>
								Držite roditelje informisanim i uključenim s ažuriranjima u
								realnom vremenu o ocjenama, prisustvu i ponašanju.
							</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon schedule-icon"></div>
							<h3>Raspored časova</h3>
							<p>
								Jednostavno kreirajte i upravljajte rasporedom časova,
								izbjegavajući konflikte i optimizirajući raspodjelu resursa.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Screenshot Showcase Section */}
			<section className="showcase">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">INTERFEJS</span>
						<h2>Lijep, intuitivan i jednostavan za korištenje</h2>
						<p>Dizajniran s nastavnicima i administratorima na umu</p>
					</div>

					<div className="showcase-grid">
						<div className="showcase-item main">
							<img src="/image2.png" alt="Pregled kontrolne ploče" />
							<div className="showcase-caption">
								<h3>Sveobuhvatna kontrolna ploča</h3>
								<p>Dobijte brzi pregled svega važnog na jednom mjestu</p>
							</div>
						</div>
						<div className="showcase-item">
							<img src="/image3.png" alt="Modul za prisustvo" />
							<div className="showcase-caption">
								<p>Modul za prisustvo</p>
							</div>
						</div>
						<div className="showcase-item">
							<img src="/image4.png" alt="Ekran za unos ocjena" />
							<div className="showcase-caption">
								<p>Interfejs za unos ocjena</p>
							</div>
						</div>
						<div className="showcase-item">
							<img src="/image5.png" alt="Portal za roditelje" />
							<div className="showcase-caption">
								<p>Portal za komunikaciju s roditeljima</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* User Roles Section */}
			<section id="roles" className="roles">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">ZA SVAKOGA</span>
						<h2>Prilagođeno za sve učesnike u školi</h2>
						<p>Različiti prikazi i dozvole za svaku korisničku ulogu</p>
					</div>

					<div className="tabs-container">
						<div className="tabs-header">
							<button
								className={`tab-button ${
									activeTab === "teachers" ? "active" : ""
								}`}
								onClick={() => setActiveTab("teachers")}
							>
								Za nastavnike
							</button>
							<button
								className={`tab-button ${
									activeTab === "admin" ? "active" : ""
								}`}
								onClick={() => setActiveTab("admin")}
							>
								Za administratore
							</button>
							<button
								className={`tab-button ${
									activeTab === "classTeacher" ? "active" : ""
								}`}
								onClick={() => setActiveTab("classTeacher")}
							>
								Za razrednike
							</button>
							<button
								className={`tab-button ${
									activeTab === "parents" ? "active" : ""
								}`}
								onClick={() => setActiveTab("parents")}
							>
								Za roditelje
							</button>
							<button
								className={`tab-button ${
									activeTab === "students" ? "active" : ""
								}`}
								onClick={() => setActiveTab("students")}
							>
								Za učenike
							</button>
						</div>

						<div className="tabs-content">
							{activeTab === "teachers" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Osnažite svoje podučavanje</h3>
										<ul>
											<li>Evidentirajte prisustvo u nekoliko sekundi</li>
											<li>Unosite i upravljajte ocjenama efikasno</li>
											<li>Komunicirajte direktno s roditeljima</li>
											<li>Kreirajte i dijelite nastavne materijale</li>
											<li>Pratite napredak učenika tokom vremena</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											Pogledaj demo za nastavnike
										</a>
									</div>
									<div className="tab-image">
										<img src="/image3.png" alt="Interfejs za nastavnike" />
									</div>
								</div>
							)}

							{activeTab === "admin" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Pojednostavite administraciju</h3>
										<ul>
											<li>Upravljajte svim korisnicima i dodjeljujte uloge</li>
											<li>Pratite metrike cijele škole u realnom vremenu</li>
											<li>Generišite sveobuhvatne izvještaje</li>
											<li>Prilagodite sistem potrebama vaše škole</li>
											<li>Nadzirite rad nastavnika i učenika</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											Pogledaj demo za administratore
										</a>
									</div>
									<div className="tab-image">
										<img src="/image2.png" alt="Interfejs za administratore" />
									</div>
								</div>
							)}

							{activeTab === "classTeacher" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Efikasno upravljajte svojim razredom</h3>
										<ul>
											<li>Dobijte sveobuhvatan pregled svog razreda</li>
											<li>Pratite obrasce prisustva i uspjeha</li>
											<li>Komunicirajte s roditeljima bez napora</li>
											<li>Kreirajte i dijelite obavijesti za razred</li>
											<li>Upravljajte događajima i aktivnostima razreda</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											Pogledaj demo za razrednike
										</a>
									</div>
									<div className="tab-image">
										<img src="/image4.png" alt="Interfejs za razrednike" />
									</div>
								</div>
							)}

							{activeTab === "parents" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Ostanite povezani s obrazovanjem vašeg djeteta</h3>
										<ul>
											<li>Pogledajte ocjene i prisustvo u realnom vremenu</li>
											<li>Komunicirajte direktno s nastavnicima</li>
											<li>Primajte važne obavijesti</li>
											<li>Pratite domaće zadaće i zadatke</li>
											<li>Pratite ukupni akademski napredak</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											Pogledaj demo za roditelje
										</a>
									</div>
									<div className="tab-image">
										<img src="/image5.png" alt="Interfejs za roditelje" />
									</div>
								</div>
							)}

							{activeTab === "students" && (
								<div className="tab-content">
									<div className="tab-info">
										<h3>Preuzmite kontrolu nad svojim učenjem</h3>
										<ul>
											<li>Provjerite ocjene i prisustvo</li>
											<li>Pristupite domaćim zadaćama i zadacima</li>
											<li>Pogledajte povratne informacije nastavnika</li>
											<li>Pratite svoj akademski napredak</li>
											<li>Budite u toku sa školskim događajima</li>
										</ul>
										<a
											href="e-dnevnik.alamelschools.ba"
											className="btn-outline"
										>
											Pogledaj demo za učenike
										</a>
									</div>
									<div className="tab-image">
										<img src="/image1.png" alt="Interfejs za učenike" />
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
						<span className="section-tag">PONUDA ZA LANSIRANJE</span>
						<h2>Pogodnosti za rane korisnike</h2>
						<p>
							Budite među prvima koji će revolucionizirati upravljanje školom
						</p>
					</div>

					<div className="pricing-plans">
						<div className="pricing-plan starter">
							<div className="plan-badge">Najpopularniji</div>
							<h3>Početni</h3>
							<div className="plan-price">
								<span className="currency">$</span>
								<span className="amount">149</span>
								<span className="period">/mjesečno</span>
							</div>
							<p className="plan-description">
								Savršen za male škole do 200 učenika
							</p>
							<ul className="plan-features">
								<li>Do 200 učeničkih računa</li>
								<li>Do 30 nastavničkih računa</li>
								<li>Osnovni izvještaji</li>
								<li>Email podrška</li>
								<li>Redovna ažuriranja</li>
							</ul>
							<a
								href="e-dnevnik.alamelschools.ba"
								className="btn-primary full-width"
							>
								Započni besplatnu probu
							</a>
							<p className="plan-note">
								14-dnevna besplatna proba, bez kreditne kartice
							</p>
						</div>

						<div className="pricing-plan professional">
							<h3>Profesionalni</h3>
							<div className="plan-price">
								<span className="currency">$</span>
								<span className="amount">299</span>
								<span className="period">/mjesečno</span>
							</div>
							<p className="plan-description">
								Idealan za srednje velike škole do 500 učenika
							</p>
							<ul className="plan-features">
								<li>Do 500 učeničkih računa</li>
								<li>Neograničen broj nastavničkih računa</li>
								<li>Napredni izvještaji i analitika</li>
								<li>Prioritetna email podrška</li>
								<li>API pristup</li>
								<li>Prilagođeni branding</li>
							</ul>
							<a
								href="e-dnevnik.alamelschools.ba"
								className="btn-primary full-width"
							>
								Započni besplatnu probu
							</a>
							<p className="plan-note">
								14-dnevna besplatna proba, bez kreditne kartice
							</p>
						</div>

						<div className="pricing-plan enterprise">
							<h3>Enterprise</h3>
							<div className="plan-price">
								<span className="text">Prilagođene cijene</span>
							</div>
							<p className="plan-description">
								Za velike obrazovne institucije sa specifičnim potrebama
							</p>
							<ul className="plan-features">
								<li>Neograničen broj računa</li>
								<li>Prilagođene integracije</li>
								<li>Dedicirani account manager</li>
								<li>24/7 prioritetna podrška</li>
								<li>Opcija za implementaciju na vlastitom serveru</li>
								<li>Razvoj prilagođenih funkcija</li>
							</ul>
							<a href="#contact" className="btn-outline full-width">
								Kontaktirajte nas
							</a>
							<p className="plan-note">
								Razgovarajmo o vašim specifičnim zahtjevima
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section id="faq" className="faq">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">PITANJA</span>
						<h2>Često postavljana pitanja</h2>
						<p>Sve što trebate znati o našoj platformi</p>
					</div>

					<div className="faq-grid">
						<div className="faq-item">
							<h3>Koliko dugo traje postavljanje?</h3>
							<p>
								Većina škola je spremna za rad u roku od 1-2 dana. Naš tim za
								uvođenje pomoći će vam da uvezete postojeće podatke i pružiti
								početnu obuku za vaše osoblje.
							</p>
						</div>
						<div className="faq-item">
							<h3>Jesu li moji podaci sigurni?</h3>
							<p>
								Apsolutno. Koristimo industrijsko-standardne enkripcije i
								sigurnosne prakse. Svi podaci se sigurnosno kopiraju
								svakodnevno, a mi se pridržavamo relevantnih propisa o
								privatnosti obrazovnih podataka.
							</p>
						</div>
						<div className="faq-item">
							<h3>Mogu li uvesti postojeće podatke?</h3>
							<p>
								Da, pružamo alate za uvoz učeničkih zapisa, podataka o
								nastavnicima i historijskih podataka iz Excel, CSV datoteka ili
								direktno iz drugih popularnih sistema za upravljanje školama.
							</p>
						</div>
						<div className="faq-item">
							<h3>Nudite li obuku?</h3>
							<p>
								Da, svi planovi uključuju početne sesije obuke za administratore
								i nastavnike. Također pružamo sveobuhvatnu dokumentaciju i video
								tutorijale.
							</p>
						</div>
						<div className="faq-item">
							<h3>Mogu li prilagoditi funkcije za svoju školu?</h3>
							<p>
								Profesionalni plan uključuje neke opcije prilagođavanja, dok
								Enterprise plan nudi potpunu prilagodbu uključujući razvoj
								funkcija prilagođenih vašim potrebama.
							</p>
						</div>
						<div className="faq-item">
							<h3>Postoji li mobilna aplikacija?</h3>
							<p>
								Da, nudimo mobilne aplikacije za iOS i Android koje omogućavaju
								nastavnicima, roditeljima i učenicima da pristupe platformi u
								pokretu.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="cta">
				<div className="container">
					<h2>Spremni za transformaciju upravljanja vašom školom?</h2>
					<p>Pridružite se digitalnoj obrazovnoj revoluciji danas</p>
					<div className="cta-buttons">
						<a href="e-dnevnik.alamelschools.ba" className="btn-primary">
							Započni besplatnu probu
						</a>
						<a href="#contact" className="btn-secondary">
							Zakaži demo
						</a>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="contact">
				<div className="container">
					<div className="section-header">
						<span className="section-tag">KONTAKT</span>
						<h2>Rado bismo čuli od vas</h2>
						<p>Pitanja, komentari ili spremni za početak?</p>
					</div>

					<div className="contact-container">
						<div className="contact-info">
							<div className="info-item">
								<div className="info-icon email-icon"></div>
								<h3>Email</h3>
								<p>info@ednevnik.ba</p>
							</div>
							<div className="info-item">
								<div className="info-icon phone-icon"></div>
								<h3>Nazovite nas</h3>
								<p>+387 33 123 321</p>
							</div>
							<div className="info-item">
								<div className="info-icon location-icon"></div>
								<h3>Posjetite nas</h3>
								<p>Sarajevo, Bosna i Hercegovina</p>
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
									<label htmlFor="name">Ime</label>
									<input type="text" id="name" placeholder="Vaše ime" />
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										placeholder="Vaša email adresa"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="school">Ime škole</label>
									<input type="text" id="school" placeholder="Ime vaše škole" />
								</div>
								<div className="form-group">
									<label htmlFor="message">Poruka</label>
									<textarea
										id="message"
										placeholder="Kako vam možemo pomoći?"
									></textarea>
								</div>
								<button type="submit" className="btn-primary full-width">
									Pošalji poruku
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
							<h2>eDnevnik</h2>
							<p>Kompletno rješenje za upravljanje školom</p>
						</div>
						<div className="footer-links">
							<div className="link-group">
								<h3>Proizvod</h3>
								<ul>
									<li>
										<a href="#features">Funkcije</a>
									</li>
									<li>
										<a href="#roles">Za korisnike</a>
									</li>
									<li>
										<a href="#pricing">Cijene</a>
									</li>
									<li>
										<a href="#faq">Česta pitanja</a>
									</li>
								</ul>
							</div>
							<div className="link-group">
								<h3>Resursi</h3>
								<ul>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<a href="#">Dokumentacija</a>
									</li>
									<li>
										<a href="#">Podrška</a>
									</li>
								</ul>
							</div>
							<div className="link-group">
								<h3>Kompanija</h3>
								<ul>
									<li>
										<a href="#">O nama</a>
									</li>
									<li>
										<a href="#contact">Kontakt</a>
									</li>
									<li>
										<a href="#">Karijere</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<p>&copy; 2025 Emir Kugić. Sva prava pridržana.</p>
						<div className="footer-legal">
							<a href="#">Politika privatnosti</a>
							<a href="#">Uslovi korištenja</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
