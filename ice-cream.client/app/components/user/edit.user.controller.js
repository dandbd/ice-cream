(function () {
'use strict';

angular
  .module('iceCream')
  .controller('EditUserCtrl', EditUserCtrl);

EditUserCtrl.$inject = ['$stateParams', '$state', 'UserService', 'user'];

function EditUserCtrl($stateParams, $state, UserService, user) {

  var vm = this;
  vm.user = user;                                               // 'user' is resolved via the route
  vm.user.dateCreated = ConvertStringToDate(user.dateCreated);  // Convert to 'md-datepicker' friendly date
  vm.isReadOnly = $stateParams.isReadOnly;                      // Capture changed route parameters
  vm.saveType = "Update";                                       // Text displayed on button

  // Get By - Id
  // ---------------------------------------------
  vm.getUsers = function(id, isReadOnly){
    vm.isReadOnly = isReadOnly;
    UserService.getUsers(id)
      .then(function(data){
        vm.user = data;
      });
  };

  // Update
  // ---------------------------------------------
  vm.save = function(){
    UserService.editUser(vm.user)
      .then(function(){
        $state.go("users");
      });
  };
}
})();
