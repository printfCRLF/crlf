(function () {
    angular.module('app.booking', [])
        .directive('booking', bookingDirective);

    function bookingDirective() {
        return {
            restrict: 'EA',
            scope: {
                selectedDate: '='
            },
            templateUrl: 'core/booking/booking.html',
            controller: bookingController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    bookingController.$inject = ['$scope', 'uiCalendarConfig', 'eventService2'];
    function bookingController($scope, uiCalendarConfig, eventService2) {
        var vm = this;
        init();

        function init() {
            vm.message = 'Hello world from bookingController';
            vm.bookings = [];

            $scope.$watch('vm.selectedDate',
                function (newSelectedDate, oldSelectedDate) {
                    if (!newSelectedDate) {
                        return;
                    }
                    loadBookings(newSelectedDate);
                });
        }

        function activate() {

        }

        function loadBookings(selectedDate) {
            console.log('selectedDate ' + selectedDate + 'changed, load bookings');

            eventService2.getEventsByDates(selectedDate, selectedDate).then(function (response) {

            });
        }

    }

})();