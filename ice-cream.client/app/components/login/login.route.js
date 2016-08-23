(function () {
'use strict';

angular.module('iceCream')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'components/login/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm'
    });
});
})();
