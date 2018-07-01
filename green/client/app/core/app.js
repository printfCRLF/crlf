(function () {
    'use strict';

    angular.module('app', [
        'auth0.auth0',
        'angular-storage',
        'angular-jwt',
        'ngMaterial',
        'ngResource',
        'ui.router',
        'app.nav.breadcrumbs',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.directives.datepicker',
        'app.directives.about',
        'app.filters',
        'app.toolbar',
        'app.profile',
        'app.home',
        'app.calendar',
        'app.booking',
        'ui.calendar'
    ]);
})();
