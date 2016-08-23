(function () {
  'use strict';

  angular
    .module('iceCream')
    .controller('AddUserCtrl', AddUserCtrl);

  AddUserCtrl.$inject = ['$stateParams', '$state', 'UserService'];

  function AddUserCtrl($stateParams, $state, UserService) {
    var vm = this;
    vm.isReadOnly = false;
    vm.saveType = "Add";

    // Add
    // ---------------------------------------------
    vm.save = function(){
      UserService.addUser(vm.user)
        .then(function(){
          $state.go("users");
        });
    };
  }
})();
