(function () {
    angular.module('app.booking', [])
        .directive('booking', bookingDirective);

    function bookingDirective() {
        return {
            restrict: 'EA',
            scope: {
                selectedDate: '=',
                isDirty: '='
            },
            templateUrl: 'core/booking/booking.html',
            controller: bookingController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    bookingController.$inject = ['$scope', 'uiCalendarConfig', 'eventService', 'authService'];
    function bookingController($scope, uiCalendarConfig, eventService, authService) {
        var vm = this;

        init();
        loadDate();

        function init() {
            initializeBookingSlots();

            $scope.$watch('vm.selectedDate',
                function (newSelectedDate, oldSelectedDate) {
                    if (!newSelectedDate) {
                        return;
                    }
                    loadBookings(newSelectedDate);
                });

            vm.canBook = canBook;
            vm.canUnbook = canUnbook;
            vm.book = book;
            vm.unbook = unbook;
            vm.slotColor = slotColor;
        }

        function initializeBookingSlots() {
            vm.bookingSlots = new Array(3);
            for (var i = 0; i < vm.bookingSlots.length; i++) {
                var startTime = moment.utc(vm.selectedDate);
                startTime.set({ 'hour': i * 8, 'minute': 0, 'seconds': 0 });
                var endTime = moment.utc(vm.selectedDate);
                endTime.set({ 'hour': (i + 1) * 8 - 1, 'minute': 59, 'seconds': 29 });
                var bs = {
                    title: '<Available, Click to book>',
                    startTime: startTime.utc().format(),
                    endTime: endTime.utc().format(),
                    isBooked: false
                };
                vm.bookingSlots[i] = bs;
            }
        }

        function loadDate() {
            loadProfile();
        }

        function loadProfile() {
            if (authService.getCachedProfile()) {
                vm.profile = authService.getCachedProfile();
            } else {
                authService.getProfile(function (err, profile) {
                    vm.profile = profile;
                    $scope.$apply();
                });
            }
        }

        function loadBookings(selectedDate) {
            eventService.getEventsByDates(selectedDate, selectedDate).then(
                function (bookings) {
                    initializeBookingSlots();

                    _(vm.bookingSlots).each(function (bs) {
                        var hour = moment.utc(bs.startTime).hour();
                        var booking = findBookingsByHour(bookings, hour);
                        if (booking) {
                            bs.title = booking.user.name;
                            bs.profileId = booking.user.profileId;
                            bs.color = booking.user.color;
                            bs.isBooked = true;
                        }
                    });
                });
        }

        function findBookingsByHour(bookings, hour) {
            return _(bookings).find(function (b) {
                var startTime = moment.utc(b.startTime);
                var h = startTime.hour();
                return h === hour;
            });
        }

        function canBook(bookingSlot) {
            return !bookingSlot.isBooked;
        }

        function canUnbook(bookingSlot) {
            if (!bookingSlot.isBooked) {
                return false;
            }

            if (vm.profile.sub !== bookingSlot.profileId) {
                return false;
            }

            return true;
        }

        function book(bookingSlot) {
            eventService.book(
                vm.profile.name,
                vm.profile.sub,
                vm.selectedDate,
                bookingSlot.startTime,
                bookingSlot.endTime).then(
                    function (response) {
                        toastr.success('Booked!');
                        loadBookings(vm.selectedDate);
                        vm.isDirty = true;
                    }, function (error) {
                        if (error.data.indexOf('MonthlyBookingLimitationReachedException') !== -1) {
                            toastr.error('Booking failed! You can only have a maxmium of 3 bookings per month.');
                        } else {
                            toastr.error('Booking failed! Please try again later.');
                        }
                    });
        }

        function unbook(bookingSlot) {
            eventService.unbook(
                vm.profile.name,
                vm.profile.sub,
                vm.selectedDate,
                bookingSlot.startTime,
                bookingSlot.endTime).then(
                    function (response) {
                        toastr.success('Unbooked!');
                        loadBookings(vm.selectedDate);
                        vm.isDirty = true;
                    }, function (error) {
                        console.log(error);
                    });
        }

        function slotColor(bookingSlot) {
            if (bookingSlot.color) {
                return {
                    'background-color': bookingSlot.color,
                    'color': 'white'
                };
            } else {
                return {
                    'background-color': 'AliceBlue',
                    'color': 'black'
                };
            }
        }
    }

})();