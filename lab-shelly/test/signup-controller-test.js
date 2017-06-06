'use strict';

describe('Testing the signup controller', function () {

  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.signupCtrl = new $controller('SignupController');
      this.signupCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should have a title', () => {
    expect(this.signupCtrl.title).toBe('This is where we signup for the app');
  });

});
