'use strict';

require('angular');
require('angular-mocks');

describe('testing signupController', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.signupCtrl = new $controller('SignupController');
      this.signupCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should render correct title', () => {
    expect(this.signupCtrl.title).toEqual('Signup Page');
  })

  it('undefined entry should not be defined', () => {
    expect(this.signupCtrl.undefined).not.toBeDefined();
  })
});
