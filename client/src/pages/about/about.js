import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.scss';

export const About = () => {
	return (
		<div className="about content">
			<h1>About</h1>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
