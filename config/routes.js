/**
* ROUTES, YO.
*/

module.exports.routes = {


  // Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, etc. depending on your
  // default view engine) your home page.
  //
  // (Alternatively, remove this and add an `index.html` file in your `assets` directory)

  'get /': 'DashboardController.dashboard',

  //AUTH ROUTES
  'get /login': 'AuthController.login',
  'post /login': 'AuthController.processLogin',
  'get /logout': 'AuthController.logout',

  //ADMINISTRATOR MANAGEMENT ROUTES
  'post /administrator/create': 'UserController.create',
  'get /administrators': 'UserController.show',

  'get /analytics': 'AnalyticsController.index',
  'get /logging': 'LoggingController.index'

};
