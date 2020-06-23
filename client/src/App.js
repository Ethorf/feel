import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import Nav from './components/nav/nav.js';
import HomeParallax from './pages/home-parallax/home-parallax.js';

import Massage from './pages/massage/massage.js';
import Yoga from './pages/yoga/yoga.js';
import Contact from './pages/contact/contact.js';
import About from './pages/about/about.js';
import Blog from './pages/blog/blog.js';
import AdminLogin from './components/adminLogin/adminLogin.js';

const routes = [
	{ path: '/', name: 'Home', Component: HomeParallax },
	{ path: '/massage', name: 'Massage', Component: Massage },
	{ path: '/yoga', name: 'Yoga', Component: Yoga },
	{ path: '/about', name: 'About', Component: About },
	{ path: '/contact', name: 'Contact', Component: Contact },
	{ path: '/blog', name: 'Blog', Component: Blog },
	{ path: '/adminLogin', name: 'AdminLogin', Component: AdminLogin }
];
function App() {
	const checkAuthenticated = async () => {
		try {
			const res = await fetch('http://localhost:8083/authentication/verify', {
				method: 'POST',
				headers: { jwt_token: localStorage.token }
			});

			const parseRes = await res.json();
			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		checkAuthenticated();
	}, []);

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						{({ match }) => (
							<CSSTransition in={match != null} timeout={3000} classNames="page" unmountOnExit>
								<div className="page">
									<Component setAuth={setAuth} isAuthenticated={isAuthenticated} />
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
