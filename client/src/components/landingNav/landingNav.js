import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import './landingNav.scss';

const LandingNav = () => {
	const [offset, setOffset] = useState(0);
	const [scrolled, setScrolled] = useState(false);

	const parallaxShift = () => {
		setOffset(window.pageYOffset);
	};
	useEffect(() => {
		window.addEventListener('scroll', parallaxShift);
		if (offset > 550) {
			setScrolled(true);
		} else if (offset < 15) {
			setScrolled(false);
		}
	}, [offset]);
	return (
		<nav className={`landing-nav ${scrolled ? 'invisible' : 'visible'}`}>
			<div className="landing-nav__container">
				<Link
					activeClass="active"
					className="landing-nav__about landing-nav__link"
					to="about"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					About
				</Link>
				<Link
					activeClass="active"
					className="landing-nav__massage landing-nav__link"
					to="massage"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					Massage
				</Link>
				<Link
					to="yoga"
					className="landing-nav__yoga landing-nav__link"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					Yoga
				</Link>

				<Link
					strict
					exact
					to="contact"
					className="landing-nav__contact landing-nav__link"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					Contact
				</Link>
				<Link
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
					to="blog"
					className="landing-nav__blog landing-nav__link"
					activeClass="active"
				>
					Blog
				</Link>
			</div>
		</nav>
	);
};

export default LandingNav;
