import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddBlogPost from '../../pages/addBlogPost/addBlogPost.js';
import EditEvents from '../../components/EditEvents/EditEvents.js';
import './adminLogin.scss';
import '../../misc/defaultPage.scss';
import axios from 'axios';

export default function AdminLogin({ setAuth, isAuthenticated }) {
	const [blogPosts, setBlogPosts] = useState(null);
	const getBlogPosts = async () => {
		try {
			const res = await axios.get('/blog/getAllPosts');
			await setBlogPosts(res.data);
		} catch (err) {
			console.log('error getting blog posts');
		}
	};
	useEffect(() => {
		getBlogPosts();
	}, []);
	const [loginFormVisible, setLoginFormVisible] = useState(false);
	const toggleLoginFormVisible = () => {
		setLoginFormVisible(!loginFormVisible);
	};
	const [inputs, setInputs] = useState({
		email: '',
		password: ''
	});
	const { email, password } = inputs;
	const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password };
			const response = await fetch('/auth/login', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(body)
			});

			const parseRes = await response.json();

			if (parseRes.jwtToken) {
				localStorage.setItem('token', parseRes.jwtToken);
				setAuth(true);
				toast.success('Logged in Successfully');
			} else {
				setAuth(false);
				toast.error(parseRes);
			}
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<div className="view">
			<div className={`admin-login ${isAuthenticated ? 'invisible' : 'visible'}`}>
				<h2 onClick={toggleLoginFormVisible} className={`admin-login__title`}>
					Admin Login
				</h2>
				<form onSubmit={onSubmitForm} className={`admin-login__form `}>
					<div className={`admin-login__inputs-container`}>
						<div className={`admin-login__input-container`}>
							<h4 className={`admin-login__input-label`}>Email</h4>
							<input
								type="text"
								name="email"
								value={email}
								onChange={(e) => onChange(e)}
								className={`admin-login__input`}
							></input>
						</div>
						<div className={`admin-login__input-container`}>
							<h4 className={`admin-login__input-label`}>Password</h4>
							<input
								type="password"
								name="password"
								value={password}
								onChange={(e) => onChange(e)}
								className={`admin-login__input`}
							></input>
						</div>
					</div>
					<button className={`admin-login__button`}>Login</button>
					<button className={`admin-login__home-link`}>
						<Link to="/">Home</Link>
					</button>
				</form>
			</div>
			{isAuthenticated ? (
				<>
					<EditEvents />
					<AddBlogPost getBlogPosts={getBlogPosts} blogPosts={blogPosts} setAuth={setAuth} />
				</>
			) : null}
		</div>
	);
}
