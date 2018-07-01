(function () {
    'use strict';

    angular.module("app.toolbar", [])
        .directive('toolbar', toolbarDirective);

    function toolbarDirective() {
        return {
            templateUrl: 'core/toolbar/toolbar.html',
            controller: toolbarController,
            controllerAs: 'toolbar'
        };
    }

    toolbarController.$inject = ['authService'];
    function toolbarController(authService) {
        var vm = this;
        vm.auth = authService;
    }

})();