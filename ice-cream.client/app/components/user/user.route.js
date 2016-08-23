(function () {
'use strict';

angular.module('iceCream')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('users', {
      url: '/users',
      templateUrl: 'components/user/list.user.search.html',
      controller: 'ListUserSearchCtrl',
      controllerAs: 'vm'
    })

    .state('addUser', {
      url: '/users/add',
      templateUrl: 'components/user/user.detail.html',
      controller: 'AddUserCtrl',
      controllerAs: 'vm'
    })

    .state('editUser', {
      url: '/users/:id/:isReadOnly',
      templateUrl: 'components/user/user.detail.html',
      controller: 'EditUserCtrl',
      controllerAs: 'vm',
      resolve: {
        user: ['$stateParams', 'UserService',
                function($stateParams, UserService) {
                  return UserService.getUsers($stateParams.id);
                }
              ]
      }
    });
});
})();
