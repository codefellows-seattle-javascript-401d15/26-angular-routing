'use strict';

module.exports = ['$log', function($log) {
  $log.debug('GalleryController')

  this.$onInit = () => {
    this.title = 'The Gallery, of DOOOOOM!!!'

    this.update = function(input) {
      $log.debug('#update');
      return this.say({text: input || 'Gallery', f: this.current})
    }
  }
}]
