'use strict';

const pg = require('pg-promise')();

const db = pg({
	host:     'localhost',
	port:     process.env.THINGBOARD_DB_PORT,
	database: process.env.THINGBOARD_DB_NAME,
	user:     process.env.THINGBOARD_DB_USER,
	password: process.env.THINGBOARD_DB_PASS,
});

function getSavedSites () {
	// gary_oldman_everything.jpg
	db.all('SELECT url, title, description, saved FROM site')
		.then( savedSites => {
			return savedSites;
		})
		.catch( error => {
			// error;
		});
}

function getThumbnail (url) {
	db.one('SELECT thumbnail FROM site WHERE url=$1', url)
		.then( imageData => {
			return imageData;
		})
		.catch( error => {
			// error;
		});
}

function saveThumbnail (imageData, url) {
	db.none('INSERT INTO site (thumbnail) VALUES ($1) WHERE url=$2', imageData, url)
		.then(() => {
			// success;
		})
		.catch(error => {
			// error;
		});
}

module.exports.getThumbnail = getThumbnail;
module.exports.saveThumbnail = saveThumbnail;
