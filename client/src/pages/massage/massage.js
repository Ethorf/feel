import React, { Component } from 'react';
import { connect } from 'react-redux';
import './massage.scss';
export const Massage = () => {
	return (
		<div className="view">
			<div className="massage content">
				<h1 className="massage__title">Thai Massage</h1>
				<p className="content--inner">
					We offer so much massagey-wagey that one doesnt work as a playground rhyme not even a little bit,
					but oh yup, we do it! All the stuff. why not?{' '}
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Massage);
