import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './blog.scss';
// import  AdminLogin  from '../../components/adminLogin/adminLogin';

export const Blog = ({ setAuth }) => {
	const [blogPosts, setBlogPosts] = useState(null);

	const getBlogPosts = async () => {
		try {
			const res = await axios.get('http://localhost:8083/blog/getAllPosts');
			await setBlogPosts(res.data);
			console.log(blogPosts);
		} catch (err) {
			console.log('error getting blog posts');
		}
	};
	useEffect(() => {
		getBlogPosts();
	}, []);

	const BlogPostsList = () => {
		return (
			<>
				{blogPosts.length === 0 ? (
					<h2>No Blog Posts Created Yet</h2>
				) : (
					blogPosts.map((item) => (
						<div>
							<div classname={`blog__title-date`}>
								<h2>{item.title}</h2>
								<h2>{item.date}</h2>
							</div>
							<p>{item.content}</p>
						</div>
					))
				)}
			</>
		);
	};

	console.log(blogPosts);
	return (
		<div className="view">
			<div className="blog content">
				<h1>Blog</h1>
				{blogPosts ? <BlogPostsList /> : null}
				<Link exact to="/adminLogin" className={`admin-login__button`}>
					Admin Login
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
