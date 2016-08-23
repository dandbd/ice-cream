module.exports = function (app, router) {

  // Middleware to use for all requests
  router.use(function(req, res, next) {
    // Do logging
    console.log('Ice-Cream Server: RESTFul API was called.');
    next(); // make sure we go to the next routes and don't stop here
  });

  // Test route to make sure everything is working (accessed at GET http://.../api)
  router.get('/', function(req, res) {
    res.json({ message: "Welcome to Ice-Cream: API's." });
  });

  // All of our routes will be prefixed with /api
  app.use('/api', router);
};
