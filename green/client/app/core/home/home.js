(function () {
    'use strict';

    angular.module('app.home', [])
        .controller('HomeController', homeController);

    homeController.$inject = ['authService'];
    function homeController(authService) {
        var vm = this;

        init();
        loadData();

        function init() {
            vm.message = 'Hello from HomeController';
            vm.selectedDate = null;
            vm.isDirty = false;
            vm.auth = authService;
        }

        function loadData() {
            authService.isAuthenticated();
        }
    }
})();