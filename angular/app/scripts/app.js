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
      templateUrl: "views/signup.html",
    })
    .state('page.investor', {
      url: "/investor",
      templateUrl: "views/investor.html"
    })
    .state('page.investor.search', {
      url: "/search",
      templateUrl: "views/investor.search.html",
      controller: function($scope) {

        $scope.results1 = [
          {
            name: 'Property 1', 
            image: 'images/building1.jpg', 
            offering: '$5,000,000', 
            term: '3 years',
            minimum: '$10,000',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar mattis dui sit amet tristique. Suspendisse potenti. Aliquam dictum nunc non ante ultrices, vitae luctus tortor consectetur.'
          },
          {
            name: 'Property 2',
            image: 'images/building2.jpg',
            offering: '$2,000,000',
            term: '2 years 6 months',
            minimum: '$3,000',
            description: 'Pellentesque vitae quam et urna egestas vehicula et ut quam. Nullam rutrum eleifend ante sed egestas. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
          }];
        $scope.results2 = [ 
          {
            name: 'Property 3',
            image: 'images/appartment.jpg',
            offering: '$3,000,000',
            term: '3 years',
            minimum: '$4,000',
            description: 'Cras tristique ligula eget eros dapibus semper. Mauris a mollis nulla, a luctus ligula. Nam in fringilla libero. Aenean dapibus gravida dui sed sodales. Proin vestibulum nulla vel libero pulvinar aliquet.'
          },
          { 
            name: 'Property 4',
            image: 'images/building3.jpg',
            offering: '$3,500,000',
            term: '2 years',
            minimum: '$6,000',
            description: ''
          }
        ];
      }
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