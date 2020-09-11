const router = require('express').Router();
const authorize = require('../middleware/authorize');
const pool = require('../db');
const moment = require('moment');

// Add a new calendar event
// @ Private

router.post('/newEvent', authorize, async (req, res) => {
	const { title, description, eventstart, eventend } = req.body;

	try {
		const event = await pool.query(
			'INSERT INTO events (title,description,eventstart,eventend,is_cancelled) VALUES ($1, $2, $3, $4, $5)',
			[title, description, eventstart, eventend, false]
		);
		res.json(event);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// Update Single Event
// @ Private

router.post('/updateEvent/:id', authorize, async (req, res) => {
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

// Delete Single Event
// @ Private
router.delete('/deleteEvent/:id', authorize, async (req, res) => {
	const id = req.params.id;

	try {
		const event = await pool.query('DELETE FROM events WHERE id = $1', [id]);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});
// Cancel Single Event
// @ Private
router.post('/cancelEvent/:id', authorize, async (req, res) => {
	const id = req.params.id;

	try {
		const event = await pool.query('UPDATE events SET is_cancelled = true WHERE id = $1', [id]);
		res.json(event);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// Uncancel Single Event
// @ Private
router.post('/uncancelEvent/:id', authorize, async (req, res) => {
	const id = req.params.id;

	try {
		const event = await pool.query('UPDATE events SET is_cancelled = false WHERE id = $1', [id]);
		res.json(event);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.get('/getAllEvents', async (req, res) => {
	try {
		const posts = await pool.query('SELECT * FROM events');
		res.json(posts.rows);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
