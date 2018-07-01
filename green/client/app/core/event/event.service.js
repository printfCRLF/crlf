(function () {
    'use strict';

    angular
        .module('app')
        .factory('eventService', eventService);

    eventService.$inject = ['$http', '$q'];
    function eventService($http, $q) {
        var baseUrl = 'http://localhost:3010/event';

        var service = {
            getAllEvents: getAllEvents,
            getEventsByDates: getEventsByDates,
            book: book,
            unbook: unbook
        };
        return service;

        function getAllEvents() {
            var deferred = $q.defer();
            $http.get(baseUrl + '/all').then(
                function (response) {
                    var events = [];
                    _(response.data).each(function (booking) {
                        events.push({
                            title: booking.user.name,
                            profileId: booking.user.profileId,
                            color: booking.user.color,
                            start: booking.startTime,
                            end: booking.endTime
                        });
                    });
                    deferred.resolve(events);

                }, function (error) {
                    deferred.reject(error);

                });

            return deferred.promise;
        }

        function getEventsByDates(startDate, endDate) {
            var deferred = $q.defer();

            $http({
                url: baseUrl + '/allByDateTime',
                method: 'POST',
                params: {
                    startDate: startDate,
                    endDate: endDate
                }
            }).then(function (response) {
                deferred.resolve(response.data);

            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function book(userName, userProfileId, date, startTime, endTime) {
            var deferred = $q.defer();
            var dto = {
                'userName': userName,
                'userProfileId': userProfileId,
                'date': date,
                'startTime': startTime,
                'endTime': endTime
            }
            $http({
                url: baseUrl + '/book',
                method: 'PUT',
                data: dto,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function unbook(userName, userProfileId, date, startTime, endTime) {
            var deferred = $q.defer();
            var dto = {
                'userName': userName,
                'userProfileId': userProfileId,
                'date': date,
                'startTime': startTime,
                'endTime': endTime
            }
            $http({
                url: baseUrl + '/unbook',
                method: 'PUT',
                data: dto,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                deferred.resolve(response.data);

            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }
})();