'use strict';

/**
 * @ngdoc overview
 * @name rouletteModel2App
 * @description
 * # rouletteModel2App
 *
 * Main module of the application.
 */
angular
  .module('rouletteModelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
