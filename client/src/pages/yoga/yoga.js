import React, { Component } from 'react';
import { connect } from 'react-redux';
import './yoga.scss';
import '../../misc/defaultPage.scss';

export const Yoga = () => {
	return (
		<div className="view">
			<div className="yoga content default-page">
				<h1 className={`default-page__header`}>Yoga</h1>
				<p className={`default-page__description`}>
					Yoga is about picturing an elastic band, and then letting it wrap you up super tight, like a tube of
					toothpaste.{' '}
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Yoga);
