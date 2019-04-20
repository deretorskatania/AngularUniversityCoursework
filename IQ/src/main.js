angular.module('app', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './app.component.html'
      });
      $routeProvider
        .when('/sign-in', {
        templateUrl:'./sign-in.component.html'
      });
  });