(function () {
    'use strict';

    angular.module('app.home', [])
        .controller('HomeController', HomeController);

    HomeController.$inject = [];
    function HomeController() {
        var vm = this;
        vm.message = "Hello from HomeController";

        vm.minDate = moment().toDate();
        vm.maxDate = moment().clone().add(28, 'days').toDate();
        vm.startDate = vm.minDate;
        vm.endDate = vm.maxDate;

        vm.eventSources = [];

    }
})();