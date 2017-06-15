'use strict';

const angular = require('angular');
require('angular-mocks');

describe('homeCtrl', function() {
  beforeEach(() => {
    console.log('WAT');
    angular.mock.module('routesApp');
    console.log('mounted routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
      this.homeCtrl.$onInit();
    });
  });

  // afterEach(() => this.$rootScope.$apply());

  describe('foo', function() {
    it('should pass', function() {
      expect(true).to.equal(true);
    });
  });
});

// 'use strict';
//
// const angular = require('angular');
// const chai = require('chai');
// const expect = chai.expect;
// require('angular-mocks');
//
// describe('routes app', function() {
//   beforeEach(() => {
//     console.log('WAT');
//     angular.mock.module('routesApp');
//     angular.mock.inject(($rootScope, $componentController) => {
//       this.$rootScope = $rootScope;
//       this.homeCtrl = new $componentController('homeCtrl');
//     });
//     console.log('THE FUCK');
//   });
//
//   afterEach(() => this.$rootScope.$apply());
//
//   it('should pass', function() {
//     expect(true).to.equal(true);
//   });
// });
