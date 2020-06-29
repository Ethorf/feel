import React, { useState, useEffect } from 'react';
import './about.scss';
import '../../misc/defaultPage.scss';
import Testimonials from '../../components/testimonials/testimonials.js';
import Headshot from '../../assets/images/kels-headshot.jpg';

export const About = (props) => {
	return (
		<div className={`view`}>
			<div className="about__gradient"></div>
			<div className="content about">
				<div className="about__headshot-header-description-container">
					<img className="about__headshot" alt="headshot" src={Headshot} data-aos="fade-in"></img>
					<div className="about__header-description-container">
						<h1 className={`about__header`} data-aos="fade-in">
							About Me
						</h1>
						<p className={`about__description`} data-aos="fade-in">
							{' '}
							Body work is a constant process of struggling through challenges that help me grow in my
							understanding of others. I completed my yoga teacher training with Frog Lotus Yoga
							International in Spain, and studied Thai Massage with Thai Massage Toronto. I’m raising two
							young girls and through many failures learning how to garden. I’ve also sat several Goenka
							Vipassana courses and have maintained,lost, and regained my meditation practice many times
							over the last 10 years. There is much to learn and even more to practice.
						</p>
						<p className={`about__thank-you`} data-aos="fade-in">
							{' '}
							Thank you.
						</p>
					</div>
				</div>
			</div>

			<Testimonials offset={props.offset} />
		</div>
	);
};

// <p className={`about__description`} data-aos="fade-in">
// {' '}
// I am in a constant process of working with my body and struggle with many challenges (especially an
// eating disorder) which help me to be understanding with others. I’m raising two young girls and
// through many failures learning how to garden. I completed my yoga teacher training with Frog Lotus
// Yoga International in Spain, and studied Thai Massage with Thai Massage Toronto. I’ve also sat
// several Goenka Vipassana courses and have maintained,lost, and regained my meditation practice many
// times over the last 10 years. There is much to learn and even more to practice. Thank you.
// </p>
export default About;
