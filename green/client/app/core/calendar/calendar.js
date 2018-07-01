(function () {
    'use strict';

    angular.module('app.calendar', [])
        .directive('myCalendar', calendarDirective);

    function calendarDirective() {
        return {
            restrict: 'EA',
            scope: {
                selectedDate: '='
            },
            templateUrl: 'core/calendar/calendar.html',
            controller: calendarController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    calendarController.$inject = ['$scope', 'uiCalendarConfig', 'eventService'];
    function calendarController($scope, uiCalendarConfig, eventService) {
        var vm = this;

        init();
        activate();

        function init() {
            vm.events = [];

            vm.alertOnEventClick = function () {
                console.log('alertOnEventClick');
            };
            vm.alertOnDrop = function () { };
            vm.alertOnResize = function () { };
            vm.eventRender = function () { };

            vm.dayClick = dayClick;

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

        function dayClick(date, jsEvent, view) {
            vm.selectedDate = date.format();
            //printMyCalendar();
        };

        function activate() {
            eventService.getAllEvents().then(function (response) {
                _(response.data).each(function (booking) {
                    vm.events.push({
                        title: booking.user.name,
                        profileId: booking.user.profileId,
                        start: booking.startTime,
                        end: booking.endTime
                    });
                });
            });
        }

    }

})();