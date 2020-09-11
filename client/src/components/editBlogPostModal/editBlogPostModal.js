import React, { useState } from 'react';
import axios from 'axios';
import '../../pages/addBlogPost/addBlogPost.scss';

export default function EditBlogPostModal(props) {
	let post = props.post;
	let id = post.post_id;
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	const [inputs, setInputs] = useState({
		title: post.title,
		content: post.content
	});
	const { title, content } = inputs;
	const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

	const updatePost = async (e) => {
		e.preventDefault();
		try {
			const body = { title, content };
			const response = await fetch(`/blog/updatePost/${id}`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					jwt_token: localStorage.getItem('token')
				},
				body: JSON.stringify(body)
			});
		} catch (err) {
			console.log('Error Updating Post');
		}
	};
	const deletePost = async (id) => {
		const config = {
			headers: {
				jwt_token: localStorage.getItem('token')
			}
		};
		try {
			const res = await axios.delete(`http://localhost:8083/blog/deletePost/${id}`, config);
			console.log(res);
			props.getBlogPosts();
		} catch (err) {
			console.log('Error Deleting');
		}
	};
	const deleteModalButton = () => {
		deletePost(id);
		setDeleteModalOpen(!deleteModalOpen);
	};
	return (
		<div>
			<button
				className="add-blog-post__edit-form-open-button"
				onClick={() => {
					setEditModalOpen(!editModalOpen);
				}}
			>
				{' '}
				Edit
			</button>
			<div className={`add-blog-post__edit-modal ${editModalOpen ? 'visible' : 'invisible'}`}>
				<h4
					className="add-blog-post__edit-form-close-button"
					onClick={() => {
						setEditModalOpen(!editModalOpen);
					}}
				>
					X
				</h4>
				<form
					onSubmit={() => {
						updatePost(post.post_id);
					}}
					className="add-blog-post__edit-form"
				>
					<h1>Edit Post</h1>
					<h3>Title</h3>
					<input
						value={title}
						name="title"
						className="add-blog-post__edit-form-title"
						onChange={(e) => onChange(e)}
					></input>
					<h3>Content</h3>
					<textarea
						name="content"
						className="add-blog-post__edit-form-content"
						value={content}
						onChange={(e) => onChange(e)}
					></textarea>
					<div className="add-blog-post__edit-form-buttons-container">
						<button className="add-blog-post__edit-form-button" type="submit">
							Save Post
						</button>
						<p
							className="add-blog-post__edit-form-button"
							onClick={() => setDeleteModalOpen(!deleteModalOpen)}
						>
							Delete Post
						</p>
						<div
							className={`add-blog-post__edit-form-delete-modal ${
								deleteModalOpen ? 'visible' : 'invisible'
							}`}
						>
							<h4>Are You Sure You Want To Delete This post?</h4>
							<div className="add-blog-post__edit-form-buttons-container">
								<p className="add-blog-post__edit-form-button" onClick={deleteModalButton}>
									Yes
								</p>
								<p
									className="add-blog-post__edit-form-button"
									onClick={() => setDeleteModalOpen(!deleteModalOpen)}
								>
									No
								</p>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
