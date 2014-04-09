'use strict';

angular.module('communityCapitalApp', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html"
    })
    .state('page', {
      templateUrl: "views/page.html"
    })
    .state('page.signup', {
      url: "/signup",
      templateUrl: "views/investor.signup.html",
    })
    .state('page.investor', {
      url: "/investor",
      templateUrl: "views/investor.html"
    })
    .state('page.investor.search', {
      url: "/search",
      templateUrl: "views/investor.search.html"
    })
    .state('page.investor.investments', {
      url: "/investments",
      templateUrl: "views/investor.investments.html"
    })
    .state('page.project', {
      url: "/project",
        templateUrl: "views/project.html",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      })
    });