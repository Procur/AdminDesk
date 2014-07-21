/**
 * DashboardController
 */

var rest = require('rest');

module.exports = {

	dashboard: function(req, res) {
		rest({ method: 'GET', path: sails.config.api.host + '/admin/staff'}).then(function(response){
			var adminList,
					apiResponse;
			try {
				apiResponse = JSON.parse(response.entity);
			}
			catch(err) {
				apiResponse = response.entity;
			}
			res.view({ response: apiResponse });
		});
	}
};
