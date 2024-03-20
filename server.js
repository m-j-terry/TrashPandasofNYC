require('dotenv').config();
const cors = require('cors');
const express = require('express');
const favicon = require('serve-favicon')
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 7999;
const path = require('path');
const { Client } = require('pg')

const client = new Client({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: PORT,
	ssl: {
		rejectUnauthorized: false,
	}
})

client.connect()
	.then(() => console.log('Connected to the database'))
	.catch(err => console.error('Error connecting to the database', err))
module.exports = client 

/* Middleware */
app.use(express.json());
express.urlencoded({ extended: true })

if (process.env.NODE_ENV !== 'development'){
	app.use(express.static('public'))
}

app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'));



/* Controller*/
const corporationsRouter = require('./routes/api/corporations');
app.use('/api/corporations', corporationsRouter)

// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})



app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});
