import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, animateScroll as scroll } from 'react-scroll';
import './home-parallax.scss';
import hero from '../../assets/images/lake-3.jpeg';
import LandingNav from '../../components/landingNav/landingNav';
import MobileNav from '../../components/mobileNav/mobileNav';
import About from '../../pages/about/about.js';
import Yoga from '../../pages/yoga/yoga.js';
import Massage from '../../pages/massage/massage.js';
import Contact from '../../pages/contact/contact.js';
import Blog from '../../pages/blog/blog.js';
import AOS from 'aos';

export const HomeParallax = () => {
	const [offset, setOffset] = useState(0);
	const parallaxShift = () => {
		setOffset(window.pageYOffset);
	};
	useEffect(() => {
		window.addEventListener('scroll', parallaxShift);
		AOS.init({
			duration: 1000
		});
	}, []);

	return (
		<div className="view">
			<section className="home">
				<MobileNav />
				<LandingNav />
				<header className="home__hero-container">
					<div className="home__hero-overlay-container">
						<img src={hero} className="home__hero-img"></img>
						<div className="home__hero-overlay"></div>
					</div>
					<div
						className="home__hero-text-container"
						style={
							window.innerWidth < 768
								? { top: 120 - offset * 0.9, opacity: (1 / offset) * 40 }
								: { top: 180 - offset * 1.2, opacity: (1 / offset) * 40 }
						}
						data-aos="fade-in"
						data-aos-duration="2000"
					>
						<h1 className="home__hero-title">Feel</h1>
						<h2 className="home__hero-subtitle">Thai Massage & Yoga</h2>
						<Link
							spy={true}
							smooth={true}
							offset={-70}
							duration={800}
							to="contact"
							className="home__book-now"
						>
							Book Now
						</Link>
					</div>
					<h2 className="home__down-arrow" style={{ opacity: (0.5 / offset) * 40 }}>
						>
					</h2>
				</header>
			</section>
			<About offset={offset} dark={true} id="about" data-aos="zoom-in" />
			<Massage dark={true} id="massage" />
			<Yoga dark={true} id="yoga" />
			<Contact dark={true} id="contact" />
			<Blog dark={true} id="blog" />
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeParallax);
