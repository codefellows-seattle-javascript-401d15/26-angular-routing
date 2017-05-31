'use strict'

module.exports = [
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/home')
    let routes = [
      {
        name: 'home',
        url: '/home',
        template: require('../view/home/home.html'),
        controller: 'HomeContriller',
        controllerAs: 'homeCtrl'
      },
      {
        name: 'signup',
        url: '/signup',
        template: require('../view/signup/signup.html'),
        controller: 'SignupContriller',
        controllerAs: 'signupCtrl'
      }
    ]
    routes.forEach(route => $stateProvider.state(route))
  }
]
