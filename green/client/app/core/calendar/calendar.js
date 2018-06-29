(function () {
    'use strict';

    angular.module('app.calendar', [])
        .directive('myCalendar', calendarDirective);

    function calendarDirective() {
        return {
            templateUrl: 'core/calendar/calendar.html',
            controller: CalendarController,
            controllerAs: 'vm'
        };
    }

    CalendarController.$inject = [];
    function CalendarController() {
        var vm = this;
        vm.message = "Hello from CalendarController";

        vm.eventSources = [];
    }
})();