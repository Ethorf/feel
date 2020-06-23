import React, { useState, useRef } from 'react';
import './testimonials.scss';
import '../../pages/about/about.scss';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { gsap, TimelineMax } from 'gsap';
import Dock from './../../assets/images/lake-dock-reversed.jpeg';

gsap.registerPlugin(CSSPlugin);

export default function Testimonials() {
	const testimonialTl = new TimelineMax({ paused: true });
	const [testimonialAnimation, setTestimonialAnimation] = useState(null);
	let testimonialContainer = useRef(null);

	let [counter, setCounter] = useState(0);
	let testimonialData = [
		{
			content:
				"Bra massage som löser upp spänningar i muskler, en avslappnande behandling som ger ny energi och rörlighet, kan varmt rekommendera Kelsey's massage.",
			name: 'Edvard Sörensen'
		},

		{
			content:
				"Kelsey has a way of making you feel warm, welcomed and comfortable in her classes. She has a gorgeous voice and her flows are so creative. You'll leave Kelsey's class feeling like you've had a great workout and huge cuddle at the same time. <3",
			name: 'Cheryl Reid '
		},

		{ content: 'Kan varmt rekommenderas!', name: 'Ulla Kleberg' }
	];
	const [activeTestimonial, setActiveTestimonial] = useState(testimonialData[counter]);
	function next() {
		if (counter < testimonialData.length - 1) {
			setTestimonialAnimation(
				testimonialTl
					.to(testimonialContainer, { duration: 0.4, autoAlpha: 0, ease: ' Power1.easeIn' })
					.to(testimonialContainer, { delay: 0.4, duration: 0.7, autoAlpha: 1, ease: 'Power1.easeIn' })
					.play()
			);
			setTimeout(() => {
				setCounter(++counter);
				setActiveTestimonial(testimonialData[counter]);
			}, 550);
		}
		setActiveTestimonial(testimonialData[counter]);
	}
	const previous = () => {
		if (counter > 0) {
			setTestimonialAnimation(
				testimonialTl
					.to(testimonialContainer, { duration: 0.4, autoAlpha: 0, ease: ' Power1.easeIn' })
					.to(testimonialContainer, { delay: 0.4, duration: 0.7, autoAlpha: 1, ease: 'Power1.easeIn' })
					.play()
			);
			setTimeout(() => {
				setCounter(--counter);
				setActiveTestimonial(testimonialData[counter]);
			}, 550);
		}
		setActiveTestimonial(testimonialData[counter]);
	};
	console.log(testimonialData.indexOf(activeTestimonial));
	return (
		<div className="testimonials">
			<div className="about__gradient"></div>

			<img className="testimonials__bg-img" src={Dock} alt="Dock Image"></img>
			<div className="testimonials__bg-overlay"></div>

			<div className="testimonials__content-container">
				<h2 className="testimonials__title">What Friends Have To Say</h2>
				<div className="testimonials__arrows-content-container">
					<p data-aos="fade-in " className="testimonials__arrow" onClick={previous}>
						{' '}
						{`<`}{' '}
					</p>
					<div ref={(div) => (testimonialContainer = div)} className="testimonials__name-content-container">
						<p data-aos="fade-in " className="testimonials__content">
							{activeTestimonial.content}
						</p>
						<p className="testimonials__name">-{activeTestimonial.name}-</p>
					</div>
					<p data-aos="fade-in " onClick={next} className="testimonials__arrow">
						{' '}
						{`>`}{' '}
					</p>
				</div>

				<div className="testimonials__dots-container">
					<h3 className={`testimonials__dot ${counter === 0 ? 'active-dot' : 'inactive-dot'}`}>.</h3>
					<h3 className={`testimonials__dot ${counter === 1 ? 'active-dot' : 'inactive-dot'}`}>.</h3>
					<h3 className={`testimonials__dot ${counter === 2 ? 'active-dot' : 'inactive-dot'}`}>.</h3>
				</div>
			</div>
		</div>
	);
}
