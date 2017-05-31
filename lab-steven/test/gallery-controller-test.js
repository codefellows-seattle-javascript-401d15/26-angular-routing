'use strict';

const angular = require('angular');
require('angular-mocks');

describe('component controllers', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootscope, $controller) => {
      this.$rootscope = $rootscope;
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();

    });
  });
  afterEach(() => this.$rootscope.$apply());

  describe('controller initial values', () => {
    it('has proper initial title value', () => {
      expect(this.galleryCtrl.title).toEqual('Gallery Title');
    });
  });
});
