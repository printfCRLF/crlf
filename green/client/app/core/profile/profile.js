(function () {
    'use strict';

    angular.module('app.profile', [])
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [];

    ProfileController.$inject = ['$scope', '$http', 'store', 'authService'];
    function ProfileController($scope, $http, store, authService) {
        var vm = this;
        vm.auth = authService;

        vm.message = 'Hello from ProfileController';

        vm.getMessage = getMessage;
        vm.getSecretMessage = getSecretMessage;

        vm.profile = undefined;

        if (authService.getCachedProfile()) {
            vm.profile = authService.getCachedProfile();
        } else {
            authService.getProfile(function (err, profile) {
                vm.profile = profile;
                $scope.$apply();
            });
        }

        // vm.profile = store.get('profile');

        function getMessage() {
            var baseUrl = 'http://localhost:3010';
            //var baseUrl = 'https://serverapi20180701081712.azurewebsites.net';
            $http.get(baseUrl + '/api/public', {
                skipAuthorization: true
            }).then(function (response) {
                vm.message = response.data.message;
            });
        }

        function getSecretMessage() {
            var baseUrl = 'http://localhost:3010';
            //var baseUrl = 'https://serverapi20180701081712.azurewebsites.net';
            $http.get(baseUrl + '/api/private')
                .then(function (response) {
                    vm.message = response.data.message;
                });
        }

    }
})();

