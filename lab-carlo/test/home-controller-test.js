'use strict';

require('angular');
require('angular-mocks');

describe('testing HomeController', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
      this.homeCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have a title', () => {
    expect(this.homeCtrl.title).toEqual('Welcome to Home Controller');
  });
});
