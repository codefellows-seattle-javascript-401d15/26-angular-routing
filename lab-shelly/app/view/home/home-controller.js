'use strict';

require('./_home.scss');

module.exports = ['$log', function($log) {
  $log.debug('HomeController');
  this.$onInit = () => {
    this.title = 'Welcome Home';
  };
}];
