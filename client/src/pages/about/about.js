import React, { useState } from 'react';
import { connect } from 'react-redux';
import './about.scss';
import '../../misc/defaultPage.scss';
import hallwayImg from '../../assets/images/hallway-1.jpeg';

export const About = () => {
	const [bioOpen, setBioOpen] = useState(false);
	return (
		<div className={`view`}>
			<div className="content about">
				<h1 className={`about__header`}>About Me</h1>
				<p className={`about__description`}>
					{' '}
					I am in a constant process of working with my body and struggle with many challenges (especially an
					eating disorder) which help me to be understanding with others. I’m raising two young girls and
					through many failures learning how to garden. I completed my yoga teacher training with Frog Lotus
					Yoga International in Spain, and studied Thai Massage with Thai Massage Toronto. I’ve also sat
					several Goenka Vipassana courses and have maintained,lost, and regained my meditation practice many
					times over the last 10 years. There is much to learn and even more to practice. Thank you.
				</p>
				{/*<div className={`about__bio-container`}>
							<h3 className="about__bio-header">
								Bio{' '}
								<span
									onClick={() => {
										setBioOpen(!bioOpen);
									}}
								>
									>
								</span>
							</h3>
							<p className={`about__bio ${bioOpen ? 'visible' : 'invisible'}`}>
								There are so many ways to heal. Healing through touch is one of my favourites and the
								one I’ve dedicated myself to. The incredible feeling of human hands. Their warmth and
								the indescribable feelings they can communicate. Giving a massage for me is like
								meditating or exercising or going for a cold dip- I never regret it. It gives me energy
								and feels meaningful. I believe with my whole heart humans need touch. And if that’s not
								true then I believe at least I do and I will spend my life reminding those who have
								forgotten. I read somewhere that babies that aren’t touched die. Yoga(being one with
								god) and Asana Yoga(the posture practice) are also part of this commitment to our
								humanity. To spend as much of the time we have in our bodies, in these beautiful
								incredible and very often painfully disconnected bodies because that is who we are right
								now. We are a body and we are a world and we are matter. It’s as real as anything. And
								it’s grounding. And in the midst of the way life is now I’m putting all my energy and
								focus on the earth. On keeping my feet on the ground and enjoying our earth while it
								lasts. There are so many distractions. There is so much technology. So many words. So
								many thoughts. But we have this body and I believe it is our personal source of
								satisfaction no matter what it’s condition. It’s alive and it’s sensitive. There have
								been moments in life when I don’t want to be here, as I’m sure many of you can relate.
								And one teachers response to me was; “see how to find it enjoyable to sit and breathe
								and only that”. Can it be enough to simply breathe? And what I’ve found more often than
								not was that I couldn’t breathe. I had brought myself down a path to the point of not
								being able to breathe or it being so painful to breath it created panic.
							</p>
								</div> */}
			</div>
			{/*	<img className={`default-page__img`} src={hallwayImg} alt="hallway image"></img> */}
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
