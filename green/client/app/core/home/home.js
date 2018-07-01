(function () {
    'use strict';

    angular.module('app.home', [])
        .controller('HomeController', homeController);

    homeController.$inject = [];
    function homeController() {
        var vm = this;

        init();

        function init() {
            vm.message = 'Hello from HomeController';
            vm.selectedDate = null;
        }
    }
})();