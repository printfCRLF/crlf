(function() {
    'use strict';

    angular
        .module('app')
        .factory('eventService', eventService);

    function eventService() {
        var isReady = false;
        var service = {
            getAllEvents: getAllEvents
        };
        return service;

        function getAllEvents() {

        }
    }
})();