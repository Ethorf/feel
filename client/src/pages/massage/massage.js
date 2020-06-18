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
						This deeply relaxing full body massage brings the body into a meditative state through rythmic
						pulsing motions. This massage is given on a comfortable floor mat with support of pillows and
						props to nurture all body types. Deep slow compresses and gentle stretching. Studies have shown
						that Thai Massage can actually increase energy and mental stimulation, decrease stress and
						improve the bodys range of motion. Wear loose comfortable clothing.
					</p>
					<h2 className="massage__title default-page__header">Pricing</h2>
					<p>560kr 75 mins</p>
					<p>600kr 90 mins</p>
					<p>800kr 120mins</p>
					<p>
						Please contact me for special requests- for example oil massage on a table or healing massage
						with light touch
					</p>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Massage);
