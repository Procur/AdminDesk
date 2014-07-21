/**
 * AuthController
 *
 * @description :: Server-side logic for managing authentication
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

			try {
				var user = JSON.parse(response.entity);
				req.session.token = user.token;
				req.session.authenticated = true;
			}
			catch(err) {
				req.flash('error', response.entity);
				return res.redirect('/login');
			}
			res.redirect('/');
		});
	},

	logout: function(req, res){
		req.session.authenticated = false;
		res.redirect('/login');
	}

};
