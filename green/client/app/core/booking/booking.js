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

    bookingController.$inject = ['$scope', 'uiCalendarConfig', 'eventService'];
    function bookingController($scope, uiCalendarConfig, eventService) {
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

            eventService.getEventsByDates(selectedDate, selectedDate).then(function (response) {

            });
        }

    }

})();