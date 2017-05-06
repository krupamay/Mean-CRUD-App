
//angular.module('krupa.controllers', []);

var krupa = angular.module('krupa', ['ui.router']);

krupa.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

//$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/homepage');

        $stateProvider
            // route for the home page
            .state('homepage', {
                url : '/homepage',
                templateUrl : 'sections/homepage.html',
                controller  : 'homepageController'
            })

            // route dashboard
            .state('dashboard', {
                url : '/dashboard',
                templateUrl : 'sections/dashboard.html',
                controller  : 'dashboardController',
                params: {
                  authenticated : false,
                  info: null
                    }
            })

            // route for the signout page
            .state('signout', {
                url : '/signout',
                templateUrl : 'sections/signout.html',
                controller  : 'signoutController',
                params: {
                  signoutInitiated : false
                    }
            })

            // route for the signup page
            .state('signup', {
                url : '/signup',
                templateUrl : 'sections/signup.html',
                controller  : 'signupController'
            });
    });

krupa.controller("appController", function($scope,$window) {


});
