import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import { connect } from 'react-redux';

export const Nav = () => {
	return (
		<div className="nav">
			<div className="nav__container">
				<NavLink exact to="/" className="nav__title nav__link">
					Feel
				</NavLink>
				<NavLink exact to="/massage" className="nav__massage nav__link">
					Thai Massage
				</NavLink>
				<NavLink exact to="/yoga" className="nav__yoga nav__link">
					Yoga
				</NavLink>
				<NavLink exact to="/about" className="nav__about nav__link">
					About
				</NavLink>
				<NavLink exact to="/contact" className="nav__contact nav__link">
					Contact
				</NavLink>
				<NavLink exact to="/blog" className="nav__blog nav__link">
					Blog
				</NavLink>
			</div>
			<div className="nav__container nav__book-container">
				<NavLink exact to="/contact" className="nav__book-now nav__link">
					Book Now
				</NavLink>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Nav);
