(function() {
    'use strict';

    angular.module("app.toolbar", [])
        .directive('toolbar', toolbarDirective);

    function toolbarDirective() {
        return {
            templateUrl: 'core/toolbar/toolbar.template.html', 
            controller: toolbarController, 
            controllerAs: 'toolbar'
        };
    }
        
    function toolbarController() {
        
    }
})();