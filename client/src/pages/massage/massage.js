import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../misc/defaultPage.scss';
import Hands from '../../assets/images/hands.jpeg';
import Hallway from '../../assets/images/hallway-1.jpeg';

import './massage.scss';
export const Massage = () => {
	return (
		<div className="view">
			<div className="massage content default-page">
				<div className={`default-page__left-container`}>
					<h1 className="massage__title default-page__header" data-aos="slide-right">
						Thai Massage
					</h1>
					<p className="default-page__description" data-aos="fade-in">
						This deeply relaxing full body massage brings the body into a meditative state through rythmic
						pulsing motions. This massage is given on a comfortable floor mat with support of pillows and
						props to nurture all body types. Deep slow compresses and gentle stretching. Studies have shown
						that Thai Massage can actually increase energy and mental stimulation, decrease stress and
						improve the bodys range of motion. Wear loose comfortable clothing.
					</p>
					<img className="massage__left-img" src={Hallway} alt="Hallway Picture"></img>
				</div>
				<div className={`default-page__right-container`}>
					<img
						className="default-page__img"
						src={Hands}
						alt="Hands Picture"
						data-aos="slide-left"
						data-aos-duration="8000"
					></img>
					<div className="default-page__right-sub-container">
						<h2 className="massage__title default-page__sub-header">Pricing</h2>
						<p className="default-page__price">
							<span className="default-page__time">75 mins -> </span>560kr{' '}
						</p>
						<p className="default-page__price">
							{' '}
							<span className="default-page__time"> 90 mins -></span> 600kr{' '}
						</p>
						<p className="default-page__price">
							<span className="default-page__time"> 120mins -> </span>800kr{' '}
						</p>
						<p className="default-page__sub-description">Please contact me for special requests-</p>
						<p className="default-page__sub-description">
							For example oil massage on a table or healing massage with light touch
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Massage);
