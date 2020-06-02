const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.json({ extended: false }));

// app.get('/users', db.getUsers);
// app.post('/users', db.createUser);

app.use('/auth', require('./routes/jwtAuth'));

app.use('/blog', require('./routes/blogPosts'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
const PORT = process.env.PORT || 8083;

app.listen(PORT, () => {
	console.log(`It's an ${PORT} type of guy for feel`);
});
