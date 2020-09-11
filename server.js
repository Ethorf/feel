const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const compression = require('compression');
const app = express();
const path = require('path');
const cors = require('cors');
const pool = require('./db');
pool.connect();
app.use(compression());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.json({ extended: false }));

app.use('/auth', require('./routes/jwtAuth'));
app.use('/blog', require('./routes/blogPosts'));
app.use('/events', require('./routes/events'));

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
