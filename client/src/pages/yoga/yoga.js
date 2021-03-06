import React, { Component } from 'react';
import { connect } from 'react-redux';
import './yoga.scss';
import '../../misc/defaultPage.scss';
import yogaImg1 from '../../assets/images/yoga-1.jpeg';
import flower from '../../assets/images/flower-3.jpeg';

export const Yoga = () => {
	return (
		<div className="view">
			<div className="yoga content default-page">
				<div className={`default-page__left-container`}>
					<h1 className={`default-page__header`} data-aos="fade-in">
						Yoga
					</h1>
					<p className={`default-page__description`} data-aos="fade-in">
						I offer yoga classes at Fridhem in Stjärnsund and am available for private in-home classes for
						single or group sessions. This is an opportunity to have the full attention of one teacher and
						entire class, to get some basic structure and technique or receive help with specific
						postures/challenges. And I especially love to teach a private basic pre-natal yoga class.
					</p>

					<img className="default-page__left-img" alt="flower" src={flower}></img>
				</div>
				<div className={`default-page__right-container`}>
					<img className={`default-page__img`} src={yogaImg1} alt="yoga image" data-aos="slide-up"></img>
					<p className={`default-page__description`}>
						I also organize retreats which can be found on my Facebook page :{' '}
						<a className="yoga__facebook-link" href="https://www.facebook.com/Feelbodywork/">
							Feel Body Work
						</a>{' '}
					</p>
					<p className={`default-page__description`}>Please Contact me for Pricing!</p>
				</div>
			</div>
			<div className="default-page__bottom-pseudo-chunk"></div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Yoga);
