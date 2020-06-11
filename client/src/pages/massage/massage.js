import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../misc/defaultPage.scss';

import './massage.scss';
export const Massage = () => {
	return (
		<div className="view">
			<div className="massage content default-page">
				{/*} <div className="default-page__overlay"></div> */}
				<div className={`default-page__header-description-container`}>
					<h1 className="massage__title default-page__header">Thai Massage</h1>
					<p className="default-page__description">
						We offer so much massagey-wagey that one doesnt work as a playground rhyme not even a little
						bit, but oh yup, we do it! All the stuff. why not?{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Massage);
