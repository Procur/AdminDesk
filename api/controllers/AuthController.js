/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var token = require('../helpers/tokenFunctions.js');

module.exports = {

	login: function(req, res) {
		res.view();
	},

	processLogin: function(req, res) {
		
	},

	validateApiToken: function(req, res) {

	}

};
