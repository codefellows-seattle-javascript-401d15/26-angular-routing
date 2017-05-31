'use strict';

const angular = require('angular');
require('angular-mocks');

describe('component controllers', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootscope, $controller) => {
      this.$rootscope = $rootscope;
      this.signupCtrl = new $controller('SignupController');
      this.signupCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootscope.$apply());

  describe('controller initial values', () => {
    it('has proper initial title value', () => {
      expect(this.signupCtrl.title).toEqual('Signup Title');
    });
  });
});
