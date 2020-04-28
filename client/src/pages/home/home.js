import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.scss';

export const Home = () => {
	return (
		<div className="view">
			<div className="home content">
				<h1>Feel</h1>
				<h2>Thai Massage & Yoga</h2>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
