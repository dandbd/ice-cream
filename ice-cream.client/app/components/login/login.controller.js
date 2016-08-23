(function () {
  'use strict';

  angular
    .module('iceCream')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$stateParams', '$state', 'UserService'];

  function LoginCtrl($stateParams, $state, UserService) {
    var vm = this;
    vm.user = {};


/*
    // Add
    // ---------------------------------------------
    vm.save = function(){
      UserService.addUser(vm.user)
        .then(function(){
          $state.go("users");
        });
    };
    */
  }
})();
