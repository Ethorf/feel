import React, { Component } from 'react';
import { connect } from 'react-redux';
import './yoga.scss';
import '../../misc/defaultPage.scss';
import yogaImg1 from '../../assets/images/yoga-1.jpeg';

export const Yoga = () => {
	return (
		<div className="view">
			<div className="yoga content default-page">
				<div className={`default-page__left-container`}>
					<h1 className={`default-page__header`}>Yoga</h1>
					<p className={`default-page__description`}>
						I offer yoga classes at Fridhem in Stjärnsund and am available for private in-home classes for
						single or group sessions. This is an opportunity to have the full attention of one teacher and
						entire class, to get some basic structure and technique or receive help with specific
						postures/challenges. And I especially love to teach a private basic pre-natal yoga class.
					</p>
					<p className={`default-page__description`}>
						I also organize retreats which can be found here -on my Facebook page :{' '}
						<a href="https://www.facebook.com/Feelbodywork/">Feel Body Work</a>{' '}
					</p>
				</div>
				<div className={`default-page__right-container`}>
					<img className={`default-page__img`} src={yogaImg1} alt="yoga image"></img>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Yoga);
