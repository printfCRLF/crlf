(function () {
    'use strict';

    angular.module('app', [
        'auth0.auth0',
        'angular-storage',
        'angular-jwt',
        'ngMaterial',
        'ngResource',
        'ui.router',
        'app.index',
        'app.json',
        'app.mountains.details',
        'app.mountains.list',
        'app.nav.breadcrumbs',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.todos.new',
        'app.todos.list',
        'app.directives.datepicker',
        'app.directives.about',
        'app.filters',
        'app.form',
        'app.toolbar',
        'app.profile',
        'app.home',
        'app.calendar',
        'app.booking',
        'ui.calendar'
    ]);
})();
