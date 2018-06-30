(function () {
    'use strict';

    angular
        .module('app')
        .factory('eventService2', eventService2);

    eventService2.$inject = ['$http'];
    function eventService2($http) {
        var baseUrl = 'http://localhost:3010/event';

        var service = {
            getAllEvents: getAllEvents
        };
        return service;

        function getAllEvents() {
            return $http.get(baseUrl + '/allprivate');
            //$http.get(baseUrl + '/allprivate').then(function (response) {
            //    console.log(response);
            //});

            //$http.get('http://localhost:3010/api/private').then(function (response) {
            //    console.log(response.data.message);
            //});
        }
    }
})();