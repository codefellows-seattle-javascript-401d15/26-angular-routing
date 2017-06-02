'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing galleryController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  describe('checking initial properties set by GalleryController', () => {

    it('should pass this is a test', () => {
      expect(true).toEqual(true);
    });
    it('should contain a string for the title and the title should say Gallery', () => {
      expect(this.galleryCtrl.title).toEqual(jasmine.any(String));
      expect(this.galleryCtrl.title).toEqual('Gallery');
    });
  });
