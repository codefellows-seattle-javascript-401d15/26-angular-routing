'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the Signup Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.signupCtrl = new $controller('SignupController');
      this.signupCtrl.$onInit();
    });
  });
  
  afterEach(() => this.$rootScope.$apply());
  
  it('should have a title property', () => {
    expect(this.signupCtrl.title).toEqual('Please sign in!');
    expect(this.signupCtrl.title).toEqual(jasmine.any(String));
  });
});