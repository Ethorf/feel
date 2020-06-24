import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './mobileNav.scss';

const MobileNav = () => {
	const [offset, setOffset] = useState(0);
	const [scrolled, setScrolled] = useState(false);
	const [navOpen, setNavOpen] = useState(false);

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
		<nav className={`mobile-nav`}>
			<h2 onClick={() => setNavOpen(!navOpen)} className="mobile-nav__hamburger">
				{navOpen ? 'X' : '|||'}
			</h2>
			<div className={`mobile-nav__container ${navOpen ? 'visible' : 'invisible'}`}>
				<Link
					activeClass="active"
					className="mobile-nav__about mobile-nav__link"
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
					className="mobile-nav__massage mobile-nav__link"
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
					className="mobile-nav__yoga mobile-nav__link"
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
					className="mobile-nav__contact mobile-nav__link"
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
					className="mobile-nav__blog mobile-nav__link"
					activeClass="active"
				>
					Blog
				</Link>
			</div>
		</nav>
	);
};

export default MobileNav;
