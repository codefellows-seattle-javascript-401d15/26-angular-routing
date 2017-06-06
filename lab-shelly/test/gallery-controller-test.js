'use strict';

describe('Testing the gallery controller ', function () {

  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('should have a title', () => {
    expect(this.galleryCtrl.title).toBe('The Gallery');
  });

});
