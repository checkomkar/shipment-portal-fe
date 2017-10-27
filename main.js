var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

    $stateProvider        
        .state('page1', {
            url: '/page1',
            templateUrl: 'templates/page1.html'
        })        
        .state('page2', {
            url: '/page2',
            templateUrl: 'templates/page2.html'     
        });
});

app.controller('DemoCtrl', ['$http', function($http) {
  this.name = 'World';
}]);