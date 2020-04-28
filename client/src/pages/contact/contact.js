import React, { Component } from 'react';
import { connect } from 'react-redux';
import './contact.scss';

export const Contact = () => {
	return (
		<div className="view">
			<div className="contact content">
				<h1>Contact</h1>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
