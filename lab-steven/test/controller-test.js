'use strict';

const angular = require('angular');
require('angular-mocks');

describe('component controllers', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootscope, $controller) => {
      this.$rootscope = $rootscope;
      this.homeCtrl = new $controller('HomeController');
      this.signupCtrl = new $controller('SignupController');
      this.galleryCtrl = new $controller('GalleryController');
    });
  });
  afterEach(() => this.$rootscope.$apply());

  describe('controller initial values', () => {
    it('has proper initial title value', () => {
      expect(this.homeCtrl.title).toEqual('Home Title');
      expect(this.signupCtrl.title).toEqual('Signup Title');
      expect(this.galleryCtrl.title).toEqual('Gallery Title');
    });
  });
});
