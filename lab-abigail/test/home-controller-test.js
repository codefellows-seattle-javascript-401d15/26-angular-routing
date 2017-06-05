'use strict';

describe('testing homeController', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
      this.homeCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should render correct title', () => {
    expect(this.homeCtrl.title).toEqual('Home Page');
  })

  it('undefined entry should not be defined', () => {
    expect(this.homeCtrl.undefined).not.toBeDefined();
  })
});
