(function () {
'use strict';

angular
  .module('iceCream')
  .controller('ListUserSearchCtrl', ListUserSearchCtrl);

ListUserSearchCtrl.$inject = ['$state', 'UserService', 'ModalDialogs'];

function ListUserSearchCtrl($state, UserService, ModalDialogs){
  var vm = this;

  // Get Users
  // ---------------------------------------------
  vm.getUsers = function(){
    UserService.getUsers()
      .then(function(data){
        vm.users = data;
      });
  };

  // Delete User
  // ---------------------------------------------
  // Delete User
  // ---------------------------------------------
  vm.deleteUser = function(user){
    ModalDialogs.delete("Delete User", "'" + user.firstName + " " + user.lastName + "'", "Cancel", "Delete")
      .then (function(){
        UserService.deleteUser(user._id)
          .then(function(){
            vm.users.splice(vm.users.indexOf(user), 1);
          });
      });

  };

  // Change router to EditUser
  // ---------------------------------------------
  vm.goToEditUser = function(user){
    $state.go("editUser",{id: user.id, isReadOnly: user.isReadOnly});
  };

  // Initialise the controller
  Initialise();

  function Initialise(){
    vm.getUsers();
  }
}
})();
