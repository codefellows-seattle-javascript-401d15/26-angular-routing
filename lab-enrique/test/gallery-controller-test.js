'use strict';

require('angular')
require('angular-mocks')

// describe('testing GalleryController', function(){
//   beforeEach(() => {
//     module('')
//   });
//   afterEach(() => this.$rootScope.$apply())
//
//   it('should pass', () => {
//     expect(true).toEqual(true);
//   })
// })

describe('state changes', function() {
  beforeEach(() => {
    var $rootScope, $stateProvider;
    beforeEach(inject(function(_$rootScope_,_$stateProvider_) {
      $rootScope = _$rootScope_;
      $stateProvider= _$stateProvider_;
    }));
  })
    it('loads page 3', function(done) {

     //wait for the state to change, then make sure we changed to the correct state
      $stateProvider.go('/gallery');
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        expect($stateProvider.controller).toEqual('GalleryController');
        done();
      })
    })
})
//       });
//      //navigate to the state
//       // $state.go('/gallery');
//
//     });
//
//   })
// })
