import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './addBlogPost.scss';
import '../blog/blog.scss';
import EditBlogPostModal from '../../components/editBlogPostModal/editBlogPostModal.js';

export default function AddBlogPost({ setAuth, blogPosts, getBlogPosts }) {
	const [inputs, setInputs] = useState({
		title: '',
		content: ''
	});
	const { title, content } = inputs;
	const logout = () => {
		localStorage.removeItem('token');
		setAuth(false);
	};
	const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

	const addPost = async (e) => {
		e.preventDefault();
		try {
			const body = { title, content };
			const response = await fetch('http://localhost:8083/blog/addNewPost', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					jwt_token: localStorage.getItem('token')
				},
				body: JSON.stringify(body)
			});
			getBlogPosts();
		} catch (err) {
			console.log('Error Adding Post');
		}
	};

	const AdminBlogPostsList = () => {
		return (
			<>
				{blogPosts.length === 0 ? (
					<h2>No Blog Posts Created Yet</h2>
				) : (
					blogPosts.map((post) => (
						<div className={`blog-post`}>
							<div className={`blog-post__title-date`}>
								<h2 className={`blog-post__title`}>{post.title}</h2>
								<h3 className={`blog-post__date`}>{post.date}</h3>
							</div>
							<p className={`blog-post__content`}>{post.content}</p>
							<EditBlogPostModal post={post} getBlogPosts={getBlogPosts} />
						</div>
					))
				)}
			</>
		);
	};

	return (
		<div className={`add-blog-post`}>
			<h1>Add A New Blog Post</h1>
			<form className={`add-blog-post__form`} onSubmit={addPost}>
				<input
					placeholder="title"
					className={`add-blog-post__title-input`}
					type="title"
					name="title"
					value={title}
					onChange={(e) => onChange(e)}
				></input>
				<textarea
					className={`add-blog-post__content-input`}
					placeholder="post content"
					type="content"
					name="content"
					value={content}
					onChange={(e) => onChange(e)}
				></textarea>

				<button className={`add-blog-post__add-post-button`}>Add Post</button>
			</form>
			<h2>Update // Delete Posts</h2>
			<AdminBlogPostsList />
			<button className={`add-blog-post__logout-button`} onClick={logout}>
				Logout
			</button>
			<Link to="/">Home</Link>
		</div>
	);
}
