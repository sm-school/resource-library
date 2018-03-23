'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const api = require('./api.js');

[
	'THINGBOARD_DB_PORT',
	'THINGBOARD_DB_NAME',
	'THINGBOARD_DB_USER',
	'THINGBOARD_DB_PASS',
	'THINGBOARD__PORT',
	'THINGBOARD__SESSION_SECRET',
].forEach( env => {
    if (!process.env[env]) {
        console.log(`Can't run Thingboard: ${env} not set.`);
        process.exit(1);
    }
});

express()
	.use( bodyParser.json() )
	.use( express.static('static') )
	.use( '/api', api )
	.listen( process.env.THINGBOARD_PORT, () => {
		console.log(`Starting Thingboard on port ${process.env.THINGBOARD_PORT}.`);
	} );