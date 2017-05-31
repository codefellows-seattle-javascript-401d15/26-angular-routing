'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const path = require('path');
const pascalcase = require('pascalcase');
const angular = require('angular');
require('@uirouter/angularjs');

const cfGramApp = angular.module('routesApp', ['ui.router']);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => cfGramApp.config(context(key)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  cfGramApp.controller(name, context(key));
});
