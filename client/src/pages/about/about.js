import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.scss';
import '../../misc/defaultPage.scss';

export const About = () => {
	return (
		<div className="about content default-page">
			<h1 className={`default-page__header`}>About</h1>
			<p className={`default-page__description`}>
				{' '}
				Who's that me you're talking about? POINT TO IT. MAKE IT A THING
			</p>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
