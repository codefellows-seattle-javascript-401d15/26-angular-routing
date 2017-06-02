'use strict';

require('./_signup.scss');

module.exports = ['$log', function($log) {
  this.$onInit = () => {
    $log.debug('SignupController');
    
    this.title = 'Please sign in!';
  };
}];