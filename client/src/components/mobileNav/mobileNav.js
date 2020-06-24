import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './mobileNav.scss';

const MobileNav = () => {
	const [offset, setOffset] = useState(0);
	const [scrolled, setScrolled] = useState(false);
	const [navOpen, setNavOpen] = useState(false);

	return (
		<>
			<nav className={`mobile-nav`}>
				<h2 onClick={() => setNavOpen(!navOpen)} className="mobile-nav__hamburger">
					{navOpen ? 'X' : '|||'}
				</h2>
				<div className={`mobile-nav__container ${navOpen ? 'visible' : 'invisible'}`}>
					<Link
						className="mobile-nav__about mobile-nav__link"
						to="about"
						spy={true}
						smooth={true}
						offset={-70}
						duration={800}
						onClick={() => setNavOpen(!navOpen)}
					>
						About
					</Link>
					<Link
						className="mobile-nav__massage mobile-nav__link"
						to="massage"
						spy={true}
						smooth={true}
						offset={-70}
						duration={800}
						onClick={() => setNavOpen(!navOpen)}
					>
						Massage
					</Link>
					<Link
						to="yoga"
						className="mobile-nav__yoga mobile-nav__link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={800}
						onClick={() => setNavOpen(!navOpen)}
					>
						Yoga
					</Link>

					<Link
						strict
						exact
						to="contact"
						className="mobile-nav__contact mobile-nav__link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={800}
						onClick={() => setNavOpen(!navOpen)}
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
						onClick={() => setNavOpen(!navOpen)}
					>
						Blog
					</Link>
				</div>
			</nav>
		</>
	);
};

export default MobileNav;
