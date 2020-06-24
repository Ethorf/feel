const router = require('express').Router();
const authorize = require('../middleware/authorize');
const pool = require('../db');
const moment = require('moment');

// Add a new blog Post
// @ Private

router.post('/addNewPost', authorize, async (req, res) => {
	const { title, content } = req.body;
	const date = moment().format('MMMM Do YYYY, h:mm:ss a');

	try {
		const post = await pool.query('INSERT INTO blog_posts (title,content,date) VALUES ($1, $2, $3)', [
			title,
			content,
			date
		]);
		res.json(post);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// Get All Posts
// @ Public
router.delete('/deletePost/:id', authorize, async (req, res) => {
	const id = req.params.id;

	try {
		const post = await pool.query('DELETE FROM blog_posts WHERE post_id = $1', [id]);
		res.json(post);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.post('/updatePost/:id', authorize, async (req, res) => {
	const id = req.params.id;
	const { title, content } = req.body;

	try {
		const post = await pool.query('UPDATE blog_posts SET title = $2, content = $3 WHERE post_id = $1', [
			id,
			title,
			content
		]);
		res.json(post);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.get('/getAllPosts', async (req, res) => {
	try {
		const posts = await pool.query('SELECT * FROM blog_posts');
		res.json(posts.rows);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
