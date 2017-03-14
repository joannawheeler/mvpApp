angular.module('mvp', [
  'mvp.mainPage',
  'mvp.services',
  'ngRoute'
  ])
.config(function ($routeProvider,$locationProvider) {
$locationProvider.hashPrefix('');
$routeProvider
.when('/', {
    controller: 'MainPageController',
    templateUrl: './mainPage/mainPage.html'
  })
  .otherwise({
  redirectTo: '/'
  })
})