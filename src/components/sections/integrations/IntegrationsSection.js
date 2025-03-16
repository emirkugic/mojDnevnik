import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import "./IntegrationsSection.css";

const IntegrationsSection = () => {
	const integrationFeatures = [
		"Calendar synchronization",
		"Email integration",
		"Document management",
		"Learning management systems",
		"Student information systems",
	];

	return (
		<section id="integrations" className="md-integrations-section">
			<div className="md-container">
				<div className="md-section-header">
					<h2 className="md-section-header__title">
						Seamless <span className="md-gradient-text">Integrations</span>
					</h2>
					<p className="md-section-header__subtitle">
						Connect with the tools your school already uses
					</p>
				</div>

				<div className="md-integrations-section__showcase">
					<div className="md-integrations-section__text">
						<h3>Everything in One Place</h3>
						<p>
							mojDnevnik connects with your existing school systems for seamless
							data flow between platforms.
						</p>
						<ul className="md-integrations-section__features">
							{integrationFeatures.map((feature, index) => (
								<li key={index}>
									<FaCheckSquare /> {feature}
								</li>
							))}
						</ul>
						<a href="#contact" className="md-btn md-btn-secondary">
							Learn About Integrations
						</a>
					</div>
					<div className="md-integrations-section__images">
						<div className="md-integrations-section__image-stack">
							<div className="md-integrations-section__stack-image md-integrations-section__image-1">
								<img src="/image4.png" alt="Calendar Integration" />
							</div>
							<div className="md-integrations-section__stack-image md-integrations-section__image-2">
								<img src="/image5.png" alt="Email Integration" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntegrationsSection;
