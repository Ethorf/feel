import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import Nav from './components/nav/nav.js';
import Home from './pages/home/home.js';
import Massage from './pages/massage/massage.js';
import Yoga from './pages/yoga/yoga.js';
import Contact from './pages/contact/contact.js';
import About from './pages/about/about.js';
import Blog from './pages/blog/blog.js';

const routes = [
	{ path: '/', name: 'Home', Component: Home },
	{ path: '/massage', name: 'Massage', Component: Massage },
	{ path: '/yoga', name: 'Yoga', Component: Yoga },
	{ path: '/about', name: 'About', Component: About },
	{ path: '/contact', name: 'Contact', Component: Contact },
	{ path: '/blog', name: 'Blog', Component: Blog }
];
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						{({ match }) => (
							<CSSTransition in={match != null} timeout={3000} classNames="page" unmountOnExit>
								<div className="page">
									<Component />
								</div>
							</CSSTransition>
						)}
					</Route>
				))}
			</div>
		</BrowserRouter>
	);
}

export default App;
