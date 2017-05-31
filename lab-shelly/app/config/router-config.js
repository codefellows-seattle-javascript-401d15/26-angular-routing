'use strict';

module.exports = [
  '$stateProvider',
  '$urlProvider',
  function($stateProvider, $urlProvider) {
    $urlProvider.when('', '/home');
    let routes = [
      {
        name: 'home',
        url: '/home',
        template: require('../view/home/home.html'),
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
      },
      {
        name: 'signup',
        url: '/signup',
        template: require('../view/signup/signup.html'),
        controller: 'SignupController',
        controllerAs: 'signupCtrl',
      },
    ];
    routes.forEach(route => $stateProvider.state(route));
  }];
