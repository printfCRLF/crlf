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

    calendarController.$inject = ['uiCalendarConfig'];
    function calendarController(uiCalendarConfig) {
        var vm = this;

        init();

        function init() {
            vm.message = "Hello from CalendarController";

            vm.events = [
                {
                    title: 'Bowen Sui',
                    start: '2018-06-29 00:00:00',
                    end: '2018-06-29 07:59:59',
                    color: 'yellow'
                },
                {
                    title: 'Mr Green',
                    start: '2018-06-29 00:08:00',
                    end: '2018-06-29 15:59:59',
                    color: 'green'
                },
                {
                    title: 'Mr Green',
                    start: '2018-06-27 00:08:00',
                    end: '2018-06-27 15:59:59',
                    color: 'green'
                },
            ];

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