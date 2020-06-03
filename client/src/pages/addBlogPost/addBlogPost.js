import React, { useState } from 'react';
import './addBlogPost.scss';
import axios from 'axios';

export default function AddBlogPost({ setAuth }) {
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
		// e.preventDefault();

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
		} catch (err) {
			console.log('Error Adding Post');
		}
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

			<button className={`add-blog-post__logout-button`} onClick={logout}>
				Logout
			</button>
		</div>
	);
}
