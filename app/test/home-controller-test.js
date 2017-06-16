const angular = require('angular');
require('angular-mocks');

describe('testing signup controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.signupCtrl = new $controller('SignupController');
      this.signupCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('Should have text in the title', () => {
    expect(this.signupCtrl.title).toBe.string;
  });
});
