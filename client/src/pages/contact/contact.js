import React, { Component } from 'react';
import { connect } from 'react-redux';
import './contact.scss';
import '../../misc/defaultPage.scss';
import SnowTrees from '../../assets/images/snow-trees.jpeg';

export const Contact = () => {
	return (
		<div className="view def">
			<div className="contact content default-page">
				<div className={`default-page__left-container`}>
					<h1 className={`default-page__header`}>Contact</h1>
					<div className={`contact__contact-info-container`}>
						<p className={`contact__contact-info contact__contact-name`}>Kelsey Filip</p>
						<p className={`contact__contact-info`}>Kelseyfilip@icloud.com</p>
						<p className={`contact__contact-info`}>Tel: 0723535747 (sms or call)</p>
						<p className={`contact__contact-info`}>Located in Stjärnsund, Sweden</p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.886839229122!2d16.202982653645872!3d60.43330046293775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46675a1d6359bf0f%3A0xa03450952113090!2s770%2071%20Stj%C3%A4rnsund%2C%20Sweden!5e0!3m2!1sen!2sca!4v1591296533903!5m2!1sen!2sca"
							allowfullscreen=""
							aria-hidden="false"
							tabindex="0"
							className={`contact__map-embed`}
						></iframe>
					</div>
				</div>
				<div className={`default-page__right-container`}>
					<img className={`default-page__img`} src={SnowTrees} alt="yoga image"></img>
				</div>
			</div>
			<div className="default-page__bottom-pseudo-chunk"></div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
