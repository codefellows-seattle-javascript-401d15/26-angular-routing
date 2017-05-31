'use strict';

module.exports = ['$log', function($log) {
  this.$onInit = () => {
    $log.debug('HomeController');

    this.title = 'Home Page';
  };
}]
