'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the Gallery Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();
    });
  });
  
  afterEach(() => this.$rootScope.$apply());
  
  it('should have a title property', () => {
    expect(this.galleryCtrl.title).toEqual('View Your Gallery');
    expect(this.galleryCtrl.title).toEqual(jasmine.any(String));
  });
});