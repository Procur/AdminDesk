/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var rest = require('rest');
module.exports = {

	show: function(req, res){
		res.view();
	},

	create: function(req, res) {
		var email = req.body.email;

		rest({ headers: { apitoken: req.session.token}, method: 'POST', path: sails.config.api.host + '/admin/staff?email=' + email }).then(function(response){
			try {
				JSON.parse(response.entity);
				req.flash('created', 'Administrator successfully created');
				res.redirect('/');
			}
			catch(err) {
				req.flash('error', 'There was an error');
				res.redirect('/');
			}
		});
	}
};
