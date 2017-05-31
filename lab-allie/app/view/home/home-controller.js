'use strict';

//require scss
module.exports = ['$log', function($log) {
  this.$onInit = () => {
    $log.debug('HomeController');
      
    this.title = 'Welcome to cfGram!';
  };
}];