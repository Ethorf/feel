import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './about.scss';
import '../../misc/defaultPage.scss';
import Testimonials from '../../components/testimonials/testimonials.js';

export const About = () => {
	return (
		<div className={`view`}>
			<div className="about__gradient"></div>
			<div className="content about">
				<h1 className={`about__header`} data-aos="fade-in">
					About Me
				</h1>
				<p className={`about__description`} data-aos="fade-in " data-aos-duration="1000">
					{' '}
					I am in a constant process of working with my body and struggle with many challenges (especially an
					eating disorder) which help me to be understanding with others. I’m raising two young girls and
					through many failures learning how to garden. I completed my yoga teacher training with Frog Lotus
					Yoga International in Spain, and studied Thai Massage with Thai Massage Toronto. I’ve also sat
					several Goenka Vipassana courses and have maintained,lost, and regained my meditation practice many
					times over the last 10 years. There is much to learn and even more to practice. Thank you.
				</p>
			</div>

			<Testimonials />
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
