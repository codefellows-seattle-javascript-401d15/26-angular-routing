'use strict';

describe('testing galleryController', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should render correct title', () => {
    expect(this.galleryCtrl.title).toEqual('Gallery Page');
  })

  it('undefined entry should not be defined', () => {
    expect(this.galleryCtrl.undefined).not.toBeDefined();
  })
});
