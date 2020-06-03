import React, { Component } from 'react';
import { connect } from 'react-redux';
import './contact.scss';
import '../../misc/defaultPage.scss';

export const Contact = () => {
	return (
		<div className="view def">
			<div className="contact content default-page">
				<h1 className={`default-page__header`}>Contact</h1>
				<p className={`default-page__description`}>Contact me everywhere dude. all over the place</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
