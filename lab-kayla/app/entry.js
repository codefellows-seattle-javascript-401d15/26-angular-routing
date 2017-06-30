'use strict'

require('./scss/main.scss')
require('./scss/reset.scss')

const path = require('path')
const camelcase = require('camelcase')//eslint-disable-line
const pascalcase = require('pascalcase')
const angular = require('angular')
require('@uirouter/angularjs')

const routesApp = angular.module('routesApp', ['ui.router'])

let context = require.context('./config', true, /\.js$/)
context.keys().forEach(key => routesApp.config(context(key)))

context = require.context('./view', true, /\.js$/)
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'))
  routesApp.controller(name, context(key))
})
