import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Nav from './components/nav/nav.js';
import Home from './pages/home/home.js';
import Massage from './pages/massage/massage.js';
import Yoga from './pages/yoga/yoga.js';
import Contact from './pages/contact/contact.js';
import About from './pages/about/about.js';
import Blog from './pages/blog/blog.js';
import { TimelineMax as Timeline, Power1 } from 'gsap';

window.loadPromise = new Promise((resolve) => {
	//hmm maybe this no worko
	window.addEventListener(`DOMContentLoaded`, resolve);
});
const getDefaultTimeline = (node, delay) => {
	const timeline = new Timeline({ paused: true });
	const content = node.querySelector('.content');
	const contentInner = node.querySelector('.content--inner');

	timeline
		.from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
		.from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
		.from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

	return timeline;
};

const getHomeTimeline = (node, delay) => {
	const timeline = new Timeline({ paused: true });
	const texts = node.querySelectorAll('h1 > div');

	timeline
		.from(node, 0, { display: 'none', autoAlpha: 0, delay })
		.staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

	return timeline;
};

export const play = (pathname, node, appears) => {
	const delay = appears ? 0 : 0.5;
	let timeline;

	if (pathname === '/') timeline = getHomeTimeline(node, delay);
	else timeline = getDefaultTimeline(node, delay);

	window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = (node) => {
	const timeline = new Timeline({ paused: true });

	timeline.to(node, 0.15, { opacity: 0, autoAlpha: 0, ease: Power1.easeOut });
	timeline.play();
};

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Route
					render={({ location }) => {
						const { pathname, key } = location;

						return (
							<TransitionGroup component={null}>
								<Transition
									key={key}
									appear={true}
									onEnter={(node, appears) => play(pathname, node, appears)}
									onExit={(node, appears) => exit(node, appears)}
									timeout={{ enter: 950, exit: 1050 }}
								>
									<Switch>
										<Route exact path="/" component={Home} />
										<Route path="/massage" component={Massage} />
										<Route path="/yoga" component={Yoga} />
										<Route path="/about" component={About} />
										<Route path="/contact" component={Contact} />
										<Route path="/blog" component={Blog} />
									</Switch>
								</Transition>
							</TransitionGroup>
						);
					}}
				/>
			</div>
		</BrowserRouter>
	);
}

export default App;
