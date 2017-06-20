const angular = require('angular');
require('angular-mocks');

describe('testing home controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
      this.homeCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('Should have text in the title', () => {
    expect(this.homeCtrl.title).toBe.string;
  });
});
