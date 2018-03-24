'use strict';

const express = require('express');
const fetch = require('node-fetch');
const api  = express.Router();

const db = require('./db.js');

api.get('/sites/all', (req, res) => {
	db.getSavedSites()
		.then ( sites => {
			res.status(200).json(sites);
		})
		.catch( error => {
			console.log(error);
		});
});

api.get('/tags/:url', (req, res) => {
	db.getTags(req.params.url)
		.then ( tags => {
			res.status(200).json(tags);
		})
		.catch( error => {
			console.log(error);
		});
});

module.exports = api;