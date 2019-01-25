(function () {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
        '$provide', 'angularAuth0Provider', '$httpProvider',
        'jwtInterceptorProvider', 'jwtOptionsProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider,
        $provide, angularAuth0Provider, $httpProvider,
        jwtInterceptorProvider, jwtOptionsProvider) {

        configRoutes($urlRouterProvider);
        configStates($stateProvider);
        configAuth0(angularAuth0Provider, $urlRouterProvider, $locationProvider,
            jwtOptionsProvider, jwtInterceptorProvider, $httpProvider);
    }

    function configRoutes($urlRouterProvider) {
        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.when('/', '/home');
        //$urlRouterProvider.when('', '/todos/list');
        //$urlRouterProvider.when('/', '/todos/list');
        //$urlRouterProvider.when('/todos', '/todos/list');
        //$urlRouterProvider.when('/todos/', '/todos/list');
        //$urlRouterProvider.when('/mountains', '/mountains/list');
        //$urlRouterProvider.when('/mountains/', '/mountains/list');

        // $urlRouterProvider.otherwise('/');
    }

    function configStates($stateProvider) {
        $stateProvider
            .state('root', {
                abstract: true,
                url: '/',
                data: {
                    title: 'Home',
                    breadcrumb: 'Home'
                },
                views: {
                    'header': {
                        templateUrl: 'core/navigation/headerView.html',
                        controller: 'HeaderController',
                        controllerAs: 'HC'
                    },
                    'menu': {
                        templateUrl: 'core/navigation/menuView.html',
                        controller: 'MenuController',
                        controllerAs: 'MC'
                    },
                    'breadcrumbs': {
                        templateUrl: 'core/navigation/breadcrumbsView.html',
                        controller: 'BreadcrumbsController',
                        controllerAs: 'BC'
                    },
                    'content': {
                        template: 'Choose option from menu...'
                    },
                    'footer': {
                        templateUrl: 'core/navigation/footerView.html',
                        controller: 'FooterController',
                        controllerAs: 'FC'
                    }
                }
            })
            .state('root.home', {
                url: 'home',
                data: {
                    title: 'Home',
                    breadcrumb: 'Home'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.profile', {
                url: 'profile',
                data: {
                    title: 'Profile',
                    breadcrumb: 'Profile'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/profile/profile.html',
                        controller: 'ProfileController',
                        controllerAs: 'vm'
                    }
                }
            });
    }

    function configAuth0(angularAuth0Provider, $urlRouterProvider, $locationProvider,
        jwtOptionsProvider, jwtInterceptorProvider, $httpProvider) {
        angularAuth0Provider.init({
            clientID: AUTH0_CLIENT_ID,
            domain: AUTH0_DOMAIN,
            responseType: 'token id_token',
            audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
            redirectUri: AUTH0_CALLBACK_URL,
            scope: 'openid profile read:messages'
        });

        jwtOptionsProvider.config({
            tokenGetter: function () {
                // return localStorage.getItem('access_token');
                // var token = localStorage.getItem('access_token');
                var token = localStorage.getItem('id_token');
                return token;
            },
            whiteListedDomains: ['localhost']
        });

        $httpProvider.interceptors.push('jwtInterceptor');

        $urlRouterProvider.otherwise('/');

        $locationProvider.hashPrefix('');

        // Comment out the line below to run the app without HTML5 mode (will use hashes in routes)
        $locationProvider.html5Mode(true);


    }
})();
