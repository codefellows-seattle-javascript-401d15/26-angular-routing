'use strict'

require('./_home.scss')

module.exports = ['$log', function($log) {
  this.$onInit = () => {
    $log.debug('HomeController')

    this.title = 'You have made it to the Homepage!'
  }
}]
