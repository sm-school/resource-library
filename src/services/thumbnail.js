'use strict';

const btoa = require('btoa');
const db = require('./db');
const concat = require('concat-stream');
const { Console } = require('console');
const fetch = require('node-fetch');
const fs = require('fs');

const URLBOX_API_KEY = process.env.URLBOX_API_KEY;
const THUMBNAIL_FORMAT = 'jpeg';
const TEMP_DIR = 'tmp';

function thumbnail_api (url) {
	return `https://api.urlbox.io/v1/${URLBOX_API_KEY}/${THUMBNAIL_FORMAT}?url=${url}&thumb_width=240`;
}

function get_thumbnail (url) {
	fetch(thumbnail_api(url))
	.then( response => {
		if (!response.ok) {throw new Error(response.statusText);}

		let contentType = response.headers.get('content-type');
		if( contentType && contentType.includes(`image/${THUMBNAIL_FORMAT}`)) {
			return response.body;
		} else {
			throw new Error(`Response from API wasn't of type image/${THUMBNAIL_FORMAT}`);
		}
	})
	.then( image => {
		getImageData(image);
	})
	.catch ( err => {
		handleError(err);
	});
}

get_thumbnail('nytimes.com');

function getImageData (image) {
	image.on('error', handleError)
	image.pipe(concat(gotImage));
}

function gotImage (buffer) {
	// to be replaced with db.saveThumbnail()
	writeLog(buffer);
}

function writeLog (imageData) {
	console.log("Image streamed.");
	// to move to thumbnail component
	let base64 = btoa(imageData);
	const logger = new Console(fs.createWriteStream('./test-stream.log'));
	logger.log(`data:image/${THUMBNAIL_FORMAT};base64,${base64}`);
}

function handleError(err) {
	console.error(err);
	process.exit(1);
}