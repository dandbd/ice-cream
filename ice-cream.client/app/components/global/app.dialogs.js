(function () {
'use strict';

angular
  .module('iceCream')
  .factory('ModalDialogs', ModalDialogs);

ModalDialogs.$inject = ['$mdDialog'];

function ModalDialogs($mdDialog){
  var showDelete =
    function(heading, message, cancelButtonText, deleteButtonText) {
      var confirm = $mdDialog.confirm()
          .title(heading)
          .content('Are you sure you want to delete ' + message + '?')
          .ariaLabel('Delete ' + heading)
          .ok((angular.isUndefined(deleteButtonText) ? 'Delete' : deleteButtonText))
          .cancel((angular.isUndefined(cancelButtonText) ? 'Cancel' : cancelButtonText));
          return $mdDialog.show(confirm);
      };

  var showAlert =
    function(heading, message, okButtonText) {
      var confirm = $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title(heading)
          .content(message)
          .ariaLabel(heading)
          .ok((angular.isUndefined(okButtonText) ? 'Ok' : okButtonText));
          return $mdDialog.show(confirm);
      };

  return {
    delete: showDelete,
    alert: showAlert
  };
}
})();
