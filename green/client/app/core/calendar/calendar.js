(function () {
    'use strict';

    angular.module('app.calendar', [])
        .directive('myCalendar', calendarDirective);

    function calendarDirective() {
        return {
            templateUrl: 'core/calendar/calendar.html',
            controller: calendarController,
            controllerAs: 'vm'
        };
    }

    calendarController.$inject = ['uiCalendarConfig', 'eventService'];
    function calendarController(uiCalendarConfig, eventService) {
        var vm = this;

        init();

        function init() {
            vm.message = "Hello from CalendarController";

            vm.events = eventService.getAllEvents();

            vm.alertOnEventClick = function () {
                console.log("alertOnEventClick");
            };
            vm.alertOnDrop = function () { };
            vm.alertOnResize = function () { };
            vm.eventRender = function () { };

            vm.dayClick = function () {
                console.log("dayClick");
                printMyCalendar();
            };

            vm.eventAfterAllRender = function () {
                //printMyCalendar();
            };

            vm.uiConfig = {
                calendar: {
                    editable: true,
                    header: {
                        left: 'title',
                        center: '',
                        right: 'today prev,next'
                    },
                    eventClick: vm.alertOnEventClick,
                    eventDrop: vm.alertOnDrop,
                    eventResize: vm.alertOnResize,
                    eventRender: vm.eventRender,
                    eventAfterAllRender: vm.eventAfterAllRender,

                    dayClick: vm.dayClick
                }
            };

            vm.eventSources = [vm.events];

            function printMyCalendar() {
                console.log(uiCalendarConfig.calendars.myCalendar);
                vm.cal = uiCalendarConfig.calendars.myCalendar;

                vm.cal.fullCalendar('gotoDate', moment());

            }
        }

    }

})();