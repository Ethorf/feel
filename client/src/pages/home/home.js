import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './home.scss';
import hero from '../../assets/images/lake-3.jpeg';

export const Home = () => {
	return (
		<div className="view">
			<div className="home">
				<div className="home__hero-container">
					<img src={hero} className="home__hero-img"></img>
					<div className="home__hero-overlay"></div>
					<div className="home__hero-text-container">
						<h1 className="home__hero-title">Feel</h1>
						<h2 className="home__hero-subtitle">Thai Massage & Yoga</h2>
						{/* <h3>In kshlartstardnd</h3> */}
						<Link exact to="/contact" className="home__book-now">
							Book Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
