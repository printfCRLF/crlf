(function () {
    'use strict';

    angular
        .module('app')
        .factory('eventService', eventService);

    eventService.$inject = ['$resource'];
    function eventService($resource) {
        var events = [{
            title: 'Bowen Sui',
            start: '2018-06-29 00:00:00',
            end: '2018-06-29 07:59:59',
            color: 'brown'
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
            }];

        var baseUrl = 'https://localhost:3010';
        //var res = $resource(baseUrl + "")

        var service = {
            getAllEvents: getAllEvents
        };
        return service;

        function getAllEvents() {
            return events;
        }
    }
})();