(function () {


angular.module('iceCream.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');

$stateProvider

      .state('home', {
          url: '/home',
          templateUrl: 'index.html'
      });
});

})();
