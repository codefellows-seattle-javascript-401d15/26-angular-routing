'use strict';

require('./_gallery.scss');

module.exports = ['$log', function($log) {
  $log.debug('GalleryController');
  this.$onInit = () => {
    this.title = 'The Gallery';
  };
}];
