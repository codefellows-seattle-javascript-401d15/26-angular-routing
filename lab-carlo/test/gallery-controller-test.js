'use strict';

require('angular');
require('angular-mocks');

describe('testing GalleryController', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      console.log('this is the $rootScope', this.$rootScope);
      this.galleryCtrl = new $controller('GalleryController');
      console.log('this is the galleryCtrl', this.galleryCtrl);
      this.galleryCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have a title', () => {
    expect(this.galleryCtrl.title).toEqual('Welcome to Gallery Controller');
  });
});
