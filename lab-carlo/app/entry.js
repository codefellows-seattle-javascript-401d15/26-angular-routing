'use strict';

require('./scss/main.scss');
require('./view/gallery/_gallery.scss');
require('./view/signup/_signup.scss');
require('./view/home/_home.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
require('@uirouter/angularjs');

const routesApp = angular.module('routesApp', ['ui.router']);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => routesApp.config(context(key)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  routesApp.controller(name, context(key));
});
