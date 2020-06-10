import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './home-parallax.scss';
import hero from '../../assets/images/lake-3.jpeg';
import LandingNav from '../../components/landingNav/landingNav';

export const HomeParallax = () => {
	const [offset, setOffset] = useState(0);
	const parallaxShift = () => {
		setOffset(window.pageYOffset);
	};
	let aboutContainer = useRef(null);
	useEffect(() => {
		window.addEventListener('scroll', parallaxShift);
	}, []);
	// const scroll = (ref) => {
	// 	ref.current.scrollIntoView({ behavior: 'smooth' });
	// };

	return (
		<div className="view">
			<section className="home">
				<LandingNav />
				<header className="home__hero-container">
					{/* <div className="home__hero-overlay-container" style={{ top: offset / 10 }}> */}
					<div className="home__hero-overlay-container">
						<button
							// onClick={() => {
							// 	scroll(aboutContainer);
							// }}
							className="test-button"
						>
							Focus About
						</button>
						<img src={hero} className="home__hero-img"></img>
						<div className="home__hero-overlay"></div>
					</div>
					<div
						className="home__hero-text-container"
						style={{ top: 100 + offset / 2, opacity: (1 / offset) * 40 }}
					>
						<h1 className="home__hero-title">Feel</h1>
						<h2 className="home__hero-subtitle">Thai Massage & Yoga</h2>
						<Link exact to="/contact" className="home__book-now">
							Book Now
						</Link>
					</div>
				</header>
			</section>
			<section ref={(section) => (aboutContainer = section)} className="home__about-container">
				<h2>About</h2>
				<p>Whoa so much about to about here</p>
			</section>
			<img src={hero} className="home__hero-img"></img>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeParallax);
