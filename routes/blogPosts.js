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
