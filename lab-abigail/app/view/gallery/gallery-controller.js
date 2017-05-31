'use strict';

module.exports = ['$log', function($log) {
  this.$onInit = () => {
    $log.debug('GalleryController');

    this.title = 'Gallery Page';
  };
}]
