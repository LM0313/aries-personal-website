const express = require('express');
const app = express();
const path = require('path');
const config = require('./config.json');
const cookieParser = require('cookie-Parser');
const request = require('request'); // "Request" library
const querystring = require('querystring');
const cheerio = require("cheerio");
const secretKey = [config['client_id'], config['client_secret'], config['redirect_uri']];

const client_id = secretKey[0];
const client_secret = secretKey[1]; // Your secret
const redirect_uri = secretKey[2]; // Your redirect uri
const port = 8000;

var generateRandomString = function (length) {
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};
var stateKey = 'spotify_auth_state';

app.use(express.static(__dirname + '/../public'))
	.use(cookieParser());
app.use('/auth', express.static(__dirname + '/../public/auth'))
	.use(cookieParser());

app.get('/login', function (req, res) {
	var state = generateRandomString(16);
	res.cookie(stateKey, state);
	// your application requests authorization
	var scope = 'user-read-private user-read-email';
	res.redirect('https://accounts.spotify.com/authorize?' + querystring.stringify({
		response_type: 'code',
		client_id: client_id,
		scope: scope,
		redirect_uri: redirect_uri,
		state: state
	}));
});
app.get('/callback', function (req, res, userData) {
	// your application requests refresh and access tokens
	// after checking the state parameter
	var code = req.query.code || null;
	var state = req.query.state || null;
	var storedState = req.cookies ? req.cookies[stateKey] : null;
	if (state === null || state !== storedState) {
		res.redirect('/auth/#' + querystring.stringify({
			error: 'state_mismatch'
		}));
	} else {
		res.clearCookie(stateKey);
		var authOptions = {
			url: 'https://accounts.spotify.com/api/token',
			form: {
				code: code,
				redirect_uri: redirect_uri,
				grant_type: 'authorization_code'
			},
			headers: {
				'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
			},
			json: true
		};

		request.post(authOptions, function (error, response, body, userData) {
			if (!error && response.statusCode === 200) {
				var access_token = body.access_token,
					refresh_token = body.refresh_token;


				var options = {
					url: 'https://api.spotify.com/v1/me',
					headers: {
						'Authorization': 'Bearer ' + access_token
					},
					json: true

				};
				// use the access token to access the Spotify Web API
				request.get(options, function (error, response, body, userData) {
					var display_name = body.display_name,
						id = body.id,
						email = body.email,
						external_urls = body.external_urls,
						images = body.images;
					var userData = {
						UserName: display_name,
						UserId: id,
						UserEmail: email,
						ExternalUrls: external_urls,
						UserImage: images,
					};
					console.log(userData);
				});



				// we can also pass the token to the browser to make requests from there
				res.redirect('/home/#' + querystring.stringify({
					access_token: access_token,
					refresh_token: refresh_token

				}));

			} else {
				res.redirect('/auth/#' + querystring.stringify({
					error: 'invalid_token'
				}));
			}
		});
	}
	app.post('/home', function (req, res) {
		res.json(userData);
	});
});
app.get('/refresh_token', function (req, response) {
	// requesting access token from refresh token
	var refresh_token = req.query.refresh_token;
	var authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
		},
		form: {
			grant_type: 'refresh_token',
			refresh_token: refresh_token
		},
		json: true
	};
	request.post(authOptions, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			var access_token = body.access_token;
			res.send({
				'access_token': access_token
			});
		}
	});
});

app.listen(port);
