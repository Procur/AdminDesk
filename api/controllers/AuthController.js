/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var token = require('../helpers/tokenFunctions.js'),
		rest = require('rest');

module.exports = {

	login: function(req, res) {
		res.view();
	},

	processLogin: function(req, res) {
		var params = {
			email: req.body.email,
			password: req.body.password
		};

		rest({ method: 'POST', path: sails.config.api.host + '/login?email=' + params.email + "&password=" + params.password }).then(function(response){
			var user = JSON.parse(response.entity);
			req.session.token = user.token;
			res.redirect('/');
		});
	},

	validateApiToken: function(req, res) {

	}

};
