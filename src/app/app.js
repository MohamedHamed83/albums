import 'angular-ui-router';
import 'angular-loading-bar';
import ngAnimate from 'angular-animate';
import 'angular-resource';
// this module to allow using components in ui router
import './config/route-to-component';

/**
 * @ngdoc module
 * @requires ui.router, ui.router.components, angular-loading-bar and ngAnimate
 * @name albums
 * @module albums
 * @description This is the main module for application
 */

angular.module('albums', ['ui.router', 'ngResource', 'ui.router.components', 'angular-loading-bar', ngAnimate])
  .name;
