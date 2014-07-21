/**
 * DashboardController
 */

var rest = require('rest');

module.exports = {

	dashboard: function(req, res) {
		rest({ headers: { apitoken: '$2a$10$x9FnB.MtmOPeV2hOQhKMtuU3Gi.ueCghAzvib5wfOu2t.R4nfJOtS'}, method: 'GET', path: sails.config.api.host + '/admin/staff'}).then(function(response){
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
			res.view({ response: apiResponse, responseValid: responseValid });
		});
	}
};
