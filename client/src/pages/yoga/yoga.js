import React, { Component } from 'react';
import { connect } from 'react-redux';
import './yoga.scss';

export const Yoga = () => {
	return (
		<div className="view">
			<div className="yoga content">
				<h1>Yoga</h1>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Yoga);
