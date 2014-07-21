/**
 * DashboardController
 */

var rest = require('rest');

module.exports = {

	dashboard: function(req, res) {
		rest({ headers: { apitoken: ''}, method: 'GET', path: sails.config.api.host + '/admin/staff'}).then(function(response){
			var adminList,
					apiResponse,
					responseValid = true;
			try {
				apiResponse = JSON.parse(response.entity);
			}
			catch(err) {
				apiResponse = response.entity;
				responseValid = false;
			}
			console.log(apiResponse);
			res.view({ response: apiResponse, responseValid: responseValid });
		});
	}
};
