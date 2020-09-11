import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './blog.scss';
import '../../misc/defaultPage.scss';
import loginIcon from '../../assets/icons/login-icon.png';

export const Blog = () => {
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

	const BlogPostsList = () => {
		return (
			<>
				{blogPosts.length === 0 ? (
					<h2>No Blog Posts Created Yet</h2>
				) : (
					blogPosts.map((item) => (
						<div className={`blog-post`}>
							<div className={`blog-post__title-date`}>
								<h2 className={`blog-post__title`}>{item.title}</h2>
								<h3 className={`blog-post__date`}>{item.date}</h3>
							</div>
							<p className={`blog-post__content`}>{item.content}</p>
						</div>
					))
				)}
			</>
		);
	};

	return (
		<div className="view">
			<div className="blog content">
				<h1 className="default-page__header">Blog</h1>
				{blogPosts ? <BlogPostsList /> : <h2>Loading Posts...</h2>}
				<Link exact to="/adminLogin" className={`blog__admin-login-button`}>
					Admin Login <img src={loginIcon} alt="login icon" className={`blog__login-icon`} />
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
