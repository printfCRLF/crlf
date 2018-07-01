(function () {
    'use strict';

    angular
        .module('app')
        .factory('eventService2', eventService2);

    eventService2.$inject = ['$http'];
    function eventService2($http) {
        var baseUrl = 'http://localhost:3010/event';

        var service = {
            getAllEvents: getAllEvents,
            getEventsByDates: getEventsByDates
        };
        return service;

        function getAllEvents() {
            return $http.get(baseUrl + '/all');
        }

        function getEventsByDates(startDate, endDate) {
            return $http({
                url: baseUrl + '/allByDateTime',
                method: 'POST',
                params: {
                    startDate: startDate,
                    endDate: endDate
                }
            });
        }
    }
})();