import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
		} else if (offset < 550) {
			setScrolled(false);
		}
	}, [offset]);
	return (
		<div className={`landing-nav ${scrolled ? 'invisible' : 'visible'}`}>
			<div className="landing-nav__container">
				<NavLink
					strict
					exact
					to="/massage"
					className="landing-nav__massage landing-nav__link"
					activeClassName="active"
				>
					Massage
				</NavLink>
				<NavLink
					strict
					exact
					to="/yoga"
					className="landing-nav__yoga landing-nav__link"
					activeClassName="active"
				>
					Yoga
				</NavLink>
				<NavLink
					strict
					exact
					to="/about"
					className="landing-nav__about landing-nav__link"
					activeClassName="active"
				>
					About
				</NavLink>
				<NavLink
					strict
					exact
					to="/contact"
					className="landing-nav__contact landing-nav__link"
					activeClassName="active"
				>
					Contact
				</NavLink>
				<NavLink
					strict
					exact
					to="/blog"
					className="landing-nav__blog landing-nav__link"
					activeClassName="active"
				>
					Blog
				</NavLink>
			</div>
		</div>
	);
};

export default LandingNav;
