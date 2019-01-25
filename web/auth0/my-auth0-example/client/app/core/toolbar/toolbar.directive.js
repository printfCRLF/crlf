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
    
    toolbarController.$inject = ['authService'];
    function toolbarController(authService) {
        var vm = this;
        vm.auth = authService;
    }

    // toolbarController.$inject = ['auth', 'store', '$location'];
    // function toolbarController(auth, store, $location) {
    //     var vm = this;
    //     vm.login = login;
    //     vm.logout = logout;
    //     vm.auth = auth;

    //     function login() {
    //         auth.signin({}, function(profile, token) {
    //             store.set('profile', profile);
    //             store.set('id_token', token);
    //             $location.path('/home');
    //         }, function(error) {
    //             console.log(error);
    //         } );
    //     }

    //     function logout() {
    //         store.remove('profile');
    //         store.remove('id_token');
    //         auth.signout();
    //         $location.path('/home');
    //     }
    // }

})();