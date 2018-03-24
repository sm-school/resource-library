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
	const sql = `
SELECT s.url, s.title, s.description, s.saved, array_agg(t.name) AS tags
FROM site s
INNER JOIN site_tag st ON st.site_id = s.id
INNER JOIN tag t ON t.id = st.tag_id
GROUP BY s.url, s.title, s.description, s.saved`;

	return db.manyOrNone(sql)
		.then( sites => {
			return sites;
		})
		.catch( error => {
			console.log({ error: error.message });
		});
}

function getTags (url) {
	const sql = `
SELECT t.name
FROM site s, tag t, site_tag st
WHERE st.site_id = s.id
AND st.tag_id = t.id
AND s.url = $1`;

	return db.manyOrNone(sql, url)
		.then ( queryResult => {
			const tags = queryResult.reduce( (acc, tag) => {
				acc.push(tag.name);
				return acc;
			}, []);

			return tags;
		})
		.catch ( error => {
			console.log({ error: error.message });
		});
}

function getThumbnail (url) {
	return db.one('SELECT thumbnail FROM site WHERE url=$1', url)
		.then( imageData => {
			return imageData;
		})
		.catch( error => {
			console.log({ error: error.message });
		});
}

function saveThumbnail (imageData, url) {
	return db.none('INSERT INTO site (thumbnail) VALUES ($1) WHERE url=$2', imageData, url)
		.then(() => {
			// success;
		})
		.catch(error => {
			console.log({ error: error.message });
		});
}

module.exports.getSavedSites = getSavedSites;
module.exports.getTags = getTags;
module.exports.getThumbnail = getThumbnail;
module.exports.saveThumbnail = saveThumbnail;
