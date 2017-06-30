'use strict'

require('./_gallery.scss')

module.exports = ['$log', function($log) {
  this.$onInit = () => {
    $log.debug('GalleryController')

    this.title = 'Your Galleries'
  }
}]
