(function () {
    'use strict';

    angular.module('app', [
        'auth0', 
        'angular-storage', 
        'angular-jwt', 
        'ngMaterial',
        'ui.router',
        'app.index',
        'app.json',
        'app.profile',
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
    ]);
})();
