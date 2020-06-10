import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
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
		<div className={`nav ${scrolled ? 'visible' : 'invisible'}`}>
			<div className="nav__container">
				<Link strict exact to="/" className="nav__title">
					Feel
				</Link>
				<NavLink strict exact to="/massage" className="nav__massage nav__link" activeClassName="active">
					Massage
				</NavLink>
				<NavLink strict exact to="/yoga" className="nav__yoga nav__link" activeClassName="active">
					Yoga
				</NavLink>
				<NavLink strict exact to="/about" className="nav__about nav__link" activeClassName="active">
					About
				</NavLink>
				<NavLink strict exact to="/contact" className="nav__contact nav__link" activeClassName="active">
					Contact
				</NavLink>
				<NavLink strict exact to="/blog" className="nav__blog nav__link" activeClassName="active">
					Blog
				</NavLink>
			</div>
			<div className="nav__container nav__book-container">
				<Link exact to="/contact" className="nav__book-now">
					Book Now
				</Link>
			</div>
		</div>
	);
};

export default Nav;
