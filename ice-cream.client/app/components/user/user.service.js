(function () {
	'use strict';

	angular
    .module('iceCream')
    .service('UserService', UserService);

  UserService.$inject = ['$http', '$q', 'Config'];

	function UserService($http, $q, Config) {
    var vm = this;

		// GET: List records.
    // ---------------------------------------------
    vm.getUsers = function(id) {
			var pathParam = "";
			var deferred = $q.defer();

			if (!angular.isUndefined(id))
				pathParam = "/" + id;

			$http.get(Config.apiBase + 'users' + pathParam)
				.success(function (data) {
          vm.users = data;
          deferred.resolve(data);
        })
        .error(function () {
          deferred.reject();
        });
      return deferred.promise;
		};

		// PUT: Update record.
    // ---------------------------------------------
		vm.editUser = function(data) {
			var deferred = $q.defer();

			$http.put(Config.apiBase + 'users/' + data._id, JSON.stringify(data))
				.success(function (data, status, headers) {
					deferred.resolve(data);
				})
				.error(function (data, status, header, config) {
					deferred.reject();
				});
			return deferred.promise;
	  };

		// POST: Add new record.
    // ---------------------------------------------
		vm.addUser = function(data) {
			var deferred = $q.defer();

			$http.post(Config.apiBase + 'users', JSON.stringify(data))
				.success(function (data, status, headers) {
					deferred.resolve(data);
				})
				.error(function (data, status, header, config) {
					deferred.reject();
				});
			return deferred.promise;
	  };


		// DELETE: Delete record.
    // ---------------------------------------------
		vm.deleteUser = function(id) {
			var deferred = $q.defer();

			if (!angular.isUndefined(id)) {
				$http.delete(Config.apiBase + 'users/' + id)
					.success(function (data) {
	          deferred.resolve(data);
	        })
	        .error(function () {
	          deferred.reject();
	        });
	      return deferred.promise;
			}
		};
}
})();
