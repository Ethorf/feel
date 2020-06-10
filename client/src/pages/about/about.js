import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.scss';
import '../../misc/defaultPage.scss';
import hallwayImg from '../../assets/images/hallway-1.jpeg';

export const About = () => {
	return (
		<div className={`view`}>
			<div className="about content default-page">
				<div className={`default-page__left-container`}>
					<div className={`default-page__header-description-container`}>
						<h1 className={`default-page__header`}>About</h1>
						<p className={`default-page__description`}>
							{' '}
							Who's that me you're talking about? POINT TO IT. MAKE IT A THING
						</p>
					</div>
					<div className={`about__location-container`}>
						<h3 className={`about__location-title default-page__sub-header`}>Location</h3>
						<div className={`about__location-map-address-container`}>
							<p className={`about__location-address`}>
								We are located at 1929384991029 stjärnsundberry lane in stjärnsund
							</p>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.886839229122!2d16.202982653645872!3d60.43330046293775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46675a1d6359bf0f%3A0xa03450952113090!2s770%2071%20Stj%C3%A4rnsund%2C%20Sweden!5e0!3m2!1sen!2sca!4v1591296533903!5m2!1sen!2sca"
								allowfullscreen=""
								aria-hidden="false"
								tabindex="0"
								className={`about__map-embed`}
							></iframe>
						</div>
					</div>
				</div>
				<img className={`default-page__img`} src={hallwayImg} alt="hallway image"></img>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
