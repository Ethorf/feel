import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './nav.scss';

const Nav = () => {
	const [offset, setOffset] = useState(0);
	const [scrolled, setScrolled] = useState(false);
	const parallaxShift = () => {
		setOffset(window.pageYOffset);
	};
	useEffect(() => {
		window.addEventListener('scroll', parallaxShift);
		if (offset > 450) {
			setScrolled(true);
		} else if (offset < 450) {
			setScrolled(false);
		}
	}, [offset]);
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return (
		<nav className={` ${window.innerWidth >= 768 ? (scrolled ? 'visible' : 'invisible') : null} nav`}>
			<div className="nav__container">
				<div onClick={scrollToTop} className="nav__title">
					Feel
				</div>
				<Link
					activeClass="active"
					className="nav__about nav__link"
					to="about"
					spy={true}
					smooth={true}
					offset={-120}
					duration={800}
				>
					About
				</Link>
				<Link
					activeClass="active"
					className="nav__massage nav__link"
					to="massage"
					spy={true}
					smooth={true}
					offset={-10}
					duration={800}
				>
					Massage
				</Link>
				<Link
					to="yoga"
					className="nav__yoga nav__link"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-10}
					duration={800}
				>
					Yoga
				</Link>
				<Link
					to="contact"
					className="nav__contact nav__link"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-10}
					duration={800}
				>
					Contact
				</Link>
				<Link
					to="schedule"
					className="nav__schedule nav__link"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-10}
					duration={800}
				>
					Schedule
				</Link>
				<Link
					spy={true}
					smooth={true}
					offset={100}
					duration={800}
					to="blog"
					className="nav__blog nav__link"
					activeClass="active"
				>
					Blog
				</Link>
			</div>
			<div className="nav__container nav__book-container">
				<Link
					activeClass="button-active"
					spy={true}
					smooth={true}
					offset={-10}
					duration={800}
					to="contact"
					className="nav__book-now"
				>
					Get In Touch
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
