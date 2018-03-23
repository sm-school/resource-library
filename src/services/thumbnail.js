'use strict';

const btoa = require('btoa');
const concat = require('concat-stream');
const fetch = require('node-fetch');

const db = require('./db');

const URLBOX_API_KEY = process.env.URLBOX_API_KEY;

function dataUrl (imageData) {
	return `data:image/jpeg;base64,${btoa(imageData)}`;
}

function getImageData (image, url) {
	function gotImage (buffer) {
		db.saveThumbnail(buffer, url);
	}

	image.on('error', handleError)
	image.pipe(concat(gotImage));
}

function getThumbnailFromApi (url) {
	fetch(`https://api.urlbox.io/v1/${URLBOX_API_KEY}/jpeg?url=${url}&thumb_width=240`)
	.then( response => {
		if (!response.ok) {throw new Error(response.statusText);}

		let contentType = response.headers.get('content-type');
		if( contentType && contentType.includes(`image/jpeg`)) {
			return response.body;
		} else {
			throw new Error(`Response from API wasn't of type image/jpeg`);
		}
	})
	.then( image => {
		getImageData(image, url);
	})
	.catch ( err => {
		handleError(err);
	});
}

function getThumbnailFromDb (url) {
	return db.getThumbnail(url);
}

function handleError(err) {
	console.error(err);
	process.exit(1);
}

module.exports.dataUrl = dataUrl;
module.exports.getThumbnailFromApi = getThumbnailFromApi;
module.exports.getThumbnailFromDb = getThumbnailFromDb;